import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your name.')
    .max(100, 'Name must be less than 100 characters.'),

  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.')
    .max(150, 'Email must be less than 150 characters.'),

  details: z
    .string()
    .trim()
    .min(
      20,
      'Please provide at least 20 characters about your project.',
    )
    .max(
      2000,
      'Project details must be less than 2000 characters.',
    ),
})

export type ContactFormData = z.infer<
  typeof contactSchema
>