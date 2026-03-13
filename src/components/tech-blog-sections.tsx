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
    <section className="mt-10 rounded-[44px] bg-[#dbe2ec] px-8 py-10 dark:bg-[#20283b] md:px-14 md:py-12">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[760px]">
          <h2 className="text-3xl font-bold leading-none text-black dark:text-white">
            Join My Newsletter
          </h2>
          <p className="mt-5 max-w-[700px] text-2xl font-light leading-[1.2] text-[#1d1d1d] dark:text-[#dde6fb] md:text-[30px]">
            Get practical tech tips, digital safety guides,
            <br />
            and AI insights straight to your inbox.
          </p>

          <NewsletterForm />
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-full border-[12px] border-[#00a8ff] bg-white shadow-[0_0_0_8px_#1d6cff] md:h-[210px] md:w-[210px]">
            <div className="flex h-[82px] w-[82px] items-center justify-center rounded-[16px] bg-[#1d6cff] text-[44px] text-white md:h-[104px] md:w-[104px] md:text-[56px]">
              ✉
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
