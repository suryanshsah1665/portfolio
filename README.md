# Suryansh Sah – Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Tech Stack

- **Frontend**: React 18, Vite 8, Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Build Tool**: Vite with React plugin
- **Styling**: Tailwind CSS + PostCSS + Autoprefixer

## Features

- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Smooth Animations**: Framer Motion with reduced-motion support
- **Dynamic Background**: Animated grid and glow effects
- **Code-style Hero**: Animated profile.py terminal display
- **Project Showcase**: Featured projects with alternating layouts
- **Interactive Navigation**: Smooth scroll links with mobile menu
- **Accessibility**: Focus-visible outlines, ARIA labels, semantic HTML

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # Site favicon
│   └── Suryansh_Resume.pdf  # Downloadable resume (add your own)
├── src/
│   ├── App.jsx              # Main app component with background effects
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global styles and Tailwind directives
│   ├── components/
│   │   ├── Nav.jsx          # Navigation header with mobile menu
│   │   ├── Hero.jsx         # Hero section with animated code display
│   │   ├── Sections.jsx     # About, Skills, Experience sections
│   │   ├── Projects.jsx     # Featured projects with visuals
│   │   ├── Closing.jsx      # Education, Contact, Footer
│   │   └── Ui.jsx           # Shared Section and Tag components
│   └── data/
│       └── site.js          # All editable content (names, projects, etc.)
├── .env                     # API keys (gitignored)
├── .env.example             # Template for API keys
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind configuration
└── vite.config.js           # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
npm install
```

### Configuration
1. Copy `.env.example` to `.env` and add your API keys:
   ```bash
   cp .env.example .env
   ```
2. Add your resume to `public/Suryansh_Resume.pdf`
3. Edit `src/data/site.js` to update your personal information

### Run Locally
```bash
npm run dev        # http://localhost:5173
```

### Build for Production
```bash
npm run build      # outputs to dist/
npm run preview    # test the build locally
```

## Deployment

This project is ready to deploy on:
- **Vite Deploy**: Push to GitHub and connect repository
- **Netlify**: Drag and drop `dist/` folder
- **Vercel**: Import project and deploy
- **GitHub Pages**: Use a Vite plugin or deploy `dist/` manually

## Before You Deploy
1. Put your resume at `public/Suryansh_Resume.pdf`
2. Edit `src/data/site.js`: set `linkedin`, and the `live` URLs for Proposal and Doulove-me. Empty values hide those buttons.
3. Optionally add `og:url` and an `og:image` in `index.html` once you have your domain.

All content lives in `src/data/site.js`.

## Security Notes
- API keys are stored in `.env` (gitignored) — never commit them
- The `.env.example` file contains placeholder values only
- Never share your actual API keys

## License
This project is for personal use. © 2026 Suryansh Sah.