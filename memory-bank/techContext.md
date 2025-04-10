# Tech Context

## Technologies Used
1. Core Framework
   - Next.js 14
   - React 18
   - TypeScript
   - Static Site Generation

2. Styling
   - Tailwind CSS
   - Responsive design
   - Mobile-first approach

3. Deployment & Hosting
   - Cloudflare Pages (migrated from GitHub Pages)
   - GitHub for version control
   - Cloudflare CDN
   - Static site export with Next.js

4. Analytics & SEO
   - Next-sitemap for XML sitemap generation
   - Meta tags implementation
   - Semantic HTML structure

## Development Setup
1. Local Environment
   - Operating System: macOS
   - Shell: zsh
   - Node.js
   - npm
   - Git

2. IDE Configuration
   - Cursor
   - ESLint
   - Prettier
   - TypeScript support

3. Development Tools
   - Next.js CLI
   - Wrangler for Cloudflare deployments
   - Browser DevTools
   - Responsive design testing tools

## Technical Constraints
1. Performance
   - Core Web Vitals optimization needed
   - Image optimization with next/image
   - Font optimization with next/font

2. SEO
   - Semantic HTML with proper heading hierarchy
   - Meta tag implementation
   - XML sitemap generation
   - Mobile-first indexing support

3. Deployment
   - Static site export
   - Cloudflare Pages configuration
   - Wrangler for deployment management

## Dependencies
1. Core Dependencies
   - Next.js 14
   - React 18
   - TypeScript
   - Tailwind CSS
   - next-sitemap

2. Font Dependencies
   - Inter (variable font)
   - Roboto Mono (variable font)

3. Performance Optimizations
   - next/image for image optimization
   - next/font for font optimization

## Environment Setup
1. Local Development
   ```bash
   # Clone repository
   git clone https://github.com/milbrathdrew/sixminutesoutnext.git
   
   # Install dependencies
   npm install
   
   # Start development server
   npm run dev
   ```

2. Build and Export
   ```bash
   # Build static site
   npm run build
   ```

3. Deployment
   ```bash
   # Deploy to Cloudflare Pages
   npm run deploy
   ```

4. Cloudflare Pages Configuration
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Build output directory: `dist` 