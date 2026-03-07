import React from "react";
import "./HighConvertingCTA.css";
import { Link } from "react-router-dom";

const HighConvertingCTA = () => {
  return (
    <section className="section-h high-converting-cta-section">
      <div className="container-h cta-content-wrapper">
        <div className="cta-content-h">
          <h2>Ready to Scale Your Business Globally?</h2>
          <p>Partner with TechHubbix and build technology systems designed for predictable growth.</p>
          <div className="cta-buttons-group">
            <Link to="/contact" className="cta-btn-primary">
              🚀 Start Your Project Today
            </Link>
            <Link to="/contact" className="cta-btn-secondary">
              📅 Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighConvertingCTA;
