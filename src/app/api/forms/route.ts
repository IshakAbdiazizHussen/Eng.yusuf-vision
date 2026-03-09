import { appendFile, mkdir } from "node:fs/promises"
import path from "node:path"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

type ContactPayload = {
  kind: "contact"
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

type NewsletterPayload = {
  kind: "newsletter"
  email: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

function hasLengthInRange(value: string, min: number, max: number) {
  return value.length >= min && value.length <= max
}

async function saveSubmission(data: ContactPayload | NewsletterPayload) {
  const dataDir = path.join(process.cwd(), "data")
  const filePath = path.join(dataDir, "form-submissions.jsonl")

  await mkdir(dataDir, { recursive: true })
  await appendFile(
    filePath,
    `${JSON.stringify({ ...data, submittedAt: new Date().toISOString() })}\n`,
    "utf8",
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const kind = body?.kind

    if (kind === "contact") {
      const payload: ContactPayload = {
        kind,
        firstName: normalizeText(body.firstName),
        lastName: normalizeText(body.lastName),
        email: normalizeText(body.email),
        subject: normalizeText(body.subject),
        message: normalizeText(body.message),
      }

      if (
        !payload.firstName ||
        !payload.lastName ||
        !payload.email ||
        !payload.subject ||
        !payload.message
      ) {
        return NextResponse.json(
          { message: "Please complete all contact form fields." },
          { status: 400 },
        )
      }

      if (!isValidEmail(payload.email)) {
        return NextResponse.json(
          { message: "Please enter a valid email address." },
          { status: 400 },
        )
      }

      if (
        !hasLengthInRange(payload.firstName, 2, 60) ||
        !hasLengthInRange(payload.lastName, 2, 60) ||
        !hasLengthInRange(payload.subject, 2, 120) ||
        !hasLengthInRange(payload.message, 3, 1000)
      ) {
        return NextResponse.json(
          { message: "Please review the form fields and try again." },
          { status: 400 },
        )
      }

      await saveSubmission(payload)

      return NextResponse.json({
        message: "Your message has been sent successfully.",
      })
    }

    if (kind === "newsletter") {
      const payload: NewsletterPayload = {
        kind,
        email: normalizeText(body.email),
      }

      if (!payload.email) {
        return NextResponse.json(
          { message: "Please enter your email address." },
          { status: 400 },
        )
      }

      if (!isValidEmail(payload.email)) {
        return NextResponse.json(
          { message: "Please enter a valid email address." },
          { status: 400 },
        )
      }

      if (!hasLengthInRange(payload.email, 5, 120)) {
        return NextResponse.json(
          { message: "Please enter a valid email address." },
          { status: 400 },
        )
      }

      await saveSubmission(payload)

      return NextResponse.json({
        message: "You have been subscribed successfully.",
      })
    }

    return NextResponse.json(
      { message: "Unsupported form submission." },
      { status: 400 },
    )
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}
