"use client"

import type { FormEvent } from "react"
import { useState } from "react"

type ContactField =
  | "firstName"
  | "lastName"
  | "email"
  | "subject"
  | "message"

type SubmitState = {
  status: "idle" | "success" | "error"
  message: string
}

const idleState: SubmitState = {
  status: "idle",
  message: "",
}

async function submitForm(payload: Record<string, string>) {
  const response = await fetch("/api/forms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  const contentType = response.headers.get("content-type") || ""
  const result = contentType.includes("application/json")
    ? await response.json()
    : { message: "Submission failed." }

  if (!response.ok) {
    throw new Error(result.message || "Submission failed.")
  }

  return result.message as string
}

function validateContactForm(formData: FormData) {
  const errors: Partial<Record<ContactField, string>> = {}

  const values = {
    firstName: String(formData.get("firstName") || "").trim(),
    lastName: String(formData.get("lastName") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    subject: String(formData.get("subject") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  }

  if (!values.firstName) {
    errors.firstName = "This field is required."
  }

  if (!values.lastName) {
    errors.lastName = "This field is required."
  }

  if (!values.email) {
    errors.email = "This field is required."
  }

  if (!values.subject) {
    errors.subject = "This field is required."
  }

  if (!values.message) {
    errors.message = "This field is required."
  }

  return { errors, values }
}

function statusClass(status: SubmitState["status"]) {
  if (status === "success") {
    return "text-[#0f8a3b] dark:text-[#71f0a0]"
  }

  if (status === "error") {
    return "text-[#d93025] dark:text-[#ff9f9a]"
  }

  return "text-transparent"
}

export function ContactMessageForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [state, setState] = useState<SubmitState>(idleState)
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({})

  function inputClass(hasError: boolean) {
    return `mt-2 h-[44px] w-full rounded-[10px] border bg-[#f2f4f7] px-10 text-[12px] text-black outline-none placeholder:text-[#8b8b8b] ${
      hasError ? "border-[#ff2b1d]" : "border-[#e3e3e3]"
    }`
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { errors: nextErrors, values } = validateContactForm(formData)

    setErrors(nextErrors)
    setState(idleState)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    try {
      const message = await submitForm({
        kind: "contact",
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        subject: values.subject,
        message: values.message,
      })

      setState({ status: "success", message })
      setErrors({})
      form.reset()
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "Submission failed.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      id="contact-message-form"
      onSubmit={handleSubmit}
      className="mt-6 space-y-4"
      noValidate
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#e7eefc]">
            First Name <span className="text-[#ef4444]">*</span>
          </span>
          <input
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="First name here"
            className={inputClass(Boolean(errors.firstName))}
          />
          <p className="mt-2 min-h-[20px] text-[12px] font-semibold text-[#ff2b1d]">
            {errors.firstName || " "}
          </p>
        </label>
        <label className="block">
          <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#e7eefc]">
            Last Name <span className="text-[#ef4444]">*</span>
          </span>
          <input
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Last name here"
            className={inputClass(Boolean(errors.lastName))}
          />
          <p className="mt-2 min-h-[20px] text-[12px] font-semibold text-[#ff2b1d]">
            {errors.lastName || " "}
          </p>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#e7eefc]">
            Email Address <span className="text-[#ef4444]">*</span>
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Add email"
            className={inputClass(Boolean(errors.email))}
          />
          <p className="mt-2 min-h-[20px] text-[12px] font-semibold text-[#ff2b1d]">
            {errors.email || " "}
          </p>
        </label>
        <label className="block">
          <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#e7eefc]">
            Subject <span className="text-[#ef4444]">*</span>
          </span>
          <input
            name="subject"
            type="text"
            placeholder="How can we help you?"
            className={inputClass(Boolean(errors.subject))}
          />
          <p className="mt-2 min-h-[20px] text-[12px] font-semibold text-[#ff2b1d]">
            {errors.subject || " "}
          </p>
        </label>
      </div>

      <label className="block">
        <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#e7eefc]">
          Comments / Questions <span className="text-[#ef4444]">*</span>
        </span>
        <textarea
          name="message"
          placeholder="Comments"
          className={`mt-2 h-[188px] w-full resize-none rounded-[10px] border bg-[#f2f4f7] px-10 py-6 text-[12px] text-black outline-none placeholder:text-[#8b8b8b] ${
            errors.message ? "border-[#ff2b1d]" : "border-[#e3e3e3]"
          }`}
        />
        <p className="mt-2 min-h-[20px] text-[12px] font-semibold text-[#ff2b1d]">
          {errors.message || " "}
        </p>
      </label>

      <div className="flex flex-col items-start gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-[58px] items-center justify-center rounded-[12px] bg-[#3c6df4] px-11 text-[16px] font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        <p
          aria-live="polite"
          className={`min-h-[18px] text-[12px] ${statusClass(state.status)}`}
        >
          {state.message || " "}
        </p>
      </div>
    </form>
  )
}

export function NewsletterSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [state, setState] = useState<SubmitState>(idleState)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setState(idleState)

    try {
      const form = event.currentTarget
      const formData = new FormData(form)
      const message = await submitForm({
        kind: "newsletter",
        email: String(formData.get("email") || ""),
      })

      setState({ status: "success", message })
      form.reset()
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "Submission failed.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      id="newsletter-signup-form"
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
    >
      <input
        name="email"
        type="email"
        required
        autoComplete="email"
        maxLength={120}
        placeholder="Email"
        className="h-[48px] w-full rounded-[2px] border border-[#e2e2e2] bg-[#f7f7f5] px-4 text-[14px] text-black outline-none placeholder:text-[#676767] sm:max-w-[360px]"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-[48px] min-w-[84px] items-center justify-center rounded-[4px] bg-[#156ff3] px-6 text-[16px] font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
      <p
        aria-live="polite"
        className={`min-h-[18px] text-[12px] sm:basis-full ${statusClass(
          state.status,
        )}`}
      >
        {state.message || " "}
      </p>
    </form>
  )
}
