/**
 * Themes List Page
 * Displays all available themes with filtering and category options
 * Similar structure to Services List Page
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logInfo, logDebug } from '../../utils/logger';
import { themesData, getThemeCategories } from '../../data/themesData';
import './ThemesList.css';

/**
 * ThemesList - Main themes listing page
 * Features:
 * - Display all themes
 * - Filter by category
 * - Responsive grid layout
 * - Theme cards with quick preview
 */
const ThemesList = () => {
  // State Management
  const [filteredThemes, setFilteredThemes] = useState(themesData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  // Log page view
  useEffect(() => {
    logInfo('Themes list page loaded', { totalThemes: themesData.length });
  }, []);

  /**
   * Handle category filter change
   * @param {string} category - Selected category
   */
  const handleCategoryChange = (category) => {
    logDebug('Theme category filter changed', { category });
    setSelectedCategory(category);
    setIsLoading(true);

    setTimeout(() => {
      if (category === 'All') {
        setFilteredThemes(themesData);
      } else {
        const filtered = themesData.filter(
          theme => theme.category === category
        );
        setFilteredThemes(filtered);
      }
      setIsLoading(false);
    }, 300);
  };

  // Get unique categories
  const categories = getThemeCategories();

  return (
    <div className="themes-list-page">
      {/* Hero Section */}
      <section className="themes-hero">
        <div className="themes-hero-content">
          <h1 className="themes-title">Our Themes</h1>
          <p className="themes-subtitle">
            Beautiful, responsive themes to elevate your online presence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="themes-content">
        <div className="container">
          {/* Category Filters */}
          <div className="themes-filters">
            <button
              className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('All')}
            >
              All Themes
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
              Showing <span className="count">{filteredThemes.length}</span> theme{filteredThemes.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Themes Grid */}
          <div className={`themes-grid ${isLoading ? 'loading' : ''}`}>
            {filteredThemes.map((theme) => (
              <Link
                key={theme.id}
                to={`/themes/${theme.slug}`}
                className="theme-card-link"
              >
                <div className="theme-card">
                  {/* Theme Thumbnail */}
                  <div className="theme-thumbnail">
                    <img src={theme.image} alt={theme.title} loading="lazy" />
                    <div className="theme-overlay">
                      <button className="view-details-btn">View Details</button>
                    </div>
                  </div>

                  {/* Theme Info */}
                  <div className="theme-info">
                    <div className="theme-header">
                      <span className="theme-icon">{theme.icon}</span>
                      <span className="theme-category">{theme.category}</span>
                    </div>
                    <h3 className="theme-name">{theme.title}</h3>
                    <p className="theme-description">{theme.shortDescription}</p>
                    
                    {/* Features Preview */}
                    <div className="theme-features-preview">
                      {theme.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="feature-tag">✓ {feature}</span>
                      ))}
                    </div>

                    {/* Footer Info */}
                    <div className="theme-footer">
                      <span className="theme-price">{theme.pricing}</span>
                      <span className="theme-layouts">{theme.specifications.layouts} Layouts</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredThemes.length === 0 && (
            <div className="empty-state">
              <h3>No themes found</h3>
              <p>Try selecting a different category or browse all themes.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="themes-benefits">
        <div className="benefits-content">
          <h2 className="benefits-title">Why Choose Our Themes?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🎨</div>
              <h3>Professionally Designed</h3>
              <p>Each theme is crafted by professional designers with modern aesthetics and user experience in mind.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📱</div>
              <h3>Fully Responsive</h3>
              <p>All themes are mobile-friendly and work perfectly on all devices, from phones to large desktop screens.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚙️</div>
              <h3>Easy to Customize</h3>
              <p>Customize colors, fonts, and layouts with an intuitive interface. No coding knowledge required.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🚀</div>
              <h3>Performance Optimized</h3>
              <p>Optimized for speed and SEO. Your website will load fast and rank well in search engines.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>Built with security best practices and regular updates to keep your site protected.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Get dedicated support from our team whenever you need help with your theme.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThemesList;
