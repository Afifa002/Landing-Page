import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";
import { FaMouse } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="mouse-icon">
        <FaMouse />
      </div>

      <ul>
        <li>
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="services" smooth={true} duration={500}>
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="pricing" smooth={true} duration={500}>
            Pricing
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact Us
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
