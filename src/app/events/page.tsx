import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Mic,
  MonitorPlay,
  Podcast,
  Presentation,
  Users,
} from "lucide-react"
import { PageFrame } from "@/components/page-frame"
import { events } from "@/lib/events-data"

const socialLinks = {
  youtube: "https://www.youtube.com/@engyuyu",
  tiktok: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  instagram: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  facebook: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
}

export default function EventsPage() {
  const heroEvent = events[0]
  const heroSideEvents = events.slice(1, 4)

  return (
    <PageFrame flushBottom>
      <section className="relative left-1/2 right-1/2 mt-0 ml-[-50vw] mr-[-50vw] w-screen">
        <div className="bg-[linear-gradient(180deg,#f7f9ff_0%,#eef4ff_100%)] px-6 py-10 dark:bg-[linear-gradient(180deg,#171e2d_0%,#131927_100%)] sm:px-10 lg:px-16 lg:py-12">
          <div className="mx-auto w-full max-w-[1280px] rounded-[34px] border border-[#e1e8f6] bg-[linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] px-7 py-8 shadow-[0_24px_60px_rgba(29,80,215,0.08)] dark:border-[#2b3750] dark:bg-[linear-gradient(180deg,#1f2739_0%,#171e2d_100%)] dark:shadow-[0_24px_60px_rgba(3,8,20,0.45)] sm:px-10 sm:py-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative">
                <div
                  className="pointer-events-none absolute left-[58%] top-[10%] h-28 w-28 rounded-full opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(54,115,255,0.16) 0%, rgba(54,115,255,0) 72%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute left-[68%] top-[30%] hidden h-24 w-24 opacity-60 lg:block"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(64,120,245,0.18) 1.3px, transparent 1.3px)",
                    backgroundSize: "8px 8px",
                  }}
                />

                <h1 className="text-[42px] font-bold leading-[0.98] tracking-[-0.05em] text-[#202737] dark:text-[#f4f7ff] sm:text-[54px] lg:text-[62px]">
                  Events &{" "}
                  <span className="text-[#2d72eb]">Media</span>
                </h1>

                <p className="mt-7 max-w-[620px] text-[22px] font-medium leading-[1.35] tracking-[-0.03em] text-[#2c3344] dark:text-[#e3ebff] sm:text-[30px]">
                  Where{" "}
                  <span className="text-[#2d72eb]">Technology</span>{" "}
                  Meets{" "}
                  <span className="text-[#2d72eb]">Community</span>,
                  <br />
                  <span className="text-[#2d72eb]">Innovation</span> &amp; Conversation
                </p>

                <p className="mt-7 max-w-[700px] text-[18px] leading-[1.7] text-[#5d667b] dark:text-[#b8c8e8] sm:text-[20px]">
                  Exploring events, workshops, conferences, and media appearances shaping the future of digital growth in Somalia and beyond.
                </p>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute left-[2%] top-[8%] hidden h-[170px] w-[110px] rounded-[28px] bg-[linear-gradient(180deg,#8fb8ff_0%,#5b95ff_100%)] opacity-18 lg:block" />
                <div className="pointer-events-none absolute left-[10%] top-[24%] hidden h-28 w-20 rounded-[26px] bg-[#2d72eb] opacity-18 lg:block" />

                <div className="grid grid-cols-[1.25fr_0.95fr] gap-4">
                  <div className="relative overflow-hidden rounded-[28px] border border-white bg-[#dfe8fb] shadow-[0_20px_40px_rgba(31,55,113,0.12)] dark:border-[#31415c] dark:bg-[#243049] dark:shadow-[0_20px_40px_rgba(3,8,20,0.35)]">
                    <Image
                      src={heroEvent.image}
                      alt={heroEvent.title}
                      width={1272}
                      height={1614}
                      className={`h-[320px] w-full ${
                        heroEvent.format === "contain"
                          ? "bg-[#dfe8fb] object-contain p-4 dark:bg-[#243049]"
                          : "object-cover object-top"
                      }`}
                      priority
                    />
                  </div>

                  <div className="grid gap-4">
                    {heroSideEvents.map((event) => (
                      <div
                        key={event.slug}
                        className="relative overflow-hidden rounded-[24px] border border-white bg-[#e6edfb] shadow-[0_18px_32px_rgba(31,55,113,0.1)] dark:border-[#31415c] dark:bg-[#243049] dark:shadow-[0_18px_32px_rgba(3,8,20,0.32)]"
                      >
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={1272}
                          height={1614}
                          className={`h-[98px] w-full ${
                            event.format === "contain"
                              ? "bg-[#e6edfb] object-contain p-3 dark:bg-[#243049]"
                              : "object-cover object-top"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[28px] border border-[#e7edf8] bg-[#fbfcff] p-2 shadow-[0_10px_30px_rgba(31,55,113,0.06)] dark:border-[#2b3750] dark:bg-[#1b2436] dark:shadow-[0_10px_30px_rgba(3,8,20,0.3)]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-[14px] bg-[#2f6fed] px-5 py-3 text-[18px] font-semibold text-white shadow-[0_12px_24px_rgba(47,111,237,0.24)]">
                  <CalendarDays className="h-5 w-5" />
                  All
                </span>
                <span className="inline-flex items-center gap-2 rounded-[14px] bg-[#f4f6fb] px-5 py-3 text-[18px] font-medium text-[#434c61] dark:bg-[#243049] dark:text-[#dce7ff]">
                  <CalendarDays className="h-5 w-5 text-[#6c758d] dark:text-[#9fb1d2]" />
                  Events
                </span>
                <span className="inline-flex items-center gap-2 rounded-[14px] bg-[#f4f6fb] px-5 py-3 text-[18px] font-medium text-[#434c61] dark:bg-[#243049] dark:text-[#dce7ff]">
                  <Users className="h-5 w-5 text-[#6c758d] dark:text-[#9fb1d2]" />
                  Workshops
                </span>
                <span className="inline-flex items-center gap-2 rounded-[14px] bg-[#f4f6fb] px-5 py-3 text-[18px] font-medium text-[#434c61] dark:bg-[#243049] dark:text-[#dce7ff]">
                  <Presentation className="h-5 w-5 text-[#6c758d] dark:text-[#9fb1d2]" />
                  Conferences
                </span>
                <span className="inline-flex items-center gap-2 rounded-[14px] bg-[#f4f6fb] px-5 py-3 text-[18px] font-medium text-[#434c61] dark:bg-[#243049] dark:text-[#dce7ff]">
                  <MonitorPlay className="h-5 w-5 text-[#6c758d] dark:text-[#9fb1d2]" />
                  Media
                </span>
                <span className="inline-flex items-center gap-2 rounded-[14px] bg-[#f4f6fb] px-5 py-3 text-[18px] font-medium text-[#434c61] dark:bg-[#243049] dark:text-[#dce7ff]">
                  <Podcast className="h-5 w-5 text-[#6c758d] dark:text-[#9fb1d2]" />
                  Podcasts
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#dfe4eb] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto grid w-full max-w-[1160px] gap-8">
            {events.map((event, index) => (
              <article
                key={event.title}
                className="rounded-[18px] border-2 border-[#156ff3] bg-[#f7f7f5] px-6 py-8 shadow-[0_18px_36px_rgba(21,111,243,0.08)] dark:bg-[#1d2436] sm:px-8 sm:py-10 lg:px-10"
              >
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[400px_1fr] lg:gap-6">
                  <div className="overflow-hidden rounded-[18px] bg-black">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={1272}
                      height={1614}
                      className={`w-full object-cover object-top ${
                        event.format === "contain"
                          ? "h-[260px] bg-[#d6e6ff] object-contain p-4 sm:h-[300px] lg:h-[312px]"
                          : "h-[260px] sm:h-[300px] lg:h-[312px]"
                      }`}
                      priority={index === 0}
                    />
                  </div>

                  <div className="max-w-[620px]">
                    <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-0.04em] text-[#181818] dark:text-white sm:text-[44px]">
                      {event.title}
                    </h2>

                    <p className="mt-7 text-[18px] leading-[1.45] tracking-[-0.02em] text-[#1b1b1b] dark:text-[#dfe7fb] sm:text-[22px]">
                      {event.description}
                    </p>

                    <div className="mt-8 flex flex-col gap-4 text-[16px] font-semibold leading-none text-[#171717] dark:text-[#edf3ff] sm:text-[18px] lg:flex-row lg:flex-wrap lg:items-center lg:gap-6">
                      <div className="flex items-center gap-3">
                        <CalendarDays className="h-5 w-5 text-[#156ff3]" strokeWidth={2.4} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock3 className="h-5 w-5 text-[#156ff3]" strokeWidth={2.4} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-[#156ff3]" strokeWidth={2.4} />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <Link
                      href={`/events/${event.slug}`}
                      className="mt-8 inline-flex h-12 items-center gap-3 rounded-[6px] bg-[#156ff3] px-7 text-[18px] font-medium text-white transition-opacity hover:opacity-90"
                    >
                      <span>View Event</span>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white">
                        <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="bg-[#156ff3] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-18">
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
              <a href={socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="Media microphone" className="social-icon-float-3 transition-transform duration-300 hover:scale-110">
                <Mic className="h-[36px] w-[36px] text-white sm:h-[42px] sm:w-[42px]" />
              </a>
            </div>
          </div>

          <div className="mx-auto mt-16 w-screen border-t border-white/55 pt-7 text-center text-[16px] tracking-[-0.02em] text-white/95">
            © 2025 Eng Yuyu Media - All Rights Reserved.
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
