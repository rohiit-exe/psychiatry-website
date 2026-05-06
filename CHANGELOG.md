# Changelog

All notable changes to this project will be documented in this file.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [0.2.0] — 2026-05-06

### Fixed

#### Navbar — Mobile Hamburger Menu

- Hamburger button was rendered but had no state or click handler, making it non-functional on mobile
- Wired `useState` toggle to open and close the mobile drawer
- Added animated icon swap between `Menu` and `X` based on open/closed state
- Built slide-in mobile nav drawer below the sticky header with all nav links
- Added tap-to-close backdrop overlay behind the drawer
- Prevented background scroll while the menu is open via `body.style.overflow`
- Added `resize` listener to auto-close the menu when viewport reaches desktop breakpoint
- Added `aria-expanded`, `aria-controls`, and dynamic `aria-label` for accessibility

#### Hero — Slide Indicator Alignment

- Active hexagon dot indicators were misaligned and inconsistent across slides
- Extracted pagination dots completely outside `<SwiperSlide>` so they are anchored to the section and never animate or shift with slide transitions
- Active index now tracked via `onSlideChange` + `useState` for reliable, consistent dot state

#### Testimonials — Scrollbar, Navigation Dots & Avatar Images

- Removed visible scrollbar caused by `overflow` conflict between the full-bleed wrapper and Swiper's container; fixed via `overflow-hidden` on the section and `!overflow-visible` scoped to the Swiper instance only
- Navigation dots were not functioning correctly; rewired dot clicks to use `slideToLoop()` with `realIndex` to handle looped slides accurately
- Client profile/avatar images were not displaying; corrected broken image paths after assets were reorganised into `assets/icons/` subfolders during the folder structure overhaul

#### Footer — Tablet Responsiveness

- Footer was using a single desktop-only 5-column grid with no tablet handling, causing broken layouts on mid-size screens
- Replaced with a three-tier responsive grid:
  - Mobile: `grid-cols-2`, brand section spans full width
  - Tablet (`sm`): `grid-cols-3` with address and social in a nested 2-column sub-grid
  - Desktop (`lg`): original `grid-cols-[1fr_1fr_1fr_1.2fr_1.8fr]` layout preserved
- Removed `text-center` from column sections (left-aligned at all breakpoints)
- Added `break-all` to careers email address to prevent overflow on narrow screens
- Added `aria-label` to all social icon links

---

### Added

#### Testimonials — Navigation Arrows

- Added Swiper `Navigation` module with custom prev/next arrow buttons
- Arrows use class selectors (`.testimonial-prev` / `.testimonial-next`) for full Tailwind styling control, avoiding conflicts with Swiper's default injected CSS
- Arrow buttons flank the hexagon dot row in a single centered control bar

#### States Section — Rebuilt from Structured Assets

- Previous implementation used a single flattened screenshot image for the entire "Now Accepting Patients In The Following States" section
- Individual state assets were unavailable in Figma, so the section was recreated using separate per-state images paired with structured text content
- New implementation is maintainable, editable, and no longer dependent on a static image

---

### Changed

#### Hero & Testimonials — Migrated to Swiper.js

- Replaced custom `translateX`-based slider logic in the Hero section with **Swiper.js** (`swiper/react`)
- Replaced custom slider in Testimonials with Swiper for consistency and reliability
- Both sliders now use `Autoplay` module with 4-second delay and `disableOnInteraction: false`
- Full hero section surface area is the swipe/drag target — background image and gradient remain static beneath the Swiper layer
- Autoplay timer resets correctly on manual dot or arrow interaction

#### Footer — Static Data Extracted

- `footerLinks`, `businessHours`, `socialLinks`, `address`, and `careersEmail` moved from `Footer.jsx` into a co-located `footer.data.js` file
- Social links array now includes the icon component reference, making the render loop fully data-driven
- Component file now contains only rendering logic

---

### Structure

#### Folder Structure Overhaul

- Migrated all page sections from `sections/` into `features/home/` to support future multi-page scaling (`/about`, `/contact`, `/services`)
- Added barrel `index.js` files to all feature folders for clean, path-agnostic imports
- Co-located section-specific data into `.data.js` files inside each feature folder (e.g. `hero.data.js`, `testimonials.data.js`)
- Moved `TreatmentFocus.jsx` from `components/` into the correct location at `features/home/TreatmentFocus/`
- Organised `assets/icons/` into subfolders: `brand/`, `ui/`, `services/`, `decorative/`
- Created `hooks/` and `lib/` directories at `src/` level for shared logic and site-wide constants
- Moved `components/layout/` under `components/` alongside `components/ui/`

#### Routing — React Router Setup

- Installed and configured `react-router-dom`
- Implemented layout-per-route pattern using React Router nested `<Route>` with `<Outlet />`
- Created `MainLayout.jsx` (Navbar + Footer) and `BareLayout.jsx` (no chrome) assigned at route level
- `App.jsx` now only wraps `<BrowserRouter>` — layout responsibility delegated to `AppRoutes.jsx`
- Route slots for `/about`, `/contact`, `/services` prepared as commented entries in `AppRoutes.jsx`

---

## [0.1.0] — 2026-04-02

### Added

- Initial project setup with Vite + React + Tailwind CSS
- Home page with all sections: Hero, Founder, TreatmentFocus, Services, WhyChooseUs, Testimonials, Steps, FAQ, Footer
