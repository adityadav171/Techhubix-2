# TechHubbix Routes & Navigation Guide

## 📍 Complete URL Routes Map

### Primary Routes (Main Pages)

```
┌─────────────────────────────────────────────┐
│           MAIN NAVIGATION ROUTES            │
├─────────────────────────────────────────────┤
│                                             │
│  Route: /                                   │
│  Component: Home                            │
│  Purpose: Landing page with overview       │
│  Content: Hero, Services, Projects, Blog   │
│                                             │
│  Route: /about                              │
│  Component: About                           │
│  Purpose: Company information              │
│  Content: Mission, Team, Statistics        │
│                                             │
│  Route: /services                           │
│  Component: ServicesList                    │
│  Purpose: Services overview & browsing     │
│  Content: All services with filters        │
│                                             │
│  Route: /projects                           │
│  Component: Projects                        │
│  Purpose: Project portfolio showcase       │
│  Content: All projects with search/filter  │
│                                             │
│  Route: /blogs                              │
│  Component: Blogs                           │
│  Purpose: Blog articles listing            │
│  Content: All blogs with filters           │
│                                             │
└─────────────────────────────────────────────┘
```

### Detail Routes (Individual Pages)

```
┌──────────────────────────────────────────────┐
│          DETAIL PAGE ROUTES                 │
├──────────────────────────────────────────────┤
│                                              │
│  Route: /services/:slug                      │
│  Component: ServiceDetails                   │
│  Parameter: slug (service URL identifier)    │
│  Example: /services/fullstack-development   │
│  Purpose: Detailed service information       │
│                                              │
│  Route: /projects/:slug                      │
│  Component: ProjectDetail                    │
│  Parameter: slug (project URL identifier)    │
│  Example: /projects/ecommerce-platform      │
│  Purpose: Full project case study            │
│                                              │
│  Route: /blogs/:slug                         │
│  Component: BlogDetail                       │
│  Parameter: slug (blog URL identifier)       │
│  Example: /blogs/web-design-trends-2024     │
│  Purpose: Full blog post article             │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 🗺️ Navigation Map Visual

```
                          TechHubbix Website
                                 |
                    ┌────────────┼────────────┐
                    |            |            |
                 HOME (/,       ABOUT        SERVICES
                Projects,     (/about)      (/services)
                  Blogs)          |            |
                    |             |      ┌─────┴─────┐
                    |             |      |           |
              Raw content    Company  Filter by    View all
               previews       Info     Category     Services
                |             &              |         |
         Click item    Statistics      Service     Choose
         to GO TO      & Team          Links      Service
         detail page          |            |         |
                              |            |    GO TO DETAIL
                              |            |     SERVICE PAGE
                              |            |
                              |       /services/:slug
```

---

## 📊 Complete Route Table

| Route | Component | Purpose | Parameters | Features |
|-------|-----------|---------|-----------|----------|
| `/` | Home | Landing | None | Hero, Services Preview, Projects, Blog |
| `/about` | About | Company Info | None | Mission, Team, Stats, Values |
| `/services` | ServicesList | Services Overview | None | Filter by Category, All Services |
| `/services/:slug` | ServiceDetails | Service Details | slug | Features, Technology, Process, Pricing |
| `/projects` | Projects | Project Portfolio | None | Filter by Category, Search, Stats |
| `/projects/:slug` | ProjectDetail | Project Case Study | slug | Challenge, Solution, Results, Client |
| `/blogs` | Blogs | Blog Listing | None | Featured Posts, Filter, Search, Newsletter |
| `/blogs/:slug` | BlogDetail | Blog Post | slug | Full Article, Author, Related Posts |
| `*` | Home | Fallback | Any other | Redirects to Home |

---

## 🔍 Service Routes

### Available Services (6 total)

```
/services/fullstack-development
  └─ Full Stack Development
     └─ React, Node.js, MongoDB, PostgreSQL, Express, Vue.js

/services/hubspot-development
  └─ HubSpot Development
     └─ CRM setup, Automation, Integrations

/services/personalized-hubspot-theme
  └─ Personalized HubSpot Theme
     └─ Custom portal themes, Responsive design

/services/wordpress-development
  └─ WordPress Development
     └─ Custom themes, Plugins, WooCommerce

