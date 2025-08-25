Src Overview
============

This folder contains the application code organized by Next.js conventions (pages) and reusable UI components.

Key Modules
-----------

- `pages/`: Route-based pages for the marketing site (Studio, Radlo, Eventlo, Shuttle Rover, etc.).
- `components/`: Reusable UI components used by pages.
- `layout/`: The app shell (`AppLayout`) that wraps every page with header and footer.
- `styles/`: Global Tailwind layers and CSS.
- `api/`: Thin wrappers over public HTTP endpoints.
- `data/`: Static types and data used in forms and UI.
- `theme/`: Theme-related helpers (if used in the future).

Conventions
-----------

- Tailwind-based styling with dark mode variants (`dark:`) where applicable.
- Feature sections use icons from `react-icons/io5` for consistency.
- Partner logos and imagery come from `public/` and are referenced via absolute `/...` paths.

