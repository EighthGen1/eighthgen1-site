import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('EightGen1 landing page', () => {
  it('renders the main hero and navigation', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /we build the storefronts your growth depends on/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get a quote/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })

  it('allows selecting a budget option from the contact form', async () => {
    const user = userEvent.setup()
    render(<App />)

    const budgetChip = screen.getByRole('button', { name: /\$15k–40k/i })
    await user.click(budgetChip)

    expect(budgetChip).toHaveAttribute('aria-pressed', 'true')
  })

  it('submits the contact form and shows success state', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText(/name/i), 'Ava Taylor')
    await user.type(screen.getByLabelText(/email/i), 'ava@example.com')
    await user.type(screen.getByLabelText(/project details/i), 'Need a premium storefront for a new DTC brand.')
    await user.click(screen.getByRole('button', { name: /send inquiry/i }))

    expect(screen.getByText(/thanks — we'll be in touch within one business day/i)).toBeInTheDocument()
  })
})
