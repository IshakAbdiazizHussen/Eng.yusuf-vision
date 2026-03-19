import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react"
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

  const otherEvents = events.filter((item) => item.slug !== event.slug).slice(0, 3)

  return (
    <PageFrame flushBottom>
      <section className="mx-auto max-w-[1280px] px-4 pb-16 pt-8 sm:px-6">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f5] bg-white/90 px-4 py-2 text-[15px] font-semibold text-[#6a77a1] shadow-[0_8px_18px_rgba(31,55,113,0.05)] transition-colors hover:bg-[#f5f8ff] dark:border-[#31415c] dark:bg-[#1b2436] dark:text-[#b9caeb]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>

        <div className="mt-8 rounded-[36px] border border-[#e3e8f4] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-8 py-10 shadow-[0_24px_64px_rgba(31,55,113,0.08)] dark:border-[#2b3750] dark:bg-[linear-gradient(180deg,#1f2739_0%,#171e2d_100%)] dark:shadow-[0_24px_64px_rgba(3,8,20,0.42)] lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <h1 className="max-w-[620px] text-[40px] font-bold leading-[1.05] tracking-[-0.05em] text-[#202737] dark:text-[#f4f7ff] sm:text-[54px]">
                {event.title}
              </h1>

              <p className="mt-7 max-w-[620px] text-[20px] leading-[1.65] text-[#4f5973] dark:text-[#c5d3ee]">
                {event.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-[#e6ebf6] bg-white/90 px-5 py-5 shadow-[0_10px_24px_rgba(31,55,113,0.05)] dark:border-[#31415c] dark:bg-[#202a40]">
                  <div className="flex items-center gap-3 text-[#2f6fed]">
                    <CalendarDays className="h-5 w-5" />
                    <span className="text-[14px] font-bold uppercase tracking-[0.08em]">
                      Date
                    </span>
                  </div>
                  <p className="mt-3 text-[20px] font-semibold text-[#202737] dark:text-[#f4f7ff]">
                    {event.date}
                  </p>
                </div>

                <div className="rounded-[22px] border border-[#e6ebf6] bg-white/90 px-5 py-5 shadow-[0_10px_24px_rgba(31,55,113,0.05)] dark:border-[#31415c] dark:bg-[#202a40]">
                  <div className="flex items-center gap-3 text-[#2f6fed]">
                    <Clock3 className="h-5 w-5" />
                    <span className="text-[14px] font-bold uppercase tracking-[0.08em]">
                      Time
                    </span>
                  </div>
                  <p className="mt-3 text-[20px] font-semibold text-[#202737] dark:text-[#f4f7ff]">
                    {event.time}
                  </p>
                </div>
              </div>

              <Link
                href={event.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-14 items-center gap-3 rounded-[14px] bg-[linear-gradient(90deg,#2f6fed_0%,#4a7cf0_100%)] px-7 text-[18px] font-semibold text-white shadow-[0_14px_30px_rgba(47,111,237,0.24)] transition hover:-translate-y-0.5"
              >
                Register Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-[#e3eaf8] bg-[#e8eefb] shadow-[0_18px_40px_rgba(31,55,113,0.1)] dark:border-[#31415c] dark:bg-[#243049] dark:shadow-[0_18px_40px_rgba(3,8,20,0.34)]">
              <Image
                src={event.image}
                alt={event.title}
                width={1272}
                height={1614}
                className={`h-[380px] w-full ${
                  event.format === "contain"
                    ? "bg-[#e8eefb] object-contain p-5 dark:bg-[#243049]"
                    : "object-cover object-top"
                }`}
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-8 rounded-[32px] border border-[#e3e8f4] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-8 py-8 shadow-[0_18px_48px_rgba(31,55,113,0.06)] dark:border-[#2b3750] dark:bg-[linear-gradient(180deg,#1f2739_0%,#171e2d_100%)] dark:shadow-[0_18px_48px_rgba(3,8,20,0.32)]">
            {event.details.map((detail, index) => (
              <div key={detail}>
                <div className="overflow-hidden rounded-[24px] border border-[#e3e8f4] bg-[#edf3ff] shadow-[0_12px_26px_rgba(31,55,113,0.06)] dark:border-[#31415c] dark:bg-[#243049]">
                  <Image
                    src={event.image}
                    alt={`${event.title} highlight ${index + 1}`}
                    width={1272}
                    height={1614}
                    className={`h-[230px] w-full ${
                      event.format === "contain"
                        ? "bg-[#edf3ff] object-contain p-4 dark:bg-[#243049]"
                        : "object-cover object-top"
                    }`}
                  />
                </div>
                <p className="mt-5 text-[20px] leading-[1.7] text-[#2d3548] dark:text-[#d5e1f7]">
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <aside className="rounded-[32px] border border-[#e3e8f4] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-5 py-6 shadow-[0_18px_48px_rgba(31,55,113,0.06)] dark:border-[#2b3750] dark:bg-[linear-gradient(180deg,#1f2739_0%,#171e2d_100%)] dark:shadow-[0_18px_48px_rgba(3,8,20,0.32)]">
            <h2 className="text-[34px] font-bold leading-none tracking-[-0.04em] text-[#202737] dark:text-[#f4f7ff]">
              More Events
            </h2>

            <div className="mt-6 space-y-4">
              {otherEvents.map((item) => (
                <Link
                  key={item.slug}
                  href={`/events/${item.slug}`}
                  className="block rounded-[22px] border border-[#e6ebf6] bg-white/90 p-4 shadow-[0_10px_24px_rgba(31,55,113,0.05)] transition hover:-translate-y-0.5 dark:border-[#31415c] dark:bg-[#202a40]"
                >
                  <h3 className="text-[18px] font-semibold leading-[1.35] text-[#202737] dark:text-[#f4f7ff]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] text-[#59657f] dark:text-[#c5d3ee]">
                    {item.date}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-[15px] text-[#59657f] dark:text-[#c5d3ee]">
                    <MapPin className="h-4 w-4 text-[#5f88ef]" />
                    <span>{item.location}</span>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-[16px] border border-[#e3e8f4] bg-[#edf3ff] dark:border-[#31415c] dark:bg-[#243049]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1272}
                      height={1614}
                      className={`h-[110px] w-full ${
                        item.format === "contain"
                          ? "bg-[#edf3ff] object-contain p-3 dark:bg-[#243049]"
                          : "object-cover object-top"
                      }`}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </PageFrame>
  )
}
