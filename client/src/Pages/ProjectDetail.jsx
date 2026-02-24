/**
 * Project Detail Page
 * Displays comprehensive project information, case study, and results
 */

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { logInfo, logError } from '../utils/logger';
import { getProjectBySlug } from '../data/projectsData';
import './ProjectDetail.css';

/**
 * ProjectDetail - Individual project case study page
 * Features:
 * - Detailed project information
 * - Challenge and solution overview
 * - Results and metrics
 * - Client testimonial
 * - Technology stack
 * - Related projects navigation
 */
const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) {
      logInfo('Project detail page loaded', { projectSlug: slug });
      window.scrollTo(0, 0);
    } else {
      logError('Project not found', { slug });
    }
  }, [slug, project]);

  // Handle project not found
  if (!project) {
    return (
      <div className="project-not-found">
        <div className="container">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="back-link">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      {/* Header Section */}
      <section className="project-header">
        <div className="container">
          <Link to="/projects" className="back-link">
            ← Back to Projects
          </Link>
          <h1 className="project-main-title">{project.title}</h1>
          <div className="project-meta-info">
            <span className="meta-item">
              <strong>Client:</strong> {project.client}
            </span>
            <span className="meta-item">
              <strong>Year:</strong> {project.year}
            </span>
            <span className="meta-item">
              <strong>Category:</strong> {project.category}
            </span>
            <span className="meta-item">
              <strong>Timeline:</strong> {project.timeline}
            </span>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="project-image-section">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-main-image"
        />
      </section>

      {/* Content Section */}
      <section className="project-body">
        <div className="container">
          <div className="project-content-grid">
            {/* Main Content */}
            <div className="project-main-content">
              {/* Overview */}
              <div className="content-block">
                <h2>Project Overview</h2>
                <p className="content-text">{project.overview}</p>
              </div>

              {/* Challenge & Solution in Side-by-side */}
              <div className="challenge-solution">
                <div className="challenge-block">
                  <h3>The Challenge</h3>
                  <p>{project.challenge}</p>
                </div>
                <div className="solution-block">
                  <h3>Our Solution</h3>
                  <p>{project.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="content-block">
                <h2>Results & Impact</h2>
                <ul className="results-list">
                  {project.results.map((result, index) => (
                    <li key={index} className="result-item">
                      <span className="result-icon">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="content-block">
                  <h2>Technology Stack</h2>
                  <div className="tech-grid">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <div className="testimonial-section">
                  <div className="testimonial-card">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">{project.testimonial.text}</p>
                    <div className="testimonial-author">
                      <strong>{project.testimonial.author}</strong>
                      <p className="testimonial-position">
                        {project.testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="project-sidebar">
              {/* Quick Info */}
              <div className="sidebar-card">
                <h3>Project Details</h3>
                <div className="detail-row">
                  <span className="detail-label">Category:</span>
                  <span className="detail-value">{project.category}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Timeline:</span>
                  <span className="detail-value">{project.timeline}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Budget:</span>
                  <span className="detail-value">{project.budget}</span>
                </div>
              </div>

              {/* Services Used */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="sidebar-card">
                  <h3>Technologies</h3>
                  <ul className="tech-list">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="sidebar-cta">
                <h3>Need Similar Work?</h3>
                <p>Let's discuss your project requirements</p>
                <button className="cta-btn">Start Your Project</button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="project-bottom-cta">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's create something amazing together.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Started</button>
            <Link to="/projects" className="btn-secondary">
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
