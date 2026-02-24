import React from "react";
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
              Building exceptional digital experiences with cutting-edge
              technology and creative innovation. Your trusted partner for web
              development solutions.
            </p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/profile.php?id=61582786569261"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://x.com/ArrayBlocksNet"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/arrayblocks_net/?hl=en"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/company/arrayblocks/"
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
                <a href="https://arrayblocks.net/">Home</a>
              </li>
              <li>
                <a href="https://arrayblocks.net/about/">About Us</a>
              </li>
              <li>
                <a href="https://arrayblocks.net/recent-projects/">
                  Recent Projects
                </a>
              </li>
              <li>
                <a href="https://arrayblocks.net/blog/">Blog</a>
              </li>
              <li>
                <a href="https://arrayblocks.net/contact-us/">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>
                <a href="https://arrayblocks.net/services/website-development/">
                  Website Development
                </a>
              </li>
              <li>
                <a href="https://arrayblocks.net/services/mobile-app-development/">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="https://arrayblocks.net/services/blockchain-development/">
                  Blockchain Development
                </a>
              </li>
              <li>
                <a href="https://arrayblocks.net/services/seo/">SEO Services</a>
              </li>
              <li>
                <a href="https://arrayblocks.net/services/digital-marketing/">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="footer-links contact-list">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href="mailto:info@arrayblocks.net">info@arrayblocks.net</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <a href="tel:+919034215001">+91 90342 15001</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 <span>ArrayBlocks</span>. All rights reserved.
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
