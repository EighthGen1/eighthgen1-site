import type {
  ContactSubmissionPayload,
  FormSubmitResponse,
} from '../types/contact.types'

export async function submitContactForm(
  payload: ContactSubmissionPayload,
): Promise<FormSubmitResponse> {
  const contactEmail =
    import.meta.env.VITE_CONTACT_EMAIL ||
    'contact@eighthgen1.com'

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(contactEmail)}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        project_details: payload.project_details,
        budget: payload.budget,
        _subject: 'New EightGenOne project inquiry',
        _template: 'table',
      }),
    },
  )

  const result = (await response.json()) as FormSubmitResponse

  if (
    !response.ok ||
    result.success === false ||
    result.success === 'false'
  ) {
    throw new Error(
      result.message || 'The inquiry could not be sent.',
    )
  }

  return result
}