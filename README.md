# Ground Footwear — Next.js Editorial Platform

A high-performance editorial footwear ecommerce experience built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, **Lenis Smooth Scroll**, and **GSAP ScrollTrigger**.

Converted from the static HTML/CSS/JS prototype into a production-grade, modular, and type-safe architecture while maintaining 100% exact design and interaction parity.

---

## 🚀 Key Features & Production Architecture

- **Lenis Smooth Scrolling**: Powered by `lenis` and seamlessly integrated into the Next.js App Router with rAF synchronization into GSAP's ticker.
- **GSAP ScrollTrigger Choreography**: Scroll-bound parallax image effects, entrance animations, and header collapses without layout jitter.
- **Tailwind CSS v4 Integration**: Utilizing the latest CSS-first configuration engine with `@theme` token definitions and custom brand typography (`futura`, `helvetica`, `abc`).
- **Fullscreen Navigation Drawer**: Staggered slide-down editorial menu with link triggers and brand contact coordinates.
- **Hover-Revealing Collection Drawers**: Interactive card pills that expand into multi-product previews on hover or tap.
- **Interactive Magnetic Cursor**: Custom cursor tracking mouse coordinates that smoothly scales when hovering signature footwear cards.
- **Dynamic Customer Voices Selector**: Animated SVG draw underline, dot indicators, and kinetic quote switcher.

---

## 📁 Project Architecture & Components

Every section, interaction, and layout element is modularized into production-grade Next.js components:

### 1. Component & Section Hierarchy
| Section / Entity | Next.js Component | Description |
| :--- | :--- | :--- |
| Smooth Scroll Provider | `SmoothScrollProvider.tsx` | Lenis smooth scroll provider + GSAP ticker synchronization |
| Cursor Tracking | `SiteCursor.tsx` | Fluid circular cursor following mouse with hover state |
| Navigation Header & Menu | `SiteNavbar.tsx` | Fixed header with scroll logo transition & fullscreen overlay |
| Page 1 & Intro | `HeroSection.tsx` | Oversized "Break Ground" typography, editorial hero & intro |
| Page 2 & Mission | `CollectionsSection.tsx` | Top picks with expanding hover preview drawers & mission copy |
| Page 3 Products | `ProductsSection.tsx` | Signature footwear catalog cards with cursor hover tracking |
| Page 4 Testimonials | `CustomerVoicesSection.tsx` | Interactive quotes switcher with animated SVG draw underline |
| Page 5 Craftsmanship | `ProcessSection.tsx` | Editorial craftsmanship copy and dual parallax imagery |
| Footer | `SiteFooter.tsx` | Editorial 3-column footer with brand links & legal notices |

### 2. Assets Structure
All assets (typography and brand media) are served directly via `public/assets/`:
- `public/assets/fonts/`: Futura Bold, Helvetica Now, ABC Social Mono
- `public/assets/images/`: Brand logos, hero photograph, collection banners, and footwear assets

---

## 🛠️ Scripts & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm start
```
