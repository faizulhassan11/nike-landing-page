import React from "react";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";
import shoe from "../assets/shoe_image.png";
import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          your feet deserve the best and we're here to help you with our
          shoes.your feet deserve the best and we're here to help you with our
          shoes.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={amazon} alt="Amazon" />
            <img src={flipkart} alt="Flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={shoe} alt="Shoe" />
      </div>
    </main>
  );
};

export default Hero;
