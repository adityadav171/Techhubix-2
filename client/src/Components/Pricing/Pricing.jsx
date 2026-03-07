import React from 'react';
import './Pricing.css';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  
  const pricingPlans = [
    {
      name: 'Starter Website Package',
      price: '$999',
      period: 'Starting Price',
      features: [
        '5-Page Website',
        'SEO Optimized',
        'Mobile Responsive',
        '2 Weeks Delivery'
      ],
      highlighted: false
    },
    {
      name: 'Growth Package',
      price: '$2,500',
      period: 'Starting Price',
      features: [
        'Custom Development',
        'CRM Integration',
        'Advanced SEO',
        'Performance Optimization'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise Solutions',
      price: 'Custom Pricing',
      period: 'Tailored to Your Needs',
      features: [
        'Full-Stack Applications',
        'Advanced Automation',
        'Dedicated Support',
        'Scalable Infrastructure'
      ],
      highlighted: false
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the package that fits your business needs</p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
            >
              {plan.highlighted && <div className="popular-badge">Most Popular</div>}
              
              <h3>{plan.name}</h3>
              
              <div className="price-section">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className="cta-button"
                onClick={() => navigate('/contact')}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p>All packages include free consultation and custom quotes available on request.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
