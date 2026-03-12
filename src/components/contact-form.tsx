"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const inquiryOptions = [
  "Business Partnership",
  "Media / Interview Request",
  "Event Invitation",
  "Tech Support / Question",
  "Collaboration Opportunity",
  "Other Inquiry",
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    inquiryType: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
    if (status !== "idle") {
      setStatus("idle")
      setFeedback("")
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      inquiryType: formData.inquiryType.trim(),
      message: formData.message.trim(),
    }

    if (Object.values(trimmedData).some((value) => value.length === 0)) {
      setStatus("error")
      setFeedback("Please complete all fields before sending.")
      return
    }

    if (!emailPattern.test(trimmedData.email)) {
      setStatus("error")
      setFeedback("Please enter a valid email address.")
      return
    }

    setIsSubmitting(true)

    const body = [
      `Full Name: ${trimmedData.fullName}`,
      `Email: ${trimmedData.email}`,
      `Inquiry Type: ${trimmedData.inquiryType}`,
      "",
      trimmedData.message,
    ].join("\n")

    const mailtoLink = `mailto:contact@engyuyuu.com?subject=${encodeURIComponent(trimmedData.inquiryType)}&body=${encodeURIComponent(body)}`

    await new Promise((resolve) => window.setTimeout(resolve, 500))

    window.open(mailtoLink, "_self")
    window.localStorage.setItem(
      "eng-yuyu-contact-form",
      JSON.stringify({
        ...trimmedData,
        submittedAt: new Date().toISOString(),
      }),
    )

    setFormData({
      fullName: "",
      email: "",
      inquiryType: "",
      message: "",
    })
    setStatus("success")
    setFeedback("Your email app has been opened with the message ready to send.")
    setIsSubmitting(false)
  }

  return (
    <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
      <label className="block">
          <input
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Full Name"
            className="h-14 w-full rounded-[14px] border border-[#e5e7ef] bg-white px-5 text-[18px] text-[#1f2431] outline-none transition placeholder:text-[#b0b5c3] focus:border-[#4c88ff] dark:border-[#31405d] dark:bg-[#192238] dark:text-white dark:placeholder:text-[#8ea0c4]"
          />
      </label>

      <label className="block">
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="Email Address"
            className="h-14 w-full rounded-[14px] border border-[#e5e7ef] bg-white px-5 text-[18px] text-[#1f2431] outline-none transition placeholder:text-[#b0b5c3] focus:border-[#4c88ff] dark:border-[#31405d] dark:bg-[#192238] dark:text-white dark:placeholder:text-[#8ea0c4]"
          />
      </label>

      <label className="relative block">
        <select
          name="inquiryType"
          value={formData.inquiryType}
          onChange={(event) => updateField("inquiryType", event.target.value)}
          className="h-14 w-full appearance-none rounded-[14px] border border-[#e5e7ef] bg-white px-5 pr-14 text-[18px] font-medium text-[#1f2431] outline-none transition focus:border-[#4c88ff] dark:border-[#31405d] dark:bg-[#192238] dark:text-white"
        >
          <option value="" disabled>
            Select Inquiry Type
          </option>
          {inquiryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4c88ff]" />
      </label>

      <label className="block">
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Message"
          className="h-40 w-full resize-none rounded-[14px] border border-[#e5e7ef] bg-white px-5 py-4 text-[18px] text-[#1f2431] outline-none transition placeholder:text-[#b0b5c3] focus:border-[#4c88ff] dark:border-[#31405d] dark:bg-[#192238] dark:text-white dark:placeholder:text-[#8ea0c4]"
        />
      </label>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-14 min-w-[206px] items-center justify-center rounded-[14px] bg-[linear-gradient(90deg,#2b8cff_0%,#2865e7_100%)] px-8 text-[18px] font-semibold text-white shadow-[0_14px_30px_rgba(43,108,255,0.24)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_34px_rgba(43,108,255,0.3)] disabled:cursor-not-allowed disabled:opacity-80"
        >
          {isSubmitting ? "Opening..." : "Send Message"}
        </button>

        {feedback ? (
          <p
            className={`mt-4 max-w-[420px] text-sm font-medium ${
              status === "success"
                ? "text-[#2d6ff7] dark:text-[#8ab0ff]"
                : "text-[#c84040] dark:text-[#ffb0b0]"
            }`}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  )
}
