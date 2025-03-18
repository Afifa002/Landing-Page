import React from "react";
import bgVideo from "../assets/bg.mp4"; 
import "./Hero.css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="hero">
      <Navbar />
      <video autoPlay loop muted className="hero-bg">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Unlock Your Potential with Our Services</h1>
        <p>Get the best solutions for your business growth.</p>
        <button className="cta-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
