/**
 * ProjectCard Component
 * A reusable card component to display project information
 * Includes hover animations and call-to-action
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

/**
 * ProjectCard - Displays individual project information
 * @param {Object} props - Component props
 * @param {string} props.slug - Project URL slug
 * @param {string} props.title - Project title
 * @param {string} props.image - Project image URL
 * @param {string} props.shortDescription - Brief project description
 * @param {string} props.category - Project category
 * @param {number} props.year - Project completion year
 */
const ProjectCard = ({ slug, title, image, shortDescription, category, year }) => {
  return (
    <Link to={`/projects/${slug}`} className="project-card-link">
      <div className="project-card">
        {/* Project Image Container */}
        <div className="project-card-image">
          <img src={image} alt={title} loading="lazy" />
          <div className="project-card-overlay">
            <span className="view-project-btn">View Project →</span>
          </div>
        </div>

        {/* Project Info */}
        <div className="project-card-content">
          <div className="project-meta">
            <span className="project-category">{category}</span>
            <span className="project-year">{year}</span>
          </div>
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-description">{shortDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
