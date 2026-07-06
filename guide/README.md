# Brevity — AI Email Assistant for Gmail

![Brevity Banner](./src/assets/hero-bg.jpg)

**Cut the noise. Read the signal.**

Brevity is a free, privacy-first AI email assistant that helps you process emails 80% faster. Summarize threads, detect phishing risks, extract action items, and generate replies — all locally in your browser.

## ✨ Features

- **📧 Instant Summarization** — Long email threads distilled into clear, actionable bullet points
- **🛡️ Smart Risk Detection** — AI-powered scanning identifies phishing attempts and suspicious links
- **✅ Action Item Extraction** — Automatically pulls deadlines, tasks, and follow-ups
- **💬 AI Reply Generation** — Context-aware reply drafts that match your tone

## 🔒 Privacy First

- **100% Local Processing** — All data stays in your browser
- **Your API Key** — You control your own AI provider (OpenAI, Google AI, etc.)
- **Zero Tracking** — No analytics, no telemetry, no user profiling
- **Open Source** — Audit the code yourself

## 🚀 Quick Start

### Prerequisites

- Chrome, Edge, Brave, or Arc browser
- Gmail account
- AI API key (OpenAI or Google AI)

### Installation

1. **Download the Extension**
   - Download `brevity-extension.zip` from the website
   - Extract the ZIP file to a folder on your computer

2. **Install in Developer Mode**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right corner)
   - Click "Load unpacked"
   - Select the extracted extension folder

3. **Configure Your API Key**
   - Click the Brevity icon in your browser toolbar
   - Go to Settings
   - Paste your OpenAI or Google AI API key
   - Save settings

4. **Start Using**
   - Open Gmail
   - Navigate to any email
   - Click the Brevity icon or use the sidebar panel
   - Get instant summaries, risk analysis, and reply drafts!

### Getting an API Key

**OpenAI:**
1. Go to [platform.openai.com](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new secret key
5. Copy and paste into Brevity settings

**Google AI:**
1. Go to [ai.google.dev](https://ai.google.dev/)
2. Sign up or log in
3. Get your API key
4. Copy and paste into Brevity settings

## 🛠️ Development

This repository contains the **landing page** for Brevity. The Chrome extension code is in a separate repository.

### Tech Stack

- **React 18** with TypeScript
- **Vite** for fast builds
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **shadcn/ui** for UI components
- **React Router** for navigation

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Lint code
npm run lint
```

### Project Structure

```
brevity-email-simplified/
├── src/
│   ├── components/
│   │   ├── landing/          # Landing page sections
│   │   └── ui/               # Reusable UI components
│   ├── pages/                # Route pages
│   ├── assets/               # Images and static files
│   ├── lib/                  # Utilities
│   └── App.tsx               # Main app component
├── public/                   # Static assets
└── index.html                # Entry HTML
```

## 📦 Building for Production

```bash
# Build optimized production bundle
npm run build

# The output will be in the `dist/` folder
```

### Deployment

The landing page can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Push `dist/` to `gh-pages` branch
- **AWS S3**: Upload `dist/` contents to S3 bucket

### Environment Variables

Create a `.env` file for Supabase integration (optional):

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

## 🎨 Customization

### Update Download Link

Place your `brevity-extension.zip` file in the `public/` folder. The download buttons are configured to download from `/brevity-extension.zip`.

### Update Meta Tags

Edit `index.html` to update:
- Page title and description
- Open Graph images
- Twitter card metadata
- Canonical URL
- Google Analytics ID (uncomment and add your ID)

### Update Contact Information

Update email addresses in:
- `src/pages/Privacy.tsx`
- `src/pages/Terms.tsx`
- `src/components/landing/Footer.tsx`

### Update Social Links

Edit `src/components/landing/Footer.tsx` to add your:
- GitHub repository URL
- Twitter/X handle
- Support email

## 📊 Performance Optimization

### Image Optimization

The project includes large PNG mockups. Consider optimizing them:

```bash
# Install image optimization tools
npm install -g sharp-cli

# Optimize images
sharp -i src/assets/popup-mockup.png -o src/assets/popup-mockup-optimized.png --webp
sharp -i src/assets/sidebar-mockup.png -o src/assets/sidebar-mockup-optimized.png --webp
```

Current image sizes:
- `hero-bg.jpg`: 88KB ✅
- `popup-mockup.png`: 1.7MB ⚠️ (consider optimizing)
- `sidebar-mockup.png`: 1.1MB ⚠️ (consider optimizing)

### Lazy Loading

Images already use `loading="lazy"` attribute for better performance.

## 📱 Mobile Responsiveness

The landing page is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔍 SEO Checklist

- [x] Meta title and description
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Canonical URL
- [x] Semantic HTML
- [x] Alt text for images
- [x] robots.txt
- [x] Sitemap (add if needed)
- [ ] Google Analytics (uncomment in index.html)
- [ ] Google Search Console verification

## 📄 Legal Pages

- **Privacy Policy**: `/privacy`
- **Terms of Service**: `/terms`

Update these pages with your actual legal information and contact details.

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Bug Reports

Found a bug? Please open an issue on GitHub with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Browser and OS information

## 💬 Support

- **Email**: support@brevity.email
- **GitHub Issues**: [github.com/yourusername/brevity/issues](https://github.com/yourusername/brevity/issues)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

**Made with ❤️ for privacy-conscious professionals**

⭐ Star this repo if you find it helpful!
