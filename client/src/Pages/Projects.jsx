/**
 * Projects Listing Page
 * Displays all projects with filtering and category view
 * Includes search, sorting, and pagination features
 */

import React, { useState, useEffect } from 'react';
import { logInfo, logDebug } from '../utils/logger';
import ProjectCard from '../Components/ProjectCard';
import { projectsData, getProjectCategories } from '../data/projectsData';
import './Projects.css';

/**
 * Projects - Main projects listing page
 * Features:
 * - Filter projects by category
 * - Search projects by title
 * - Responsive grid layout
 * - Smooth animations on load
 */
const Projects = () => {
  // State Management
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Log page view
  useEffect(() => {
    logInfo('Projects page loaded', { totalProjects: projectsData.length });
  }, []);

  /**
   * Handle category filter change
   * @param {string} category - Selected category
   */
  const handleCategoryChange = (category) => {
    logDebug('Category filter changed', { category });
    setSelectedCategory(category);
    setIsLoading(true);
    
    // Simulate loading delay for smooth animation
    setTimeout(() => {
      if (category === 'All') {
        setFilteredProjects(projectsData);
      } else {
        const filtered = projectsData.filter(
          project => project.category === category
        );
        setFilteredProjects(filtered);
      }
      setIsLoading(false);
    }, 300);
  };

  /**
   * Handle search input change
   * @param {Event} e - Input event
   */
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    logDebug('Search term changed', { term });
    setSearchTerm(term);
    setIsLoading(true);

    setTimeout(() => {
      if (term === '') {
        setFilteredProjects(projectsData);
      } else {
        const filtered = projectsData.filter(project =>
          project.title.toLowerCase().includes(term) ||
          project.client.toLowerCase().includes(term) ||
          project.shortDescription.toLowerCase().includes(term)
        );
        setFilteredProjects(filtered);
      }
      setIsLoading(false);
    }, 300);
  };

  // Get unique categories
  const categories = getProjectCategories();

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1 className="projects-title">Our Latest Projects</h1>
          <p className="projects-subtitle">
            Explore our portfolio of successful projects and case studies
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="projects-content">
        <div className="container">
          {/* Filter Section */}
          <div className="projects-filters">
            {/* Search Bar */}
            <div className="projects-search">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>

            {/* Category Filters */}
            <div className="category-filters">
              <button
                className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('All')}
              >
                All Projects
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
          </div>

          {/* Results Info */}
          <div className="results-info">
            <p>
              Showing <span className="count">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Projects Grid */}
          <div className={`projects-grid ${isLoading ? 'loading' : ''}`}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <div key={project.id} className="grid-item">
                  <ProjectCard
                    slug={project.slug}
                    title={project.title}
                    image={project.image}
                    shortDescription={project.shortDescription}
                    category={project.category}
                    year={project.year}
                  />
                </div>
              ))
            ) : (
              <div className="no-projects">
                <p className="no-projects-text">
                  No projects found matching your criteria.
                </p>
                <button
                  className="reset-btn"
                  onClick={() => {
                    setSearchTerm('');
                    handleCategoryChange('All');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="projects-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{projectsData.length}+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can help achieve your business goals.</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
