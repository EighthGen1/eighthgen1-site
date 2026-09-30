export type BudgetMap = Record<string, string[]>

export interface ContactFormData {
  name: string
  email: string
  details: string
}

export interface FormSubmitResponse {
  success?: boolean | string
  message?: string
}

export interface ContactSubmissionPayload {
  name: string
  email: string
  project_details: string
  budget: string
}