# Repository Guidelines

## Project Structure & Module Organization
- `index.html`: Single-page entry point.
- `assets/css/style.css`: Global styles (2-space indent, CSS variables).
- `assets/js/script.js`: Vanilla JS for sliders/interactions.
- `assets/img/`: Images and backgrounds.
- `.vscode/settings.json`: Live Server port (`5502`).

## Build, Test, and Development Commands
- Run locally (VS Code): Use the Live Server extension (port `5502`).
- Run locally (Python): `python -m http.server 5502` then open `http://localhost:5502/index.html`.
- Quick check (PowerShell): `Start-Process http://localhost:5502/index.html` after starting a server.

## Coding Style & Naming Conventions
- HTML: Semantic tags; keep sections small and focused.
- CSS: 2-space indentation; variables in `:root`; class names kebab-case (e.g., `.hero-slider`, `.usecase-slide`).
- JS: 2-space indentation; camelCase variables/functions; prefer `const`/`let`; keep DOM selectors scoped; add minimal comments for interactions.
- Filenames: kebab-case in `assets/` (e.g., `hero-product_1.png`, `script.js`).

## Testing Guidelines
- Framework: None (static site). Use manual checks.
- How to test:
  - Load homepage and verify hero and use-case sliders navigate by arrows, swipe, keyboard.
  - Check responsive layout at 360px, 768px, 1024px, 1280px.
  - Validate no horizontal overflow; anchors scroll smoothly.
- Optional tools: DevTools Lighthouse for performance/accessibility.

## Commit & Pull Request Guidelines
- Commits: Short, present-tense, focused. Japanese or English OK.
  - Examples: `USERS VOICE スクロール修正`, `ヒーローセクションのレイアウト調整`, `css,jsファイル・フォルダ移動`.
- PRs: Include purpose, key changes, testing steps, and screenshots/GIFs for UI updates. Link issues if applicable.

## Accessibility & Performance
- Provide `alt` text for images; ensure keyboard navigation works (e.g., slider arrow keys).
- Prefer optimized images; remove unused assets (see `assets/img/unused-image.png` if not needed).
- Avoid blocking scripts; keep interactions lightweight and resilient.

