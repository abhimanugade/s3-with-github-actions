# React + Vite Multi-Route Starter

A small React app using Vite and React Router with Home, About, and Contact routes.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite, usually http://localhost:5173.

## Routes
- `/` — Home
- `/about` — About
- `/contact` — Contact

## Production build
```bash
npm run build
npm run preview
```

For deployment on a static host, configure SPA fallback/rewrites so direct requests to `/about` and `/contact` serve `index.html`.
