# Semantic HTML5 Accessible Dashboard

A small, self-contained dashboard demonstrating semantic HTML5 structure and practical WCAG 2.1 AA accessibility patterns.

## What is included

- Semantic page landmarks: `header`, `nav`, `aside`, `main`, `section`, `article`, and `footer`
- Skip navigation link and clearly named navigation landmarks
- Accessible search/filter controls with labels, fieldsets, legends, and native validation
- Data table with a caption and correctly scoped headers
- Native `dialog` modal with an accessible name and description, Escape-key support, and focus restoration
- Visible keyboard focus indicators and responsive layout
- Separate Services and Reports pages
- Automated HTML validation and production build in GitHub Actions

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
├── docs/accessibility-notes.md
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

## Accessibility note

This repository is an implementation example, not a certification of WCAG conformance. Accessibility should be verified with manual keyboard and screen-reader testing, automated checks, and testing with people who use assistive technology.

## License

MIT
