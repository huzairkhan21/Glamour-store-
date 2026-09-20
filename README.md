# GLAMOUR — Premium E-commerce Prototype

A mobile-first Next.js + TypeScript + Tailwind storefront with reusable product data, responsive navigation, category/search/price filtering, sorting, product detail pages, persistent cart, checkout request flow, and WhatsApp ordering.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production integration points
- Replace `lib/products.ts` with Supabase/Firebase-backed repository methods.
- Protect `/admin` with real authentication and server-side authorization.
- Replace the demo WhatsApp number `919999999999` in `components/CartUI.tsx`, `components/ProductActions.tsx`, `components/Home.tsx`, and `app/layout.tsx`.
- Connect a payment provider behind the checkout submit handler; keep payment credentials server-side.
- Add real store address, hours, policies, shipping/returns, legal pages, and real product photography.
- Configure `next/image` remote patterns or move images into `/public` / a CDN.
- Add analytics and structured product schema before launch.
