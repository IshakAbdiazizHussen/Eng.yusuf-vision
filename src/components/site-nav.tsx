"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "./theme-provider"

const navItems = [
  { href: "/about", label: "About" },
  { href: "/watch", label: "Watch" },
  { href: "/tech-blog", label: "Tech Blog" },
]

export function SiteNav() {
  const pathname = usePathname()
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 flex items-center gap-3 px-4 py-3 sm:left-1/2 sm:right-auto sm:top-4 sm:w-[calc(100%-3rem)] sm:max-w-[1520px] sm:-translate-x-1/2 sm:gap-8 sm:px-6 sm:py-3"
    >
      <Link href="/about" aria-label="Go to About page">
        <Image
          src="/Eng Yuyu Logo-21.png"
          alt="Eng Yuyu Logo"
          width={124}
          height={89}
          className="h-[62px] w-[112px] object-contain sm:h-[116px] sm:w-[176px]"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(35%) sepia(96%) saturate(2724%) hue-rotate(209deg) brightness(102%) contrast(98%)",
          }}
        />
      </Link>

      <ul
        className={`ml-auto flex min-w-0 flex-1 items-center justify-start gap-2 overflow-x-auto rounded-[22px] px-3 py-3 sm:w-auto sm:max-w-none sm:flex-none sm:justify-center sm:rounded-xl sm:px-7 sm:py-2.5 ${
          isDark ? "bg-[#d9e2f2] text-[#0f1724]" : "bg-[#d5deed] text-[#1d6cff]"
        }`}
      >
        {navItems.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <Link
              href={item.href}
              className={`px-2 text-[13px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[14px] ${
                pathname === item.href ? "opacity-100" : "opacity-80"
              }`}
            >
              {item.label}
            </Link>
            {index < navItems.length - 1 ? (
              <span
                className={`hidden text-[14px] font-medium sm:inline ${
                  isDark ? "text-[#0f1724]/60" : "text-[#1d6cff]/70"
                }`}
              >
                |
              </span>
            ) : null}
          </li>
        ))}
        <li className="flex items-center gap-2">
          <span className="px-2 text-[13px] font-semibold leading-none tracking-tight opacity-80 sm:text-[14px]">
            Events
          </span>
          <span className={`hidden text-[14px] font-medium sm:inline ${isDark ? "text-[#0f1724]/60" : "text-[#1d6cff]/70"}`}>|</span>
        </li>
        <li className="flex items-center">
          <span className="px-2 text-[13px] font-semibold leading-none tracking-tight opacity-80 sm:text-[14px]">
            Impact
          </span>
        </li>
      </ul>

      <ThemeToggle />
    </nav>
  )
}
