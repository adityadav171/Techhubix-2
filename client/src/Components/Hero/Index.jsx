import React from "react";
import "./style.css"; // optional CSS file

const AboutHero = () => {
  return (
    <section className="ab2-hero">
      <div className="ab2-container">
        <div className="ab2-left">
          <h1>
            About <span>TechHubbix</span>
          </h1>
          <p>
            We are a cutting-edge software, blockchain, and digital innovation
            company dedicated to delivering secure, scalable and future-ready
            solutions.
          </p>
          <p>
            Our mission is to accelerate digital transformation through smart
            technologies, trusted development, and exceptional service delivery.
          </p>
        </div>

        <div className="ab2-right">
          <img
            src="https://arrayblocks.net/wp-content/uploads/2025/12/about-arrayblocks.jpg"
            alt="ArrayBlocks Team"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
