Reticulo Main Web App
======================

Production marketing website for Reticulo Sport Technology. Built with Next.js + TailwindCSS, with selective Chakra UI usage for a few landing components.

Key features:

- AI-first product pages (Studio, Radlo, Eventlo, Shuttle Rover)
- Financial partners and integrations sections with brand assets
- Dark mode with persistent theme toggle
- Contact form posting to public API

Quick Start
-----------

- Requirements: Node 18+, Yarn (recommended). See `.nvmrc` for version.
- Install deps: `yarn`
 - Dev: `yarn dev` then open http://localhost:3000
- Lint: `yarn lint`
- Build (static export): `yarn build`
- Preview build locally: `npx serve@latest out` then open http://localhost:3000 (or any port `serve` prints)

Note: This project is configured for static export (`next.config.ts` has `output: "export"`).
Use a static file server (Nginx, Firebase Hosting, GitHub Pages, etc.) to host the `out/` folder.
Running `yarn start` (the Next.js Node server) is not supported in export mode and will error with missing `.next/server/pages/_document.js`.

Environment
-----------

Set in `.env` or CI/CD secrets:

- `NEXT_PUBLIC_API_URL`: Public API base (e.g. https://api.reticulo.in)
- `NEXT_PUBLIC_API_KEY`: Public API key used for contact/newsletter endpoints

Tech Stack
----------

- Next.js 15, React 19
- TailwindCSS 3 (configured in `tailwind.config.ts`)
- Dark mode via `class` strategy with `ThemeToggle` component
- React Icons (`react-icons/io5`) for feature/iconography

Project Structure
-----------------

- `src/pages/`: Next.js pages (marketing pages, product pages)
- `src/components/`: Reusable UI (Header/Footer, product sections, partners)
- `src/components/tw/`: Tailwind-first primitive sections (`TwProduct`, `FeatureSection`)
- `src/components/mobile-app-button/`: Store badge buttons
- `src/layout/`: App shell (`AppLayout` wraps every page)
- `src/styles/`: Global CSS and Tailwind layers
- `src/api/`: Thin HTTP helpers for public endpoints
- `public/`: Static assets (images, partner logos)

Dark Mode
---------

- Tailwind `darkMode: 'class'` is enabled in `tailwind.config.ts`.
- `ThemeToggle` toggles the `dark` class on `<html>` and stores preference in `localStorage`.
- Cards/lists use `bg-white dark:bg-slate-800` and `border-slate-200 dark:border-slate-700`.
- Financial partners cards follow theme; Razorpay SVG contains a white rect background to ensure correct contrast in dark mode without altering its card.

Assets & Branding
-----------------

- Partner logos live in `public/partners/`. Use optimized SVGs where possible.
- Product icons:
  - `public/eventlo/logo.svg`
  - `public/shuttle-rover/logo.svg`
- Keep SVGs single-color where possible; use internal fills/strokes to control brand-specific contrast (e.g., Razorpay white background rect).

Adding A Product Page
---------------------

1. Create a page in `src/pages/<product>.tsx` using `TwProduct`.
2. Add a concise feature grid using icons from `react-icons/io5`.
3. Link it from `src/components/Header/index.tsx`.
4. Optionally add assets under `public/<product>/`.

Financial Partners
------------------

- Source: `src/components/FinancialPartners.tsx` and the “Trusted Integrations” on `src/pages/index.tsx`.
- To add a partner: place the logo in `public/partners/` and add to the list with `name`, `role`, `href`, `logo`.

Contact Form
------------

- Page: `src/pages/contact-us.tsx`
- Posts to `submitContactQuery` in `src/api/index.ts` using `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_API_KEY`.

Coding Guidelines
-----------------

- Tailwind-first styling; prefer utility classes over bespoke CSS.
- Keep components small and composable. Reuse primitives in `src/components/tw/`.
- Favor SVG assets and `object-contain` for brand logos.
- Use dark variants for colors and borders on cards and textual elements.

Deployment
----------

- Static export: `yarn build` generates `out/`.
- Serve `out/` with your platform of choice:
  - Nginx: point `root` to the exported directory; see `nginx.conf`.
  - Firebase Hosting: deploy as static hosting; see `firebase.json`.
  - Any static host (S3, Netlify, Vercel static): upload `out/`.
