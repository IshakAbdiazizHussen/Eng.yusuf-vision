"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "./theme-provider"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About me" },
  { href: "/tech-blog", label: "Tech News" },
  { href: "/events", label: "Event" },
  { href: "/impact", label: "Impact" },
  { href: "/impact#contact", label: "My Contacts" },
]

export function SiteNav() {
  const pathname = usePathname()
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b px-4 py-4 backdrop-blur-sm transition-colors sm:px-6 ${
        isDark
          ? "border-[#2b3555] bg-[#171b29]/96"
          : "border-black/6 bg-[#f3f3f3]/96"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-wrap items-center justify-between gap-4 lg:grid lg:grid-cols-[180px_1fr_130px] lg:gap-8">
        <Link href="/" aria-label="Go to homepage" className="justify-self-start">
          <Image
            src="/Eng Yuyu Logo-21.png"
            alt="Eng Yuyu Logo"
            width={124}
            height={89}
            className="h-[54px] w-[92px] object-contain sm:h-[62px] sm:w-[104px]"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(35%) sepia(96%) saturate(2724%) hue-rotate(209deg) brightness(102%) contrast(98%)",
            }}
          />
        </Link>

        <ul className="order-3 flex w-full min-w-0 items-center justify-start gap-6 overflow-x-auto pt-1 text-[#121212] lg:order-2 lg:w-auto lg:justify-center lg:gap-11 lg:overflow-visible dark:text-[#26e3ff]">
          {navItems.map((item) => {
            const isActive = item.href === "/"
              ? pathname === "/"
              : item.href.includes("#")
                ? false
                : pathname === item.href

            return (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className={`inline-flex border-b-[3px] px-1 pb-3 text-[15px] font-semibold tracking-[-0.02em] transition-colors hover:text-[#1d6cff] lg:text-[17px] ${
                    isActive
                      ? "border-[#1d6cff] text-[#1d6cff] dark:text-[#26e3ff]"
                      : "border-transparent dark:text-[#26e3ff]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="order-2 ml-auto lg:order-3 lg:ml-0 lg:justify-self-end">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
