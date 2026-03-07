import React from 'react';
import './TrustStrip.css';

const TrustStrip = () => {
  const trustPoints = [
    {
      icon: '✓',
      text: 'Results-Driven Strategy'
    },
    {
      icon: '✓',
      text: 'Transparent Communication'
    },
    {
      icon: '✓',
      text: 'On-Time Delivery'
    },
    {
      icon: '✓',
      text: 'Long-Term Partnership Approach'
    }
  ];

  return (
    <section className="trust-strip-section">
      <div className="trust-container">
        <h3 className="trust-title">
          Trusted by Startups & Growing Businesses Worldwide
        </h3>
        <div className="trust-points-grid">
          {trustPoints.map((point, index) => (
            <div key={index} className="trust-point">
              <span className="trust-icon">{point.icon}</span>
              <span className="trust-text">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
