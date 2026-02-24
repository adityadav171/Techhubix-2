/**
 * ServiceCard Component
 * Displays service information with features and pricing
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

/**
 * ServiceCard - Displays individual service information
 * @param {Object} props - Component props
 * @param {string} props.slug - Service URL slug
 * @param {string} props.title - Service title
 * @param {string} props.shortDescription - Brief service description
 * @param {string} props.icon - Service icon/emoji
 * @param {array} props.features - List of key features
 * @param {string} props.pricing - Service pricing
 */
const ServiceCard = ({ 
  slug, 
  title, 
  shortDescription, 
  icon, 
  features = [], 
  pricing 
}) => {
  // Display only first 3 features
  const displayFeatures = features.slice(0, 3);

  return (
    <Link to={`/services/${slug}`} className="service-card-link">
      <div className="service-card">
        {/* Service Icon */}
        <div className="service-icon">{icon}</div>

        {/* Service Title */}
        <h3 className="service-title">{title}</h3>

        {/* Service Description */}
        <p className="service-description">{shortDescription}</p>

        {/* Features List */}
        <ul className="service-features">
          {displayFeatures.map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="feature-icon">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Pricing and CTA */}
        <div className="service-footer">
          <span className="service-pricing">{pricing}</span>
          <button className="service-cta">Learn More →</button>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
