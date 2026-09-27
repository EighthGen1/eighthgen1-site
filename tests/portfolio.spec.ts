import { expect, test } from '@playwright/test'

test.describe('EightGen1 portfolio', () => {
  test('renders the key sections and navigation flow', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: /we build the storefronts your growth depends on/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /services/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /view our work/i })).toBeVisible()

    await page.getByRole('link', { name: /view our work/i }).click()
    await expect(page.locator('#work')).toBeVisible()
  })

  test('validates contact form success state', async ({ page }) => {
    await page.goto('/')

    await page.getByLabel('Name').fill('Jordan Lee')
    await page.getByLabel('Email').fill('jordan@example.com')
    await page.getByLabel('Project details').fill('Need a premium website for our e-commerce expansion.')
    await page.getByRole('button', { name: /send inquiry/i }).click()

    await expect(page.getByText(/thanks — we'll be in touch within one business day/i)).toBeVisible()
  })
})
