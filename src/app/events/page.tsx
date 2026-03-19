import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
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
        <div className="bg-[linear-gradient(180deg,#f8faff_0%,#f3f7ff_100%)] px-6 py-10 dark:bg-[linear-gradient(180deg,#171e2d_0%,#131927_100%)] sm:px-10 lg:px-16 lg:py-12">
          <div className="mx-auto w-full max-w-[1280px] px-1 sm:px-2">
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
                  <div className="relative overflow-hidden rounded-[28px] border border-white bg-[#dfe8fb] shadow-[0_16px_34px_rgba(31,55,113,0.1)] dark:border-[#31415c] dark:bg-[#243049] dark:shadow-[0_16px_34px_rgba(3,8,20,0.32)]">
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
                        className="relative overflow-hidden rounded-[24px] border border-white bg-[#e6edfb] shadow-[0_16px_28px_rgba(31,55,113,0.09)] dark:border-[#31415c] dark:bg-[#243049] dark:shadow-[0_16px_28px_rgba(3,8,20,0.28)]"
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

            <div className="mx-auto mt-10 max-w-[940px] rounded-[28px] border border-[#e7edf8] bg-[#fbfcff] p-2 shadow-[0_10px_30px_rgba(31,55,113,0.06)] dark:border-[#2b3750] dark:bg-[#1b2436] dark:shadow-[0_10px_30px_rgba(3,8,20,0.3)]">
              <div className="flex flex-wrap items-center justify-center gap-3">
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

        <div className="bg-[linear-gradient(180deg,#f3f7ff_0%,#eef4ff_100%)] px-6 py-14 dark:bg-[linear-gradient(180deg,#131927_0%,#101522_100%)] sm:px-10 lg:px-16 lg:py-18">
          <div className="mx-auto w-full max-w-[1280px]">
            <section className="px-1 py-2">
              <div className="text-center">
                <h2 className="text-[34px] font-bold leading-none tracking-[-0.04em] text-[#202737] dark:text-[#f4f7ff] sm:text-[46px]">
                  Featured Events
                </h2>
                <div className="mx-auto mt-4 h-[3px] w-[180px] rounded-full bg-[linear-gradient(90deg,transparent_0%,#2d72eb_24%,#2d72eb_76%,transparent_100%)]" />
              </div>

              <div className="mt-8 grid gap-5 xl:grid-cols-4">
                {events.map((event, index) => {
                  const accentStyles = [
                    {
                      pill: "bg-[#eef5ff] text-[#2d72eb]",
                      button: "bg-[#2f6fed] text-white border-[#2f6fed]",
                      icon: "text-[#2d72eb]",
                      word: "text-[#2d72eb]",
                      label: "Speaker",
                    },
                    {
                      pill: "bg-[#eef8ef] text-[#357c43]",
                      button: "bg-white text-[#357c43] border-[#dbe8dc]",
                      icon: "text-[#357c43]",
                      word: "text-[#357c43]",
                      label: "Workshop",
                    },
                    {
                      pill: "bg-[#fff3e9] text-[#e18a33]",
                      button: "bg-white text-[#e18a33] border-[#f0dbc8]",
                      icon: "text-[#e18a33]",
                      word: "text-[#e18a33]",
                      label: "Bootcamp",
                    },
                    {
                      pill: "bg-[#f6efff] text-[#8e49d9]",
                      button: "bg-white text-[#5d47bd] border-[#ddd5f2]",
                      icon: "text-[#8e49d9]",
                      word: "text-[#5d47bd]",
                      label: "Community",
                    },
                  ][index]

                  const highlightedWord = event.title.split(" ").slice(-1)[0] ?? ""
                  const titleBase = highlightedWord
                    ? event.title.slice(0, -highlightedWord.length).trimEnd()
                    : event.title

                  return (
                    <article
                      key={event.slug}
                      className="overflow-hidden rounded-[24px] border border-[#e5eaf5] bg-white shadow-[0_14px_32px_rgba(31,55,113,0.07)] dark:border-[#31415c] dark:bg-[#1c2437] dark:shadow-[0_14px_32px_rgba(3,8,20,0.3)]"
                    >
                      <div className="relative">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={1272}
                          height={1614}
                          className={`h-[205px] w-full ${
                            event.format === "contain"
                              ? "bg-[#e8eefb] object-contain p-4 dark:bg-[#243049]"
                              : "object-cover object-top"
                          }`}
                        />
                        <span className={`absolute left-4 top-4 inline-flex items-center rounded-full px-4 py-2 text-[14px] font-semibold shadow-[0_8px_18px_rgba(255,255,255,0.3)] ${accentStyles.pill}`}>
                          {accentStyles.label}
                        </span>
                      </div>

                      <div className="px-5 pb-5 pt-4">
                        <h3 className="min-h-[112px] text-center text-[24px] font-semibold leading-[1.35] tracking-[-0.03em] text-[#21283a] dark:text-[#f3f7ff]">
                          {titleBase ? (
                            <>
                              {titleBase}{" "}
                              <span className={accentStyles.word}>{highlightedWord}</span>
                            </>
                          ) : (
                            event.title
                          )}
                        </h3>

                        <div className="mt-4 space-y-3 text-[16px] text-[#44506a] dark:text-[#cbd7f1]">
                          <div className="flex items-center gap-3">
                            <CalendarDays className={`h-5 w-5 ${accentStyles.icon}`} />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <MapPin className={`h-5 w-5 ${accentStyles.icon}`} />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <Link
                          href={`/events/${event.slug}`}
                          className={`mt-6 inline-flex h-14 w-full items-center justify-center gap-3 rounded-[16px] border text-[18px] font-semibold transition hover:-translate-y-0.5 ${accentStyles.button}`}
                        >
                          View Details
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>

              <div className="mx-auto mt-10 max-w-[1100px] rounded-[28px] border border-[#e6ebf6] bg-white px-6 py-7 shadow-[0_12px_28px_rgba(31,55,113,0.06)] dark:border-[#31415c] dark:bg-[#1b2436] dark:shadow-[0_12px_28px_rgba(3,8,20,0.26)]">
                <div className="grid gap-6 text-center md:grid-cols-3 md:divide-x md:divide-[#e6ebf6] dark:md:divide-[#31415c]">
                  <div>
                    <p className="text-[46px] font-bold leading-none tracking-[-0.04em] text-[#141c30] dark:text-white sm:text-[56px]">
                      1M+
                    </p>
                    <p className="mt-3 text-[20px] font-medium text-[#4b556d] dark:text-[#c8d6f2]">
                      People Reached
                    </p>
                  </div>
                  <div>
                    <p className="text-[46px] font-bold leading-none tracking-[-0.04em] text-[#141c30] dark:text-white sm:text-[56px]">
                      50+
                    </p>
                    <p className="mt-3 text-[20px] font-medium text-[#4b556d] dark:text-[#c8d6f2]">
                      Events &amp; Workshops
                    </p>
                  </div>
                  <div>
                    <p className="text-[46px] font-bold leading-none tracking-[-0.04em] text-[#141c30] dark:text-white sm:text-[56px]">
                      500K+
                    </p>
                    <p className="mt-3 text-[20px] font-medium text-[#4b556d] dark:text-[#c8d6f2]">
                      Live Audience
                    </p>
                  </div>
                </div>
              </div>

              <section className="mt-14 px-1 py-2">
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 text-[#202737] dark:text-[#f4f7ff]">
                    <Mic className="h-8 w-8 text-[#5a6277] dark:text-[#c9d7f4]" />
                    <h2 className="text-[32px] font-bold leading-none tracking-[-0.04em] sm:text-[42px]">
                      Podcasts &amp; Media Appearances
                    </h2>
                  </div>
                  <p className="mt-4 text-[20px] text-[#667089] dark:text-[#bccbe9] sm:text-[24px]">
                    Conversations and interviews across platforms
                  </p>
                </div>

                <div className="mt-8 grid gap-5 xl:grid-cols-3">
                  {[
                    {
                      label: "Guest Appearance",
                      title: "Tech Talk Somalia",
                      subtitle: "The Future of AI in Somalia",
                      buttonLabel: "Watch Episode",
                      image: events[0]?.image ?? "/engY.png",
                      format: events[0]?.format ?? "cover",
                    },
                    {
                      label: "Digital Creators Show",
                      title: "Digital Creators Show",
                      subtitle: "Building a Tech Brand",
                      buttonLabel: "Listen Now",
                      image: events[1]?.image ?? "/engY-removebg-preview.png",
                      format: events[1]?.format ?? "contain",
                    },
                    {
                      label: "Startup & Innovation Podcast",
                      title: "Startup & Innovation",
                      subtitle: "Youth & Innovation",
                      buttonLabel: "Listen Now",
                      image: events[3]?.image ?? "/engY.png",
                      format: events[3]?.format ?? "cover",
                    },
                  ].map((item) => (
                    <article
                      key={item.title}
                      className="overflow-hidden rounded-[24px] border border-[#e5eaf5] bg-white shadow-[0_14px_32px_rgba(31,55,113,0.07)] dark:border-[#31415c] dark:bg-[#1c2437] dark:shadow-[0_14px_32px_rgba(3,8,20,0.3)]"
                    >
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={1272}
                          height={1614}
                          className={`h-[210px] w-full ${
                            item.format === "contain"
                              ? "bg-[#e8eefb] object-contain p-4 dark:bg-[#243049]"
                              : "object-cover object-top"
                          }`}
                        />
                        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-4 py-2 text-[14px] font-semibold text-[#454d61] shadow-[0_8px_18px_rgba(255,255,255,0.3)] dark:bg-[#f5f7ff]">
                          {item.label}
                        </span>
                      </div>

                      <div className="px-5 pb-5 pt-4 text-center">
                        <h3 className="text-[24px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#202737] dark:text-[#f4f7ff] sm:text-[28px]">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-[18px] text-[#5f6880] dark:text-[#c2d0ec] sm:text-[20px]">
                          {item.subtitle}
                        </p>

                        <button
                          type="button"
                          className="mt-6 inline-flex h-14 w-full items-center justify-center gap-3 rounded-[16px] border border-[#dbe4f2] bg-white text-[18px] font-semibold text-[#2d72eb] shadow-[0_10px_24px_rgba(31,55,113,0.05)] transition hover:-translate-y-0.5 dark:border-[#31415c] dark:bg-[#202a40] dark:text-[#8ebfff]"
                        >
                          {item.buttonLabel}
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </section>

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
