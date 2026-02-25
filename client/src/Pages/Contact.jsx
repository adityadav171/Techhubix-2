/**
 * Contact Us Page
 * Professional contact form with modern design
 */

import React, { useState, useEffect } from 'react';
import { logInfo, logDebug, logError } from '../utils/logger';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    logInfo('Contact page loaded');
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9\-\+\s\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    logDebug('Contact form submission started', { formData });

    if (!validateForm()) {
      logError('Form validation failed', { errors });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));

      logInfo('Contact form submitted successfully', { formData });
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for reaching out! We will get back to you within 24 hours.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        service: 'general'
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      logError('Contact form submission failed', { error });
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact info data
  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: '123 Tech Street, Silicon Valley, CA 94025'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+1 (555) 123-4567'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: 'hello@techubbix.com'
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM (EST)'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              
              {submitStatus && (
                <div className={`status-message ${submitStatus.type}`}>
                  <span>{submitStatus.type === 'success' ? '✓' : '✕'}</span>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                {/* Phone Field */}
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                {/* Company Field */}
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                  />
                </div>

                {/* Service Selection */}
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="hubspot">HubSpot Development</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="ecommerce">E-Commerce Solutions</option>
                    <option value="consulting">Digital Strategy Consulting</option>
                  </select>
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows="6"
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                {/* Terms & Privacy */}
                <div className="form-info">
                  <small>We respect your privacy. Your information will never be shared.</small>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="contact-info-section">
              {/* Contact Info Cards */}
              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">{info.icon}</div>
                    <h3>{info.title}</h3>
                    <p>{info.details}</p>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              {/* <div className="quick-links">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="/services">Our Services</a></li>
                  <li><a href="/projects">Our Work</a></li>
                  <li><a href="/blogs">Blog & Resources</a></li>
                  <li><a href="/about">About Us</a></li>
                </ul>
              </div> */}

              {/* Response Time */}
              {/* <div className="response-info">
                <div className="response-badge">
                  <span className="badge-icon">⚡</span>
                  <div>
                    <h4>Fast Response</h4>
                    <p>We typically respond within 24 hours</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is your typical project timeline?</h3>
              <p>Most projects take 8-16 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer support after launch?</h3>
              <p>Yes! We provide ongoing maintenance and support packages to ensure your project runs smoothly.</p>
            </div>
            <div className="faq-item">
              <h3>How much do your services cost?</h3>
              <p>Pricing varies based on project scope and requirements. Contact us for a custom quote tailored to your needs.</p>
            </div>
            <div className="faq-item">
              <h3>Can you work with our existing team?</h3>
              <p>Absolutely! We excel at collaborating with internal teams and can integrate seamlessly with your workflow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
