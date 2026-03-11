"use client"

import { useState } from "react"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
    if (status !== "idle") {
      setStatus("idle")
      setMessage("")
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    }

    const hasEmptyField = Object.values(trimmedData).some((value) => value.length === 0)

    if (hasEmptyField) {
      setStatus("error")
      setMessage("Please complete all required fields.")
      return
    }

    if (!emailPattern.test(trimmedData.email)) {
      setStatus("error")
      setMessage("Please enter a valid email address.")
      return
    }

    setIsSubmitting(true)

    const body = [
      `First Name: ${trimmedData.firstName}`,
      `Last Name: ${trimmedData.lastName}`,
      `Email: ${trimmedData.email}`,
      "",
      trimmedData.message,
    ].join("\n")

    const mailtoLink = `mailto:engyuyu.contact@gmail.com?subject=${encodeURIComponent(trimmedData.subject)}&body=${encodeURIComponent(body)}`

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
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    })
    setStatus("success")
    setMessage("Your email app has been opened with the message ready to send.")
    setIsSubmitting(false)
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#f5f7ff]">
            First Name <span className="text-[#ef4444]">*</span>
          </span>
          <input
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            placeholder="First name here"
            className="mt-2 h-[44px] w-full rounded-[6px] border border-[#e3e3e3] bg-[#f2f4f7] px-4 text-[12px] text-black outline-none placeholder:text-[#8b8b8b] dark:border-[#8f9de8] dark:bg-[#4f4b73] dark:text-[#ffffff] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#aab4e8]"
          />
        </label>

        <label className="block">
          <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#f5f7ff]">
            Last Name <span className="text-[#ef4444]">*</span>
          </span>
          <input
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            placeholder="Last name here"
            className="mt-2 h-[44px] w-full rounded-[6px] border border-[#e3e3e3] bg-[#f2f4f7] px-4 text-[12px] text-black outline-none placeholder:text-[#8b8b8b] dark:border-[#8f9de8] dark:bg-[#4f4b73] dark:text-[#ffffff] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#aab4e8]"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#f5f7ff]">
            Email Address <span className="text-[#ef4444]">*</span>
          </span>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="Add email"
            className="mt-2 h-[44px] w-full rounded-[6px] border border-[#e3e3e3] bg-[#f2f4f7] px-4 text-[12px] text-black outline-none placeholder:text-[#8b8b8b] dark:border-[#8f9de8] dark:bg-[#4f4b73] dark:text-[#ffffff] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#aab4e8]"
          />
        </label>

        <label className="block">
          <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#f5f7ff]">
            Subject <span className="text-[#ef4444]">*</span>
          </span>
          <input
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            placeholder="How can we help you?"
            className="mt-2 h-[44px] w-full rounded-[6px] border border-[#e3e3e3] bg-[#f2f4f7] px-4 text-[12px] text-black outline-none placeholder:text-[#8b8b8b] dark:border-[#8f9de8] dark:bg-[#4f4b73] dark:text-[#ffffff] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#aab4e8]"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#f5f7ff]">
          Comments / Questions <span className="text-[#ef4444]">*</span>
        </span>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Comments"
          className="mt-2 h-[140px] w-full resize-none rounded-[6px] border border-[#e3e3e3] bg-[#f2f4f7] px-4 py-3 text-[12px] text-black outline-none placeholder:text-[#8b8b8b] dark:border-[#8f9de8] dark:bg-[#4f4b73] dark:text-[#ffffff] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#aab4e8]"
        />
      </label>

      <div className="flex items-start gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-[42px] items-center justify-center rounded-[6px] border border-[#4d9dff] bg-[#156ff3] px-6 text-[12px] font-semibold text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 dark:border-[#6cb7ff] dark:bg-[linear-gradient(180deg,#3493ff_0%,#1f73ff_100%)] dark:shadow-[0_10px_24px_rgba(47,134,255,0.42)]"
        >
          {isSubmitting ? "Opening..." : "Send Message"}
        </button>

        {message ? (
          <p
            className={`max-w-[320px] text-[12px] font-semibold leading-[1.45] ${
              status === "success"
                ? "text-[#156ff3] dark:text-[#8ec0ff]"
                : "text-[#c73636] dark:text-[#ff9c9c]"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  )
}
