import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <div className="form-container">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-con">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
