import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css"; // your CSS

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              Tech<span>Hubbix</span>
            </div>
            <p className="footer-description">
              TechHubbix is a global digital solutions partner specializing in
              full-stack development, HubSpot CRM implementation, Shopify
              eCommerce, and performance-driven digital marketing. We help
              startups and growing businesses scale smarter.
            </p>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/the-techhubbix-web-app-development-for-startups-09125b38a/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/the-techhubbix-web-app-development-for-startups-09125b38a/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>
                <Link to="/services/full-stack-development">
                  Full-Stack Development
                </Link>
              </li>
              <li>
                <Link to="/services/hubspot-development">
                  HubSpot CRM Development
                </Link>
              </li>
              <li>
                <Link to="/services/shopify-development">
                  Shopify eCommerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="footer-links contact-list">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href="mailto:info@techhubbix.com">info@techhubbix.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <a href="tel:+918130216017">+91 81302 16017</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 <span>TechHubbix</span>. All rights reserved.
          </p>
          <ul className="footer-bottom-links">
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-and-conditions">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
