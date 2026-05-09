# Deployment Guide

This guide covers deploying the Brevity landing page to various hosting platforms.

## Pre-Deployment Checklist

Before deploying, make sure to update:

- [ ] `index.html` - Update domain URLs in meta tags
- [ ] `index.html` - Add Google Analytics ID (uncomment and replace `GA_MEASUREMENT_ID`)
- [ ] `public/sitemap.xml` - Replace `yourdomain.com` with your actual domain
- [ ] `public/robots.txt` - Update sitemap URL
- [ ] `src/components/landing/Footer.tsx` - Update GitHub URL and social links
- [ ] `src/pages/Privacy.tsx` - Update contact email
- [ ] `src/pages/Terms.tsx` - Update contact email
- [ ] `public/brevity-extension.zip` - Add your actual extension ZIP file
- [ ] Create OG image at `public/og-image.png` (1200x630px)

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Deployment Options

### 1. Vercel (Recommended)

**Automatic Deployment:**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects Vite configuration
6. Click "Deploy"

**CLI Deployment:**

```bash
npm install -g vercel
vercel login
vercel
```

**Configuration:**

Create `vercel.json` (optional):

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 2. Netlify

**Drag & Drop:**

1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist/` folder to the deploy area

**CLI Deployment:**

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

**Configuration:**

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

```bash
# Install gh-pages
npm install -g gh-pages

# Build and deploy
npm run build
gh-pages -d dist
```

**Configuration:**

Add to `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/brevity",
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

Then run: `npm run deploy`

### 4. AWS S3 + CloudFront

**Upload to S3:**

```bash
# Install AWS CLI
aws configure

# Build project
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

**S3 Bucket Configuration:**
- Enable static website hosting
- Set index document: `index.html`
- Set error document: `index.html` (for SPA routing)
- Configure bucket policy for public read access

### 5. Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

**Configuration (`firebase.json`):**

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### 6. Cloudflare Pages

1. Push code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy

## Environment Variables

If using Supabase or other services, set environment variables in your hosting platform:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

**Vercel:** Settings → Environment Variables
**Netlify:** Site settings → Build & deploy → Environment
**GitHub Pages:** Use GitHub Secrets for Actions

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

### Cloudflare Pages
1. Go to Custom domains
2. Add domain
3. Update DNS records

## SSL/HTTPS

All recommended platforms provide free SSL certificates automatically:
- Vercel: Automatic via Let's Encrypt
- Netlify: Automatic via Let's Encrypt
- Cloudflare: Automatic
- AWS: Use AWS Certificate Manager with CloudFront

## Performance Optimization

### Image Optimization

Optimize large images before deployment:

```bash
# Install sharp-cli
npm install -g sharp-cli

# Convert to WebP
sharp -i src/assets/popup-mockup.png -o public/popup-mockup.webp --webp
sharp -i src/assets/sidebar-mockup.png -o public/sidebar-mockup.webp --webp
```

### Compression

Most platforms enable gzip/brotli compression automatically. Verify with:

```bash
curl -H "Accept-Encoding: gzip" -I https://yourdomain.com
```

### Caching

Configure cache headers (example for Netlify):

```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## Post-Deployment

### 1. Test Your Site

- [ ] All pages load correctly
- [ ] Download button works
- [ ] Navigation links work
- [ ] Mobile responsiveness
- [ ] Forms work (if any)
- [ ] Images load properly

### 2. SEO Setup

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify domain ownership
- [ ] Set up Google Analytics
- [ ] Test Open Graph tags with [opengraph.xyz](https://www.opengraph.xyz/)
- [ ] Test Twitter Cards with [cards-dev.twitter.com](https://cards-dev.twitter.com/validator)

### 3. Performance Testing

- [ ] Run Lighthouse audit
- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Check mobile performance
- [ ] Verify Core Web Vitals

### 4. Monitoring

Set up monitoring:
- Uptime monitoring (UptimeRobot, Pingdom)
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## Troubleshooting

### 404 on Refresh

If you get 404 errors when refreshing pages, configure your hosting for SPA routing:

**Vercel:** Add `vercel.json` with rewrites
**Netlify:** Add `_redirects` file or `netlify.toml`
**S3:** Set error document to `index.html`

### Environment Variables Not Working

Make sure variable names start with `VITE_`:
- ✅ `VITE_API_KEY`
- ❌ `API_KEY`

Rebuild after adding environment variables.

### Images Not Loading

Check image paths are relative and start with `/`:
- ✅ `/assets/image.png`
- ❌ `assets/image.png`

## Support

For deployment issues:
- Check platform documentation
- Review build logs
- Contact platform support
- Open an issue on GitHub

---

**Need help?** Contact support@brevity.email
