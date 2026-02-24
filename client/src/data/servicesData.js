/**
 * Services Data for TechHubbix
 * Contains comprehensive information about all services offered
 */

export const servicesData = [
  {
    id: 1,
    slug: 'website-development',
    title: 'Website Development',
    shortDescription: 'Modern, responsive websites built with latest technologies',
    description: 'We create modern, responsive websites that provide exceptional user experiences across all devices. Our team uses cutting-edge technologies to build fast, secure, and scalable web solutions.',
    icon: '💻',
    category: 'Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Express', 'Vue.js'],
    features: [
      'Custom web application development',
      'API design and implementation',
      'Database architecture and optimization',
      'Cloud deployment and DevOps',
      'Performance optimization',
      'Security implementation',
      'Scalable architecture design',
      'Real-time applications'
    ],
    pricing: 'Custom Quote',
    timeline: '8-16 weeks',
    process: [
      'Requirements gathering and analysis',
      'System architecture design',
      'Frontend development',
      'Backend development',
      'Integration and testing',
      'Deployment',
      'Maintenance and support'
    ]
  },
  {
    id: 2,
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform mobile apps for iOS and Android',
    description: 'We develop high-performance native and cross-platform mobile applications tailored to your business needs. Our team specializes in creating user-friendly apps that drive engagement and revenue.',
    icon: '📱',
    category: 'Development',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    features: [
      'Native iOS development',
      'Native Android development',
      'Cross-platform development',
      'UI/UX design',
      'API integration',
      'Real-time synchronization',
      'Push notifications',
      'App store optimization'
    ],
    pricing: 'Custom Quote',
    timeline: '8-16 weeks',
    process: [
      'Requirement analysis',
      'UI/UX design',
      'Native development',
      'API integration',
      'Testing and QA',
      'App store submission',
      'Post-launch support'
    ]
  },
  {
    id: 3,
    slug: 'blockchain-development',
    title: 'Blockchain Development',
    shortDescription: 'Smart contracts, DeFi platforms, and Web3 solutions',
    description: 'We specialize in blockchain technology including smart contract development, DeFi platforms, NFT solutions, and comprehensive Web3 applications tailored to your business needs.',
    icon: '⛓️',
    category: 'Development',
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'Hardhat', 'Binance Smart Chain'],
    features: [
      'Smart contract development',
      'DeFi platform development',
      'Token creation and launch',
      'NFT marketplace development',
      'Blockchain integration',
      'Security audits',
      'Exchange listings',
      'Post-launch support and maintenance'
    ],
    pricing: 'Custom Quote',
    timeline: '8-20 weeks',
    process: [
      'Concept and planning',
      'Smart contract development',
      'Security audit',
      'Testing on testnets',
      'Mainnet deployment',
      'Exchange listing',
      '24/7 support'
    ]
  },
  {
    id: 4,
    slug: 'seo-services',
    title: 'SEO Services',
    shortDescription: 'Optimize your site for search engines and increase visibility',
    description: 'Comprehensive SEO services designed to improve your website ranking and drive organic traffic. Our data-driven approach ensures measurable results and sustainable growth.',
    icon: '🔍',
    category: 'Marketing',
    technologies: ['SEO Tools', 'Analytics', 'Content Optimization', 'Link Building'],
    features: [
      'Keyword research and optimization',
      'On-page SEO optimization',
      'Off-page SEO and link building',
      'Technical SEO audit',
      'Content strategy development',
      'Local SEO optimization',
      'Analytics and reporting',
      'Competitive analysis'
    ],
    pricing: 'Custom Quote',
    timeline: 'Ongoing',
    process: [
      'SEO audit',
      'Keyword research',
      'On-page optimization',
      'Content creation',
      'Link building strategy',
      'Monthly monitoring',
      'Performance reporting'
    ]
  },
  {
    id: 5,
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Strategic marketing campaigns to grow your online presence',
    description: 'Comprehensive digital marketing solutions including social media marketing, PPC campaigns, email marketing, and content marketing to maximize your ROI.',
    icon: '📢',
    category: 'Marketing',
    technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'Email Marketing'],
    features: [
      'Social media marketing',
      'PPC campaigns',
      'Email marketing automation',
      'Content marketing strategy',
      'Conversion rate optimization',
      'Marketing automation',
      'Analytics and ROI tracking',
      'Brand development'
    ],
    pricing: 'Custom Quote',
    timeline: 'Ongoing',
    process: [
      'Marketing audit',
      'Strategy development',
      'Campaign setup',
      'Content creation',
      'Campaign optimization',
      'Monthly reporting',
      'Strategy refinement'
    ]
  },
  {
    id: 6,
    slug: 'wordpress-development',
    title: 'WordPress Development',
    shortDescription: 'Professional WordPress sites and plugins',
    description: 'From corporate websites to e-commerce platforms, we build fully customized WordPress solutions with performance and security at the forefront.',
    icon: '📝',
    category: 'Development',
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'WooCommerce'],
    features: [
      'Custom theme development',
      'Plugin development and customization',
      'WooCommerce setup and optimization',
      'SEO optimization',
      'Performance optimization',
      'Security hardening',
      'Migration services',
      'Maintenance and support'
    ],
    pricing: 'Custom Quote',
    timeline: '6-14 weeks',
    process: [
      'Requirements and planning',
      'Plugin selection and setup',
      'Theme customization/development',
      'Content integration',
      'Testing and optimization',
      'Launch',
      'Ongoing support'
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
