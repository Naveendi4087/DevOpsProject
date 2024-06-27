import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackImage from "../assets/background.jpg";
import "../styles/Login.css";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      console.log("Please enter all the details");
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/users/");
      if (response.data.some((user) => user.email === email)) {
        console.log("Email already in use");
      } else {
        await axios.post("http://localhost:5000/signUp", {
          email: email,
          password: password,
        });
        console.log("User Added successfully");
        setEmail("");
        setPassword("");
        navigate("/login");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="login">
      <div className="leftSide">
        <h1>SIGN UP</h1>
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
      </div>
      <div
        className="rightSide"
        style={{ backgroundImage: `url(${BackImage})` }}
      ></div>
    </div>
  );
};

export default SignUp;
