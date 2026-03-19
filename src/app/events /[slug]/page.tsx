import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CalendarDays, Clock3, MapPin, Users } from "lucide-react"
import { notFound } from "next/navigation"
import { PageFrame } from "@/components/page-frame"
import { events, getEventBySlug } from "@/lib/events-data"

type EventPageProps = {
  params: Promise<{ slug: string }>
}

const socialLinks = {
  youtube: "https://www.youtube.com/@engyuyu",
  tiktok: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  instagram: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  facebook: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
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
    title: `${event.title} | Events`,
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
      <section className="mx-auto max-w-[1180px] px-4 pb-12 pt-8 sm:px-6">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-4 py-2 text-[15px] font-semibold text-[#156ff3] transition-colors hover:bg-[#156ff3] hover:text-white dark:border-white/10 dark:bg-[#1d2436] dark:text-[#9bc0ff]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>

        <div className="mt-8 rounded-[36px] border border-[#156ff3] bg-[#eff4fb] p-6 shadow-[0_24px_54px_rgba(21,111,243,0.12)] dark:bg-[#1a2235] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[440px_1fr]">
            <div className="overflow-hidden rounded-[28px] bg-[#d6e6ff]">
              <Image
                src={event.image}
                alt={event.title}
                width={1272}
                height={1614}
                className={`w-full ${
                  event.format === "contain"
                    ? "h-[320px] object-contain p-5 sm:h-[420px]"
                    : "h-[320px] object-cover object-top sm:h-[420px]"
                }`}
                priority
              />
            </div>

            <div>
              <h1 className="text-[34px] font-bold leading-[1.04] tracking-[-0.04em] text-[#181818] dark:text-white sm:text-[52px]">
                {event.title}
              </h1>

              <p className="mt-6 max-w-[680px] text-[20px] leading-[1.55] text-[#1d2740] dark:text-[#dfe7fb] sm:text-[24px]">
                {event.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] bg-white/85 p-5 dark:bg-[#24304a]">
                  <div className="flex items-center gap-3 text-[#156ff3]">
                    <CalendarDays className="h-5 w-5" />
                    <span className="text-[14px] font-bold uppercase tracking-[0.08em]">
                      Date
                    </span>
                  </div>
                  <p className="mt-3 text-[20px] font-semibold text-[#181818] dark:text-white">
                    {event.date}
                  </p>
                </div>

                <div className="rounded-[24px] bg-white/85 p-5 dark:bg-[#24304a]">
                  <div className="flex items-center gap-3 text-[#156ff3]">
                    <Clock3 className="h-5 w-5" />
                    <span className="text-[14px] font-bold uppercase tracking-[0.08em]">
                      Time
                    </span>
                  </div>
                  <p className="mt-3 text-[20px] font-semibold text-[#181818] dark:text-white">
                    {event.time}
                  </p>
                </div>

                <div className="rounded-[24px] bg-white/85 p-5 dark:bg-[#24304a]">
                  <div className="flex items-center gap-3 text-[#156ff3]">
                    <MapPin className="h-5 w-5" />
                    <span className="text-[14px] font-bold uppercase tracking-[0.08em]">
                      Location
                    </span>
                  </div>
                  <p className="mt-3 text-[20px] font-semibold text-[#181818] dark:text-white">
                    {event.location}
                  </p>
                </div>

                <div className="rounded-[24px] bg-white/85 p-5 dark:bg-[#24304a]">
                  <div className="flex items-center gap-3 text-[#156ff3]">
                    <Users className="h-5 w-5" />
                    <span className="text-[14px] font-bold uppercase tracking-[0.08em]">
                      Best For
                    </span>
                  </div>
                  <p className="mt-3 text-[20px] font-semibold text-[#181818] dark:text-white">
                    {event.audience}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.82fr]">
          <div className="rounded-[30px] bg-[#dfe4eb] px-6 py-8 dark:bg-[#1d2436] sm:px-8 sm:py-10">
            <h2 className="text-[28px] font-bold leading-none text-[#156ff3] sm:text-[34px]">
              What to expect
            </h2>
            <div className="mt-6 space-y-5">
              {event.details.map((detail) => (
                <p
                  key={detail}
                  className="text-[19px] leading-[1.7] tracking-[-0.02em] text-[#172033] dark:text-[#e6eefc] sm:text-[22px]"
                >
                  {detail}
                </p>
              ))}
            </div>
          </div>

          <aside className="rounded-[30px] bg-[#156ff3] px-6 py-8 text-white sm:px-8 sm:py-10">
            <h2 className="text-[28px] font-bold leading-none sm:text-[34px]">
              Event Agenda
            </h2>
            <div className="mt-6 space-y-4">
              {event.agenda.map((item) => (
                <div key={item} className="rounded-[22px] bg-white/12 px-5 py-4 text-[18px] leading-[1.45]">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-[32px] bg-[#dfe4eb] px-6 py-8 dark:bg-[#1d2436] sm:px-8 sm:py-10">
          <h2 className="text-[28px] font-bold leading-none text-[#156ff3] sm:text-[34px]">
            More Events
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {otherEvents.map((item) => (
              <Link
                key={item.slug}
                href={`/events/${item.slug}`}
                className="rounded-[24px] bg-white/85 p-5 transition-transform hover:-translate-y-1 dark:bg-[#24304a]"
              >
                <p className="text-[14px] font-bold uppercase tracking-[0.08em] text-[#156ff3]">
                  {item.date}
                </p>
                <h3 className="mt-3 text-[22px] font-semibold leading-[1.2] text-[#181818] dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.5] text-[#34415c] dark:text-[#dfe7fb]">
                  {item.location}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </section>

      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen bg-[#156ff3] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-18">
        <div className="mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
          <Image
            src="/Eng Yuyu Logo-21.png"
            alt="Eng Yuyu Logo"
            width={300}
            height={120}
            className="h-[120px] w-auto object-contain sm:h-[150px] lg:h-[170px]"
            style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
          />

          <p className="mt-6 max-w-[760px] text-[18px] leading-[1.45] tracking-[-0.02em] text-white/95 sm:text-[20px]">
            My Goal is Simple: to Educate, Inspire and Connect people through
            technology: One video, one idea and one innovation at a time.....
          </p>

          <div className="mt-10 flex items-center gap-4 sm:gap-5">
            <a href={socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="social-icon-float-1 transition-transform duration-300 hover:scale-110">
              <Image src="/youtubeRemoving.png" alt="YouTube" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon-float-2 transition-transform duration-300 hover:scale-110">
              <Image src="/Facebook.png" alt="Facebook" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
            </a>
            <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="social-icon-float-3 transition-transform duration-300 hover:scale-110">
              <Image src="/Tiktok.png" alt="TikTok" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon-float-4 transition-transform duration-300 hover:scale-110">
              <Image src="/Instgram.png" alt="Instagram" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 w-full border-t border-white/55 pt-7 text-center text-[16px] tracking-[-0.02em] text-white/95">
          © 2025 Eng Yuyu Media - All Rights Reserved.
        </div>
      </div>
    </PageFrame>
  )
}
