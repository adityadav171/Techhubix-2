import React from "react";
import "./style.css"; // optional CSS file

const AboutFeatures = () => {
  return (
    <section className="ab2-features">
      <h2>
        Why <span>Choose Us?</span>
      </h2>

      <div className="ab2-grid">
        <div className="ab2-box">
          <h4>Expert Developers</h4>
          <p>
            A highly experienced team delivering top-tier software & blockchain
            solutions.
          </p>
        </div>

        <div className="ab2-box">
          <h4>Fast Delivery</h4>
          <p>Lightning-fast project turnaround with premium quality.</p>
        </div>

        <div className="ab2-box">
          <h4>Industry Experience</h4>
          <p>Years of experience building scalable platforms globally.</p>
        </div>

        <div className="ab2-box">
          <h4>24/7 Support</h4>
          <p>We offer complete lifetime support for all clients.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
