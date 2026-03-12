"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"
import { PageFrame } from "@/components/page-frame"

type SocialStat = {
  platform: "youtube" | "tiktok" | "facebook" | "instagram"
  label: string
  value: number
  suffix: string
  href: string
}

const partners = ["taran", "keshflip", "amka", "sanguuni"]
const highlights = [
  { value: 600, suffix: "+", label: "Tech Videos" },
  { value: 25, suffix: "+", label: "Countries" },
  { value: 27, suffix: "+", label: "Million Views" },
  { value: 10, suffix: "+", label: "Collaborate" },
]
const socialStats: SocialStat[] = [
  {
    platform: "youtube",
    label: "Subscribers",
    value: 148,
    suffix: "k+",
    href: "https://www.youtube.com/@engyuyu",
  },
  {
    platform: "tiktok",
    label: "Followers",
    value: 506.3,
    suffix: "k+",
    href: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  },
  {
    platform: "facebook",
    label: "Followers",
    value: 276,
    suffix: "k+",
    href: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
  },
  {
    platform: "instagram",
    label: "Followers",
    value: 276,
    suffix: "k+",
    href: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  },
]
const socialLinks = {
  youtube: "https://www.youtube.com/@engyuyu",
  tiktok: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  instagram: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  facebook: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
}

function formatValue(value: number, decimals = 0) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
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

  if (partner === "sanguuni") {
    return (
      <div className="flex items-center gap-4">
        <Image
          src="/Sanguuni Electronics Logos.png"
          alt="Sanguuni Electronics"
          width={1200}
          height={400}
          className="h-[66px] w-auto object-contain brightness-0 invert dark:brightness-100 dark:invert-0"
        />
        <div className="leading-none text-white dark:text-[#24324d]">
          <div className="text-[28px] font-semibold tracking-[-0.04em]">Sanguuni</div>
          <div className="mt-1 text-[24px] font-medium tracking-[-0.03em] dark:text-[#24324d]">Electronics</div>
        </div>
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

function CountUpNumber({
  value,
  decimals = 0,
  suffix,
  start,
  className,
}: {
  value: number
  decimals: number
  suffix: string
  start: boolean
  className: string
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!start) {
      return
    }

    let frameId = 0
    const duration = 1800
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setDisplayValue(value * eased)

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frameId)
  }, [start, value])

  return (
    <p className={className}>
      {formatValue(start ? displayValue : 0, decimals)}
      {suffix}
    </p>
  )
}

function SocialIcon({ platform, index }: { platform: SocialStat["platform"]; index: number }) {
  const motionClass = `social-icon-float-${(index % 4) + 1}`

  if (platform === "youtube") {
    return (
      <span className={`${motionClass} flex h-[58px] w-[78px] items-center justify-center rounded-[18px] bg-[#ff1307] text-white shadow-[0_10px_24px_rgba(255,19,7,0.25)]`}>
        <FaYoutube className="h-8 w-8" />
      </span>
    )
  }

  if (platform === "tiktok") {
    return (
      <span className={`${motionClass} flex h-[64px] w-[64px] items-center justify-center text-[#161616] dark:text-white`}>
        <FaTiktok className="h-14 w-14 drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]" />
      </span>
    )
  }

  if (platform === "facebook") {
    return (
      <span className={`${motionClass} flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#1d6cff] text-white shadow-[0_10px_24px_rgba(29,108,255,0.28)]`}>
        <FaFacebookF className="h-10 w-10" />
      </span>
    )
  }

  return (
    <span className={`${motionClass} flex h-[64px] w-[64px] items-center justify-center rounded-[18px] bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_8%,#fd5949_30%,#d6249f_60%,#285AEB_100%)] text-white shadow-[0_10px_24px_rgba(214,36,159,0.24)]`}>
      <FaInstagram className="h-9 w-9" />
    </span>
  )
}

export default function HomePage() {
  const marqueePartners = [...partners, ...partners]
  const highlightRef = useRef<HTMLDivElement | null>(null)
  const socialRef = useRef<HTMLDivElement | null>(null)
  const [highlightStarted, setHighlightStarted] = useState(false)
  const [socialStarted, setSocialStarted] = useState(false)

  useEffect(() => {
    const node = highlightRef.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHighlightStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const node = socialRef.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setSocialStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

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
              className="inline-flex h-[72px] min-w-[300px] items-center justify-center gap-3 rounded-[18px] border-2 border-[#1d6cff] bg-[#dce3ee] px-8 text-[22px] font-semibold text-[#1d6cff] transition-opacity hover:bg-blue-600 hover:text-white dark:border-[#3b87f6]"
            >
              Watch Latest Video <ArrowRight className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="inline-flex h-[72px] min-w-[300px] items-center justify-center gap-3 rounded-[18px] bg-[#1d6cff] px-8 text-[22px] font-semibold text-white transition-opacity hover:bg-white hover:text-blue-600 dark:border-blue-400"
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
          <div ref={highlightRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex h-[190px] items-center justify-center rounded-[14px] border-[4px] border-[#1d6cff] dark:border-[#4c8fff]"
              >
                <div className="text-center">
                  <CountUpNumber
                    value={item.value}
                    decimals={0}
                    suffix={item.suffix}
                    start={highlightStarted}
                    className="text-[58px] font-bold leading-none text-[#1d6cff] dark:text-[#6ea2ff]"
                  />
                  <p className="mt-3 text-[24px] font-semibold leading-[1.1] text-[#1d6cff] dark:text-[#6ea2ff]">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1320px] px-4 pb-8 sm:px-6">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.04em] text-black dark:text-white sm:text-[48px]">
            Empowering 1M+ Somali Tech
            <br />
            Learners Worldwide
          </h2>

          <div ref={socialRef} className="mt-10 rounded-[16px] bg-gray-300 px-8 py-10 dark:bg-[#25314b] sm:px-12">
            <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
              {socialStats.map((stat, index) => (
                <div
                  key={stat.platform}
                  className="group flex items-center gap-5 rounded-[24px] border border-transparent p-3 transition-transform duration-300 hover:-translate-y-1 hover:border-black/6 dark:hover:border-white/10"
                >
                  <a
                    href={stat.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={stat.platform[0].toUpperCase() + stat.platform.slice(1)}
                    className="shrink-0"
                  >
                    <SocialIcon platform={stat.platform} index={index} />
                  </a>
                  <div className="text-left">
                    <p className="text-[20px] leading-none text-[#121212] dark:text-white">
                      {stat.label}
                    </p>
                    <CountUpNumber
                      value={stat.value}
                      decimals={stat.platform === "tiktok" ? 1 : 0}
                      suffix={stat.suffix}
                      start={socialStarted}
                      className="mt-2 text-[34px] font-bold leading-none text-black dark:text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
