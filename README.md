# مؤسسة المنزل العربي للمقاولات | AL MANZIL AL ARABI DECOR
> **Premium Bilingual Corporate Website for Luxury Interior Decoration, Finishing & Renovation**

---

## 🏛️ Brand Overview & Business Information

- **Arabic Brand Name**: مؤسسة المنزل العربي للمقاولات
- **English Brand Name**: AL MANZIL AL ARABI DECOR
- **Tagline (Arabic)**: "نمنح المساحات جمالها، ونرتقي بالتفاصيل."
- **Tagline (English)**: "Beautiful Spaces. Exceptional Details."
- **Phone**: `0552519783` (Direct dialing: `tel:+966552519783`)
- **WhatsApp**: `+966552519783` (Direct prefilled chat URL)
- **Email**: `arabichome.contracting@gmail.com`

---

## ✨ Features & Highlights

1. **Full Bilingual Support (Arabic & English)**
   - Default language: Arabic (`dir="rtl"`, `lang="ar"`).
   - Instant language switching to English (`dir="ltr"`, `lang="en"`).
   - Centrally managed dictionary translations (`src/i18n/ar.js` & `src/i18n/en.js`).
   - Selected language persisted in `localStorage`.

2. **9 Core Required Services**
   - **الديكورات** — Decoration Services
   - **الباركيه** — Parquet Flooring
   - **ورق الجدران** — Wallpaper
   - **الدهانات** — Painting Services
   - **ترميم المباني الداخلي والخارجي** — Interior & Exterior Building Renovation
   - **بديل الرخام** — Marble Alternative Panels
   - **الصفائح الحجرية** — Stone Panels
   - **الجبس بورد** — Gypsum Board & False Ceilings
   - **بديل الشيبورد** — Chipboard Alternative Solutions
   - Each with dedicated dynamic route (`/services/:slug`), specs, applications, and direct WhatsApp actions.

3. **Signature Work Gallery**
   - Category filter tabs (All Work, Decoration, Flooring, Wallpaper, Painting, Gypsum Board, Marble Alternatives, Stone Panels, Chipboard Alternative, Renovation).
   - Keyboard-accessible Lightbox modal (Esc to close, Arrow keys for next/previous, full captions and material tags).
   - Transparent disclaimer noting illustrative inspiration.

4. **Interactive Contact & WhatsApp Routing**
   - Client-side validation for full name, mobile number format, and requested service.
   - Automatic generation of formatted inquiry text and seamless handover to WhatsApp.
   - Clickable verified phone, email, and WhatsApp links.

5. **Technical SEO & Accessibility (WCAG 2.2 AA)**
   - Semantic HTML5, single H1 per page, structured JSON-LD Schema.
   - Descriptive Open Graph and Twitter sharing cards.
   - Accessible focus outlines, ARIA attributes, and reduced-motion considerations.
   - XML Sitemap (`sitemap.xml`) and `robots.txt`.

---

## 🎨 Color Palette & Typography

| Color Token | Hex Code | Usage |
|---|---|---|
| **Warm Ivory** | `#F7F4EE` | Primary background, clean spacious canvas |
| **Soft White** | `#FFFFFF` | Card backgrounds, elevated surface layers |
| **Sand Beige** | `#D8C6AE` | Borders, subtle dividers, pill badges |
| **Deep Charcoal** | `#252522` | Text headings, luxury dark sections, footer |
| **Warm Taupe** | `#8C7967` | Secondary body text, subtle labels |
| **Muted Bronze** | `#A88B64` | Primary brand accent, CTAs, icons |

- **Arabic Typography**: IBM Plex Sans Arabic (Google Fonts)
- **Latin Typography**: Plus Jakarta Sans / Inter

---

## 🛠️ Technology Stack

- **React 19**
- **Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router v7** (`react-router-dom`)
- **Lucide React** (Consistent icons)

---

## 📂 Project Architecture

```
ArabicHome/
├── public/
│   ├── favicon.svg
│   ├── logo-icon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BrandLogo.jsx
│   │   │   ├── LanguageSwitcher.jsx
│   │   │   ├── Lightbox.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── WhatsAppButton.jsx
│   │   │   └── ScrollToTop.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── AboutSection.jsx
│   │       ├── ServicesGrid.jsx
│   │       ├── WhyChooseUs.jsx
│   │       ├── GallerySection.jsx
│   │       ├── ProcessSection.jsx
│   │       ├── CallToAction.jsx
│   │       └── ContactSection.jsx
│   ├── config/
│   │   └── business.js
│   ├── data/
│   │   ├── services.js
│   │   └── projects.js
│   ├── i18n/
│   │   ├── ar.js
│   │   ├── en.js
│   │   └── LanguageContext.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ServiceDetailPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── PrivacyPolicyPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized bundle in the `dist/` directory ready for deployment on any modern web host or CDN.

### 4. Preview Production Build
```bash
npm run preview
```
