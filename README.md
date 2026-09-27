# EightGen1 Portfolio

A modern React + TypeScript portfolio for an e-commerce and software engineering studio.

## Stack

- Vite + React + TypeScript
- Vitest + Testing Library for unit tests
- Playwright for E2E validation
- CSS custom properties for a clean dark design system

## Scripts

```bash
npm install
npm run dev
npm run build
npm run test
npm run test:e2e
```

## Production setup

1. Copy `.env.example` to `.env.local` and fill in the values required by your hosting and email provider.
2. Add your domain DNS records and set the Vite public URL.
3. Connect your contact form endpoint or email integration.
4. Deploy to your preferred static host (Vercel, Netlify, Cloudflare Pages, Vercel + custom domain).

## Launch checklist

- [ ] Set up a production domain and DNS records
- [ ] Configure analytics (Google Analytics / GA4)
- [ ] Connect contact form or email service
- [ ] Add SEO metadata and social share tags
- [ ] Set up uptime/monitoring for production
- [ ] Confirm CSP and deployment environment variables

## Required external accounts

- Email service such as Resend, SendGrid, or Brevo
- Form endpoint or serverless function for processing inquiries
- Google Analytics or other site analytics account
- Domain registrar + DNS host for custom domains
