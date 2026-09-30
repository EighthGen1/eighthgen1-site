export interface PortfolioItem {
  label: string
  title: string
  text: string
  tags: string[]
}

export const portfolioItems: PortfolioItem[] = [
  {
    label: 'SELF-BUILT DEMO',
    title: 'Headless Shopify Storefront',
    text:
      'A sample DTC storefront built on Hydrogen to show checkout speed and mobile UX.',
    tags: ['Hydrogen', 'Tailwind'],
  },
  {
    label: 'SELF-BUILT DEMO',
    title: 'Custom Full-Stack Storefront',
    text:
      'A Next.js + Postgres storefront with a custom admin, built to show what “off the shelf isn’t enough” looks like.',
    tags: ['Next.js', 'Postgres'],
  },
  {
    label: 'SELF-BUILT DEMO',
    title: 'Ops Dashboard',
    text:
      'An internal tool concept: order tracking, inventory alerts, and revenue views in one place.',
    tags: ['React', 'Recharts'],
  },
]