import React from "react";
import "./Pricing.css";

const Pricing = () => {
  const plans = [
    { name: "Basic", price: "$10/month", features: ["Feature 1", "Feature 2"] },
    {
      name: "Pro",
      price: "$30/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    { name: "Enterprise", price: "$50/month", features: ["All Features"] },
  ];

  return (
    <section className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-table">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.name}</h3>
            <h4>{plan.price}</h4>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="btn">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
