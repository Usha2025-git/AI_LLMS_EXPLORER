# Awesome LLM Apps Website

A modern, clean website for showcasing the Awesome LLM Apps repository - an open-source ecosystem for high-leverage AI builders.

## Features

- 🎨 Modern, clean design similar to theunwindai.com
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔍 Search functionality for posts
- 🏷️ Category filtering (AI Blogs, AI Tutorial, Daily Unwind, Weekly Unwind)
- 📝 Article/blog card grid
- 🔗 Social media integration
- ⚡ Built with Next.js 14 and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the website directory:
```bash
cd website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
website/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── SearchBar.tsx     # Search functionality
│   ├── CategoryTags.tsx  # Category filters
│   ├── ArticleGrid.tsx   # Article cards grid
│   ├── AuthorInfo.tsx    # Author information
│   ├── SocialLinks.tsx   # Social media links
│   └── Footer.tsx        # Footer component
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Customization

- Update colors in `tailwind.config.js`
- Modify content in component files
- Add articles to `components/ArticleGrid.tsx`
- Update links in `components/Navbar.tsx` and `components/Footer.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This website can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

For Vercel:
```bash
npm i -g vercel
vercel
```
