"use client"

import { useEffect, useRef, useState } from "react"
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"

type SocialStat = {
  platform: "youtube" | "tiktok" | "facebook" | "instagram"
  label: string
  value: number
  decimals?: number
  suffix: string
  href: string
}

const stats: SocialStat[] = [
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
    decimals: 1,
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

function formatValue(value: number, decimals = 0) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

function CountUpNumber({
  value,
  decimals = 0,
  suffix,
  start,
}: {
  value: number
  decimals?: number
  suffix: string
  start: boolean
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

  const resolvedValue = start ? displayValue : 0

  return (
    <p className="mt-2 text-[34px] font-bold leading-none text-black dark:text-white">
      {formatValue(resolvedValue, decimals)}
      {suffix}
    </p>
  )
}

function SocialIcon({ platform, index }: { platform: SocialStat["platform"]; index: number }) {
  const motionClass = `social-icon-float-${(index % 4) + 1}`

  if (platform === "youtube") {
    return (
      <span
        className={`${motionClass} flex h-[58px] w-[78px] items-center justify-center rounded-[18px] bg-[#ff1307] text-white shadow-[0_10px_24px_rgba(255,19,7,0.25)]`}
      >
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
      <span
        className={`${motionClass} flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#1d6cff] text-white shadow-[0_10px_24px_rgba(29,108,255,0.28)]`}
      >
        <FaFacebookF className="h-10 w-10" />
      </span>
    )
  }

  return (
    <span
      className={`${motionClass} flex h-[64px] w-[64px] items-center justify-center rounded-[18px] bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_8%,#fd5949_30%,#d6249f_60%,#285AEB_100%)] text-white shadow-[0_10px_24px_rgba(214,36,159,0.24)]`}
    >
      <FaInstagram className="h-9 w-9" />
    </span>
  )
}

export function SocialStats() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="mt-10 rounded-[16px] bg-gray-300 px-8 py-10 dark:bg-[#25314b] sm:px-12">
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
        {stats.map((stat, index) => (
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
                decimals={stat.decimals}
                suffix={stat.suffix}
                start={hasStarted}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
