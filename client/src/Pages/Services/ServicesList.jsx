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
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            Comprehensive digital solutions to elevate your business
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
          <h2>Why Choose Our Services?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Tailored Solutions</h3>
              <p>Custom-built solutions designed specifically for your business needs and goals.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>High Performance</h3>
              <p>Optimized for speed, security, and scalability across all platforms.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Expert Team</h3>
              <p>Experienced professionals with proven track record in digital development.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Dedicated support team available to assist with any questions or issues.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💼</div>
              <h3>Professional Approach</h3>
              <p>Systematic process with clear communication and transparent timelines.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Future-Ready</h3>
              <p>Built with latest technologies ensuring longevity and relevance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss your project requirements and find the perfect solution.</p>
          <button className="cta-button">Start Your Project</button>
        </div>
      </section>
    </div>
  );
};

export default ServicesList;