/services/shopify-development
  └─ Shopify Development
     └─ Custom themes, Apps, E-commerce solutions

/services/digital-marketing
  └─ Digital Marketing
     └─ SEO, SEM, Social Media, Content Marketing
```

---

## 📁 Project Routes

### Available Projects (6 total)

```
/projects/ecommerce-platform-redesign
  └─ E-Commerce Platform Redesign
     └─ TechRetail Co.

/projects/hubspot-crm-integration
  └─ HubSpot CRM Integration & Automation
     └─ B2B Solutions Inc.

/projects/wordpress-corporate-site
  └─ WordPress Corporate Website
     └─ Digital Innovations Ltd.

/projects/mobile-app-development
  └─ Mobile App Development
     └─ FitTech Solutions

/projects/shopify-store-launch
  └─ Shopify Store Launch
     └─ Fashion Forward Ltd.

/projects/saas-platform-development
  └─ SaaS Platform Development
     └─ CloudMetrics Inc.
```

---

## 📝 Blog Routes

### Available Blog Posts (6 total)

```
/blogs/what-is-fullstack-development
  └─ What is Full Stack Development? A Complete Guide
     └─ By John Smith

/blogs/hubspot-automation-best-practices
  └─ HubSpot Automation: Best Practices for 2024
     └─ By Sarah Johnson

/blogs/web-design-trends-2024
  └─ Web Design Trends Shaping the Digital Landscape in 2024
     └─ By Michael Chen

/blogs/seo-tips-for-ecommerce
  └─ SEO Tips to Boost Your E-Commerce Sales
     └─ By Emma Williams

/blogs/react-performance-optimization
  └─ React Performance Optimization Techniques
     └─ By David Park

/blogs/digital-marketing-strategy
  └─ Building a Winning Digital Marketing Strategy
     └─ By Lisa Martinez
```

---

## 🎯 Navigation Hierarchy

### Header Navigation Structure

```
Header
│
├─ Logo/Brand
│  └─ Links to: /
│
├─ Navigation Menu
│  ├─ Home
│  │  └─ Links to: /
│  │
│  ├─ About
│  │  └─ Links to: /about
│  │
│  ├─ Services (with Mega Menu)
│  │  ├─ Full Stack Development → /services/fullstack-development
│  │  ├─ HubSpot Development → /services/hubspot-development
│  │  ├─ Personalized HubSpot Theme → /services/personalized-hubspot-theme
│  │  ├─ WordPress Development → /services/wordpress-development
│  │  ├─ Shopify Development → /services/shopify-development
│  │  ├─ Digital Marketing → /services/digital-marketing
│  │  └─ View All → /services
│  │
│  ├─ Projects
│  │  └─ Links to: /projects
│  │
│  └─ Blog
│     └─ Links to: /blogs
│
└─ CTA Button
   └─ Contact Us (placeholder function)
```

---

## 🔗 Internal Navigation Patterns

### Service Cards
```
ServiceCard Component
  │
  └─ onClick → /services/:slug
     └─ Displays ServiceDetails page
```

### Project Cards
```
ProjectCard Component
  │
  └─ onClick → /projects/:slug
     └─ Displays ProjectDetail page with Case Study
```

### Blog Cards
```
BlogCard Component
  │
  └─ onClick → /blogs/:slug
     └─ Displays BlogDetail page with Full Article
```

### Related Content Links
```
ProjectDetail Page
  │
  └─ "View More Projects" → /projects

BlogDetail Page
  │
  ├─ "Related Articles" → /blogs/:slug
  └─ "Read More Articles" → /blogs

ServiceDetail Page
  │
  ├─ "Start Your Project" → (Placeholder CTA)
  └─ "Explore Services" → /services
