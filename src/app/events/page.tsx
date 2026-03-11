import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react"
import { PageFrame } from "@/components/page-frame"
import { events } from "@/lib/events-data"

const socialLinks = {
  youtube: "https://www.youtube.com/@engyuyu",
  tiktok: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  instagram: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  facebook: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
}

export default function EventsPage() {
  return (
    <PageFrame flushBottom>
      <section className="relative left-1/2 right-1/2 mt-0 ml-[-50vw] mr-[-50vw] w-screen">
        <div className="bg-[#156ff3] px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
          <div className="mx-auto w-full max-w-[1280px] text-center">
            <h1 className="text-[44px] font-bold leading-none tracking-[-0.04em] text-white sm:text-[58px]">
              Event and Conference
            </h1>
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
