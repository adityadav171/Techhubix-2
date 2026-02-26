import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section-h cta-section-h">
      <div className="container-h">
        <div className="cta-content-h">
          <h2>Ready to Transform Your Business?</h2>
          <p>Join hundreds of clients growing with TechHubbix.</p>
          <Link to="/contact" className="cta-btn-h">
  Start Your Project Now →
</Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
