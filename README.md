# Semantic HTML5 Accessible Dashboard

A submission-ready, self-contained dashboard demonstrating semantic HTML5 structure, WCAG 2.1 AA-oriented patterns, and a modern mobile-first responsive CSS architecture.

## Responsive design implementation

The dashboard now uses:

- CSS custom properties in `src/styles.css` for brand colors, surfaces, typography, spacing, radii, shadows, blur, and motion.
- Mobile-first layout starting at a 320px minimum viewport.
- CSS Grid for the dashboard shell, KPI cards, and forms.
- Flexbox for navigation, action groups, and responsive section headers.
- Fluid typography using `clamp()`.
- Responsive breakpoints at **768px, 1024px, and 1440px**, with the base layout designed for **320px+** screens.
- Glassmorphism surfaces using translucent backgrounds and `backdrop-filter`.
- Soft elevation, hover transitions, visible keyboard focus indicators, and reduced-motion support.
- Light/dark theme tokens with both system preference support and `data-theme="light|dark"` overrides.
- Horizontal overflow protection on the page while retaining accessible horizontal scrolling for wide data tables.

## Responsive proof

Demo screenshots are stored in `docs/screenshots/`:

- `mobile-320px.svg` — compact mobile layout
- `tablet-768px.svg` — two-column responsive card/form layout
- `desktop-1024px.svg` — sidebar + main dashboard layout
- `wide-1440px.svg` — expanded desktop spacing

These images are visual proof artifacts for the responsive design milestone. The table itself intentionally keeps a local horizontal scroll region when its data cannot fit without sacrificing readability.

## Accessibility foundation

- Semantic page landmarks: `header`, `nav`, `aside`, `main`, `section`, `article`, and `footer`
- Skip navigation link and clearly named navigation landmarks
- Accessible search/filter controls with labels, fieldsets, legends, and native validation
- Data table with a caption and correctly scoped headers
- Native `dialog` modal with an accessible name and description, Escape-key support, and focus restoration
- Visible keyboard focus indicators
- Reduced-motion preference support
- Responsive layout designed to avoid page-level horizontal scrolling

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Validation

```bash
npm run validate:html
```

The validation script sends the static HTML pages to the W3C Nu HTML Checker. Network access is required. The React-rendered dashboard is built separately by Vite; automated browser-based accessibility testing is not claimed by this project.

## Project structure

```text
.
├── .github/workflows/ci.yml
├── docs/
│   ├── accessibility-notes.md
│   └── screenshots/
│       ├── mobile-320px.svg
│       ├── tablet-768px.svg
│       ├── desktop-1024px.svg
│       └── wide-1440px.svg
├── scripts/validate-html.mjs
├── src/
│   ├── components/
│   │   ├── AccessibleModal.jsx
│   │   ├── DashboardForm.jsx
│   │   └── DashboardTable.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── services.html
├── reports.html
├── package.json
└── vite.config.js
```

## Design token map

| Token group | Examples |
|---|---|
| Brand | `--color-brand-500`, `--color-brand-600` |
| Typography | `--text-xs` through `--text-2xl` |
| Spacing | `--space-1` through `--space-12` |
| Radius | `--radius-sm`, `--radius-md`, `--radius-lg` |
| Elevation | `--shadow-sm`, `--shadow-md`, `--shadow-lg` |
| Surface | `--color-bg`, `--color-surface`, `--color-surface-solid` |
| Theme | `:root[data-theme="light"]`, `:root[data-theme="dark"]` |

## Accessibility note

This repository is an implementation example, not a certification of WCAG conformance. Accessibility should be verified with manual keyboard and screen-reader testing, automated checks, and testing with people who use assistive technology.

## License

MIT
