/**
 * Theme Detail Page
 * Displays comprehensive theme information, features, screenshots, and specifications
 */

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { logInfo, logError } from '../../utils/logger';
import { getThemeBySlug } from '../../data/themesData';
import './ThemeDetail.css';

/**
 * ThemeDetail - Individual theme detail page
 * Features:
 * - Detailed theme information
 * - Multiple screenshots gallery
 * - Features and specifications
 * - Color palettes
 * - Call-to-action
 */
const ThemeDetail = () => {
  const { slug } = useParams();
  const theme = getThemeBySlug(slug);

  useEffect(() => {
    if (theme) {
      logInfo('Theme detail page loaded', { themeSlug: slug });
      window.scrollTo(0, 0);
    } else {
      logError('Theme not found', { slug });
    }
  }, [slug, theme]);

  // Handle theme not found
  if (!theme) {
    return (
      <div className="theme-not-found">
        <div className="container">
          <h1>Theme Not Found</h1>
          <p>The theme you're looking for doesn't exist.</p>
          <Link to="/themes" className="back-link">
            ← Back to Themes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="theme-detail-page">
      {/* Header Section */}
      <section className="theme-header">
        <div className="container">
          <Link to="/themes" className="back-link">
            ← Back to Themes
          </Link>
          <div className="theme-hero-content">
            <div className="theme-icon-large">{theme.icon}</div>
            <h1 className="theme-main-title">{theme.title}</h1>
            <p className="theme-tagline">{theme.shortDescription}</p>
            <div className="theme-quick-info">
              <span className="info-badge">
                <strong>{theme.specifications.layouts}</strong> Layouts
              </span>
              <span className="info-badge">
                <strong>{theme.features.length}</strong> Features
              </span>
              <span className="info-price">{theme.pricing}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="theme-featured-image">
        <div className="container">
          <div className="featured-img-wrapper">
            <img src={theme.image} alt={theme.title} className="featured-img" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="theme-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2>About This Theme</h2>
              <p>{theme.description}</p>
              <div className="theme-meta">
                <div className="meta-item">
                  <span className="meta-label">Category:</span>
                  <span className="meta-value">{theme.category}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Price:</span>
                  <span className="meta-value">{theme.pricing}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Customizable:</span>
                  <span className="meta-value">
                    {theme.specifications.customizable ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            </div>
            <div className="overview-cta">
              <h3>Ready to Use This Theme?</h3>
              <p>Get instant access to all features and start building your website.</p>
              <Link to="/contact" className="cta-btn">Purchase Now</Link>
              <button className="cta-btn-secondary">View Live Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      {theme.screenshots && theme.screenshots.length > 0 && (
        <section className="theme-gallery">
          <div className="container">
            <h2 className="section-title">Gallery</h2>
            <div className="screenshots-grid">
              {theme.screenshots.map((screenshot, index) => (
                <div key={index} className="screenshot-item">
                  <div className="screenshot-wrapper">
                    <img src={screenshot.image} alt={screenshot.title} />
                  </div>
                  <p className="screenshot-caption">{screenshot.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="theme-features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            {theme.features.map((feature, index) => (
              <div key={index} className="feature-box">
                <div className="feature-check">✓</div>
                <h3>{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="theme-specifications">
        <div className="container">
          <h2 className="section-title">Theme Specifications</h2>
          <div className="specs-grid">
            {/* Color Palette */}
            <div className="spec-card">
              <h3>Color Palette</h3>
              <div className="color-palette">
                {theme.specifications.colors.map((color, index) => (
                  <div key={index} className="color-swatch">
                    <div
                      className="color-box"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                    <span className="color-code">{color}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fonts */}
            <div className="spec-card">
              <h3>Typography</h3>
              <ul className="fonts-list">
                {theme.specifications.fonts.map((font, index) => (
                  <li key={index}>
                    <span style={{ fontFamily: font }}>{font}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Layout Details */}
            <div className="spec-card">
              <h3>Layouts & Options</h3>
              <div className="spec-details">
                <p><strong>{theme.specifications.layouts} Pre-built Layouts</strong></p>
                <p>Fully <strong>Customizable</strong></p>
                <p><strong>Responsive</strong> Design</p>
                <p>Mobile <strong>Optimized</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="theme-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Get Started with {theme.title}</h2>
            <p>Join thousands of satisfied customers using this premium theme</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Purchase Theme
              </Link>
              <button className="btn-secondary">View Live Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Themes */}
      <section className="related-themes">
        <div className="container">
          <h2 className="section-title">More Themes to Explore</h2>
          <div className="related-links">
            <Link to="/themes" className="related-link">
              Browse All Themes →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThemeDetail;
