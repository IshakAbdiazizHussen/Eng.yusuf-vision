import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import {
  CalendarDays,
  ChevronDown,
  Mail,
  MapPin,
  MessageSquareText,
} from "lucide-react"
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6"
import { ContactForm } from "@/components/contact-form"
import { PageFrame } from "@/components/page-frame"

const faqs = [
  "Do you accept product review requests?",
  "How long does it take to receive a response?",
  "Do you collaborate with tech brands?",
]

const socialLinks = {
  youtube: "https://www.youtube.com/@engyuyu",
  tiktok: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  instagram: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  facebook: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
}

function InfoRow({
  icon,
  title,
  value,
  note,
}: {
  icon: ReactNode
  title: string
  value: string
  note?: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#4c98ff_0%,#2d72eb_100%)] text-white shadow-[0_8px_18px_rgba(48,112,239,0.2)]">
        {icon}
      </div>
      <div>
        <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#7d8799] dark:text-[#9ab0d9]">
          {title}
        </p>
        <p className="mt-1 text-[18px] font-semibold leading-[1.4] text-[#1f2432] dark:text-white">
          {value}
        </p>
        {note ? (
          <p className="mt-1 text-[15px] leading-[1.5] text-[#8a92a3] dark:text-[#a9b7d3]">
            {note}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <PageFrame flushBottom>
      <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] mt-0 w-screen overflow-hidden bg-[#eef2fb] dark:bg-[#121829]">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_44%)]" />
          <div className="pointer-events-none absolute right-8 top-6 hidden lg:block">
            <div className="relative h-[300px] w-[360px]">
              <div className="absolute right-0 top-0 scale-[1.02] opacity-25">
                <div className="relative h-[220px] w-[252px] rounded-[34px] border border-white/10 bg-[#6ea0ff]/45 shadow-[0_20px_40px_rgba(120,168,255,0.18)]">
                  <div className="absolute left-1/2 top-[40px] h-[20px] w-[136px] -translate-x-1/2 rounded-full bg-white/35" />
                  <div className="absolute left-[52px] top-[100px] h-[20px] w-[104px] rounded-full bg-white/28" />
                  <div className="absolute bottom-[-20px] right-[24px] h-[110px] w-[156px] rotate-[34deg] rounded-[30px] border border-white/8 bg-[#8ab1ff]/38" />
                </div>
              </div>

              <div className="absolute right-[72px] top-[26px] opacity-95">
                <div className="relative h-[220px] w-[252px] rounded-[34px] bg-gradient-to-b from-[#2f86ff] to-[#1f6ae8] shadow-[0_22px_42px_rgba(26,92,228,0.34)]">
                  <div className="absolute left-1/2 top-[40px] h-[20px] w-[136px] -translate-x-1/2 rounded-full bg-white/85 shadow-[0_6px_14px_rgba(255,255,255,0.2)]" />
                  <div className="absolute left-1/2 top-[98px] h-[20px] w-[136px] -translate-x-1/2 rounded-full bg-white/85 shadow-[0_6px_14px_rgba(255,255,255,0.2)]" />
                  <div className="absolute left-1/2 top-[156px] h-[20px] w-[136px] -translate-x-1/2 rounded-full bg-white/85 shadow-[0_6px_14px_rgba(255,255,255,0.2)]" />
                  <div className="absolute bottom-[-18px] left-[112px] h-[112px] w-[62px] -skew-x-[28deg] rounded-b-[26px] rounded-t-[10px] bg-gradient-to-b from-[#2878f5] to-[#1d67e4] shadow-[0_16px_26px_rgba(24,95,224,0.38)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-[900px] text-center">
            <h1 className="text-[44px] font-bold tracking-[-0.04em] text-white sm:text-[64px]">
              Contact Eng Yuyu
            </h1>
            <p className="mx-auto mt-7 max-w-[860px] text-[18px] font-medium leading-[1.9] text-white/95 sm:text-[20px]">
              Have a business inquiry, collaboration opportunity, or
              tech-related question?
              <br className="hidden sm:block" /> Feel free to reach out. I
              usually respond within 24 - 48 hours.
            </p>
          </div>
        </div>

        <div className="relative px-6 py-14 sm:px-10 lg:px-16 lg:py-18">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div
              className="absolute bottom-0 left-0 right-0 top-[44%]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(96,126,184,0.14) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[940px]">
            <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
              <section className="rounded-[28px] border border-white/65 bg-white px-7 py-8 shadow-[0_18px_48px_rgba(42,72,130,0.08)] dark:border-[#283554] dark:bg-[#182033] dark:shadow-[0_18px_48px_rgba(3,7,20,0.45)] sm:px-8 sm:py-9">
                <h2 className="text-[34px] font-semibold tracking-[-0.04em] text-[#1b2232] dark:text-white">
                  Send a Message
                </h2>
                <ContactForm />
              </section>

              <aside className="h-fit rounded-[28px] border border-white/65 bg-white px-7 py-8 shadow-[0_18px_48px_rgba(42,72,130,0.08)] dark:border-[#283554] dark:bg-[#182033] dark:shadow-[0_18px_48px_rgba(3,7,20,0.45)] sm:px-8 sm:py-9">
                <h2 className="text-[34px] font-semibold tracking-[-0.04em] text-[#1b2232] dark:text-white">
                  Direct Contact
                </h2>

                <div className="mt-8 space-y-7">
                  <InfoRow
                    icon={<Mail className="h-5 w-5" />}
                    title="Email"
                    value="contact@engyuyuu.com"
                  />
                  <InfoRow
                    icon={<MessageSquareText className="h-5 w-5" />}
                    title="Business"
                    value="Business@engyuyuyu.com"
                    note="Business inquiries ,admin"
                  />
                  
                </div>

                <Link
                  href="mailto:contact@engyuyuu.com?subject=Book%20a%20Call"
                  className="mt-9 inline-flex h-16 w-full items-center justify-center gap-3 rounded-[16px] bg-[linear-gradient(90deg,#264d9d_0%,#1d3777_100%)] px-6 text-[18px] font-semibold text-white shadow-[0_18px_30px_rgba(31,60,125,0.28)] transition hover:translate-y-[-1px]"
                >
                  <CalendarDays className="h-5 w-5" />
                  Book a Call
                </Link>
              </aside>
            </div>

            <section className="mt-6 rounded-[28px] border border-white/65 bg-white px-7 py-8 shadow-[0_18px_48px_rgba(42,72,130,0.08)] dark:border-[#283554] dark:bg-[#182033] dark:shadow-[0_18px_48px_rgba(3,7,20,0.45)] sm:px-8 sm:py-9">
              <h2 className="text-[34px] font-semibold tracking-[-0.04em] text-[#1b2232] dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-[18px] leading-[1.6] text-[#8c93a4] dark:text-[#aab8d4]">
                Follow Eng Yuyu for daily tech tips and updates.
              </p>

              <div className="mt-8 space-y-4">
                {faqs.map((question) => (
                  <details
                    key={question}
                    className="group rounded-[16px] border border-[#e8ebf3] bg-[#fbfcff] px-5 py-4 text-[#202636] shadow-[0_4px_18px_rgba(33,57,103,0.04)] dark:border-[#2d3a57] dark:bg-[#1b253b] dark:text-white"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[18px] font-semibold leading-[1.5]">
                      {question}
                      <span className="flex h-8 w-8 items-center justify-center rounded-full text-[#a0a7b5] transition group-open:rotate-180 dark:text-[#8ea0c4]">
                        <ChevronDown className="h-5 w-5" />
                      </span>
                    </summary>
                    <p className="pt-3 text-[16px] leading-[1.7] text-[#7d8799] dark:text-[#aab8d4]">
                      Reach out through the form or direct email and we&apos;ll
                      get back to you with the right next step as soon as
                      possible.
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>

        <footer className="relative overflow-hidden bg-[linear-gradient(90deg,#0d63ff_0%,#1f6fff_35%,#1e5cf6_100%)] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-18">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
            <Image
              src="/Eng Yuyu Logo-21.png"
              alt="Eng Yuyu logo"
              width={160}
              height={110}
              className="h-[88px] w-auto object-contain brightness-0 invert"
            />

            <p className="mt-6 max-w-[760px] text-[18px] leading-[1.7] text-white/92">
              Learn technology. Build the future. Stay connected with Eng Yuyu.
            </p>

            <div className="mt-8 flex items-center gap-5 text-[28px]">
              <Link
                href={socialLinks.youtube}
                aria-label="YouTube"
                className="social-icon-float-1 transition hover:scale-110"
              >
                <FaYoutube />
              </Link>
              <Link
                href={socialLinks.facebook}
                aria-label="Facebook"
                className="social-icon-float-2 transition hover:scale-110"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={socialLinks.tiktok}
                aria-label="TikTok"
                className="social-icon-float-3 transition hover:scale-110"
              >
                <FaTiktok />
              </Link>
              <Link
                href={socialLinks.instagram}
                aria-label="Instagram"
                className="social-icon-float-4 transition hover:scale-110"
              >
                <FaInstagram />
              </Link>
            </div>

            <p className="mt-10 text-[15px] text-white/80">
              © 2024 Eng Yuyu Media - All Rights Reserved.
            </p>
          </div>
        </footer>
      </section>
    </PageFrame>
  )
}
