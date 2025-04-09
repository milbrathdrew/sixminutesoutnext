# Tech Context

## Technologies Used
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

## Development Setup
1. Local Environment
   - Operating System: macOS
   - Shell: zsh
   - Node.js
   - npm/yarn
   - Git

2. IDE Configuration
   - Cursor
   - ESLint
   - Prettier
   - TypeScript support

3. Development Tools
   - Next.js CLI
   - Lighthouse for performance testing
   - Browser DevTools
   - Responsive design testing tools

## Technical Constraints
1. Performance
   - Lighthouse score target: 90+ in all categories
   - Core Web Vitals optimization
   - Image optimization
   - Font optimization

2. SEO
   - Semantic HTML with proper heading hierarchy
   - Meta tag implementation
   - XML sitemap generation
   - Mobile-first indexing support

3. Email Deliverability
   - DNS configuration (SPF, DKIM, DMARC)
   - Clean HTML implementation
   - Technical separation from email infrastructure

## Dependencies
1. Core Dependencies
   - Next.js
   - React
   - TypeScript
   - ESLint
   - Prettier

2. SEO Dependencies
   - next-seo
   - next-sitemap
   - structured-data

3. Performance Dependencies
   - next/image for image optimization
   - next/font for font optimization
   - next/script for script optimization

## Environment Setup
1. Local Development
   ```bash
   # Clone repository
   git clone [repository-url]
   
   # Install dependencies
   npm install
   
   # Set up environment variables
   cp .env.example .env
   
   # Start development server
   npm run dev
   ```

2. Deployment
   - Cloudflare Pages setup
   - GitHub repository connection
   - Environment variables configuration
   - Build settings

3. DNS Configuration
   - SPF record setup
   - DKIM record setup
   - DMARC record setup
   - Domain verification 