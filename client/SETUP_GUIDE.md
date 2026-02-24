# TechHubbix - Quick Setup Guide

This guide will help you get the TechHubbix website up and running quickly.

## 🏃 Quick Start

### 1. Install Dependencies
```bash
cd client
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## 📋 What's Included

✅ **Complete Professional Website**
- Home page with hero, services, projects, and blog
- About page with team and company info
- Services listing and detail pages
- Projects portfolio with case studies
- Blog with articles and search
- Responsive design for all devices
- Modern animations and transitions
- Professional color scheme and typography

## 🎯 Key Pages

| Page | Route | Features |
|------|-------|----------|
| Home | `/` | Hero, services showcase, latest projects, blog preview |
| About | `/about` | Company mission, team, statistics, values |
| Services | `/services` | All services with category filter |
| Service Detail | `/services/:slug` | Detailed service info, process, technologies |
| Projects | `/projects` | Project portfolio with category filter |
| Project Detail | `/projects/:slug` | Case study, results, testimonials |
| Blogs | `/blogs` | Blog listing with search and category filter |
| Blog Detail | `/blogs/:slug` | Full article with related posts |

## 🔧 Customization

### Change Company Name
1. Open `src/Components/Header/Header.jsx`
2. Replace "TechHubbix" with your company name

### Update Services
1. Edit `src/data/servicesData.js`
2. Services will automatically update throughout the site

### Add Blog Posts
1. Add new post object to `src/data/blogsData.js`
2. New blog will appear in listing

### Update Projects
1. Add project to `src/data/projectsData.js`
2. Project will show in portfolio

### Change Colors
Search and replace color codes in CSS files:
- Primary: `#667eea` (blue)
- Secondary: `#764ba2` (purple)

## 📱 Testing

### Desktop
- Chrome, Firefox, Safari, Edge

### Mobile
- iPhone (all sizes)
- Android devices
- Tablets

Test at: `http://localhost:5173`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

Output will be in `dist/` folder

### Preview Production Build
```bash
npm run preview
```

## 📊 Code Structure

```
src/
├── Components/      ← Reusable UI components
├── Pages/          ← Full page components
├── data/           ← Services, projects, blogs data
├── utils/          ← Helper functions (logging)
├── styles/         ← Global animations
├── App.jsx         ← Main app with routes
└── main.jsx        ← Entry point
```

## 💡 Tips

1. **Add Images**: Replace image URLs with your own in data files
2. **Update Links**: Change button links to your contact/booking pages
3. **Modify Text**: Update copy in components and data files
4. **Change Animations**: Edit `src/styles/animations.css`
5. **Add Features**: Create new components in `Components/` folder

## 📖 Documentation

For complete documentation, see `PROJECT_DOCUMENTATION.md`

## ✨ Features Highlight

### Modern Design
- Clean, professional UI
- Smooth animations
- Modern color gradients
- Professional typography

### Responsive
- Mobile-first approach
- Works on all devices
- Touch-friendly buttons
- Optimized images

### Performance
- Fast load times
- Optimized code
- Clean structure
- Efficient CSS

### User Experience
- Smooth navigation
- Clear CTAs
- Easy to search/filter
- Engaging animations

## 🛠️ Available Tools

1. **Logger**: Built-in logging system for debugging
2. **Data Utilities**: Functions to query services, projects, blogs
3. **Animations**: Pre-built animations library
4. **Components**: Reusable, well-documented components

## 📞 Need Help?

Check the inline comments in the code files for detailed explanations of how things work.

---

**Ready to go!** Start customizing your website. 🚀
