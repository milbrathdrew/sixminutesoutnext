# Six Minutes Out PR

A professional website for Six Minutes Out PR agency specializing in media relations, affiliate management, and content strategy.

## Pages Structure

### Home Page
- Hero section with main value proposition
- Services overview
- Call-to-action buttons for contact and services pages

### Services
- Media Relations
  - Press Release Development
  - Media Pitching
  - Press Kit Creation
  - Media Training
  - Crisis Management
  
- Affiliate Management
  - Program Development
  - Affiliate Recruitment
  - Relationship Management
  - Performance Analytics
  - Commission Structure Optimization
  
- Content Strategy
  - Content Calendar Development
  - SEO Optimization
  - Blog Writing
  - Social Media Content
  - Email Marketing Campaigns

### About
- Company mission and values
- Our approach
- Team profiles

### Case Studies
- Eco-Friendly Home Goods (300% increase in media coverage)
- Organic Beauty Brand (200+ media placements)
- Tech Gadget Startup (75% increase in affiliate revenue)

### Blog
- PR Strategies That Drive Sales
- Building an Effective Affiliate Program
- Content Marketing Trends
- Measuring PR Success
- Crisis Management Planning
- PR and SEO Optimization

### Contact
- Contact form
- Office location
- Business hours
- Email and phone information

## Design System

### Colors
- Primary: #4A6FDC (blue)
- Primary Dark: #3857B3
- Dark: #1A202C
- Medium Dark: #4A5568
- Gray: #718096
- Light Gray: #F7FAFC
- Mint: #B2F5EA (accent color)
- White: #FFFFFF

### Typography
- Headings: Font weight 700-800
- Body: Font weight 400-500
- Main font: System font stack with fallbacks

### Components
- Button (Primary/Secondary variants, Small/Medium/Large sizes)
- Navigation
- Cards for case studies and blog posts
- Contact form

## Styling Implementation
- Using Tailwind CSS for utility-based styling
- Responsive design for all screen sizes
- Consistent spacing and typography throughout the site

# Six Minutes Out PR Website - Next.js Boilerplate

## Overview
This repository contains a boilerplate for the Six Minutes Out PR website, built with Next.js 14, TypeScript, and Tailwind CSS. It provides a modern, responsive foundation for the PR firm's online presence.

## Features Implemented

### 🧩 Page Structure
- **Home Page**: Hero section with main value proposition and services overview
- **Services Page**: Detailed breakdown of Media Relations, Affiliate Management, and Content Strategy offerings
- **About Page**: Company mission, approach, values, and team member sections
- **Case Studies Page**: Showcase of successful client stories with results metrics
- **Blog Page**: Articles grid with thumbnail placeholders
- **Contact Page**: Contact form and company information

### 🧰 Technical Implementation
- **Next.js 14 App Router**: Modern file-based routing system
- **TypeScript**: Full type safety across the codebase
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **SEO Optimization**: Metadata setup for all pages
- **Responsive Navigation**: Mobile and desktop-friendly navigation
- **Component Structure**: Reusable UI components

### 💻 Developer Experience
- **ESLint Configuration**: Code quality enforcement
- **Path Aliases**: Simplified imports with `@/` prefix
- **TypeScript Path Resolution**: Proper module resolution setup
- **Proper File Structure**: Organized by app router conventions

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/milbrathdrew/sixminutesoutnext.git

# Navigate to the project directory
cd sixminutesoutnext

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Available Scripts
- `npm run dev`: Run the development server
- `npm run build`: Build the production-ready application
- `npm run start`: Start the production server
- `npm run lint`: Lint the codebase
- `npm run postbuild`: Generate sitemap (after build)

## Project Structure

```
.
├── .cursor/
│   └── rules              # Project-specific rules and patterns
├── memory-bank/
│   ├── projectbrief.md    # Project foundation and goals
│   ├── productContext.md  # Product vision and context
│   ├── activeContext.md   # Current work and decisions
│   ├── systemPatterns.md  # Technical architecture
│   ├── techContext.md     # Technology stack
│   └── progress.md        # Project status
├── .gitignore
└── README.md
```

## Development Workflow

1. Branch Strategy
   - `main`: Production-ready code
   - `develop`: Integration branch
   - `feature/*`: New features
   - `bugfix/*`: Bug fixes
   - `hotfix/*`: Urgent fixes

2. Commit Messages
   ```
   type(scope): description
   ```
   Types: feat, fix, docs, style, refactor, test, chore

3. Code Review
   - Minimum 1 reviewer
   - All tests must pass
   - No linting errors
   - Documentation updated

## Key Features

1. Site Architecture
   - Home Page: Hero section, services overview, call-to-action
   - About Page: Company background and expertise information
   - Services Page: Detailed service offerings with structured information
   - Success Stories: Client work showcase (future expansion)
   - Contact Page: Simple contact information display
   - Blog Integration: Preparation for future blog or AI-generated content

2. Email & Domain Reputation Features
   - DNS configuration optimized for sender reputation (SPF, DKIM, DMARC)
   - Website structure that supports email deliverability
   - Clean HTML and technical implementation to avoid spam flags

3. SEO Implementation
   - Semantic HTML with proper heading hierarchy
   - Meta tag implementation
   - XML sitemap generation
   - Responsive design for mobile-first indexing

## Tech Stack

1. Core Framework
   - Next.js
   - React
   - TypeScript
   - Static Site Generation

2. Styling
   - CSS Modules or Tailwind CSS
   - Responsive design
   - Mobile-first approach

3. Deployment & Hosting
   - Cloudflare Pages
   - GitHub for version control
   - Cloudflare CDN

4. Analytics & SEO
   - Google Analytics 4
   - Google Search Console
   - XML Sitemap
   - Meta tags optimization

## Documentation

### Memory Bank
The memory bank contains all project documentation:
- `projectbrief.md`: Project foundation
- `productContext.md`: Product vision
- `activeContext.md`: Current work
- `systemPatterns.md`: Architecture
- `techContext.md`: Technology stack
- `progress.md`: Project status

### Update Schedule
- Daily: activeContext.md
- Weekly: progress.md
- Per Sprint: All memory bank files
- Per Release: systemPatterns.md and techContext.md

## Contributing

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature
   ```

2. Make your changes
   - Follow coding standards
   - Update documentation
   - Add tests

3. Submit a pull request
   - Use the PR template
   - Include tests
   - Update documentation

## License

[License Type] - See LICENSE file for details 