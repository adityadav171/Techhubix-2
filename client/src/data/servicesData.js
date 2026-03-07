/**
 * Services Data for TechHubbix
 * Contains comprehensive information about all services offered
 */

export const servicesData = [
  {
    id: 1,
    slug: 'full-stack-development',
    title: 'Full-Stack Web Development',
    shortDescription: 'Custom web applications built with modern frameworks (React, Node.js, cloud architecture) designed for speed, security, and scalability.',
    description:
      'Custom web applications built with modern frameworks (React, Node.js, cloud architecture) designed for speed, security, and scalability.',
    icon: '💻',
    category: 'Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Express', 'Next.js'],
    features: [
      'Custom web application development',
      'API development & integration',
      'Database architecture design',
      'Cloud deployment',
      'Performance optimization',
      'Security best practices',
      'Scalable system architecture',
      'Ongoing maintenance & support'
    ],
    pricing: 'Custom Quote',
    timeline: '6-12 weeks',
    process: [
      'Requirement analysis',
      'System architecture planning',
      'Frontend & backend development',
      'Testing & QA',
      'Deployment',
      'Post-launch support'
    ]
  },
  {
    id: 2,
    slug: 'hubspot-development',
    title: 'HubSpot CRM Development & Automation',
    shortDescription: 'Complete HubSpot CRM setup, workflow automation, pipeline optimization, reporting dashboards, and API integrations to streamline your sales process.',
    description:
      'Complete HubSpot CRM setup, workflow automation, pipeline optimization, reporting dashboards, and API integrations to streamline your sales process.',
    icon: '⚙️',
    category: 'Development',
    technologies: ['HubSpot CRM', 'HubL', 'Marketing Automation', 'API Integrations'],
    features: [
      'HubSpot CRM setup',
      'Workflow automation',
      'Sales pipeline optimization',
      'Custom HubSpot themes & modules',
      'Third-party integrations',
      'Lead nurturing automation',
      'Reporting dashboards',
      'Ongoing optimization'
    ],
    pricing: 'Custom Quote',
    timeline: '4-8 weeks',
    process: [
      'Business analysis',
      'CRM structure setup',
      'Automation configuration',
      'Integration setup',
      'Testing',
      'Launch & training'
    ]
  },
  {
    id: 3,
    slug: 'shopify-development',
    title: 'Shopify eCommerce Development',
    shortDescription: 'High-converting Shopify stores optimized for performance, user experience, and revenue growth. Includes theme customization, payment integration, and speed optimization.',
    description:
      'High-converting Shopify stores optimized for performance, user experience, and revenue growth. Includes theme customization, payment integration, and speed optimization.',
    icon: '🛍️',
    category: 'Development',
    technologies: ['Shopify', 'Liquid', 'Shopify Apps', 'JavaScript', 'HTML/CSS'],
    features: [
      'Custom Shopify store development',
      'Theme customization',
      'App integration',
      'Payment gateway setup',
      'Store optimization',
      'Speed optimization',
      'Conversion rate optimization',
      'Ongoing maintenance'
    ],
    pricing: 'Custom Quote',
    timeline: '4-10 weeks',
    process: [
      'Store planning',
      'Design & theme setup',
      'App integration',
      'Product & payment setup',
      'Testing',
      'Launch'
    ]
  },
  {
    id: 4,
    slug: 'seo-services',
    title: 'SEO & Growth Marketing',
    shortDescription: 'Technical SEO, on-page optimization, authority building, and content strategies to rank higher on Google and drive organic traffic.',
    description:
      'Technical SEO, on-page optimization, authority building, and content strategies to rank higher on Google and drive organic traffic.',
    icon: '🔍',
    category: 'Marketing',
    technologies: ['SEO Tools', 'Google Analytics', 'Search Console', 'Keyword Research Tools'],
    features: [
      'Keyword research',
      'On-page SEO',
      'Technical SEO audit',
      'Link building',
      'Local SEO',
      'Content optimization',
      'Competitor analysis',
      'Monthly reporting'
    ],
    pricing: 'Custom Quote',
    timeline: 'Ongoing',
    process: [
      'SEO audit',
      'Strategy creation',
      'Optimization implementation',
      'Content improvements',
      'Monitoring & reporting'
    ]
  },
  {
    id: 5,
    slug: 'digital-marketing',
    title: 'Performance Digital Marketing',
    shortDescription: 'Google Ads, Meta Ads, LinkedIn Ads, lead generation funnels, email automation, and ROI-focused campaigns built to scale profitably.',
    description:
      'Google Ads, Meta Ads, LinkedIn Ads, lead generation funnels, email automation, and ROI-focused campaigns built to scale profitably.',
    icon: '📢',
    category: 'Marketing',
    technologies: ['Google Ads', 'Meta Ads', 'Email Marketing', 'Analytics'],
    features: [
      'Social media marketing',
      'PPC advertising',
      'Email marketing automation',
      'Lead generation campaigns',
      'Conversion optimization',
      'Marketing analytics',
      'Funnel strategy',
      'Brand positioning'
    ],
    pricing: 'Custom Quote',
    timeline: 'Ongoing',
    process: [
      'Marketing audit',
      'Campaign strategy',
      'Ad setup',
      'Optimization',
      'Performance tracking',
      'Monthly reporting'
    ]
  }
];

/**
 * Get service by slug
 * @param {string} slug - The service slug
 * @returns {object} The service object or null
 */
export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug) || null;
};

/**
 * Get services by category
 * @param {string} category - The service category
 * @returns {array} Array of services in the category
 */
export const getServicesByCategory = (category) => {
  return servicesData.filter(service => service.category === category);
};

/**
 * Get all service categories
 * @returns {array} Array of unique categories
 */
export const getServiceCategories = () => {
  return [...new Set(servicesData.map(service => service.category))];
};

export default servicesData;
