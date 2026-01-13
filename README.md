# 暖芯科技 - 智能深睡毯 Pro3.0 官网

This is the homepage for Warmcore Technology's Smart Deep Sleep Blanket Pro 3.0 website featuring GMET® technology.

## 🎯 Features

- **Responsive Header** with navigation and language selector
- **Hero Section** with call-to-action buttons  
- **Product Showcase** with image galleries
- **Feature Sections** highlighting GMET® technology
- **Temperature Control** demonstrations
- **Dual Zone Control** for couples
- **Sleep Algorithm** visualization
- **Safety & Durability** information
- **Product Comparison** grid
- **Footer** with newsletter signup and company links

## 📁 Project Structure

```
warmcore-homepage/
├── src/
│   ├── HomePage.jsx       # Main homepage component
│   ├── HomePage.css       # Homepage styles
│   ├── App.jsx            # Root app component
│   ├── App.css            # App styles
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn or pnpm

### Installation

1. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Start development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The app will open automatically at `http://localhost:3000`

3. **Build for production:**
```bash
npm run build
# or
yarn build
# or
pnpm build
```

The production-ready files will be in the `dist` folder.

4. **Preview production build:**
```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 🎨 Design System

### Colors
- **Background**: `#000` (Black)
- **Text**: `#FFF` (White)
- **Accent**: `#DEE5ED` (Neutral)
- **Gray Scale**: `#8E8E93`, `#999`, `#AEAEB2`
- **Primary Fill**: `rgba(120, 120, 120, 0.20)`
- **Secondary Fill**: `rgba(120, 120, 128, 0.16)`

### Typography
- **Primary Font**: DM Sans (Headings, CTAs)
- **Secondary Font**: Roboto (Body text)
- **Accent Font**: Neulis Sans (Brand name)

### Layout
- **Page Width**: 1440px (desktop)
- **Header Height**: 72px
- **Section Spacing**: Varied per section
- **Border Radius**: 10px (images), 50px (buttons)

## 📦 Tech Stack

- **React** 18.2.0 - UI framework
- **Vite** 5.0.8 - Build tool and dev server
- **CSS3** - Styling (no preprocessor needed)

## 🛠️ Customization Guide

### Updating Content

All content is in `src/HomePage.jsx`. The site uses Chinese (Simplified) language:

```jsx
// Example: Update hero title
<h1 className="hero-title">
  Your new title here
</h1>
```

### Modifying Styles

Edit `src/HomePage.css`. CSS custom properties are defined at the top:

```css
:root {
  --color-black: #000;
  --color-white: #FFF;
  /* Update these to change the color scheme */
}
```

### Adding Sections

Follow the existing pattern in `HomePage.jsx`:

```jsx
<section className="section-your-name">
  <h2 className="section-heading">Your Heading</h2>
  <p className="section-description">Your description</p>
  {/* Your content */}
</section>
```

## 🌐 Adding Functionality

### Language Switcher

To implement the language selector:

1. Install i18next:
```bash
npm install react-i18next i18next
```

2. Create language files and configure i18next
3. Update the language selector component

### Newsletter Form

To make the newsletter form functional:

1. Add state management:
```jsx
const [email, setEmail] = useState('');
```

2. Add form handler:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  // Send to your API
};
```

### Navigation

To add smooth scrolling:

```bash
npm install react-scroll
```

Or use native CSS:
```css
html {
  scroll-behavior: smooth;
}
```

### Animations

Add scroll animations:

```bash
npm install framer-motion
# or
npm install react-intersection-observer
```

## 📱 Responsive Design

To add mobile responsiveness, update media queries in `HomePage.css`:

```css
@media (max-width: 1024px) {
  /* Tablet styles */
}

@media (max-width: 768px) {
  /* Mobile styles */
}
```

## 🔍 SEO Optimization

The project includes basic SEO in `index.html`:
- Meta description
- Meta keywords
- Semantic HTML structure

To enhance SEO:
1. Add Open Graph tags
2. Add Twitter Card tags
3. Implement structured data (JSON-LD)
4. Add sitemap.xml
5. Add robots.txt

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## 📊 Performance Tips

1. **Image Optimization**: Currently using Builder.io CDN. Consider:
   - Converting to WebP format
   - Adding lazy loading: `loading="lazy"`
   - Using responsive images with `srcset`

2. **Code Splitting**: Implement React.lazy() for larger sections

3. **Bundle Size**: Run `npm run build` and check dist size

## 🔗 Integration Examples

### Connect to CMS (e.g., Contentful, Sanity)

```jsx
import { createClient } from 'contentful';

const client = createClient({
  space: 'your-space-id',
  accessToken: 'your-token'
});

// Fetch content
const content = await client.getEntries();
```

### Add Analytics

```jsx
// Google Analytics
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX');
```

### Add Contact Form

```jsx
const handleContact = async (formData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};
```

## 🐛 Troubleshooting

### Port already in use
```bash
# Change port in vite.config.js or use:
npm run dev -- --port 3001
```

### Images not loading
- Check internet connection
- Verify Builder.io CDN is accessible
- Replace with local images if needed

### Fonts not loading
- Check Google Fonts CDN
- Download fonts locally if needed
- Add to `public/fonts/` folder

## 📝 Development Notes

- Component uses absolute positioning for precise layout control
- Images are loaded from Builder.io CDN (temporary URLs)
- All measurements match the Figma design exactly
- No CSS preprocessor used (vanilla CSS)
- Semantic HTML for better accessibility

## 🚢 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## 📄 License

Proprietary - © 2024 北京暖芯科技有限公司 (Beijing Warmcore Technology Co., Ltd.)

## 🤝 Support

For questions or issues:
- Create an issue in the repository
- Contact: [Your contact information]

---

**Built with ❤️ for better sleep**
