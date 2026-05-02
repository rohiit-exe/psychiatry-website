# ADA Psychiatry – Frontend Implementation

## 1. About

This project is a pixel-accurate frontend implementation of the **ADA Psychiatry Landing Page**, built using **React**, **Vite**, and **Tailwind CSS (v4)**.

The objective of this project was to faithfully reproduce the provided Figma design while maintaining:

- Clean and scalable architecture
- Reusable UI components
- Maintainable styling system
- Performance optimizations
- Accessibility-friendly navigation

The application follows a **section-driven layout**, where each major section corresponds to a logical component and route anchor.

---

## 2. Setup Instructions

### Prerequisites

Make sure the following are installed:

- Node.js (v18+ recommended)
- npm or yarn
- Git

---

### Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd ada-psychiatry
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open in browser:

```text
http://localhost:5173
```

---

### Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 3. Architecture Overview

The project follows a **modular component-based architecture**, optimized for scalability and maintainability.

### Folder Structure

```text
src/
│
├── assets/
│   ├── icons/        → SVG icons and decorative graphics
│   ├── images/       → Optimized image assets (WEBP format)
│
├── components/
│   ├── layout/       → Layout components (Navbar, Footer)
│   ├── ui/           → Reusable UI primitives
│   │                  (Button, Container, SectionTitle)
│
├── pages/
│   └── Home.jsx      → Main page composition
│
├── sections/
│   ├── Hero/
│   ├── Founder/
│   ├── TreatmentFocus/
│   ├── Services/
│   ├── WhyChooseUs/
│   ├── Testimonials/
│   ├── Steps/
│   ├── FAQ/
│   └── Footer/
│
├── styles/
│   └── globals.css   → Tailwind theme tokens and global styles
│
├── routes/
│   └── AppRoutes.jsx → Page-level routing configuration
│
├── main.jsx          → Application entry point
└── App.jsx           → Root application component
```

---

### Design Philosophy

The system is built using:

- **Reusable UI Components**
- **Section-based composition**
- **Centralized theme tokens**
- **Scalable layout containers**

Each section is independently modular and reusable.

---

## 4. Key Design Decisions & Assumptions

### Component Reusability

Reusable UI primitives were created:

- `Button`
- `Container`
- `SectionTitle`

This ensures:

- Consistency across UI
- Reduced duplication
- Easier scaling

---

### Section-Based Routing

Each major section includes an **ID-based route anchor**, allowing:

```text
Direct navigation to sections
Sharable section URLs
Improved usability
```

Example:

```text
#hero
#services
#faq
#footer
```

---

### Tailwind Theme Tokens

Instead of raw colors, **design tokens** were used:

```css
--color-gold
--color-cream
--color-ink
--shadow-soft
--font-display
--font-sans
```

Benefits:

- Design consistency
- Maintainability
- Easier theming

---

### Performance Optimization

Several optimizations were applied:

- Large images converted to **WEBP**
- Lazy loading used where applicable
- Reduced layout shifts
- Lightweight SVG usage
- Optimized asset sizes

---

### Typography Strategy

Fonts used:

- Work Sans → Body content
- Playfair Display → Display headings

Fallback handling ensures typography consistency.

---

## 5. Known Limitations

The following limitations were identified during development:

### 1. Wulkan Display Font

The original design uses:

```text
Wulkan Display
```

However:

```text
Wulkan Display is a paid font
```

Therefore:

```text
Playfair Display was used as a substitute
```

Reason:

```text
Closest available free alternative
Maintains serif visual identity
```

---

### 2. Mobile Responsiveness

Mobile layout is:

```text
~99% completed
```

Remaining refinements:

- Minor spacing adjustments
- Some alignment fine-tuning
- Typography scaling improvements

Tablet and desktop layouts are fully functional.

---

### 3. SVG-Based Layout Dependencies

Some sections rely on:

```text
Decorative SVG backgrounds
Connector graphics
Wave dividers
```

These may require additional tuning for:

```text
Very small screen sizes
Extreme viewport widths
```

---

### 4. Interactive Elements

Certain interactive components are currently:

```text
UI-complete
But not backend-integrated
```

Examples:

- FAQ accordion
- CTA buttons
- Navigation anchors

---

## 6. Web Vitals & Performance Considerations

The project was designed with performance best practices in mind.

### Core Web Vitals Considerations

**Largest Contentful Paint (LCP)**

Optimizations:

- Hero images converted to WEBP
- Reduced asset weight
- Proper image sizing

---

**Cumulative Layout Shift (CLS)**

Handled by:

- Fixed layout dimensions
- Stable component sizing
- Predictable rendering order

---

**First Input Delay (FID)**

Improved via:

- Lightweight JavaScript
- Efficient rendering
- Minimal blocking operations

---

### Additional Performance Measures

- Image optimization (WEBP format)
- SVG usage instead of raster images
- Lazy loading applied to images
- Minimal DOM complexity
- Clean component rendering

---

## 7. Accessibility Considerations

Basic accessibility practices were followed:

- Semantic HTML elements
- Descriptive alt attributes
- Keyboard-accessible navigation
- Readable color contrast
- Clear heading hierarchy

---

## 8. Note

This implementation focuses on:

```text
Accuracy
Scalability
Performance
Maintainability
```

While maintaining close alignment with the provided Figma design, certain decisions were made to balance:

```text
Design fidelity
Development practicality
Performance optimization
```

This project structure supports future:

```text
Feature expansion
Backend integration
Responsive enhancement
UI scaling
```

---

## Author

**Rohit**
Frontend Developer
React | JavaScript | UI Engineering
