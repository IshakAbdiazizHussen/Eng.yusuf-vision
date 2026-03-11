import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { HighlightStats } from "@/components/highlight-stats"
import { PageFrame } from "@/components/page-frame"
import { SocialStats } from "@/components/social-stats"

const partners = ["taran", "keshflip", "amka"]
const socialLinks = {
  youtube: "https://www.youtube.com/@engyuyu",
  tiktok: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  instagram: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  facebook: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
}

function PartnerLogo({ partner }: { partner: string }) {
  if (partner === "taran") {
    return (
      <div className="flex items-center gap-3">
        <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-[#2db85b] text-[31px] font-bold text-[#185eac]">
          <span className="absolute -left-[3px] top-[5px] h-3 w-3 rounded-full bg-[#185eac]" />
          <span className="absolute -right-[3px] bottom-[6px] h-3 w-3 rounded-full bg-[#185eac]" />
          T
        </div>
        <span className="text-[31px] font-semibold tracking-[-0.03em] text-white dark:text-[#1b4e8f]">
          Taran <span className="text-[#2db85b]">App</span>
        </span>
      </div>
    )
  }

  if (partner === "keshflip") {
    return (
      <div className="flex items-center gap-4">
        <Image
          src="/keshflip icon.png"
          alt="Keshflip"
          width={512}
          height={512}
          className="h-[58px] w-[58px] object-contain"
        />
        <span className="text-[31px] font-semibold tracking-[-0.03em] text-white dark:text-[#121212]">
          Keshflip
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <Image
        src="/amka_-removebg-preview.png"
        alt="Amka"
        width={500}
        height={499}
        className="h-[92px] w-[92px] object-contain brightness-0 invert dark:brightness-0 dark:invert-0"
      />
      <div className="leading-none text-white dark:text-[#2f2929]">
        <div className="text-3xl font-semibold tracking-[-0.04em]">amka</div>
        <div className="mt-1 text-3xl font-light tracking-[-0.04em]">stock</div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const marqueePartners = [...partners, ...partners]

  return (
    <PageFrame>
      <section className="mx-auto grid max-w-[1320px] grid-cols-1 items-end gap-10 pt-6 lg:grid-cols-[560px_1fr] lg:gap-10 lg:pt-10">
        <div className="mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-[560px]">
          <Image
            src="/yuyu-removebg-preview.png"
            alt="Eng Yuyu portrait"
            width={900}
            height={1200}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        <div className="max-w-[760px] pb-4 lg:pb-16">
          <h1 className="mt-12 max-w-[720px] text-3xl font-semibold leading-[0.98] tracking-[-0.03em] text-black dark:text-white lg:text-[66px]">
            Eng Yuyu, The Tech Content Creator
          </h1>

          <p className="mt-7 max-w-[760px] text-[22px] font-normal leading-[1.5] text-[#121212] dark:text-white/88 sm:text-[28px] lg:text-[26px]">
            I&apos;m Yusuf Mohamed (Eng Yuyu), a Somali Tech Influencer, Digital
            Creator, and Educator with a mission to make technology simple,
            practical, and empowering for everyone.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-[72px] min-w-[300px] items-center justify-center gap-3 rounded-[18px] border-2 border-[#1d6cff] bg-[#dce3ee] 
              px-8 text-[22px] font-semibold text-[#1d6cff] transition-opacity hover:bg-blue-600 hover:text-white dark:border-[#3b87f6]"
            >
              Watch Latest Video <ArrowRight className="h-6 w-6 " />
            </a>
            <a
              href="#"
              className="inline-flex h-[72px] min-w-[300px] items-center justify-center gap-3 rounded-[18px] bg-[#1d6cff] px-8 
              text-[22px] font-semibold text-white transition-opacity hover:bg-white hover:text-blue-600 dark:border-blue-400"
            >
              For Collaboration <ArrowRight className="h-6 w-6" />
            </a>
          </div>

          <div className="mt-12">
            <h2 className="text-[32px] font-bold leading-none text-black dark:text-white">
              Partner With:
            </h2>

            <div className="relative mt-7 overflow-hidden">
              <div className="partner-marquee flex w-max items-center gap-8 sm:gap-10">
                {marqueePartners.map((partner, index) => (
                  <div
                    key={`${partner}-${index}`}
                    className="flex min-h-[112px] min-w-[250px] shrink-0 items-center justify-center rounded-[24px] border border-[#263655] bg-[#17243c] px-7 py-4 shadow-[0_12px_28px_rgba(24,53,107,0.16)] transition-colors dark:border-[#d8e2f2] dark:bg-[#ffffff] dark:shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
                  >
                    <PartnerLogo partner={partner} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="mx-auto mb-10 max-w-[1310px]">
        <div className="rounded-[34px] bg-gray-300 px-8 py-14 dark:bg-[#25314b] sm:px-12 lg:px-18">
          <HighlightStats />
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1320px] px-4 pb-8 sm:px-6">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.04em] text-black dark:text-white sm:text-[48px]">
            Empowering 1M+ Somali Tech
            <br />
            Learners Worldwide
          </h2>

          <SocialStats />
        </div>
      </section>

      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen bg-[#156ff3] px-6 py-16 text-white 
              sm:px-10 lg:px-16 lg:py-18">
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
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="social-icon-float-1 transition-transform duration-300 hover:scale-110"
            >
              <Image src="/youtubeRemoving.png" alt="YouTube" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-icon-float-2 transition-transform duration-300 hover:scale-110"
            >
              <Image src="/Facebook.png" alt="Facebook" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="social-icon-float-3 transition-transform duration-300 hover:scale-110"
            >
              <Image src="/Tiktok.png" alt="TikTok" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-icon-float-4 transition-transform duration-300 hover:scale-110"
            >
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
