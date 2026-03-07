/**
 * Services List Page
 * Displays all services offered by TechHubbix
 * Features category filtering and detailed service cards
 */

import React, { useState, useEffect } from 'react';
import { logInfo, logDebug } from '../../utils/logger';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { servicesData, getServiceCategories } from '../../data/servicesData';
import './ServicesList.css';

/**
 * ServicesList - Main services listing page
 * Features:
 * - Display all services
 * - Filter by category
 * - Responsive grid layout
 * - Call-to-action sections
 */
const ServicesList = () => {
  // State Management
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  // Log page view
  useEffect(() => {
    logInfo('Services list page loaded', { totalServices: servicesData.length });
  }, []);

  /**
   * Handle category filter change
   * @param {string} category - Selected category
   */
  const handleCategoryChange = (category) => {
    logDebug('Service category filter changed', { category });
    setSelectedCategory(category);
    setIsLoading(true);

    setTimeout(() => {
      if (category === 'All') {
        setFilteredServices(servicesData);
      } else {
        const filtered = servicesData.filter(
          service => service.category === category
        );
        setFilteredServices(filtered);
      }
      setIsLoading(false);
    }, 300);
  };

  // Get unique categories
  const categories = getServiceCategories();

  return (
    <div className="services-list-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-title">Build Smarter Digital Experiences With TechHubbix</h1>
          <p className="services-subtitle">
            We help ambitious businesses transform their ideas into powerful digital products. From custom web development to advanced marketing strategies, TechHubbix delivers scalable solutions designed to drive growth, improve performance, and create long-term value.
          </p>
          <button className="hero-cta-button">🚀 Start Your Project</button>
        </div>
      </section>

      {/* About Short Section */}
      <section className="about-short-section">
        <div className="container">
          <h2>Your Technology Partner for Digital Growth</h2>
          <p>
            TechHubbix is a forward-thinking technology company focused on building high-performance digital solutions for modern businesses. Our team combines technical expertise, creative design, and strategic thinking to help brands innovate, scale, and stay competitive in a rapidly evolving digital world.
          </p>
          <p className="highlight-text">
            We don't just build websites — we create powerful digital ecosystems that drive measurable results.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="services-content">
        <div className="container">
          {/* Category Filters */}
          <div className="services-filters">
            <button
              className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('All')}
            >
              All Services
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Info */}
          <div className="results-info">
            <p>
              Showing <span className="count">{filteredServices.length}</span> service{filteredServices.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Services Grid */}
          <div className={`services-grid ${isLoading ? 'loading' : ''}`}>
            {filteredServices.map(service => (
              <div key={service.id} className="grid-item">
                <ServiceCard
                  slug={service.slug}
                  title={service.title}
                  shortDescription={service.shortDescription}
                  icon={service.icon}
                  features={service.features}
                  pricing={service.pricing}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="services-benefits">
        <div className="container">
          <h2>Why Choose TechHubbix</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Tailored Solutions</h3>
              <p>Every business is unique. We create customized digital solutions designed specifically around your goals, challenges, and growth strategy.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>High Performance</h3>
              <p>Our solutions are built with performance, scalability, and security in mind to ensure long-term reliability.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Experienced Professionals</h3>
              <p>Our team brings together skilled developers, designers, and digital strategists with deep industry knowledge.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Transparent Process</h3>
              <p>We follow a clear and collaborative workflow with regular communication and project updates.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Ongoing Support</h3>
              <p>Our relationship doesn't end at launch. We provide continuous support and optimization to ensure long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Transform Your Business Digitally?</h2>
          <p>Let's collaborate to create innovative digital solutions that help your business grow faster, smarter, and stronger.</p>
          <button className="cta-button">🚀 Start Your Project Today</button>
        </div>
      </section>
    </div>
  );
};

export default ServicesList;
