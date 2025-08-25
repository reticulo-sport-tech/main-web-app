Components
==========

Overview
--------

Reusable UI components shared across pages. Tailwind-first styling with dark mode variants. Notable groups:

- `Header/`: Site header, navigation and mobile menu; includes `ThemeToggle` in the desktop nav.
- `Footer.tsx`: Simple footer with key links.
- `tw/`: Tailwind primitives for product sections (`TwProduct`, `FeatureSection`).
- `mobile-app-button/`: App store badge buttons for Radlo.
- `FinancialPartners.tsx`: Grid cards for financial and operational partners.
- `SupportersSection.tsx`: Logos/supporters list (apply dark variants as needed).

Dark Mode
---------

- Cards: `bg-white dark:bg-slate-800` and `border-slate-200 dark:border-slate-700`.
- Titles: `text-slate-900 dark:text-white`.
- Descriptions: `text-slate-600 dark:text-slate-300`.

Financial Partners
------------------

- Add logos under `public/partners/` as SVG/PNG.
- Update `src/components/FinancialPartners.tsx` list with `{ name, role, href, logo }`.
- Razorpay’s SVG embeds a white background rect to preserve logo fidelity in dark mode; the card still follows theme.

Store Buttons (Radlo)
---------------------

- Usage:
  - `GooglePlayButton` and `AppStoreButton` from `components/mobile-app-button`.
  - Props: `url` (string), `width`/`height` (number), `theme` ('light'|'dark').

