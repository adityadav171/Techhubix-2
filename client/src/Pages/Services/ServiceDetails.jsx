/**
 * Service Detail Page
 * Displays comprehensive service information, features, and process
 */

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { logInfo, logError } from '../../utils/logger';
import { getServiceBySlug } from '../../data/servicesData';
import './ServiceDetail.css';

/**
 * ServiceDetails - Individual service detail page
 * Features:
 * - Detailed service information
 * - Features and benefits list
 * - Technology stack
 * - Process workflow
 * - Pricing information
 * - Call-to-action
 */
const ServiceDetails = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) {
      logInfo('Service detail page loaded', { serviceSlug: slug });
      window.scrollTo(0, 0);
    } else {
      logError('Service not found', { slug });
    }
  }, [slug, service]);

  // Handle service not found
  if (!service) {
    return (
      <div className="service-not-found">
        <div className="container">
          <h1>Service Not Found</h1>
          <p>The service you're looking for doesn't exist.</p>
          <Link to="/services" className="back-link">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Header Section */}
      <section className="service-header">
        <div className="container">
          <Link to="/services" className="back-link">
            ← Back to Services
          </Link>
          <div className="service-icon-large">{service.icon}</div>
          <h1 className="service-main-title">{service.title}</h1>
          <p className="service-tagline">{service.shortDescription}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2>About This Service</h2>
              <p>{service.description}</p>
              <div className="service-meta">
                <div className="meta-item">
                  <span className="meta-label">Estimated Timeline:</span>
                  <span className="meta-value">{service.timeline}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Pricing:</span>
                  <span className="meta-value">{service.pricing}</span>
                </div>
              </div>
            </div>
            <div className="overview-cta">
              <h3>Ready to Get Started?</h3>
              <p>Contact us for a free consultation and project quote.</p>
              <button className="cta-btn">Start Your Project</button>
              <button className="cta-btn-secondary">Schedule a Call</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features">
        <div className="container">
          <h2>Key Features & Benefits</h2>
          <div className="features-grid">
            {service.features.map((feature, index) => (
              <div key={index} className="feature-box">
                <div className="feature-check">✓</div>
                <h3>{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="service-technologies">
          <div className="container">
            <h2>Technologies We Use</h2>
            <div className="tech-grid">
              {service.technologies.map((tech, index) => (
                <div key={index} className="tech-card">
                  <span className="tech-name">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {service.process && service.process.length > 0 && (
        <section className="service-process">
          <div className="container">
            <h2>Our Process</h2>
            <div className="process-timeline">
              {service.process.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h3>{step}</h3>
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="step-connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Us for {service.title}?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🎯</div>
              <h3>Expert Team</h3>
              <p>Experienced professionals with proven expertise in {service.category.toLowerCase()} services.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h3>Quality Assured</h3>
              <p>Rigorous testing and quality assurance processes ensure excellence in every project.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📈</div>
              <h3>Results-Driven</h3>
              <p>We focus on measurable outcomes that positively impact your business growth.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Client-Centric</h3>
              <p>Your success is our priority. We maintain transparent communication throughout the project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-bottom-cta">
        <div className="container">
          <h2>Let's Discuss Your {service.title} Project</h2>
          <p>Get in touch with our team for a free consultation</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Started Now</button>
            <Link to="/services" className="btn-secondary">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
