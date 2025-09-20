# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static website for "ワルンインドネシア" (Warung Indonesia), an Indonesian restaurant website created as a graduation project. The website features a responsive design optimized for mobile-first viewing (max-width: 480px) with tablet and desktop breakpoints.

## Key Features

- **Single Page Application** with scroll-based navigation
- **Slideshow functionality** with 4-second auto-transitions
- **Responsive hamburger menu** with smooth animations  
- **Multi-section layout**: Hero slideshow, recommendations, main courses, side dishes/drinks, and access info
- **Social media integration** with animated icons
- **Japanese language interface** targeting Indonesian restaurant visitors in Japan

## Development Commands

Since this is a static HTML/CSS/JavaScript website, there are no build tools or package managers configured. Development is done by directly editing files and viewing in a browser.

### Local Development
```bash
# Serve the site locally (using Python's built-in server)
python3 -m http.server 8000

# Or using Node.js http-server (if installed globally)
npx http-server .

# Open in browser
open http://localhost:8000
```

### File Serving
The website expects to be served from a web server due to the media file structure. Opening `index.html` directly in a browser may not load media assets properly.

## Code Architecture

### File Structure
```
/
├── index.html          # Main HTML file with all content sections
├── style.css          # Complete stylesheet with responsive design
├── script.js          # JavaScript for menu and slideshow functionality
├── README.md          # Project description (in Japanese)
└── media/             # All image assets organized by category
    ├── store/         # Restaurant photos and logo
    ├── meal/          # Food photography
    ├── extra/         # Additional images
    └── payment/       # Payment method icons (unused in current version)
```

### CSS Architecture
- **CSS Custom Properties** for consistent theming (`--main-color`, `--accent-color`, etc.)
- **CSS Reset** using Eric Meyer's reset at the top of the stylesheet  
- **Mobile-first responsive design** with media queries for tablets (600px+) and desktops (1024px+)
- **Grid-based layouts** for food image galleries
- **Fixed positioning** for header and navigation elements

### JavaScript Features
- **Hamburger menu toggle** with class-based animations
- **Automatic slideshow** using `setInterval()` and CSS opacity transitions
- **DOM manipulation** for adding/removing active classes

## Design System

### Color Palette
- Primary: `#F8F2CF` (cream)
- Accent: `#FFCC01` (golden yellow)  
- Text: `#52320C` (dark brown)
- Background: `#FFFBEF` (off-white)

### Typography
- Font: 'Noto Sans JP' for Japanese text support
- Responsive font sizing with viewport-relative units

### Layout Patterns
- **Section-based design** with distinct background colors
- **Image-heavy presentation** showcasing food and restaurant
- **Sticky header** with logo and hamburger menu
- **Grid layouts** for food galleries (2-column responsive)

## Common Development Tasks

### Adding New Food Items
1. Add image to appropriate `media/` subdirectory
2. Insert new `<img>` tag in the relevant section (`#recomend`, `#main-course`, or `#dessert`)
3. Follow existing alt text patterns (Japanese food names)

### Modifying Slideshow
- Add new images to slideshow by inserting `<img class="slide-show-item">` elements
- Slideshow automatically adapts to any number of images
- Timing controlled by `setInterval(changeImage, 4000)` in `script.js`

### Responsive Design Changes
- Primary breakpoints: 480px (mobile), 600px (tablet), 1024px (desktop)
- Use CSS Grid and Flexbox for layout adjustments
- Test on mobile devices as this is the primary target

### Social Media Links
Update links in the `.sns` section. Current social platforms:
- Phone, YouTube, Facebook, Instagram, TikTok
- All links open in new tabs with proper `rel="noopener noreferrer"`

## Media Asset Management

All images are stored in the `media/` directory with organized subdirectories. When adding new media:
- Use descriptive filenames in lowercase
- Optimize images for web (consider file size for mobile users)
- Maintain aspect ratios appropriate for the grid layouts
- Add proper alt text in Japanese for accessibility