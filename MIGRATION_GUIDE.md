# Landing Page Migration Guide

## Overview
This document outlines how the original HTML/CSS/JS files from `/prev` have been migrated to a complete Shopify theme structure while preserving all visual and functional parity.

## File Structure Mapping

### Original Structure → Shopify Structure

| Original File | Shopify Location | Purpose |
|---------------|------------------|---------|
| `prev/assets/css/style.css` | `assets/lp.css` | Landing page styles (BEM-scoped) |
| `prev/assets/js/script.js` | `assets/lp.js` | Section Rendering API compatible JS |
| `earplugs-lp.html` | `templates/page.landing.json` + sections | Page template with sections |
| Header HTML | `snippets/lp-header.liquid` | Reusable header component |
| Individual sections | `sections/lp-*.liquid` | Modular sections with schema |

## Section Breakdown

### 1. Hero Section (`sections/lp-hero.liquid`)
- **Original**: `<section class="hero">` with 3 slides
- **Shopify**: Dynamic blocks with image upload and CTA settings
- **Features**: Auto-rotation, custom timing, mobile/desktop images
- **Schema**: Settings for rotation speed, block settings for each slide

### 2. Features Section (`sections/lp-features.liquid`)
- **Original**: Static product detail + feature cards grid
- **Shopify**: Configurable product detail + dynamic feature blocks
- **Features**: Toggle product detail, custom icons, dynamic feature cards
- **Schema**: Product settings, feature card blocks with SVG icons

### 3. Use Case Section (`sections/lp-usecase.liquid`)
- **Original**: `<section class="usecase">` with manual slide switching
- **Shopify**: Dynamic slider with image upload per slide
- **Features**: Navigation controls, indicators, touch/keyboard support
- **Schema**: Background images per slide, accessibility labels

### 4. User Voice Section (`sections/lp-user-voice.liquid`)
- **Original**: Swiper-based testimonial slider
- **Shopify**: Dynamic testimonial blocks with Swiper integration
- **Features**: Auto-centering, pagination, responsive design
- **Schema**: Tag and testimonial text per block

### 5. FAQ Section (`sections/lp-faq.liquid`)
- **Original**: Accordion functionality with manual content
- **Shopify**: Dynamic FAQ blocks with accessible markup
- **Features**: Auto-open first item, aria attributes, smooth transitions
- **Schema**: Question/answer pairs as blocks

### 6. Footer CTA (`sections/lp-footer-cta.liquid`)
- **Original**: Static footer with CTA and links
- **Shopify**: Configurable CTA with dynamic footer links
- **Features**: Background image upload, custom CTA text/URL
- **Schema**: CTA settings, footer link blocks

## JavaScript Architecture

### Section Rendering API Integration
- **Classes**: Each major component (Hero, UseCase, UserVoice, FAQ) is a JavaScript class
- **Lifecycle**: Proper initialization and cleanup for section loading/unloading
- **Events**: Responds to `shopify:section:load`, `shopify:section:unload` events
- **Instance Management**: Tracks section instances to prevent memory leaks

### Key Features Preserved:
- Touch/swipe gestures on all sliders
- Keyboard navigation (arrow keys)
- Auto-rotation with pause on hover
- FAQ accordion with single-open behavior
- Scroll-based animations
- Responsive breakpoint behaviors

## CSS Scoping

### BEM Methodology Applied:
- All CSS classes prefixed with `lp-` to avoid conflicts
- Original responsive breakpoints preserved exactly
- No visual drift - pixel-perfect migration
- Maintains original animations and transitions

### Key Preserved Features:
- Responsive hero slider with aspect ratios
- Full-width use case slider with viewport calculations
- Swiper integration for user voice section
- Original hover effects and transitions
- Mobile-first responsive design

## Template Integration

### Page Template (`templates/page.landing.json`)
- **Structure**: Combines all sections in original order
- **Settings**: Pre-configured with original content
- **Blocks**: All original content migrated as block settings
- **URLs**: Original external links preserved

### Layout (`layout/lp-page.liquid`)
- **Purpose**: Dedicated layout for landing pages
- **Features**: Includes required external libraries (Swiper, Inter font)
- **Integration**: Shopify analytics and cart functionality
- **Header**: Uses reusable header snippet

## Setup Instructions

### 1. File Deployment
1. Copy all files to respective Shopify theme directories
2. Upload image assets from `prev/assets/img/` to Shopify files
3. Update image references in section settings

### 2. Page Creation
1. Create a new page in Shopify admin
2. Set template to "landing"
3. Configure section settings as needed
4. Upload hero, product, and background images

### 3. Theme Settings
1. Set logo in theme settings
2. Configure header login URL
3. Test all interactive elements

## Testing Checklist

### Desktop Testing
- [ ] Hero slider auto-rotation and manual navigation
- [ ] Product detail section layout
- [ ] Feature cards grid (4 columns)
- [ ] Use case slider with navigation controls
- [ ] User voice Swiper functionality
- [ ] FAQ accordion behavior
- [ ] Footer CTA and links
- [ ] All external links open correctly

### Mobile Testing
- [ ] Hero slider responsive behavior
- [ ] Feature cards stack properly
- [ ] Use case slider maintains aspect ratio
- [ ] User voice cards display correctly
- [ ] FAQ items remain accessible
- [ ] Footer CTA button responsive sizing
- [ ] Touch gestures work on all sliders

### Theme Editor Testing
- [ ] All sections appear in theme editor
- [ ] Block settings are accessible
- [ ] Changes reflect immediately
- [ ] No JavaScript errors in editor mode
- [ ] Auto-rotation disabled in editor

## Customization Options

### Theme Editor Controls:
- Hero slider timing and auto-rotation
- Product detail toggle and content
- Feature card icons and titles
- Use case background images
- User voice testimonials
- FAQ questions and answers
- Footer CTA text and URLs

### Developer Customization:
- CSS variables for colors and fonts
- JavaScript settings via data attributes
- Section schema for additional settings
- Snippet parameters for reusability

## Migration Benefits

1. **Shopify Native**: Full integration with Shopify's ecosystem
2. **Editable**: Non-technical users can update content
3. **Performant**: Section Rendering API optimization
4. **Scalable**: Reusable components for future pages
5. **Maintainable**: Clean, documented code structure
6. **SEO Friendly**: Proper HTML semantics and meta tags

## Support Notes

- All original functionality preserved
- No external dependencies beyond Swiper
- Compatible with Shopify 2.0 themes
- Responsive design maintains exact breakpoints
- Accessibility features enhanced with ARIA attributes