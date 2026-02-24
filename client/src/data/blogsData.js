/**
 * Blog Posts Data for TechHubbix
 * Contains articles, case studies, and industry insights
 */

export const blogsData = [
  {
    id: 1,
    slug: 'what-is-fullstack-development',
    title: 'What is Full Stack Development? A Complete Guide',
    excerpt: 'Learn everything about full stack development, the skills needed, and why it\'s crucial for modern web applications.',
    content: `
      <h2>Understanding Full Stack Development</h2>
      <p>Full stack development refers to the development of both client-side and server-side software applications. A full stack developer is someone who can work on all aspects of a web application.</p>
      
      <h3>Frontend Development</h3>
      <p>This involves everything users see and interact with. Frontend developers use technologies like HTML, CSS, JavaScript, and modern frameworks like React, Vue.js, or Angular.</p>
      
      <h3>Backend Development</h3>
      <p>Backend development focuses on server-side logic, databases, and APIs. Technologies include Node.js, Python, Java, PHP, and databases like MongoDB and PostgreSQL.</p>
      
      <h3>Why Full Stack Development Matters</h3>
      <ul>
        <li>Better communication between teams</li>
        <li>More efficient development process</li>
        <li>Faster problem solving</li>
        <li>Better understanding of the entire system</li>
      </ul>
    `,
    author: 'John Smith',
    category: 'Development',
    tags: ['Full Stack', 'Web Development', 'Tutorial'],
    publishDate: '2024-02-10',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop',
    featured: true,
    views: 2543,
    likes: 312
  },
  {
    id: 2,
    slug: 'hubspot-automation-best-practices',
    title: 'HubSpot Automation: Best Practices for 2024',
    excerpt: 'Master HubSpot automation workflows to streamline your sales and marketing processes and improve efficiency.',
    content: `
      <h2>HubSpot Automation Fundamentals</h2>
      <p>HubSpot automation can significantly reduce manual work and improve your team\'s productivity. Let\'s explore the best practices.</p>
      
      <h3>Setting Up Workflows</h3>
      <p>Start by identifying repetitive tasks that can be automated. Common automation scenarios include:</p>
      <ul>
        <li>Lead scoring and assignment</li>
        <li>Email sequences</li>
        <li>Task creation</li>
        <li>Deal pipeline management</li>
      </ul>
      
      <h3>Monitoring and Optimization</h3>
      <p>Always monitor your workflows to ensure they\'re working as expected. Use HubSpot analytics to measure the impact of your automations.</p>
    `,
    author: 'Sarah Johnson',
    category: 'CRM',
    tags: ['HubSpot', 'Automation', 'Sales'],
    publishDate: '2024-02-08',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop',
    featured: true,
    views: 1823,
    likes: 245
  },
  {
    id: 3,
    slug: 'web-design-trends-2024',
    title: 'Web Design Trends Shaping the Digital Landscape in 2024',
    excerpt: 'Discover the latest web design trends that are revolutionizing user experience and aesthetic appeal in 2024.',
    content: `
      <h2>Modern Web Design Trends</h2>
      <p>Web design continues to evolve rapidly. Here are the key trends defining 2024:</p>
      
      <h3>1. Minimalist Design</h3>
      <p>Less is more. Clean, simple interfaces with plenty of whitespace are becoming the standard for professional websites.</p>
      
      <h3>2. Dark Mode</h3>
      <p>Dark mode is no longer optional. Users expect the choice between light and dark interfaces for reduced eye strain.</p>
      
      <h3>3. Micro-interactions</h3>
      <p>Small animations and interactive elements enhance user engagement without being distracting.</p>
      
      <h3>4. Advanced Typography</h3>
      <p>Bold, experimental typography is being used to create visual hierarchy and brand personality.</p>
    `,
    author: 'Michael Chen',
    category: 'Design',
    tags: ['Web Design', 'UI/UX', 'Trends'],
    publishDate: '2024-02-05',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
    featured: true,
    views: 3421,
    likes: 456
  },
  {
    id: 4,
    slug: 'seo-tips-for-ecommerce',
    title: 'SEO Tips to Boost Your E-Commerce Sales',
    excerpt: 'Implement these proven SEO strategies to increase your e-commerce store\'s visibility and drive more sales.',
    content: `
      <h2>E-Commerce SEO Guide</h2>
      <p>For e-commerce businesses, SEO is crucial for visibility and sales. Here are essential strategies:</p>
      
      <h3>Keyword Research</h3>
      <p>Understand what your customers are searching for. Use tools like Google Keyword Planner and SEMrush to identify high-intent keywords.</p>
      
      <h3>Product Page Optimization</h3>
      <ul>
        <li>Unique, descriptive product titles</li>
        <li>Detailed product descriptions</li>
        <li>High-quality product images</li>
        <li>Customer reviews and ratings</li>
      </ul>
      
      <h3>Technical SEO</h3>
      <p>Ensure your site loads quickly, is mobile-friendly, and has a proper XML sitemap.</p>
    `,
    author: 'Emma Williams',
    category: 'Marketing',
    tags: ['SEO', 'E-Commerce', 'Marketing'],
    publishDate: '2024-02-01',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565e6b1?w=800&h=450&fit=crop',
    featured: false,
    views: 1654,
    likes: 198
  },
  {
    id: 5,
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Learn advanced techniques to optimize your React applications for better performance and faster load times.',
    content: `
      <h2>Optimizing React Applications</h2>
      <p>Performance is critical for user experience. Here are key optimization techniques:</p>
      
      <h3>Code Splitting</h3>
      <p>Use React.lazy() and Suspense to split your code into smaller chunks that load on demand.</p>
      
      <h3>Memoization</h3>
      <p>Use React.memo to prevent unnecessary re-renders of components.</p>
      
      <h3>Image Optimization</h3>
      <ul>
        <li>Use modern image formats (WebP)</li>
        <li>Implement lazy loading</li>
        <li>Use responsive images</li>
      </ul>
      
      <h3>Bundle Size</h3>
      <p>Analyze your bundle size using Webpack Bundle Analyzer and eliminate unnecessary dependencies.</p>
    `,
    author: 'David Park',
    category: 'Development',
    tags: ['React', 'Performance', 'JavaScript'],
    publishDate: '2024-01-28',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop',
    featured: false,
    views: 2134,
    likes: 287
  },
  {
    id: 6,
    slug: 'digital-marketing-strategy',
    title: 'Building a Winning Digital Marketing Strategy',
    excerpt: 'Discover how to create a comprehensive digital marketing strategy that drives results for your business.',
    content: `
      <h2>Digital Marketing Strategy Framework</h2>
      <p>A well-planned digital marketing strategy is essential for business growth. Here\'s how to build one:</p>
      
      <h3>1. Define Your Goals</h3>
      <p>Be specific about what you want to achieve. Use SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound).</p>
      
      <h3>2. Know Your Audience</h3>
      <p>Create detailed buyer personas. Understand their needs, pain points, and preferences.</p>
      
      <h3>3. Channel Selection</h3>
      <ul>
        <li>Search Engine Marketing (SEM)</li>
        <li>Social Media Marketing</li>
        <li>Email Marketing</li>
        <li>Content Marketing</li>
      </ul>
      
      <h3>4. Analytics and Measurement</h3>
      <p>Track everything. Use Google Analytics, conversion tracking, and A/B testing to optimize your campaigns.</p>
    `,
    author: 'Lisa Martinez',
    category: 'Marketing',
    tags: ['Digital Marketing', 'Strategy', 'Growth'],
    publishDate: '2024-01-25',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565e6b1?w=800&h=450&fit=crop',
    featured: false,
    views: 1432,
    likes: 176
  }
];

