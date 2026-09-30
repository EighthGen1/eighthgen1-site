import {
  type ChangeEvent,
  type FormEvent,
  useState,
} from 'react'

import {
  budgetRanges,
  DEFAULT_BUDGET,
  DEFAULT_CURRENCY,
} from '../data/pricing'

import { submitContactForm } from '../services/contact.service'

import type {
  ContactFormData,
} from '../types/contact.types'

const defaultForm: ContactFormData = {
  name: '',
  email: '',
  details: '',
}

export function useContactForm() {
  const [currency, setCurrency] =
    useState(DEFAULT_CURRENCY)

  const [selectedBudget, setSelectedBudget] =
    useState(DEFAULT_BUDGET)

  const [formData, setFormData] =
    useState<ContactFormData>(defaultForm)

  const [isSubmitted, setIsSubmitted] =
    useState(false)

  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const [submissionError, setSubmissionError] =
    useState('')

  const budgetOptions =
    budgetRanges[currency] ??
    budgetRanges[DEFAULT_CURRENCY]

  const handleFieldChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { id, value } = event.target

    setFormData((current) => ({
      ...current,
      [id]: value,
    }))
  }

  const handleCurrencyChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    const nextCurrency = event.target.value

    setCurrency(nextCurrency)

    const nextBudget =
      budgetRanges[nextCurrency]?.[1] ??
      DEFAULT_BUDGET

    setSelectedBudget(nextBudget)
  }

  const handleBudgetChange = (
    budget: string,
  ) => {
    setSelectedBudget(budget)
  }

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    setIsSubmitting(true)
    setSubmissionError('')

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        project_details: formData.details,
        budget: selectedBudget,
      })

      setIsSubmitted(true)
    } catch {
      setSubmissionError(
        'We could not send your inquiry. Please try again or email contact@eighthgen1.com.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
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
  }
}