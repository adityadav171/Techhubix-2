/**
 * BlogCard Component
 * Displays blog post preview with image, excerpt, and metadata
 * Responsive and includes hover effects
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

/**
 * BlogCard - Displays individual blog post information
 * @param {Object} props - Component props
 * @param {string} props.slug - Blog post URL slug
 * @param {string} props.title - Blog post title
 * @param {string} props.excerpt - Blog post excerpt
 * @param {string} props.image - Blog image URL
 * @param {string} props.author - Blog post author name
 * @param {string} props.publishDate - Publication date
 * @param {string} props.readTime - Estimated read time
 * @param {string} props.category - Blog category
 */
const BlogCard = ({ 
  slug, 
  title, 
  excerpt, 
  image, 
  author, 
  publishDate, 
  readTime, 
  category 
}) => {
  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Link to={`/blogs/${slug}`} className="blog-card-link">
      <article className="blog-card">
        {/* Blog Image */}
        <div className="blog-card-image">
          <img src={image} alt={title} loading="lazy" />
          <span className="blog-category-badge">{category}</span>
        </div>

        {/* Blog Content */}
        <div className="blog-card-content">
          <h3 className="blog-card-title">{title}</h3>
          <p className="blog-card-excerpt">{excerpt}</p>

          {/* Blog Metadata */}
          <div className="blog-card-meta">
            <div className="blog-author-info">
              <span className="blog-author">{author}</span>
              <span className="separator">•</span>
              <time className="blog-date">{formatDate(publishDate)}</time>
            </div>
            <span className="blog-read-time">{readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
