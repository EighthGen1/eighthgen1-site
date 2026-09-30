export interface Service {
  title: string
  description: string
  tags: string[]
}

export const services: Service[] = [
  {
    title: 'Shopify Development',
    description:
      'Custom themes, headless builds, and app integrations tuned for conversion.',
    tags: ['Liquid', 'Hydrogen'],
  },
  {
    title: 'Custom Full-Stack',
    description:
      'Bespoke storefronts and back-office tooling when off-the-shelf is not enough.',
    tags: ['Next.js', 'Node'],
  },
  {
    title: 'Web Applications',
    description:
      'Dashboards, portals, and internal tools built to your workflow.',
    tags: ['React', 'Postgres'],
  },
  {
    title: 'Maintenance & Optimization',
    description:
      'Performance audits, uptime monitoring, and ongoing feature work.',
    tags: ['Core Web Vitals'],
  },
]