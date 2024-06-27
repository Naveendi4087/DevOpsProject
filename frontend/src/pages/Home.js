import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BackImage from "../assets/background.jpg";
import "../styles/Home.css";

function Home({ isLogged }) {
  const navigate = useNavigate();

  const buttonhandler = () => {
    if (isLogged) {
      navigate("/services");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="home">
      <div className="imageContainer">
        <img src={BackImage} />
      </div>

      <div className="headerContainer">
        <h1>Unlocking Elegance at Your Fingertips</h1>
        <p>Schedule Your Salon Expericence Online</p>
        <button onClick={buttonhandler}>BOOK NOW</button>
      </div>
    </div>
  );
}

export default Home;
