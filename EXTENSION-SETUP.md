# Extension ZIP File Setup Guide

This guide explains how to set up the Chrome extension ZIP file for download on your landing page.

## Current Setup

The landing page has download buttons that link to `/brevity-extension.zip`. This file needs to be placed in the `public/` folder.

## Option 1: Place Your Extension ZIP (Recommended)

If you already have your Chrome extension packaged:

```bash
# Copy your extension ZIP to the public folder
cp /path/to/your/extension.zip brevity-email-simplified/public/brevity-extension.zip
```

The download will work immediately after rebuilding the site.

## Option 2: Create Extension ZIP from Source

If you have the extension source code but not the ZIP:

```bash
# Navigate to your extension folder
cd /path/to/your/chrome-extension

# Create a ZIP file (exclude unnecessary files)
zip -r brevity-extension.zip . \
  -x "*.git*" \
  -x "*node_modules*" \
  -x "*.DS_Store" \
  -x "*.env*" \
  -x "*.log"

# Move the ZIP to the landing page public folder
mv brevity-extension.zip /path/to/brevity-email-simplified/public/
```

## Option 3: Temporary Placeholder

If you don't have the extension ready yet, create a placeholder:

```bash
cd brevity-email-simplified/public

# Create a temporary README as placeholder
echo "Brevity Chrome Extension - Coming Soon!" > README.txt
zip brevity-extension.zip README.txt
rm README.txt
```

## Extension Structure Requirements

Your Chrome extension ZIP should contain at minimum:

```
brevity-extension/
├── manifest.json          # Required: Extension manifest
├── popup.html            # Popup UI
├── popup.js              # Popup logic
├── content.js            # Content script for Gmail
├── background.js         # Background service worker
├── styles.css            # Styling
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md             # Installation instructions
```

## Installation Instructions for Users

Users will need to:

1. **Download** the ZIP file from your website
2. **Extract** the ZIP to a folder on their computer
3. **Open Chrome** and go to `chrome://extensions/`
4. **Enable** "Developer mode" (toggle in top-right)
5. **Click** "Load unpacked"
6. **Select** the extracted extension folder

## Update Download Links

The download buttons are located in:

- `src/components/landing/Navbar.tsx` (line 30)
- `src/components/landing/HeroSection.tsx` (line 44)
- `src/components/landing/CTASection.tsx` (line 26)

All currently point to `/brevity-extension.zip`

## Alternative: Host on External Service

If the ZIP file is too large (>10MB), consider hosting it externally:

### GitHub Releases
```bash
# Create a release on GitHub
gh release create v1.0.0 brevity-extension.zip --title "Brevity v1.0.0"

# Update download links to:
# https://github.com/yourusername/brevity/releases/download/v1.0.0/brevity-extension.zip
```

### Google Drive
1. Upload ZIP to Google Drive
2. Set sharing to "Anyone with the link"
3. Get the direct download link
4. Update the href in components

### Dropbox
1. Upload to Dropbox
2. Share and get link
3. Change `?dl=0` to `?dl=1` for direct download
4. Update the href in components

## Testing the Download

After placing the ZIP file:

```bash
# Build the site
npm run build

# Test locally
npm run preview

# Click the download button to verify it works
```

## File Size Considerations

- **Ideal**: < 5MB (fast download)
- **Acceptable**: 5-20MB (reasonable)
- **Large**: > 20MB (consider external hosting)

Check your ZIP size:
```bash
ls -lh brevity-email-simplified/public/brevity-extension.zip
```

## Security Best Practices

Before packaging your extension:

1. **Remove** all API keys and secrets
2. **Exclude** development files (node_modules, .git)
3. **Minify** JavaScript files
4. **Optimize** images
5. **Test** the extension thoroughly

## Updating the Extension

When you release a new version:

1. Update the ZIP file in `public/`
2. Update version number in your extension's `manifest.json`
3. Rebuild and redeploy the landing page
4. Consider adding a changelog or version history page

## Troubleshooting

### Download button doesn't work
- Verify `brevity-extension.zip` exists in `public/` folder
- Check browser console for 404 errors
- Ensure the file is included in the build output (`dist/`)

### ZIP file not found after deployment
- Some hosting platforms require explicit configuration for downloadable files
- Check your hosting platform's documentation for serving static files
- Verify the file is in the `dist/` folder after build

### File too large for hosting
- Use external hosting (GitHub Releases, Google Drive)
- Optimize extension assets (compress images, minify code)
- Consider splitting into multiple smaller downloads

## Next Steps

1. ✅ Place your extension ZIP in `public/brevity-extension.zip`
2. ✅ Test the download locally with `npm run preview`
3. ✅ Build for production with `npm run build`
4. ✅ Deploy to your hosting platform
5. ✅ Test the download on the live site

---

**Need help?** Check the main README.md or open an issue on GitHub.