```

---

## 📱 Mobile Navigation

### Mobile Menu Structure
```
Mobile Menu (Hamburger)
│
├─ Home → /
├─ About → /about
├─ Services → /services
├─ Projects → /projects
└─ Blog → /blogs
```

Appears on screens < 768px

---

## 🎯 Page-Specific Routes

### From Home Page
```
/ (Home)
├─ Service Cards → /services/:slug
├─ Project Cards → /projects/:slug
├─ Blog Cards → /blogs/:slug
└─ "View All" buttons → /services, /projects, /blogs
```

### From Services Listing
```
/services (ServicesList)
├─ ServiceCard → /services/:slug
├─ Category Filter → /services (with filtered view)
└─ "View All Services" → /services
```

### From Service Detail
```
/services/:slug (ServiceDetails)
├─ "Start Your Project" → (CTA - future contact form)
├─ "Explore Other Services" → /services
└─ Back Button → /services
```

### From Projects Listing
```
/projects (Projects)
├─ ProjectCard → /projects/:slug
├─ Category Filter → /projects (with filtered view)
├─ Search → /projects (with search results)
└─ "View All Projects" → /projects
```

### From Project Detail
```
/projects/:slug (ProjectDetail)
├─ "Get Started" → (CTA - future contact form)
├─ "View More Projects" → /projects
└─ Back Button → /projects
```

### From Blog Listing
```
/blogs (Blogs)
├─ BlogCard → /blogs/:slug
├─ Featured Posts → /blogs/:slug
├─ Category Filter → /blogs (with filtered view)
├─ Search → /blogs (with search results)
└─ "Subscribe" → (Newsletter signup - future integration)
```

### From Blog Detail
```
/blogs/:slug (BlogDetail)
├─ "Related Articles" → /blogs/:slug
├─ "Read More Articles" → /blogs
├─ Author Info → (Informational - no route)
├─ Tags → (Tag filtering - future feature)
└─ Share Buttons → (Social - external URLs)
```

---

## 🔄 Route Flow Diagram

```
                        START
                           |
                       / (Home)
                      /  |  \
                     /   |   \
              (Mega Menu)  |
             /    |    \   |
            /     |     \  |
         /services /projects /blogs
            |        |       |
            |     Click on  Click on
            |     Project   Blog
            |        |       |
         Click on    |       |
         Service     |       |
            |        |       |
            v        v       v
        /services/:slug  /projects/:slug  /blogs/:slug
            |        |       |
            |        |       |
        View Details / Case Study / Article
            |        |       |
            +--------+-------+
                     |
             Click "Back" or nav
                     |
                 Return to List
```

---

## 📊 Parameter Examples

### Service Slug Examples
- `fullstack-development`
- `hubspot-development`
- `personalized-hubspot-theme`
- `wordpress-development`
- `shopify-development`
- `digital-marketing`

### Project Slug Examples
- `ecommerce-platform-redesign`
- `hubspot-crm-integration`
- `wordpress-corporate-site`
- `mobile-app-development`
- `shopify-store-launch`
- `saas-platform-development`

### Blog Slug Examples
- `what-is-fullstack-development`
- `hubspot-automation-best-practices`
- `web-design-trends-2024`
- `seo-tips-for-ecommerce`
- `react-performance-optimization`
- `digital-marketing-strategy`

---

## 🔐 Valid Routes vs Invalid Routes

### Valid Routes
✅ `/`
✅ `/about`
✅ `/services`
✅ `/services/fullstack-development`
✅ `/projects`
✅ `/projects/ecommerce-platform-redesign`
✅ `/blogs`
✅ `/blogs/web-design-trends-2024`

### Invalid Routes (Redirected to Home)
❌ `/services/nonexistent` → `/` (Invalid slug)
❌ `/projects/nonexistent` → `/` (Invalid slug)
❌ `/blogs/nonexistent` → `/` (Invalid slug)
❌ `/contact` → `/` (Route not defined)
❌ Any undefined route → `/` (Fallback)

---

## 🎨 Navigation Features

### Breadcrumb Navigation
- Present on Detail Pages
- Shows: Home > Category > Item
- Clickable links back to parent

### Back Buttons
- Detail page back links
- Return to previous listing
- Accessible navigation

### Active Menu States
- Current page highlighted
- Visual feedback
- Better UX

### Mobile-Friendly
- Responsive menu
- Touch-friendly buttons
- Hamburger toggle

---

## 🚀 Future Route Considerations

### Potential New Routes
- `/contact` - Contact form
- `/case-studies` - Dedicated case studies
- `/testimonials` - Client testimonials
- `/pricing` - Service pricing
- `/team` - Team members detail
- `/awards` - Company awards/recognition
- `/resources` - Downloadable resources
- `/api/` - API endpoints (if backend added)

---

This complete route map ensures smooth navigation throughout the TechHubbix website!
