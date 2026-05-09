# Quick Start Guide

Get your Brevity landing page live in 10 minutes.

## Step 1: Add Your Extension (2 min)

```bash
# Place your extension ZIP file in the public folder
cp /path/to/your/brevity-extension.zip public/brevity-extension.zip
```

## Step 2: Update URLs (3 min)

### index.html
```html
<!-- Line 13: Update canonical URL -->
<link rel="canonical" href="https://YOUR-DOMAIN.com/" />

<!-- Line 16-18: Update OG URLs -->
<meta property="og:url" content="https://YOUR-DOMAIN.com/" />
<meta property="og:image" content="https://YOUR-DOMAIN.com/og-image.png" />

<!-- Line 23-25: Update Twitter URLs -->
<meta name="twitter:url" content="https://YOUR-DOMAIN.com/" />
<meta name="twitter:image" content="https://YOUR-DOMAIN.com/og-image.png" />
<meta name="twitter:creator" content="@YourTwitterHandle" />
```

### public/sitemap.xml
```xml
<!-- Replace all instances of yourdomain.com -->
<loc>https://YOUR-DOMAIN.com/</loc>
```

### public/robots.txt
```
Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
```

## Step 3: Update Contact Info (2 min)

### src/components/landing/Footer.tsx
```tsx
// Line 28: Update GitHub URL
href="https://github.com/YOUR-USERNAME/brevity"

// Line 38: Update email
href="mailto:YOUR-EMAIL@domain.com"
```

### src/pages/Privacy.tsx
```tsx
// Line 108: Update email
privacy@YOUR-DOMAIN.com
```

### src/pages/Terms.tsx
```tsx
// Line 138: Update email
legal@YOUR-DOMAIN.com
```

## Step 4: Build & Deploy (3 min)

### Option A: Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B: Netlify
```bash
npm run build
# Drag dist/ folder to netlify.com
```

### Option C: GitHub Pages
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## Done! 🎉

Your landing page is now live. Visit your domain to see it in action.

## Optional Enhancements

### Add Google Analytics (1 min)
```html
<!-- index.html, lines 31-37 -->
<!-- Uncomment and replace GA_MEASUREMENT_ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
```

### Create OG Image (5 min)
1. Create a 1200x630px image showcasing Brevity
2. Save as `public/og-image.png`
3. Image will be used when sharing on social media

### Optimize Images (5 min)
```bash
npm install -g sharp-cli
sharp -i src/assets/popup-mockup.png -o public/popup-mockup.webp --webp
sharp -i src/assets/sidebar-mockup.png -o public/sidebar-mockup.webp --webp
```

## Troubleshooting

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Download button not working?
- Ensure `brevity-extension.zip` is in `public/` folder
- Check browser console for errors

### Pages not loading?
- Configure SPA routing on your hosting platform
- All routes should redirect to `index.html`

## Need Help?

- 📖 Full docs: See `README.md`
- 🚀 Deployment: See `DEPLOYMENT.md`
- ✅ Checklist: See `TODO.md`
- 📊 Summary: See `SUMMARY.md`

---

**Time to launch**: ~10 minutes
**Difficulty**: Easy
**Prerequisites**: Node.js, npm, hosting account
