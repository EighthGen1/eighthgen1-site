import type { BudgetMap } from '../types/contact.types'

export const budgetRanges: BudgetMap = {
  USD: [
    '$5k–15k',
    '$15k–40k',
    '$40k+',
    'Not sure yet',
  ],

  EUR: [
    '€5k–14k',
    '€14k–37k',
    '€37k+',
    'Not sure yet',
  ],

  GBP: [
    '£4k–12k',
    '£12k–32k',
    '£32k+',
    'Not sure yet',
  ],

  INR: [
    '₹4L–12L',
    '₹12L–35L',
    '₹35L+',
    'Not sure yet',
  ],
}

export const currencies = [
  {
    value: 'USD',
    label: 'USD $',
  },
  {
    value: 'EUR',
    label: 'EUR €',
  },
  {
    value: 'GBP',
    label: 'GBP £',
  },
  {
    value: 'INR',
    label: 'INR ₹',
  },
]

export const DEFAULT_CURRENCY = 'USD'

export const DEFAULT_BUDGET = '$15k–40k'