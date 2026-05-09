# Brevity Landing Page - TODO Checklist

## ✅ Completed

- [x] Remove Chrome Web Store references
- [x] Convert download buttons to ZIP file downloads
- [x] Add comprehensive SEO meta tags
- [x] Create Privacy Policy page
- [x] Create Terms of Service page
- [x] Create Installation Guide page
- [x] Update Footer with legal links
- [x] Add Google Analytics placeholder
- [x] Create comprehensive README
- [x] Add sitemap.xml
- [x] Update robots.txt
- [x] Create deployment guide
- [x] Add navigation ID for Privacy section

## 🔧 Required Before Launch

### Content Updates

- [ ] **Add Extension ZIP File**
  - Place `brevity-extension.zip` in `public/` folder
  - File should be ready for developer mode installation

- [ ] **Update Domain URLs**
  - `index.html` - Replace `https://yourdomain.com/` with actual domain
  - `public/sitemap.xml` - Replace `yourdomain.com` with actual domain
  - `public/robots.txt` - Update sitemap URL

- [ ] **Update Contact Information**
  - `src/pages/Privacy.tsx` - Replace `privacy@brevity.email`
  - `src/pages/Terms.tsx` - Replace `legal@brevity.email`
  - `src/components/landing/Footer.tsx` - Replace `support@brevity.email`

- [ ] **Update Social Links**
  - `src/components/landing/Footer.tsx` - Add actual GitHub repository URL
  - `index.html` - Add actual Twitter/X handle

### Images & Assets

- [ ] **Create Open Graph Image**
  - Create `public/og-image.png` (1200x630px)
  - Update path in `index.html` meta tags
  - Should showcase Brevity's main features

- [ ] **Optimize Large Images** (Optional but recommended)
  - `src/assets/popup-mockup.png` (1.7MB) - Consider converting to WebP
  - `src/assets/sidebar-mockup.png` (1.1MB) - Consider converting to WebP
  - Run: `sharp -i input.png -o output.webp --webp`

- [ ] **Create Favicon Variants** (Optional)
  - `public/apple-touch-icon.png` (180x180px)
  - Update link in `index.html`

### Analytics & Tracking

- [ ] **Google Analytics**
  - Get Google Analytics Measurement ID
  - Uncomment GA code in `index.html`
  - Replace `GA_MEASUREMENT_ID` with actual ID

- [ ] **Alternative Analytics** (Optional)
  - Consider privacy-friendly alternatives: Plausible, Fathom, Simple Analytics
  - Add tracking code if using alternative

### SEO & Marketing

- [ ] **Google Search Console**
  - Verify domain ownership
  - Submit sitemap: `https://yourdomain.com/sitemap.xml`
  - Monitor indexing status

- [ ] **Bing Webmaster Tools**
  - Verify domain ownership
  - Submit sitemap

- [ ] **Social Media Preview Testing**
  - Test Open Graph tags: [opengraph.xyz](https://www.opengraph.xyz/)
  - Test Twitter Cards: [cards-dev.twitter.com](https://cards-dev.twitter.com/validator)
  - Fix any issues found

### Performance

- [ ] **Run Lighthouse Audit**
  - Target: 90+ score on all metrics
  - Fix any critical issues
  - Optimize images if needed

- [ ] **Test Core Web Vitals**
  - Use [PageSpeed Insights](https://pagespeed.web.dev/)
  - Ensure good LCP, FID, CLS scores

- [ ] **Mobile Testing**
  - Test on real devices (iOS, Android)
  - Check responsive design breakpoints
  - Verify touch targets are adequate

### Legal & Compliance

- [ ] **Review Privacy Policy**
  - Ensure accuracy for your specific implementation
  - Add any additional data collection disclosures
  - Update contact information

- [ ] **Review Terms of Service**
  - Customize for your jurisdiction
  - Add any additional terms
  - Consider legal review

- [ ] **Cookie Consent** (If applicable)
  - Add cookie banner if using analytics
  - Implement consent management
  - Update Privacy Policy accordingly

### Testing

- [ ] **Cross-Browser Testing**
  - Chrome ✓
  - Firefox ✓
  - Safari ✓
  - Edge ✓

- [ ] **Functionality Testing**
  - All navigation links work
  - Download button triggers ZIP download
  - Forms work (if any)
  - No console errors

- [ ] **Accessibility Testing**
  - Run axe DevTools or WAVE
  - Check keyboard navigation
  - Verify screen reader compatibility
  - Ensure sufficient color contrast

## 🚀 Deployment

- [ ] **Choose Hosting Platform**
  - Vercel (recommended)
  - Netlify
  - Cloudflare Pages
  - GitHub Pages
  - AWS S3 + CloudFront

- [ ] **Configure Environment Variables** (if using Supabase)
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_PUBLISHABLE_KEY`

- [ ] **Set Up Custom Domain**
  - Purchase domain if needed
  - Configure DNS records
  - Enable SSL/HTTPS

- [ ] **Configure Redirects**
  - Set up SPA routing (all routes → index.html)
  - Add any necessary redirects

## 📊 Post-Launch

- [ ] **Monitor Performance**
  - Set up uptime monitoring (UptimeRobot, Pingdom)
  - Monitor analytics daily for first week
  - Track conversion rates

- [ ] **Set Up Error Tracking** (Optional)
  - Sentry or similar service
  - Monitor JavaScript errors
  - Fix critical issues quickly

- [ ] **Gather Feedback**
  - Add feedback mechanism
  - Monitor support emails
  - Iterate based on user feedback

- [ ] **Marketing**
  - Share on social media
  - Post on Product Hunt
  - Submit to extension directories
  - Write blog post/announcement

## 🔄 Ongoing Maintenance

- [ ] **Regular Updates**
  - Keep dependencies updated
  - Monitor security vulnerabilities
  - Update content as needed

- [ ] **SEO Monitoring**
  - Track search rankings
  - Monitor organic traffic
  - Update content for SEO

- [ ] **Performance Monitoring**
  - Regular Lighthouse audits
  - Monitor Core Web Vitals
  - Optimize as needed

## 📝 Nice to Have

- [ ] **Blog Section**
  - Add blog for content marketing
  - Write about email productivity
  - Share extension updates

- [ ] **Testimonials Section**
  - Collect user testimonials
  - Add to landing page
  - Include screenshots/avatars

- [ ] **Video Demo**
  - Create product demo video
  - Embed on landing page
  - Share on YouTube

- [ ] **Comparison Page**
  - Compare with alternatives
  - Highlight unique features
  - Show pricing comparison

- [ ] **Changelog**
  - Document extension updates
  - Keep users informed
  - Show active development

- [ ] **Email Newsletter**
  - Add signup form
  - Send updates and tips
  - Build community

## 🐛 Known Issues

None currently. Add any issues discovered during testing here.

## 📞 Support Contacts

- **Technical Issues**: support@brevity.email
- **Privacy Questions**: privacy@brevity.email
- **Legal Questions**: legal@brevity.email
- **GitHub Issues**: [github.com/yourusername/brevity/issues](https://github.com/yourusername/brevity/issues)

---

**Last Updated**: May 6, 2026

**Status**: Ready for content updates and deployment
