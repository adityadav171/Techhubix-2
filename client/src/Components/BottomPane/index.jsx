import React from "react";
import "./style.css";

const CTASection = () => {
  return (
    <section className="section-h cta-section-h">
      <div className="container-h">
        <div className="cta-content-h">
          <h2>Ready to Transform Your Business?</h2>
          <p>Join hundreds of clients growing with ArrayBlocks.</p>
          <a
            href="https://arrayblocks.net/contact-us/"
            className="cta-btn-h"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Your Project Now →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
