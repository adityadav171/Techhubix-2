/**
 * About Page
 * Comprehensive information about TechHubbix company
 * Includes mission, vision, team, and company highlights
 */

import React, { useEffect } from 'react';
import { logInfo } from '../utils/logger';
import './About.css';

/**
 * About - Company information page
 * Features:
 * - Company mission and vision
 * - Company story
 * - Team highlights
 * - Company statistics
 * - Values and approach
 */
const About = () => {
  // Log page view
  useEffect(() => {
    logInfo('About page loaded');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About TechHubbix</h1>
          <p className="about-subtitle">
            Transforming Ideas into Digital Solutions
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Who We Are</h2>
            <p>
              TechHubbix is a forward-thinking digital solutions company dedicated to helping businesses 
              transform their digital presence. With expertise spanning full stack development, HubSpot 
              integration, e-commerce platforms, and digital marketing, we deliver comprehensive solutions 
              tailored to your unique business needs.
            </p>
            <p>
              Founded with a passion for technology and innovation, we've helped over 50+ businesses 
              achieve their digital transformation goals. Our team of experienced developers, designers, 
              and strategists work collaboratively to create solutions that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses of all sizes with innovative, high-quality digital solutions 
                that drive growth, improve efficiency, and create lasting value in the digital landscape.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To be the trusted technology partner that businesses turn to for transformative digital 
                solutions, recognized for our expertise, reliability, and commitment to client success.
              </p>
            </div>
            <div className="values-card">
              <div className="card-icon">💎</div>
              <h3>Our Values</h3>
              <ul className="values-list">
                <li>Excellence & Quality</li>
                <li>Innovation & Creativity</li>
                <li>Client Success</li>
                <li>Transparency & Trust</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      {/* <section className="about-stats">
        <div className="container">
          <h2>By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <h2>Our Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>🔧 Full Stack Development</h3>
              <p>End-to-end web and application development using modern technologies and best practices.</p>
            </div>
            <div className="expertise-card">
              <h3>🔗 HubSpot Solutions</h3>
              <p>Custom HubSpot CRM setup, automation, and integration services to streamline your processes.</p>
            </div>
            <div className="expertise-card">
              <h3>🎨 Design & Themes</h3>
              <p>Professional website design and custom theme development aligned with your brand identity.</p>
            </div>
            <div className="expertise-card">
              <h3>🛒 E-Commerce</h3>
              <p>Shopify and WooCommerce solutions designed to maximize conversions and sales.</p>
            </div>
            <div className="expertise-card">
              <h3>📊 Digital Marketing</h3>
              <p>Strategic digital marketing campaigns to increase visibility, traffic, and business growth.</p>
            </div>
            <div className="expertise-card">
              <h3>⚙️ Consultation</h3>
              <p>Expert advice on technology stack selection, architecture, and digital transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <p className="team-intro">
            We're a passionate team of developers, designers, and strategists united by a common goal: 
            delivering exceptional digital solutions.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>John Smith</h3>
              <p className="member-role">Founder & Lead Developer</p>
              <p className="member-bio">Full stack expert with 8+ years of experience in web development.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h3>Sarah Johnson</h3>
              <p className="member-role">Creative Director</p>
              <p className="member-bio">Design specialist creating beautiful, functional user experiences.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🔧</div>
              <h3>Michael Chen</h3>
              <p className="member-role">HubSpot Specialist</p>
              <p className="member-bio">Expert in CRM automation and marketing integration solutions.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍📊</div>
              <h3>Emma Williams</h3>
              <p className="member-role">Digital Marketing Strategist</p>
              <p className="member-bio">Data-driven marketer focused on measurable business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="why-us-section">
        <div className="container">
          <h2>Why Work With TechHubbix?</h2>
          <div className="why-us-grid">
            <div className="why-us-card">
              <div className="why-us-icon">✓</div>
              <h3>Proven Track Record</h3>
              <p>Years of experience delivering successful projects across diverse industries and scales.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">✓</div>
              <h3>Comprehensive Services</h3>
              <p>One-stop solution for all your digital needs - from development to marketing.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">✓</div>
              <h3>Expert Team</h3>
              <p>Skilled professionals with deep expertise in latest technologies and industry practices.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">✓</div>
              <h3>Client-Focused Approach</h3>
              <p>Your success is our priority. We invest in understanding your unique business goals.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">✓</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous testing and quality processes ensuring excellence in every deliverable.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">✓</div>
              <h3>Ongoing Support</h3>
              <p>Dedicated post-launch support and maintenance to ensure continued success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Work Together?</h2>
          <p>Let's discuss how we can help transform your business digitally.</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

export default About;
