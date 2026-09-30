import { useState } from 'react'
import type { FormEvent } from 'react'

import {
  currencies,
} from '../../data/pricing'

import { useContactForm } from '../../hooks/useContactForm'

import {
  contactSchema,
} from '../../schemas/contact.schema'

function ContactForm() {
  const {
    currency,
    selectedBudget,
    formData,
    isSubmitted,
    isSubmitting,
    submissionError,
    budgetOptions,
    handleFieldChange,
    handleCurrencyChange,
    handleBudgetChange,
    handleSubmit,
  } = useContactForm()

  const [validationErrors, setValidationErrors] =
    useState<{
      name?: string
      email?: string
      details?: string
      budget?: string
    }>({})

  const handleValidatedSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const result = contactSchema.safeParse({
      name: formData.name,
      email: formData.email,
      details: formData.details,
    })

    const errors: {
      name?: string
      email?: string
      details?: string
      budget?: string
    } = {}

    if (!result.success) {
      for (const issue of result.error.issues) {
        const field =
          issue.path[0]

        if (
          field === 'name' ||
          field === 'email' ||
          field === 'details'
        ) {
          errors[field] = issue.message
        }
      }
    }

    if (!selectedBudget) {
      errors.budget =
        'Please select a budget range.'
    }

    setValidationErrors(errors)

    if (Object.keys(errors).length > 0) {
      return
    }

    handleSubmit(event)
  }

  const getFieldError = (
    field:
      | 'name'
      | 'email'
      | 'details',
  ) => {
    return validationErrors[field]
  }

  return (
    <section
      id="contact"
      className="contact-section section-shell"
    >
      <div className="container contact-wrap">
        <h2>
          Tell us about your project
        </h2>

        <p className="contact-note">
          We reply within one business day. Prefer
          to talk first?{' '}
          <a href="#contact">
            Book a call →
          </a>
        </p>

        <form
          className="contact-form"
          onSubmit={handleValidatedSubmit}
          noValidate
        >
          <div className="field-grid">

            {/* NAME */}
            <div className="field-group">
              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={(event) => {
                  handleFieldChange(event)

                  if (
                    validationErrors.name
                  ) {
                    setValidationErrors(
                      (current) => ({
                        ...current,
                        name: undefined,
                      }),
                    )
                  }
                }}
                aria-invalid={
                  Boolean(
                    getFieldError('name'),
                  )
                }
                aria-describedby={
                  getFieldError('name')
                    ? 'name-error'
                    : undefined
                }
              />

              {getFieldError('name') ? (
                <p
                  id="name-error"
                  className="field-error"
                  role="alert"
                >
                  {getFieldError('name')}
                </p>
              ) : null}
            </div>

            {/* EMAIL */}
            <div className="field-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(event) => {
                  handleFieldChange(event)

                  if (
                    validationErrors.email
                  ) {
                    setValidationErrors(
                      (current) => ({
                        ...current,
                        email: undefined,
                      }),
                    )
                  }
                }}
                aria-invalid={
                  Boolean(
                    getFieldError('email'),
                  )
                }
                aria-describedby={
                  getFieldError('email')
                    ? 'email-error'
                    : undefined
                }
              />

              {getFieldError('email') ? (
                <p
                  id="email-error"
                  className="field-error"
                  role="alert"
                >
                  {getFieldError('email')}
                </p>
              ) : null}
            </div>
          </div>

          {/* BUDGET */}
          <div className="budget-block">
            <div className="budget-label-row">
              <label htmlFor="budgetSelect">
                Budget range
              </label>

              <select
                id="budgetSelect"
                name="currency"
                value={currency}
                onChange={(event) => {
                  handleCurrencyChange(event)
                }}
                className="currency-select mono"
              >
                {currencies.map((item) => (
                  <option
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div
              className="budget-group"
              aria-label="Budget options"
            >
              {budgetOptions.map(
                (budget) => (
                  <button
                    key={budget}
                    type="button"
                    className="chip tag mono"
                    aria-pressed={
                      selectedBudget ===
                      budget
                    }
                    onClick={() => {
                      handleBudgetChange(
                        budget,
                      )

                      if (
                        validationErrors.budget
                      ) {
                        setValidationErrors(
                          (current) => ({
                            ...current,
                            budget:
                              undefined,
                          }),
                        )
                      }
                    }}
                  >
                    {budget}
                  </button>
                ),
              )}
            </div>

            {validationErrors.budget ? (
              <p
                className="field-error"
                role="alert"
              >
                {validationErrors.budget}
              </p>
            ) : null}
          </div>

          {/* PROJECT DETAILS */}
          <div className="field-group">
            <label htmlFor="details">
              Project details
            </label>

            <textarea
              id="details"
              name="details"
              rows={4}
              value={formData.details}
              onChange={(event) => {
                handleFieldChange(event)

                if (
                  validationErrors.details
                ) {
                  setValidationErrors(
                    (current) => ({
                      ...current,
                      details:
                        undefined,
                    }),
                  )
                }
              }}
              aria-invalid={
                Boolean(
                  getFieldError('details'),
                )
              }
              aria-describedby={
                getFieldError('details')
                  ? 'details-error'
                  : undefined
              }
            />

            {getFieldError('details') ? (
              <p
                id="details-error"
                className="field-error"
                role="alert"
              >
                {getFieldError('details')}
              </p>
            ) : null}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="button button-primary submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? 'Sending…'
              : 'Send inquiry'}
          </button>

          {/* SUCCESS */}
          {isSubmitted ? (
            <p
              className="form-status mono"
              role="status"
            >
              Thanks — we'll be in touch within
              one business day.
            </p>
          ) : null}

          {/* SERVER ERROR */}
          {submissionError ? (
            <p
              className="form-status mono"
              role="alert"
            >
              {submissionError}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default ContactForm