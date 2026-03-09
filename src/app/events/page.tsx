import Image from "next/image"
import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react"
import { PageFrame } from "@/components/page-frame"

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
          <div className="mx-auto w-full max-w-[1160px] rounded-[18px] border-2 border-[#156ff3] bg-[#f7f7f5] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[400px_1fr] lg:gap-6">
              <div className="overflow-hidden rounded-[18px] bg-black">
                <Image
                  src="/engY.png"
                  alt="Tech Innovation and Digital Growth Summit 2025"
                  width={1272}
                  height={1614}
                  className="h-[260px] w-full object-cover object-top sm:h-[300px] lg:h-[312px]"
                  priority
                />
              </div>

              <div className="max-w-[620px]">
                <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-0.04em] text-[#181818] sm:text-[44px]">
                  Tech Innovation &amp; Digital Growth Summit 2025
                </h2>

                <p className="mt-7 text-[18px] leading-[1.45] tracking-[-0.02em] text-[#1b1b1b] sm:text-[22px]">
                  A full-day event exploring the future of technology,
                  creativity, and business. Join innovators, creators, and
                  leaders shaping tomorrow.
                </p>

                <div className="mt-8 flex flex-col gap-4 text-[16px] font-semibold leading-none text-[#171717] sm:text-[18px] lg:flex-row lg:flex-wrap lg:items-center lg:gap-6">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-[#156ff3]" strokeWidth={2.4} />
                    <span>March 22, 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-[#156ff3]" strokeWidth={2.4} />
                    <span>10:00 AM - 4:30 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#156ff3]" strokeWidth={2.4} />
                    <span>Mogadishu Innovation Hub</span>
                  </div>
                </div>

                <a
                  href="#"
                  className="mt-8 inline-flex h-12 items-center gap-3 rounded-[6px] bg-[#156ff3] px-7 text-[18px] font-medium text-white transition-opacity hover:opacity-90"
                >
                  <span>View Event</span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white">
                    <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#156ff3] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-18">
          <div className="mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
            <Image
              src="/Eng Yuyu Logo-21.png"
              alt="Eng Yuyu Logo"
              width={300}
              height={120}
              className="h-[70px] w-auto object-contain sm:h-[82px]"
              style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
            />

            <p className="mt-6 max-w-[760px] text-[18px] leading-[1.45] tracking-[-0.02em] text-white/95 sm:text-[20px]">
              My Goal is Simple: to Educate, Inspire and Connect people through
              technology: One video, one idea and one innovation at a time.....
            </p>

            <div className="mt-10 flex items-center gap-4 sm:gap-5">
              <a href={socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <Image src="/youtubeRemoving.png" alt="YouTube" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Image src="/Facebook.png" alt="Facebook" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
              </a>
              <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
                <Image src="/Tiktok.png" alt="TikTok" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
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
