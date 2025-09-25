# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm start` (runs on default React port 3000)
- **Build for production**: `npm build`
- **Run tests**: `npm test`
- **Eject from Create React App**: `npm run eject` (irreversible)

## Architecture Overview

This is a React 18 single-page application built with Create React App, presenting a portfolio/landing page with multiple themed sections.

### Key Technologies
- **React 18** with functional components and hooks
- **Material-UI (@mui/material)** for UI components
- **React Spring** for animations and transitions
- **Swiper** for carousel/slider functionality
- **FontAwesome** icons
- **Emotion** for CSS-in-JS styling

### Application Structure

The app uses a single-page layout with smooth scrolling navigation between sections:

- **Entry point**: `src/App.js` implements lazy loading with Suspense for the main Home component
- **Main layout**: `src/components/Home/index.js` orchestrates all page sections and implements scroll navigation using refs
- **Section-based architecture**: Each major content area is a separate component (Header, Intro, Welcome, About, Video, Revolution, Choose, Legendary, DontBe, Manifesto, Donations, CC0, Team, Footer)

### Navigation Pattern
The app uses a ref-based smooth scrolling system where:
- Header component receives a `handleClick` prop for navigation
- Home component manages refs for each major section
- Clicking navigation items triggers smooth scrolling to corresponding sections

### Component Organization
- Components follow a consistent structure: `src/components/[ComponentName]/index.js` with accompanying CSS files
- Each component is self-contained with its own styling
- Assets are organized in `src/assets/` with subfolders for images, videos, and fonts

### Styling Approach
- Mix of CSS files and CSS-in-JS (Emotion)
- Custom font loading (Myriad Pro variants, Acumin Variable)
- Background images and responsive design patterns
- Component-specific CSS files alongside JavaScript files

### Performance Optimizations
- Lazy loading of the main Home component
- Loading component for initial render
- Asset optimization with various image formats (PNG, WebP)

### Node.js Requirements
- **Node.js version**: 16.17.0 (specified in engines)
- Uses package-lock.json for consistent dependency resolution