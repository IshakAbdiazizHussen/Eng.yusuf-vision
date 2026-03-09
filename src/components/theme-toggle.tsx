"use client"

import { useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )

  const isDark = mounted && theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="relative inline-flex h-11 w-[102px] shrink-0 items-center rounded-full border border-black/8 bg-[#f4f4f4] p-1 text-[#111111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_3px_10px_rgba(17,17,17,0.08)] transition-colors hover:bg-[#efefef] dark:border-[#3e4763] dark:bg-[#252b3f] dark:text-[#f3f4f6] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_3px_10px_rgba(0,0,0,0.28)] dark:hover:bg-[#2b3147]"
    >
      <span
        className={`absolute top-1 h-9 w-9 rounded-full bg-white shadow-[0_2px_6px_rgba(17,17,17,0.15)] transition-transform duration-300 dark:bg-[#363d55] ${
          isDark ? "translate-x-[56px]" : "translate-x-0"
        }`}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-3">
        <Sun className={`h-4 w-4 transition-opacity ${isDark ? "opacity-45" : "opacity-100"}`} />
        <Moon className={`h-4 w-4 transition-opacity ${isDark ? "opacity-100" : "opacity-55"}`} />
      </span>
    </button>
  )
}
