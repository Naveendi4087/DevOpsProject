import React, { useState } from "react";
import BackImage from "../assets/background.jpg";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { colors } from "@mui/material";

function Login({ setIsLogged, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5000/users");
      const userExists = response.data.some((user) => user.email === email);

      if (!userExists) {
        alert("User does not exists");
      } else {
        const user = response.data.find((user) => user.email === email);

        if (user.password === password) {
          setUser(user);
          setIsLogged(true);
          navigate("/services");
        } else {
          alert("Please check the password");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div className="login">
      <div className="leftSide">
        <h1>LOGIN</h1>
        <form id="login-form" method="POST">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={submit}>
            Login
          </button>
        </form>
        <br />
        <br />
        <Link to="/signup" className="signup-txt">
          Don't have an account? <b>Sign up</b>
        </Link>
      </div>
    </div>
  );
}

export default Login;
