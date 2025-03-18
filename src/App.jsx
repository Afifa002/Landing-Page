import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import { Element } from "react-scroll";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Element name="hero">
                <Hero />
              </Element>
              <Element name="services">
                <Services />
              </Element>
              <Element name="pricing">
                <Pricing />
              </Element>
              <Element name="contact">
                <Contact />
              </Element>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
