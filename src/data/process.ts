export interface TrustStat {
  value: string
  label: string
}

export interface ProcessStep {
  number: string
  title: string
  text: string
}

export const trustStats: TrustStat[] = [
  {
    value: '24hr',
    label: 'Response time on new inquiries',
  },
  {
    value: '99.9%',
    label: 'Uptime on monitored client sites',
  },
  {
    value: 'Weekly',
    label: 'Progress updates during every build',
  },
  {
    value: 'Fixed-fee',
    label: 'Quotes — no surprise invoices',
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    text:
      'Scope, stack, and success metrics agreed before any code is written.',
  },
  {
    number: '02',
    title: 'Build',
    text:
      'Weekly demos so you are never surprised at launch.',
  },
  {
    number: '03',
    title: 'Launch',
    text:
      'Performance and payment-flow testing before go-live.',
  },
  {
    number: '04',
    title: 'Support',
    text:
      'Monitoring and fixes covered after launch.',
  },
]

export const technologyStack = [
  'Next.js',
  'React',
  'Shopify Hydrogen',
  'Node',
  'Postgres',
  'Stripe',
]