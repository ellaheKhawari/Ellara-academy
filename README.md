# Lingova — Language Learning Platform

A React + TypeScript + Vite site for a language-course business (English, Chinese,
Korean, Spanish, Persian): marketing landing page, mock authentication
(login / register / forgot password), and a student dashboard with charts.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router (routing + protected routes)
- Zustand (auth state) + TanStack React Query (server-state / mock API caching)
- TanStack Form (login/register/settings forms)
- MUI (`@mui/material`, `@mui/x-data-grid`) for the dashboard's data tables
- Recharts (dashboard + landing page charts)
- Framer Motion (scroll-reveal + micro-interactions) + `next-themes` (dark/light)
- `embla-carousel-react` (reviews carousel), `sonner` (toasts), `lucide-react` (icons)
- `js-cookie` (fake JWT storage), repository pattern in `src/services`

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

## Mock authentication

There is no real backend. `src/services/api/authApi.ts` simulates a backend
(login / register / forgot-password / me / logout) with artificial network
delay and a fake JWT, backed by `localStorage` as a "database". The token is
stored in a cookie (`src/services/repositories/authRepository.ts`), and a
Zustand store (`src/store/authStore.ts`) plus React Query hooks
(`src/hooks/useAuth.ts`) restore the session on refresh via a `/me`-style call.

**Demo account:** `demo@lingova.com` / `demo1234` — or just register a new
account, since data persists in your browser's localStorage.

## Structure

```
src/
  app/            # query client
  components/
    layout/       # Header, Footer, AuthLayout, DashboardLayout
    sections/      # landing page sections
    ui/            # Button, Input, ScrollReveal, LoadingPage
  hooks/          # useAuth (React Query hooks)
  i18n/           # English + Persian dictionaries, LanguageProvider (RTL switch)
  lib/            # cn() helper, mock content data
  pages/          # LandingPage, auth pages, dashboard pages
  routes/         # AppRouter, ProtectedRoute
  services/
    api/          # fake backend (authApi.ts)
    repositories/ # repository layer (authRepository.ts)
  store/          # zustand authStore
  types/          # shared TS types
```

## Notes

- Language: English is the default; use the "EN / FA" toggle in the header
  (or dashboard sidebar) to switch to Persian, which also flips the page to RTL.
- Theme: dark is the default; toggle with the sun/moon icon.
- Fully responsive: mobile, tablet, laptop, and large-monitor breakpoints.
