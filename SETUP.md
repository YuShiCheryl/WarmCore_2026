# 🚀 Quick Setup Guide

Get the Warmcore homepage running in 3 simple steps!

## ⚡ Super Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

That's it! The website should now be running. 🎉

## 📋 Detailed Setup

### Step 1: Check Prerequisites

Make sure you have Node.js installed:
```bash
node --version
# Should show v16.0.0 or higher
```

Don't have Node.js? [Download it here](https://nodejs.org/)

### Step 2: Install Dependencies

Choose your package manager:

**Using npm (comes with Node.js):**
```bash
npm install
```

**Using yarn:**
```bash
yarn install
```

**Using pnpm (fastest):**
```bash
pnpm install
```

### Step 3: Start Development Server

**Using npm:**
```bash
npm run dev
```

**Using yarn:**
```bash
yarn dev
```

**Using pnpm:**
```bash
pnpm dev
```

The site will automatically open at `http://localhost:3000`

## 🎯 What You Should See

After running `npm run dev`, you should see:

```
  VITE v5.0.8  ready in 300 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Your browser should open automatically showing the Warmcore homepage.

## 🔧 Common Issues & Solutions

### Issue: Port 3000 is already in use

**Solution:** Use a different port
```bash
npm run dev -- --port 3001
```

### Issue: `npm: command not found`

**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: Images not loading

**Solution:** Check your internet connection. Images are loaded from Builder.io CDN.

### Issue: Fonts look different

**Solution:** Google Fonts should load automatically. Check your internet connection or ad blockers.

### Issue: `Cannot find module 'vite'`

**Solution:** Make sure you ran `npm install` first
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🎨 Making Your First Edit

1. Open `src/HomePage.jsx` in your code editor
2. Find the hero title (line ~79):
   ```jsx
   <h1 className="hero-title">
     专注微气候控制，<br />给用户恰到好处的温度。
   </h1>
   ```
3. Change the text
4. Save the file
5. The browser will automatically refresh! ✨

## 📁 Project Structure Explained

```
warmcore-homepage/
│
├── src/                      # Source code
│   ├── HomePage.jsx          # Main page component (⭐ Edit this for content)
│   ├── HomePage.css          # Page styles (⭐ Edit this for design)
│   ├── App.jsx              # Root component (usually don't need to edit)
│   ├── App.css              # App wrapper styles
│   ├── main.jsx             # Entry point (don't edit)
│   └── index.css            # Global styles (fonts, resets)
│
├── public/                   # Static files (create this folder if needed)
│   └── favicon.svg          # Website icon (add your own)
│
├── index.html               # HTML template
├── vite.config.js          # Build configuration
├── package.json            # Project dependencies
└── README.md               # Full documentation
```

## 🎓 Next Steps

### 1. Customize Content
Edit `src/HomePage.jsx` to change text and images

### 2. Update Styles  
Edit `src/HomePage.css` to modify colors and layout

### 3. Add Features
- Add navigation functionality
- Implement language switcher
- Connect newsletter form
- Add animations

See [README.md](./README.md) for detailed guides on each topic.

## 📦 Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates optimized files in the `dist` folder.

To preview the production build:
```bash
npm run preview
```

## 🚀 Deploying Your Site

### Option 1: Vercel (Recommended - Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site is live. 🎉

### Option 2: Netlify

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to Netlify
4. Your site is live!

### Option 3: Traditional Hosting

1. Run `npm run build`
2. Upload everything in the `dist` folder to your web host
3. Done!

## 💡 Pro Tips

1. **Hot Reload**: Save any file and see changes instantly
2. **DevTools**: Press F12 to open browser developer tools
3. **Console**: Check the console for any errors
4. **React DevTools**: Install React DevTools browser extension

## 🆘 Need Help?

1. Check [README.md](./README.md) for detailed documentation
2. Search for error messages online
3. Create an issue on GitHub
4. Check Vite docs: [vitejs.dev](https://vitejs.dev)
5. Check React docs: [react.dev](https://react.dev)

## 🎉 You're All Set!

You now have:
- ✅ A working development environment
- ✅ Hot reload for instant changes
- ✅ A fully designed homepage
- ✅ Production build capability

Happy coding! 🚀

---

**Quick Commands Reference:**

```bash
npm install          # Install dependencies (run once)
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```
