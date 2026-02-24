/**
 * Blog Detail Page
 * Displays individual blog post with full content and related posts
 */

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { logInfo, logError } from '../utils/logger';
import { getBlogBySlug, getLatestBlogs } from '../data/blogsData';
import BlogCard from '../Components/BlogCard';
import './BlogDetail.css';

/**
 * BlogDetail - Individual blog post page
 * Features:
 * - Full article content
 * - Author and publication information
 * - Related articles
 * - Category and tags
 * - Share functionality
 */
const BlogDetail = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  useEffect(() => {
    if (blog) {
      logInfo('Blog detail page loaded', { blogSlug: slug });
      window.scrollTo(0, 0);
    } else {
      logError('Blog post not found', { slug });
    }
  }, [slug, blog]);

  // Handle blog not found
  if (!blog) {
    return (
      <div className="blog-not-found">
        <div className="container">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blogs" className="back-link">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get latest blogs for sidebar (excluding current)
  const relatedBlogs = getLatestBlogs(5).filter(b => b.slug !== slug).slice(0, 3);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="blog-detail-page">
      {/* Header Section */}
      <section className="blog-header">
        <div className="container">
          <Link to="/blogs" className="back-link">
            ← Back to Blog
          </Link>
          <div className="blog-category-tag">{blog.category}</div>
          <h1 className="blog-main-title">{blog.title}</h1>
          <div className="blog-meta">
            <span className="meta-author">By {blog.author}</span>
            <span className="separator">•</span>
            <time className="meta-date">{formatDate(blog.publishDate)}</time>
            <span className="separator">•</span>
            <span className="meta-read">{blog.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="blog-image-section">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="blog-featured-image"
        />
      </section>

      {/* Content Section */}
      <section className="blog-body">
        <div className="container">
          <div className="blog-content-grid">
            {/* Main Content */}
            <article className="blog-main-content">
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="blog-tags">
                  <h4>Tags:</h4>
                  <div className="tags-list">
                    {blog.tags.map((tag, index) => (
                      <span key={index} className="tag-item">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio */}
              <div className="author-bio">
                <div className="author-avatar">
                  {blog.author.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{blog.author}</h4>
                  <p>Digital strategist and creative developer passionate about building beautiful, functional web experiences.</p>
                </div>
              </div>

              {/* Share Section */}
              <div className="share-section">
                <span className="share-label">Share this article:</span>
                <div className="share-buttons">
                  <button className="share-btn facebook" title="Share on Facebook">
                    f
                  </button>
                  <button className="share-btn twitter" title="Share on Twitter">
                    𝕏
                  </button>
                  <button className="share-btn linkedin" title="Share on LinkedIn">
                    in
                  </button>
                  <button className="share-btn copy" title="Copy link">
                    🔗
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* Blog Info Widget */}
              <div className="sidebar-card">
                <h4>Article Info</h4>
                <div className="info-row">
                  <span className="info-label">Published:</span>
                  <span className="info-value">{formatDate(blog.publishDate)}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Category:</span>
                  <span className="info-value">{blog.category}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Read Time:</span>
                  <span className="info-value">{blog.readTime}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Views:</span>
                  <span className="info-value">{blog.views.toLocaleString()}</span>
                </div>
              </div>

              {/* Related Articles */}
              {relatedBlogs.length > 0 && (
                <div className="sidebar-card">
                  <h4>Related Articles</h4>
                  <div className="related-list">
                    {relatedBlogs.map(relatedBlog => (
                      <Link 
                        key={relatedBlog.id}
                        to={`/blogs/${relatedBlog.slug}`}
                        className="related-item"
                      >
                        <h5>{relatedBlog.title}</h5>
                        <span className="related-date">
                          {formatDate(relatedBlog.publishDate)}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Subscribe Widget */}
              <div className="sidebar-card subscribe-widget">
                <h4>Subscribe</h4>
                <p>Get new articles delivered to your inbox weekly.</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    required 
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedBlogs.length > 0 && (
        <section className="related-posts-section">
          <div className="container">
            <h2>More Articles You Might Like</h2>
            <div className="related-posts-grid">
              {relatedBlogs.map(post => (
                <div key={post.id} className="related-post-item">
                  <BlogCard
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    image={post.image}
                    author={post.author}
                    publishDate={post.publishDate}
                    readTime={post.readTime}
                    category={post.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="blog-bottom-cta">
        <div className="container">
          <h2>Need Help With Your Project?</h2>
          <p>Our team is ready to discuss your next web development or digital marketing project.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Started</button>
            <Link to="/blogs" className="btn-secondary">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
