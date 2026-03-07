/**
 * About Page
 * Comprehensive information about TechHubbix company
 * Includes mission, vision, team, and company highlights
 */

import React, { useEffect } from 'react';
import { logInfo } from '../utils/logger';
import './About.css';
import { useNavigate } from 'react-router';

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

  const navigate = useNavigate();

  const differentiators = [
    {
      icon: '📈',
      title: 'Business-First Approach',
      description: 'We focus on ROI, not just design or code.'
    },
    {
      icon: '⚡',
      title: 'Performance-Driven Execution',
      description: 'Every solution is optimized for speed, scalability, and measurable results.'
    },
    {
      icon: '🔄',
      title: 'Automation-Focused Systems',
      description: 'We help businesses reduce manual work using CRM workflows and smart integrations.'
    },
    {
      icon: '🤝',
      title: 'Long-Term Partnership',
      description: 'We support clients beyond project completion with ongoing maintenance and optimization.'
    }
  ];

  const expertise = [
    {
      icon: '🔧',
      title: 'Full Stack Development',
      description: 'End-to-end web and application development using modern frameworks and cloud architecture. We build secure, high-performance, and scalable platforms engineered for speed, reliability, and future growth.'
    },
    {
      icon: '🔗',
      title: 'HubSpot CRM Implementation & Automation',
      description: 'Comprehensive HubSpot setup, sales pipeline configuration, workflow automation, reporting dashboards, and third-party integrations designed to streamline operations and improve customer lifecycle management.'
    },
    {
      icon: '🎨',
      title: 'Brand-Focused Design & Custom Themes',
      description: 'Strategic UI/UX design and custom theme development aligned with your brand identity. Every interface is crafted to enhance user experience, increase engagement, and improve conversion rates.'
    },
    {
      icon: '🛒',
      title: 'eCommerce Development & Optimization',
      description: 'Shopify and WooCommerce solutions built for performance and revenue scalability. From store architecture to speed optimization and conversion enhancement, we create eCommerce systems that sell.'
    },
    {
      icon: '📊',
      title: 'SEO & Performance Marketing',
      description: 'Data-driven digital marketing strategies including technical SEO, paid media campaigns (Google & Meta), funnel optimization, and lead generation systems focused on measurable ROI.'
    },
    {
      icon: '⚙️',
      title: 'Technology & Digital Transformation Consulting',
      description: 'Expert guidance on technology stack selection, system architecture, automation strategy, and scalable digital infrastructure to future-proof your business.'
    }
  ];

  const reasons = [
    {
      title: 'Proven Results Across Industries',
      description: 'We have successfully delivered scalable digital solutions for startups, eCommerce brands, and growing businesses across multiple industries — helping them improve efficiency, increase conversions, and accelerate growth.'
    },
    {
      title: 'End-to-End Digital Expertise',
      description: 'From full-stack development and CRM automation to eCommerce optimization and performance marketing, we provide a complete digital ecosystem under one roof — eliminating the need for multiple vendors.'
    },
    {
      title: 'Experienced & Specialized Team',
      description: 'Our team consists of skilled developers, CRM specialists, designers, and marketing strategists with deep expertise in modern technologies and industry best practices.'
    },
    {
      title: 'Business-First, Client-Centered Approach',
      description: 'We prioritize understanding your unique goals, challenges, and growth vision. Every solution we build is aligned with your long-term business objectives.'
    },
    {
      title: 'Enterprise-Grade Quality Assurance',
      description: 'We follow rigorous testing protocols, security standards, and performance optimization processes to ensure every deliverable meets the highest quality benchmarks.'
    },
    {
      title: 'Long-Term Partnership & Ongoing Support',
      description: 'Our relationship doesn\'t end at launch. We provide continuous support, optimization, and strategic guidance to ensure sustained success and measurable results.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">We Build Systems That Drive Business Growth</h1>
          <p className="about-subtitle">
            TechHubbix is a technology and digital growth company dedicated to helping businesses scale through smart development, automation, and performance marketing.
          </p>
          <p className="about-tagline">
            We don't just build websites — we build revenue engines.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are">
        <div className="container">
          <h2>Who We Are</h2>
          <div className="who-we-are-content">
            <p>
              TechHubbix was founded with a clear vision: to bridge the gap between technology and real business growth.
            </p>
            <p>
              In today's digital world, having a website is not enough. Businesses need scalable systems, optimized processes, and data-driven strategies to compete globally.
            </p>
            <p>
              That's where we come in.
            </p>
            <p>
              We combine full-stack development, CRM automation, Shopify expertise, and performance marketing to create solutions that are secure, scalable, and growth-focused.
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
                To empower startups and growing businesses with technology solutions that increase efficiency, maximize revenue, and create long-term digital success.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To become a globally trusted digital transformation partner for modern businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="differentiators">
        <div className="container">
          <h2>What Makes Us Different</h2>
          <div className="differentiators-grid">
            {differentiators.map((item, index) => (
              <div key={index} className="differentiator-card">
                <div className="diff-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="our-expertise">
        <div className="container">
          <div className="expertise-header">
            <h2>Our Expertise</h2>
            <p>
              At TechHubbix, we design, develop, and optimize scalable digital systems that drive measurable business growth. Our approach combines technical excellence, strategic automation, and performance marketing to deliver long-term results — not just short-term fixes.
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div key={index} className="expertise-card">
                <div className="expertise-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With TechHubbix */}
      <section className="why-work-with-us">
        <div className="container">
          <h2>Why Work With TechHubbix?</h2>
          <p className="why-intro">
            Choosing the right technology partner is critical to your business growth. At TechHubbix, we combine strategic thinking, technical excellence, and performance-driven execution to deliver solutions that create real impact.
          </p>
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-number">✓</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>Partner with TechHubbix and unlock scalable technology solutions built for performance, automation, and revenue growth.</p>
          <p className="cta-tagline">Your next phase of growth starts with a single conversation.</p>
          <button 
            className="cta-button"
            onClick={() => navigate('/contact')}
          >
            🚀 Schedule Your Consultation Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
