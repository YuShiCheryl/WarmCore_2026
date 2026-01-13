# 📐 Homepage Sections Overview

This document explains each section of the Warmcore homepage and how to customize them.

## 🎯 Complete Section List

The homepage contains **14 main sections**:

1. [Header](#-1-header)
2. [Hero Section](#-2-hero-section)
3. [S1 - Product Showcase](#-3-s1---product-showcase)
4. [S2 - Comfort Experience](#-4-s2---comfort-experience)
5. [S3 - Temperature Control](#-5-s3---temperature-control)
6. [S4 - Even Temperature](#-6-s4---even-temperature)
7. [S5 - Dual Zone Control](#-7-s5---dual-zone-control)
8. [S6 - Smart Algorithm Hero](#-8-s6---smart-algorithm-hero)
9. [S7 - Sleep Rhythm](#-9-s7---sleep-rhythm)
10. [S8 - Zero Noise](#-10-s8---zero-noise)
11. [S9 - Safety Hero](#-11-s9---safety-hero)
12. [S10 - Safety Features](#-12-s10---safety-features)
13. [S11 - Product Comparison](#-13-s11---product-comparison)
14. [Footer](#-14-footer)

---

## 📋 Section Details

### 🎯 1. Header

**Purpose**: Navigation and language selector

**Content**:
- Logo (left)
- Navigation menu (center): GMET®技术, 解决方案与产品, 关于我们
- Language selector (right): ENG

**Styling**:
- Height: 72px
- Background: Semi-transparent gray (`rgba(120, 120, 120, 0.20)`)
- Border bottom: 1px solid neutral color

**Customization**:
```jsx
// In HomePage.jsx, find:
<header className="header">
  // Update navigation links
  <a href="#gmet" className="nav-link">Your Link</a>
</header>
```

---

### 🎯 2. Hero Section

**Purpose**: Main landing section with value proposition

**Content**:
- Main headline: "专注微气候控制，给用户恰到好处的温度。"
- Subtitle: "2022北京冬季奥运会指定供应商"
- 2 CTA buttons
- Scroll indicator (animated arrow down)

**Dimensions**: 740px height

**Customization**:
```jsx
// In HomePage.jsx:
<h1 className="hero-title">
  Your main headline here
</h1>

// Update buttons:
<button className="hero-button">Your CTA Text</button>
```

---

### 🎯 3. S1 - Product Showcase

**Purpose**: Introduce the main product with images

**Content**:
- Section title: "智能深睡毯Pro3.0"
- 1 large image + 2 smaller images
- Overlay text
- Navigation button

**Dimensions**: 595px height

**Layout**: 3-column grid (674px + 208px + 208px)

**Customization**:
```jsx
// Replace images:
<img src="your-image-url.jpg" alt="Product" className="product-image-main" />

// Update title:
<h2 className="section-title">Your Product Name</h2>
```

---

### 🎯 4. S2 - Comfort Experience

**Purpose**: Show comfort features with large visual

**Content**:
- Large background image
- Overlay text: "前所未有的舒适体感，睡眠新科技。"

**Dimensions**: 602px height

**Styling**: Image positioned right, text left

---

### 🎯 5. S3 - Temperature Control

**Purpose**: Explain precise temperature control technology

**Content**:
- Heading: "所设即所得，温度从未如此精准。"
- Description paragraph (mentions GMET® technology)
- 2 visualization images in gray container
- Left/right navigation arrows

**Dimensions**: 966px height

**Key Feature**: Interactive navigation arrows

**Customization**:
```jsx
// Update description:
<p className="section-description">
  Your description with <span className="text-bold">GMET</span>® technology
</p>
```

---

### 🎯 6. S4 - Even Temperature

**Purpose**: Showcase material technology

**Content**:
- Heading: "均匀温场,温润不燥。"
- Technical description
- 3 material images (positioned in artistic layout)

**Dimensions**: 1127px height

**Layout**: Asymmetric image placement

---

### 🎯 7. S5 - Dual Zone Control

**Purpose**: Explain couple's dual temperature feature

**Content**:
- Heading about dual zone control
- Description of DualAdjust technology
- Large circular diagram image

**Dimensions**: 1193px height

**Key Feature**: Centered large circular visualization

---

### 🎯 8. S6 - Smart Algorithm Hero

**Purpose**: Full-width hero image for algorithm section

**Content**:
- Full-width background image
- Overlay text: "智能算法，深睡更容易。"

**Dimensions**: 807px height

**Styling**: Text positioned over background image (left bottom)

---

### 🎯 9. S7 - Sleep Rhythm

**Purpose**: Explain sleep cycle temperature adjustment

**Content**:
- Centered heading about sleep rhythm
- Detailed description paragraph
- Full-width sleep wave visualization

**Dimensions**: 829px height

**Key Feature**: Full-width visualization at bottom

---

### 🎯 10. S8 - Zero Noise

**Purpose**: Showcase quiet operation and wake features

**Content**:
- Dual heading: "0噪音" and "无感唤醒"
- 2x2 grid of feature images

**Dimensions**: 962px height

**Layout**: 
```
[Image 1] [Image 2]
[Image 3] [Image 4]
```

**Customization**:
```jsx
// Update grid images:
<div className="feature-grid">
  <img src="your-image-1.jpg" alt="Feature 1" />
  <img src="your-image-2.jpg" alt="Feature 2" />
  {/* ... */}
</div>
```

---

### 🎯 11. S9 - Safety Hero

**Purpose**: Safety section hero image

**Content**:
- Rotated full-width background
- Overlay text: "贴身级安全与耐久，科学验证更安心。"

**Dimensions**: 735px height

**Styling**: 90-degree rotated background image

---

### 🎯 12. S10 - Safety Features

**Purpose**: Detail safety certifications

**Content**:
- Heading about safety standards
- Large centered safety features image

**Dimensions**: 1245px min-height

**Layout**: Centered content with large padding

---

### 🎯 13. S11 - Product Comparison

**Purpose**: Show product lineup comparison

**Content**:
- Heading
- 4 product images in a row
- Subtitle: "内部产品功能比对..."

**Dimensions**: 977px height

**Layout**: Horizontal row of 4 equal-width images

**Customization**:
```jsx
// Add or remove products:
<div className="product-comparison-grid">
  <img src="product1.jpg" alt="Product 1" />
  <img src="product2.jpg" alt="Product 2" />
  {/* Add more products */}
</div>
```

---

### 🎯 14. Footer

**Purpose**: Company info, links, newsletter signup

**Content**:
- Newsletter signup (left)
- Company links (3 columns, right):
  - 关于公司 (About Company)
  - 服务支持 (Support)
  - 产品 (Products)
- Language selector
- Copyright: "北京暖芯科技有限公司"

**Dimensions**: 580px height

**Layout**: 
```
[Newsletter]                [Links] [Links] [Links]


[Language]                           [Copyright]
```

**Customization**:
```jsx
// Update footer links:
<div className="footer-column">
  <h3 className="footer-column-title">Your Title</h3>
  <ul className="footer-column-links">
    <li><a href="#link">Your Link</a></li>
  </ul>
</div>
```

---

## 🎨 Color Coding by Purpose

### 🔵 Informational Sections
- S2 - Comfort Experience
- S7 - Sleep Rhythm

### 🟢 Technical Explanation
- S3 - Temperature Control
- S4 - Even Temperature
- S5 - Dual Zone Control

### 🟡 Hero/Visual Sections
- Hero Section
- S6 - Smart Algorithm Hero
- S9 - Safety Hero

### 🟠 Product/Features
- S1 - Product Showcase
- S8 - Zero Noise
- S11 - Product Comparison

### 🔴 Safety/Trust
- S10 - Safety Features

---

## 📏 Section Heights Summary

```
Header:                   72px
Hero:                    740px
S1 - Product:            595px
S2 - Comfort:            602px
S3 - Temperature:        966px
S4 - Even Temp:        1,127px
S5 - Dual Zone:        1,193px
S6 - Smart Hero:         807px
S7 - Sleep Rhythm:       829px
S8 - Zero Noise:         962px
S9 - Safety Hero:        735px
S10 - Safety:          1,245px
S11 - Comparison:        977px
Footer:                  580px
──────────────────────────────
Total:              ~11,430px
```

---

## 🔄 Common Customizations

### Change Section Order

In `HomePage.jsx`, simply reorder the `<section>` elements:

```jsx
<div className="home-page">
  <header>...</header>
  
  {/* Move sections around */}
  <section className="hero-section">...</section>
  <section className="section-temperature">...</section>
  {/* etc. */}
</div>
```

### Hide/Remove a Section

Simply delete or comment out the section:

```jsx
{/* Temporarily hide this section
<section className="section-dual-zone">
  ...
</section>
*/}
```

### Duplicate a Section

Copy and paste the section code, then modify content:

```jsx
<section className="section-product-showcase">
  {/* First product */}
</section>

<section className="section-product-showcase section-product-2">
  {/* Second product - add custom class for styling */}
</section>
```

### Add a New Section

Follow the pattern:

```jsx
<section className="section-your-name">
  <h2 className="section-heading">Your Heading</h2>
  <p className="section-description">Your description</p>
  {/* Your content */}
</section>
```

Then add styles in `HomePage.css`:

```css
.section-your-name {
  height: 800px;
  align-self: stretch;
  overflow: hidden;
  position: relative;
}

.section-your-name .section-heading {
  /* Your custom styles */}
```

---

## 🎯 Section Navigation IDs

To enable anchor links, add IDs:

```jsx
<section id="product" className="section-product-showcase">
  ...
</section>
```

Then link to it:

```jsx
<a href="#product">Go to Product</a>
```

Or with smooth scrolling:

```css
html {
  scroll-behavior: smooth;
}
```

---

## 📱 Making Sections Responsive

Each section can be made responsive by adding media queries in `HomePage.css`:

```css
@media (max-width: 1024px) {
  .section-product-showcase {
    height: auto; /* Allow height to adjust */
    padding: 40px 20px; /* Adjust padding */
  }
  
  .product-image-main {
    width: 100%; /* Full width on tablet */
    position: relative; /* Change from absolute */
  }
}
```

---

## 🔗 Quick Links to Edit

| Want to change... | Edit this file | Find this class |
|------------------|----------------|-----------------|
| Navigation links | `HomePage.jsx` | `.header-nav` |
| Hero title | `HomePage.jsx` | `.hero-title` |
| Button text | `HomePage.jsx` | `.hero-button` |
| Section colors | `HomePage.css` | `:root` variables |
| Images | `HomePage.jsx` | `<img src="..."` |
| Fonts | `index.css` | `@import url(...)` |
| Footer links | `HomePage.jsx` | `.footer-links` |

---

**Need help with a specific section?** Check the comments in `HomePage.jsx` - each section is clearly labeled!
