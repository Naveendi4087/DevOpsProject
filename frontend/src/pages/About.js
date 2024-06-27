import React from "react";
import BackImage from "../assets/background.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop">
        <img src={BackImage} alt="back-image"></img>
      </div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Welcome to Blossom Beauty Salon, where beauty and serenity converge.
          Our skilled professionals offer a comprehensive array of salon and spa
          services to enhance your natural radiance. Committed to excellence, we
          use premium products and cutting-edge techniques to provide a
          luxurious and rejuvenating experience. At Blossom Beauty Salon, your
          well-being takes center stage, and we're dedicated to ensuring you
          leave looking and feeling your absolute best. Nestled in a tranquil
          oasis, our salon offers a haven from the hustle and bustle of daily
          life. Book an appointment with us today and immerse yourself in the
          unparalleled world of Blossom Beauty Salon, where your beauty and
          relaxation are paramount.
        </p>
      </div>
    </div>
  );
}

export default About;
