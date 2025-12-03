# Quick Reference Guide

## 🚀 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install
```

## 📍 Navigation Structure

The website uses a single-page architecture with smooth scrolling:

```
https://fintrex.ai/
├── #home         → Landing page with hero
├── #features     → Feature showcase with animations
└── #faq          → Frequently asked questions
```

## 🎯 Key Files

### Core Application
- `App.tsx` - Main app with HelmetProvider and sections
- `index.tsx` - Entry point
- `index.html` - HTML with meta tags

### Components
- `components/Layout.tsx` - Navigation and footer
- `components/SEO.tsx` - SEO meta tags manager
- `components/Hero.tsx` - Homepage hero section
- `components/FinChatbot.tsx` - Chat widget

### Pages (Sections)
- `pages/Home.tsx` - Main landing content
- `pages/Features.tsx` - Feature details with visuals
- `pages/FAQ.tsx` - Q&A section

### SEO Files
- `public/sitemap.xml` - Search engine sitemap
- `public/robots.txt` - Crawler directives
- `public/manifest.json` - PWA configuration
- `seo-config.ts` - SEO constants

### Documentation
- `SEO-README.md` - Complete SEO guide
- `OPTIMIZATION-GUIDE.md` - Performance tips
- `CHANGES-SUMMARY.md` - What was changed
- `README.md` - Original project readme

## 🔧 How to Edit

### Update Page Content
Edit the respective page file:
- Homepage: `pages/Home.tsx`
- Features: `pages/Features.tsx`
- FAQ: `pages/FAQ.tsx`

### Update SEO
1. **Global SEO**: Edit `components/SEO.tsx`
2. **Page-specific**: Edit `<Helmet>` in each page
3. **Configuration**: Edit `seo-config.ts`

### Update Navigation
Edit `components/Layout.tsx`:
```typescript
const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Features', id: 'features' },
  { label: 'FAQ', id: 'faq' },
  // Add more sections here
];
```

### Add New Section
1. Create component in `pages/`
2. Add to `App.tsx`:
```tsx
<div id="new-section">
  <NewSection />
</div>
```
3. Add to navigation in `Layout.tsx`
4. Add to `sitemap.xml`

## 📱 Testing

### Local Testing
```bash
# Start server
npm run dev

# Open in browser
http://localhost:3000
```

### Test Navigation
1. Click "Home" → Should scroll to top
2. Click "Features" → Should scroll to features
3. Click "FAQ" → Should scroll to FAQ
4. Active section should highlight in nav

### Test SEO
```bash
# View page source
View → Developer → View Source

# Check meta tags in <head>
# Check structured data <script type="application/ld+json">
```

### Test Mobile
1. Open DevTools (F12)
2. Click device toolbar icon
3. Select mobile device
4. Test navigation and scrolling

## 🔍 SEO Checklist

### On Every Page
- [ ] Unique title tag (50-60 chars)
- [ ] Unique description (150-160 chars)
- [ ] Relevant keywords
- [ ] Proper heading structure (H1 → H2 → H3)
- [ ] Alt text for images

### Global SEO
- [ ] Sitemap.xml accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Manifest.json accessible at `/manifest.json`
- [ ] Canonical URLs set
- [ ] OG tags configured
- [ ] Twitter Cards configured

## 🎨 Styling

### Colors
```typescript
brand: '#00ff88'        // Neon Green
brand-light: '#65FFB7'  // Light Green
brand-dark: '#006234'   // Dark Green
black: '#050505'        // Deep Black
```

### Fonts
- **Headings**: Goldman (Google Fonts)
- **Body**: Poppins (Google Fonts)

### Tailwind Classes
Common patterns:
```tsx
// Button
className="bg-brand text-black px-6 py-3 rounded-full"

// Section
className="py-24 bg-black text-white"

// Container
className="container mx-auto px-4"
```

## ⚡ Performance Tips

### Before Deploy
1. Replace Tailwind CDN with build
2. Optimize images (WebP format)
3. Add loading="lazy" to images
4. Minify JavaScript
5. Enable compression (gzip/brotli)

### Monitoring
```bash
# Lighthouse audit
npx lighthouse http://localhost:3000 --view

# Target scores
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 100
```

## 🐛 Common Issues

### Navigation not working?
**Check**: Section IDs in App.tsx match Layout.tsx
```tsx
// App.tsx
<div id="features">

// Layout.tsx
scrollToSection('features')
```

### Meta tags not updating?
**Check**: HelmetProvider wraps App in App.tsx
```tsx
<HelmetProvider>
  <SEO />
  <Layout>...</Layout>
</HelmetProvider>
```

### Smooth scroll not working?
**Check**: HTML has scroll-behavior in index.html
```html
<html lang="en" class="scroll-smooth">
```

### Active section not highlighting?
**Check**: Section IDs exist and scroll listener is active
```typescript
// Debug
console.log('Active section:', activeSection);
```

## 📦 Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-helmet-async": "^2.0.5",
  "framer-motion": "^12.23.24",
  "lucide-react": "^0.554.0"
}
```

## 🚀 Deployment

### Build
```bash
npm run build
# Output: dist/ folder
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Environment Setup
1. Update URLs in `components/SEO.tsx`
2. Update URLs in `public/sitemap.xml`
3. Add real favicons to `public/`
4. Add real og-image.png to `public/`

## 📞 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Navigation doesn't work | Check section IDs match |
| Meta tags missing | Check HelmetProvider wrapper |
| Scroll not smooth | Check HTML class="scroll-smooth" |
| Active nav wrong | Check scroll position detection |
| Build fails | Run `npm install` again |
| TypeScript errors | Check imports and types |

## 📚 Resources

- [React Docs](https://react.dev)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Google SEO Guide](https://developers.google.com/search/docs)
- [Web.dev Performance](https://web.dev/performance/)

## ✅ Pre-Deploy Checklist

- [ ] Update all URLs to production domain
- [ ] Add real favicon.svg
- [ ] Add real apple-touch-icon.png
- [ ] Add real og-image.png (1200x630)
- [ ] Test all navigation links
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Check console for errors
- [ ] Test smooth scrolling
- [ ] Verify meta tags in source
- [ ] Submit sitemap to Google
- [ ] Set up Google Analytics
- [ ] Configure CDN/hosting

---

**Server**: http://localhost:3000
**Documentation**: See SEO-README.md
**Changes**: See CHANGES-SUMMARY.md
