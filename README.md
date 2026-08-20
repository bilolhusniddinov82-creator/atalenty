# Attestly

An online notary platform frontend, built with Next.js 15 (App Router),
React 19, TypeScript, and Tailwind CSS.

## What's real vs. mocked

This is a complete, working **frontend**, now with working (but
browser-local) accounts. To be upfront about what's actually wired up:

- **Real:** every page and component renders, is responsive, validates
  its own forms (Zod + React Hook Form), and is written in ordinary
  React/TypeScript with no placeholder JSX. Sign-up and login
  (`lib/auth/provider.tsx`) genuinely create an account, hash the
  password with `bcryptjs` before it's stored, persist a session, and
  protect `/dashboard` (redirects to `/login` if signed out) — all of
  this actually works end to end.
- **Important limitation:** accounts live in this **browser's
  `localStorage`**, not a server. There is no database, no server-side
  session, and no real security boundary — anyone with access to this
  browser profile can read the stored (hashed) credentials via dev
  tools, and accounts don't sync across devices or survive clearing
  site data. This is meaningfully better than a fake "demo" notice, but
  it is not production auth.
- **Still mocked:** payment processing and video/identity-verification
  integration. Booking and contact form submissions call the server
  actions in `/actions`, which validate input and return a canned
  response — they don't persist anything server-side.
  `prisma/schema.prisma` sketches the data model but isn't connected to
  a live database.

Wiring up real, production auth means: pointing `DATABASE_URL` at a
Postgres instance, running `npx prisma generate` / `npx prisma migrate
dev`, and replacing `lib/auth/provider.tsx` with a real server-side
auth provider (e.g. NextAuth backed by Prisma) so sessions live behind
an actual server instead of in the browser. Payments, video calls, and
ID verification would need their own vendor accounts (Stripe, a video
SDK, an identity-verification provider) — none of that is stubbed in,
since fake versions of those would be actively misleading.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/               Route segments (App Router). One folder per page.
  page.tsx         Home
  about/           About
  contact/         Contact
  pricing/         Pricing
  login/           Log in
  register/        Create account
  book/            Booking form
  notaries/        Browse notaries
  dashboard/       Sample appointments dashboard
components/        UI building blocks, one per file
  ui/              Shared primitives (Button, GlassCard, FormField, ...)
hooks/             Client-side hooks (useReveal, useAuth, useLanguage, useTheme)
lib/               Utilities, Zod schemas, and the i18n/theme/auth providers
  auth/            Browser-local auth (localStorage + bcryptjs — see above)
  i18n/            UZ/RU/EN translations and language provider
  theme/           Light/Dark/System theme provider
actions/           Server actions for booking/contact (mocked — see above)
constants/         Static/sample data that feeds the UI
types/             Shared TypeScript types
prisma/            Draft schema for a real backend (not yet connected)
```

## Design

Deep indigo/violet aurora background behind glass-panel surfaces, with a
single warm gold accent reserved for the wax-seal signature mark and the
highlighted pricing plan. Type pairing: Fraunces (display), Inter (body),
IBM Plex Mono (timestamps, document IDs, labels).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint
