"use client"

import { useEffect, useRef, useState } from "react"

const highlights = [
  { value: 600, suffix: "+", label: "Tech Videos" },
  { value: 25, suffix: "+", label: "Countries" },
  { value: 27, suffix: "+", label: "Million Views" },
  { value: 10, suffix: "+", label: "Collaborate" },
]

function formatValue(value: number) {
  return Math.round(value).toLocaleString("en-US")
}

function CountUpValue({
  value,
  suffix,
  start,
}: {
  value: number
  suffix: string
  start: boolean
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!start) {
      return
    }

    let frameId = 0
    const duration = 1700
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
    <h3 className="text-[58px] font-bold leading-none text-[#1d6cff] dark:text-[#6ea2ff]">
      {formatValue(resolvedValue)}
      {suffix}
    </h3>
  )
}

export function HighlightStats() {
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
      { threshold: 0.3 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {highlights.map((item) => (
        <div
          key={item.label}
          className="flex h-[190px] items-center justify-center rounded-[14px] border-[4px] border-[#1d6cff] dark:border-[#4c8fff]"
        >
          <div className="text-center">
            <CountUpValue value={item.value} suffix={item.suffix} start={hasStarted} />
            <p className="mt-3 text-[24px] font-semibold leading-[1.1] text-[#1d6cff] dark:text-[#6ea2ff]">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
