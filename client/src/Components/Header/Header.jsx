/**
 * Header/Navigation Component
 * Main navigation header with mega menu for services
 * Includes responsive menu toggle functionality
 */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logDebug } from "../../utils/logger";
import { getServiceCategories } from "../../data/servicesData";
import "./Header.css";

/**
 * Header Component - Main navigation
 * Features:
 * - Responsive navigation menu
 * - Services mega menu
 * - Mobile-friendly
 */
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const serviceCategories = getServiceCategories();

  /**
   * Toggle services mega menu
   */
  const handleMenuToggle = () => {
    logDebug('Services menu toggled');
    const menu = document.querySelector(".js-menu");
    if (menu) {
      menu.classList.toggle("active");
    }
  };

  /**
   * Close menu when clicking on a link
   */
  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="th-header">
        <div className="th-container">
          {/* Logo */}
          <div className="th-logo">
            <Link to="/">
              <h2>TechHubbix</h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="th-nav">
            <ul>
              {/* Home Link */}
              <li>
                <Link to="/">Home</Link>
              </li>

              {/* About Link */}
              <li>
                <Link to="/about">About</Link>
              </li>

              {/* Services Menu with Mega Menu */}
              <li className="js-menu">
                <Link to="/services">Services</Link>
               

                <div className="mega-menu services-mega">
                  <div className="services-column">
                    <h4>Our Services</h4>
                    <ul>
                      <li>
                        <Link
                          to="/services/fullstack-development"
                          className="services-title"
                        >
                          Full Stack Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/hubspot-development"
                          className="services-title"
                        >
                          HubSpot Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/personalized-hubspot-theme"
                          className="services-title"
                        >
                          Personalized HubSpot Theme
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/wordpress-development"
                          className="services-title"
                        >
                          WordPress Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/shopify-development"
                          className="services-title"
                        >
                          Shopify Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/digital-marketing"
                          className="services-title"
                        >
                          Digital Marketing
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-right">
                    <h4>Explore</h4>
                    <p>Check out our complete range of digital solutions for your business.</p>
                    <Link
                      to="/services"
                      className="mega-cta"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </li>

              {/* Projects Link */}
              <li>
                <Link to="/projects">Projects</Link>
              </li>

              {/* Blogs Link */}
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="th-cta">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mobile-menu-toggle">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="menu-btn"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-menu">
          <ul>
            <li><Link to="/" onClick={handleMenuClose}>Home</Link></li>
            <li><Link to="/about" onClick={handleMenuClose}>About</Link></li>
            <li><Link to="/services" onClick={handleMenuClose}>Services</Link></li>
            <li><Link to="/projects" onClick={handleMenuClose}>Projects</Link></li>
            <li><Link to="/blogs" onClick={handleMenuClose}>Blog</Link></li>
            <li><Link to="/contact" onClick={handleMenuClose} className="contact-mobile-btn">Contact Us</Link></li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
