import React from "react";
import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";
import "./Services.css";
import SearchBar from "./SearchBar";
import UsersList from "./UsersList";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Modern and scalable web solutions.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    desc: "Scalable cloud computing services.",
  },
];

const Services = () => {
  return (
    <section className="services">
    
      <UsersList />
      <h1 className="service-head">Our Services</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
