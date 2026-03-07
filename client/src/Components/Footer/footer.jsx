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
              TechHubbix is a global digital solutions partner specializing in full-stack development, HubSpot CRM implementation, Shopify eCommerce, and performance-driven digital marketing. We help startups and growing businesses scale smarter.
            </p>
            <div className="footer-social">
              {/* Facebook - Commented Out */}
              {/* <a
                href="https://www.facebook.com/profile.php?id=61582786569261"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a> */}
              
              {/* Twitter - Commented Out */}
              {/* <a
                href="https://x.com/ArrayBlocksNet"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a> */}
              
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
              <li>
                <Link to="/services/seo-services">SEO & Growth Marketing</Link>
              </li>
              <li>
                <Link to="/services/digital-marketing">
                  Performance Digital Marketing
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
                <a href="mailto:info@techhubbix.com">contact@techhubbix.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href="mailto:sales@techhubbix.com">sales@techhubbix.com</a>
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
              <a href="https://arrayblocks.net/privacy-policy/">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://arrayblocks.net/terms-conditions/">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="https://arrayblocks.net/cookie-policy/">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
