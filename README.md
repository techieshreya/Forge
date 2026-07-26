# Forge Docs

**A hand-sketched, illustrative documentation portal built with Next.js and Tailwind CSS.**

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## Overview

Forge Docs is the front end for a developer documentation portal with a distinctive "sketchbook" aesthetic — bold ink borders, offset sketch shadows, and playful hover interactions instead of the usual flat corporate docs look. It ships a full landing experience (topic navigation, featured guides, community sections) plus matching login and sign-up flows, all fully responsive with light and dark themes.

## Features

- **Illustrated docs landing page** — sticky header with a hover-reveal "Resources" mega-menu (Introduction, Quick Start, Core Concepts, API Reference, Cookbook, Integrations), topic exploration grid, featured cards for the Quick Start Guide, API Reference, and Cookbook, plus Community Forum and Forge Academy sections
- **Custom "sketch" design system** — hand-drawn look built with Tailwind CSS 4 utilities: 2px ink borders, layered sketch shadows, and translate-on-hover button physics
- **Dark mode throughout** — every surface has paired light/dark styling
- **Auth UI** — dedicated `/login` and `/signup` pages sharing a reusable `AuthLayout` with testimonial illustration panels, icon-adorned form inputs, and social auth buttons
- **Reusable component library** — typed `Button` and `Input` primitives using `class-variance-authority`, `clsx`, and `tailwind-merge`, with iconography from `lucide-react`

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| UI | React 19, TypeScript 5.9 |
| Styling | Tailwind CSS 4, tw-animate-css, custom sketch-shadow design tokens |
| Icons | lucide-react |
| Animation | Motion |
| Tooling | ESLint 9, PostCSS |

## Project Structure

```
app/
  page.tsx          # Docs landing page
  login/page.tsx    # Login screen
  signup/page.tsx   # Sign-up screen
  layout.tsx        # Root layout
components/
  auth/             # AuthLayout, SocialAuth
  ui/               # Button, Input primitives
lib/utils.ts        # cn() class-merge helper
hooks/use-mobile.ts # Responsive breakpoint hook
```

## Getting Started

**Prerequisites:** Node.js 20+

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build   # Production build
npm start       # Serve the production build
npm run lint    # Lint with ESLint
```

### Environment Variables

The UI itself requires no environment variables to run. The scaffold includes a `.env.example` (`GEMINI_API_KEY`, `APP_URL`) carried over from its Google AI Studio origins for future AI-powered features — copy it to `.env.local` if you plan to build on those.

## License

No license file is currently included; all rights reserved by the author.