/**
 * Get blog post by slug
 * @param {string} slug - The blog post slug
 * @returns {object} The blog post object or null
 */
export const getBlogBySlug = (slug) => {
  return blogsData.find(blog => blog.slug === slug) || null;
};

/**
 * Get blog posts by category
 * @param {string} category - The blog category
 * @returns {array} Array of blog posts in the category
 */
export const getBlogsByCategory = (category) => {
  return blogsData.filter(blog => blog.category === category);
};

/**
 * Get all blog categories
 * @returns {array} Array of unique categories
 */
export const getBlogCategories = () => {
  return [...new Set(blogsData.map(blog => blog.category))];
};

/**
 * Get featured blog posts
 * @returns {array} Array of featured blog posts
 */
export const getFeaturedBlogs = () => {
  return blogsData.filter(blog => blog.featured);
};

/**
 * Get latest blog posts
 * @param {number} count - Number of posts to return
 * @returns {array} Array of latest blog posts
 */
export const getLatestBlogs = (count = 6) => {
  return blogsData.slice(0, count);
};

/**
 * Search blog posts
 * @param {string} query - Search query
 * @returns {array} Array of matching blog posts
 */
export const searchBlogs = (query) => {
  const lowerQuery = query.toLowerCase();
  return blogsData.filter(blog => 
    blog.title.toLowerCase().includes(lowerQuery) ||
    blog.excerpt.toLowerCase().includes(lowerQuery) ||
    blog.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

export default blogsData;
