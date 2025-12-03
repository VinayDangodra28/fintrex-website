# Fintrex Logo & Image Assets Required for SEO

This document lists all the logo and image assets needed for optimal SEO across the Fintrex website. These assets should be created and placed in the `/public` directory.

## 🎨 Primary Logo Assets

### Main Logo
- **File**: `fintrex-logo.png`
- **Size**: 512x512px
- **Format**: PNG with transparency
- **Usage**: Schema markup, social sharing, general branding
- **Design**: Full Fintrex logo with brand colors (#00ff88)

### Fin AI Assistant Visual
- **File**: `fin-ai-assistant.png`
- **Size**: 800x800px
- **Format**: PNG with transparency
- **Usage**: Homepage hero, features page, schema markup
- **Design**: Fin AI assistant character/mascot/icon

## 🌐 Favicon & App Icons

### Favicon (SVG)
- **File**: `fintrex-favicon.svg`
- **Format**: SVG
- **Usage**: Modern browser favicon
- **Design**: Simplified Fintrex icon that works at small sizes

### Standard Favicons
- **File**: `fintrex-icon-16.png` (16x16px)
- **File**: `fintrex-icon-32.png` (32x32px)
- **Usage**: Browser tabs and bookmarks

### Apple Touch Icons
- **File**: `fintrex-apple-touch-icon.png`
- **Size**: 180x180px
- **Format**: PNG, opaque background
- **Usage**: iOS home screen icon

### Safari Pinned Tab
- **File**: `fintrex-safari-pinned-tab.svg`
- **Format**: SVG, monochrome
- **Usage**: Safari pinned tabs on macOS

## 📱 Progressive Web App (PWA) Icons

Create icons in these sizes, all PNG format:
- `fintrex-icon-72.png` (72x72px)
- `fintrex-icon-96.png` (96x96px)
- `fintrex-icon-128.png` (128x128px)
- `fintrex-icon-144.png` (144x144px)
- `fintrex-icon-152.png` (152x152px)
- `fintrex-icon-192.png` (192x192px)
- `fintrex-icon-384.png` (384x384px)
- `fintrex-icon-512.png` (512x512px)

**Requirements**:
- All should have the Fintrex logo centered
- Safe area in center 80% for maskable icons
- Background: Black (#000000) or Dark (#0a0a0a)
- Logo colors: Brand green (#00ff88)

## 🖼️ Social Media & Open Graph Images

### Primary OG Image
- **File**: `fintrex-og-image.png`
- **Size**: 1200x630px
- **Usage**: Facebook, LinkedIn, WhatsApp sharing
- **Design Elements**:
  - Fintrex logo prominently displayed
  - "Meet Fin - Your AI Accounting Assistant" tagline
  - Key stat: "99.9% Accuracy" or "70% Time Saved"
  - Dark background with brand green accents
  - Professional, modern design

### Twitter Card
- **File**: `fintrex-twitter-card.png`
- **Size**: 1200x675px (16:9)
- **Usage**: Twitter/X posts
- **Design**: Similar to OG image, optimized for Twitter

### MS Tile Icon
- **File**: `mstile-144x144.png`
- **Size**: 144x144px
- **Usage**: Windows Start Menu tiles

## 📸 Feature Screenshots

Create in `public/features/` directory:

### WhatsApp Integration
- **File**: `features/whatsapp-integration.png`
- **Size**: 1200x800px
- **Content**: Screenshot/mockup of WhatsApp integration

### AI Invoice Extraction
- **File**: `features/ai-extraction.png`
- **Size**: 1200x800px
- **Content**: Demo of Fin extracting invoice data

### Vendor Management
- **File**: `features/vendor-management.png`
- **Size**: 1200x800px
- **Content**: Vendor database interface

### Financial Reports
- **File**: `features/financial-reports.png`
- **Size**: 1200x800px
- **Content**: Sample financial reports dashboard

### GST Filing
- **File**: `features/gst-filing.png`
- **Size**: 1200x800px
- **Content**: GST filing interface

## 📊 App Screenshots for PWA

Create in `public/screenshots/` directory:

### Dashboard
- **File**: `screenshots/fintrex-dashboard.png`
- **Size**: 1280x720px
- **Content**: Main dashboard showing Fin AI

### Invoice Extraction
- **File**: `screenshots/fintrex-invoice-extraction.png`
- **Size**: 1280x720px
- **Content**: Invoice processing in action

## 🎭 Hero Images

### Home Hero
- **File**: `fin-hero-image.png`
- **Size**: 1920x1080px
- **Usage**: Homepage hero section background/focal
- **Design**: Fin AI assistant in action, professional setting

### Workflow Guide
- **File**: `workflow-guide.png`
- **Size**: 1200x675px
- **Usage**: Features page schema markup

## 📋 Design Guidelines

### Color Palette
- **Primary Brand**: #00ff88 (Neon Green)
- **Secondary**: #65FFB7 (Light Green)
- **Dark**: #006234 (Dark Green)
- **Background**: #000000 (Black), #0a0a0a (Charcoal)
- **Text**: #ffffff (White)

### Typography
- **Headings**: Goldman (Bold, 700)
- **Body**: Poppins (Regular, 400 / Medium, 500 / Semibold, 600)

### Logo Usage
- Always maintain aspect ratio
- Ensure sufficient contrast on backgrounds
- Minimum size: 32x32px for clarity
- Use SVG when possible for scalability
- PNG with transparency for photos/complex backgrounds

### Fin AI Character Design
- Friendly, professional appearance
- Tech-forward aesthetic
- Green accent colors matching brand
- Should convey: Intelligence, Trust, Efficiency

## 🚀 Priority Order

**High Priority** (Create First):
1. `fintrex-logo.png` (512x512px)
2. `fintrex-og-image.png` (1200x630px)
3. `fintrex-favicon.svg`
4. `fintrex-icon-192.png` and `fintrex-icon-512.png` (PWA)
5. `fin-ai-assistant.png` (800x800px)

**Medium Priority**:
6. Apple touch icons
7. Feature screenshots
8. Additional PWA icons

**Low Priority**:
9. MS Tile images
10. Additional social images

## 📝 Notes

- All images should be optimized for web (compressed without quality loss)
- Use tools like TinyPNG or ImageOptim
- SVG files should be optimized with SVGO
- Consider creating @2x versions for Retina displays
- Alt text is defined in code, but images should be descriptive

## ✅ Checklist

Once assets are created, update:
- [ ] Upload all images to `/public` directory
- [ ] Verify all file paths in code match actual files
- [ ] Test social sharing on Facebook, Twitter, LinkedIn
- [ ] Validate PWA manifest with Lighthouse
- [ ] Check favicon display across browsers
- [ ] Verify Open Graph images with debugging tools
- [ ] Test on mobile devices (iOS and Android)

---

**Created**: December 4, 2025  
**For**: Fintrex AI Accounting Platform  
**Contact**: Development Team
