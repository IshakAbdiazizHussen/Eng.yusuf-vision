import Image from "next/image"
import { NewsletterForm } from "@/components/newsletter-form"

const socialLinks = {
  youtube: "https://www.youtube.com/@engyuyu",
  tiktok: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  instagram: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  facebook: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
}

export function TechBlogNewsletterSection() {
  return (
    <section className="mt-10 rounded-[32px] border border-[#d8deeb] bg-[linear-gradient(180deg,#f7f8fc_0%,#eef2fb_100%)] px-8 py-10 shadow-[0_18px_40px_rgba(35,62,124,0.08)] dark:border-[#283554] dark:bg-[#20283b] md:px-10 md:py-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[760px]">
          <h2 className="text-3xl font-bold leading-none text-[#1b2d63] dark:text-white md:text-[32px]">
            Join My Tech Newsletter
          </h2>
          <p className="mt-5 max-w-[700px] text-[18px] leading-[1.5] text-[#303a52] dark:text-[#dde6fb] md:text-[20px]">
            Get practical tech insights, AI updates, and digital safety
            guides directly in your inbox.
          </p>

          <NewsletterForm />
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(221,230,247,0.95))] shadow-[0_0_0_16px_rgba(217,225,242,0.7)] md:h-[180px] md:w-[180px]">
            <div className="flex h-[86px] w-[86px] items-center justify-center rounded-[22px] bg-[linear-gradient(180deg,#4d7df6_0%,#2553dd_100%)] shadow-[0_16px_26px_rgba(42,84,209,0.25)] md:h-[104px] md:w-[104px]">
              <div className="h-0 w-0 border-l-[18px] border-r-[18px] border-t-[24px] border-l-transparent border-r-transparent border-t-white md:border-l-[22px] md:border-r-[22px] md:border-t-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TechBlogFooterBanner() {
  return (
    <div className="relative left-1/2 right-1/2 mt-12 ml-[-50vw] mr-[-50vw] w-screen bg-[#156ff3] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-18">
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
  )
}
