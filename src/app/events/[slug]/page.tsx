import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"
import { PageFrame } from "@/components/page-frame"
import { events, getEventBySlug } from "@/lib/events-data"

type EventPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }))
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    return {}
  }

  return {
    title: `${event.title} | Events & Media`,
    description: event.description,
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  return (
    <PageFrame flushBottom>
      <section className="mx-auto max-w-[1280px] px-4 pb-16 pt-8 sm:px-6">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f5] bg-white/90 px-4 py-2 text-[15px] font-semibold text-[#6a77a1] shadow-[0_8px_18px_rgba(31,55,113,0.05)] transition-colors hover:bg-[#f5f8ff] dark:border-[#31415c] dark:bg-[#1b2436] dark:text-[#b9caeb]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events & Media
        </Link>

        <div className="mt-8 grid gap-10 rounded-[36px] border border-[#e3e8f4] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-8 py-10 shadow-[0_24px_64px_rgba(31,55,113,0.08)] dark:border-[#2b3750] dark:bg-[linear-gradient(180deg,#1f2739_0%,#171e2d_100%)] dark:shadow-[0_24px_64px_rgba(3,8,20,0.42)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          <div>
            <p className="text-[18px] font-semibold text-[#5d83e7] dark:text-[#8ebfff]">
              Events &amp; Media
            </p>
            <h1 className="mt-4 max-w-[560px] text-[48px] font-bold leading-[1.06] tracking-[-0.05em] text-[#202737] dark:text-[#f4f7ff]">
              {event.title}
            </h1>
            <p className="mt-7 max-w-[560px] text-[20px] leading-[1.65] text-[#636f89] dark:text-[#bfd0ef]">
              {event.description}
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[#e3eaf8] bg-[#e8eefb] shadow-[0_18px_40px_rgba(31,55,113,0.1)] dark:border-[#31415c] dark:bg-[#243049] dark:shadow-[0_18px_40px_rgba(3,8,20,0.34)]">
            <Image
              src={event.image}
              alt={event.title}
              width={1272}
              height={1614}
              className={`h-[340px] w-full ${
                event.format === "contain"
                  ? "bg-[#e8eefb] object-contain p-5 dark:bg-[#243049]"
                  : "object-cover object-top"
              }`}
              priority
            />
          </div>
        </div>

        <div className="mt-16 max-w-[760px]">
          <h2 className="text-[38px] font-bold leading-none tracking-[-0.04em] text-[#202737] dark:text-[#f4f7ff]">
            Episode Overview
          </h2>
          <div className="mt-7 space-y-6 text-[20px] leading-[1.8] text-[#4f5973] dark:text-[#c5d3ee]">
            {event.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>

          <h3 className="mt-12 text-[38px] font-bold leading-none tracking-[-0.04em] text-[#202737] dark:text-[#f4f7ff]">
            Key Topics Covered
          </h3>
          <ul className="mt-6 space-y-3 text-[18px] leading-[1.7] text-[#3f4860] dark:text-[#d3def6]">
            {event.agenda.map((item) => (
              <li key={item} className="list-disc marker:text-[#6f7ea3]">
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-[#e7edf7] pt-6 dark:border-[#2f3b58]">
            <Link
              href={event.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center gap-3 rounded-[14px] bg-[linear-gradient(90deg,#2f6fed_0%,#4a7cf0_100%)] px-7 text-[18px] font-semibold text-white shadow-[0_14px_30px_rgba(47,111,237,0.24)] transition hover:-translate-y-0.5"
            >
              Watch on YouTube
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
