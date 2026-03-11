"use client"

import { useState } from "react"

const socialLinks = [
  "https://www.youtube.com/@engyuyu",
  "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
  "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
]

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedEmail = email.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(trimmedEmail)) {
      setStatus("error")
      setMessage("Please enter a valid email address.")
      return
    }

    setIsSubmitting(true)

    await new Promise((resolve) => window.setTimeout(resolve, 700))

    window.localStorage.setItem("eng-yuyu-newsletter-email", trimmedEmail)
    socialLinks.forEach((link) => {
      window.open(link, "_blank", "noopener,noreferrer")
    })
    setStatus("success")
    setMessage("Subscribed successfully. Social pages opened in new tabs so you can follow them.")
    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <div>
      <form className="mt-8 flex flex-col gap-4 md:flex-row" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            if (status !== "idle") {
              setStatus("idle")
              setMessage("")
            }
          }}
          placeholder="Your Email"
          className="h-[72px] w-full rounded-[18px] bg-white px-7 text-[24px] font-semibold text-black outline-none placeholder:text-[#8f8f8f] md:max-w-[520px]"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-[72px] min-w-[220px] items-center justify-center rounded-[18px] bg-[#1d6cff] px-8 text-2xl font-bold leading-none text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 md:min-w-[300px]"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {message ? (
        <p
          className={`mt-4 text-[16px] font-semibold ${
            status === "success"
              ? "text-[#1d6cff] dark:text-[#8ec0ff]"
              : "text-[#c73636] dark:text-[#ff9c9c]"
          }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  )
}
