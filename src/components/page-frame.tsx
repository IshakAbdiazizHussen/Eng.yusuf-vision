import type { ReactNode } from "react"
import { SiteNav } from "./site-nav"

export function PageFrame({
  children,
  flushBottom = false,
}: {
  children: ReactNode
  flushBottom?: boolean
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f4f6]">
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-[62%]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(29,108,255,0.08) 1.2px, transparent 1.9px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0",
        }}
      />

      <div
        className={`relative mx-auto w-full max-w-[1520px] px-4 pt-28 sm:px-6 sm:pt-24 ${
          flushBottom ? "pb-0" : "pb-12"
        }`}
      >
        <SiteNav />
        {children}
      </div>
    </main>
  )
}
