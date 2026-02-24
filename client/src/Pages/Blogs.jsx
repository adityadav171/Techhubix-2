/**
 * Blogs Listing Page
 * Displays blog posts with filtering, search, and pagination
 * Features category filtering and featured posts
 */

import React, { useState, useEffect } from 'react';
import { logInfo, logDebug } from '../utils/logger';
import BlogCard from '../Components/BlogCard';
import {
  blogsData,
  getBlogCategories,
  getFeaturedBlogs,
  searchBlogs
} from '../data/blogsData';
import './Blogs.css';

/**
 * Blogs - Main blog listing page
 * Features:
 * - Featured posts section
 * - Filter by category
 * - Search functionality
 * - Responsive grid layout
 */
const Blogs = () => {
  // State Management
  const [filteredBlogs, setFilteredBlogs] = useState(blogsData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Log page view
  useEffect(() => {
    logInfo('Blogs page loaded', { totalBlogs: blogsData.length });
  }, []);

  /**
   * Handle category filter change
   * @param {string} category - Selected category
   */
  const handleCategoryChange = (category) => {
    logDebug('Blog category filter changed', { category });
    setSelectedCategory(category);
    setSearchTerm(''); // Reset search when filtering by category
    setIsLoading(true);

    setTimeout(() => {
      if (category === 'All') {
        setFilteredBlogs(blogsData);
      } else {
        const filtered = blogsData.filter(blog => blog.category === category);
        setFilteredBlogs(filtered);
      }
      setIsLoading(false);
    }, 300);
  };

  /**
   * Handle search input change
   * @param {Event} e - Input event
   */
  const handleSearch = (e) => {
    const term = e.target.value;
    logDebug('Blog search term changed', { term });
    setSearchTerm(term);
    setSelectedCategory('All'); // Reset category when searching
    setIsLoading(true);

    setTimeout(() => {
      if (term === '') {
        setFilteredBlogs(blogsData);
      } else {
        const results = searchBlogs(term);
        setFilteredBlogs(results);
      }
      setIsLoading(false);
    }, 300);
  };

  // Get unique categories
  const categories = getBlogCategories();
  const featuredBlogs = getFeaturedBlogs();

  return (
    <div className="blogs-page">
      {/* Hero Section */}
      <section className="blogs-hero">
        <div className="blogs-hero-content">
          <h1 className="blogs-title">Our Blog</h1>
          <p className="blogs-subtitle">
            Insights, Tips, and Resources for Web Development and Digital Marketing
          </p>
        </div>
      </section>

      {/* Featured Section */}
      {featuredBlogs.length > 0 && (
        <section className="featured-section">
          <div className="container">
            <h2 className="section-title">Featured Articles</h2>
            <div className="featured-grid">
              {featuredBlogs.slice(0, 3).map(blog => (
                <div key={blog.id} className="featured-item">
                  <BlogCard
                    slug={blog.slug}
                    title={blog.title}
                    excerpt={blog.excerpt}
                    image={blog.image}
                    author={blog.author}
                    publishDate={blog.publishDate}
                    readTime={blog.readTime}
                    category={blog.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="blogs-content">
        <div className="container">
          {/* Filter Section */}
          <div className="blogs-filters">
            {/* Search Bar */}
            <div className="blogs-search">
              <input
                type="text"
                placeholder="Search articles..."
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
                All Articles
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
              Showing <span className="count">{filteredBlogs.length}</span> article{filteredBlogs.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Blogs Grid */}
          <div className={`blogs-grid ${isLoading ? 'loading' : ''}`}>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map(blog => (
                <div key={blog.id} className="grid-item">
                  <BlogCard
                    slug={blog.slug}
                    title={blog.title}
                    excerpt={blog.excerpt}
                    image={blog.image}
                    author={blog.author}
                    publishDate={blog.publishDate}
                    readTime={blog.readTime}
                    category={blog.category}
                  />
                </div>
              ))
            ) : (
              <div className="no-blogs">
                <p className="no-blogs-text">
                  No articles found matching your search.
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

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest articles and insights delivered to your inbox every week.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                className="email-input"
              />
              <button type="submit" className="subscribe-btn">
                Subscribe →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
