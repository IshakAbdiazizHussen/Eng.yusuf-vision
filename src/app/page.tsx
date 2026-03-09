"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { useTheme } from "@/components/theme-provider"

const stats = [
  { value: "600+", label: "Tech Videos" },
  { value: "25+", label: "Countries" },
  { value: "27+", label: "Million Views" },
  { value: "10+", label: "Collaborate" },
]

const partnerItems = [
  { id: "taran", label: "Taran App" },
  { id: "keshflip", label: "Keshflip" },
  { id: "amka", label: "Amka Stock" },
]

export default function Home() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const marqueePartners = [...partnerItems, ...partnerItems]

  return (
    <main
      id="top"
      className={`relative min-h-screen overflow-hidden ${
        isDark ? "bg-[#191d2b] text-white" : "bg-[#f3f4f6] text-black"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(circle, rgba(105,120,160,0.22) 1.6px, transparent 2px)"
            : "radial-gradient(circle, rgba(29,108,255,0.08) 1.8px, transparent 2.4px)",
          backgroundSize: isDark ? "50px 50px" : "48px 48px",
          backgroundPosition: "center top",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1520px] px-4 pb-12 pt-32 sm:px-6 sm:pt-28">
        <SiteNav />

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
            <h1
              className={`max-w-[720px] text-3xl font-semibold leading-[0.98] tracking-[-0.03em] lg:text-[66px] mt-12 ${
                isDark ? "text-white" : " text-black"
              }`}
            >
              Eng Yuyu, The Tech Content Creator
            </h1>

            <p
              className={`mt-7 max-w-[760px] text-[22px] font-normal leading-[1.5] sm:text-[28px] lg:text-[26px] ${
                isDark ? "text-white/88" : "text-[#121212]"
              }`}
            >
              I&apos;m Yusuf Mohamed (Eng Yuyu), a Somali Tech Influencer, Digital
              Creator, and Educator with a mission to make technology simple,
              practical, and empowering for everyone.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className={`inline-flex h-[72px] min-w-[300px] items-center justify-center gap-3 rounded-[18px] border-2 px-8 text-[22px] font-semibold transition-opacity hover:opacity-90 ${
                  isDark
                    ? "border-[#3b87f6] bg-white/8 text-[#dbe7ff]"
                    : "border-[#1d6cff] bg-[#dce3ee] text-[#1d6cff]"
                }`}
              >
                Watch Latest Video <ArrowRight className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="inline-flex h-[72px] min-w-[300px] items-center justify-center gap-3 rounded-[18px] bg-[#1d6cff] px-8 text-[22px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                For Collaboration <ArrowRight className="h-6 w-6" />
              </a>
            </div>

            <div className="mt-12">
              <h2
                className={`text-[32px] font-bold leading-none ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Partner With:
              </h2>
              <div className="relative mt-7 overflow-hidden">
                <div className="partner-marquee flex w-max items-center gap-8 sm:gap-10">
                  {marqueePartners.map((partner, index) => (
                    <div
                      key={`${partner.id}-${index}`}
                      className="flex h-[94px] shrink-0 items-center justify-center"
                    >
                      {partner.id === "taran" ? (
                        <div className="flex items-center gap-3">
                          <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-[#2db85b] text-[31px] font-bold text-[#185eac]">
                            <span className="absolute -left-[3px] top-[5px] h-3 w-3 rounded-full bg-[#185eac]" />
                            <span className="absolute -right-[3px] bottom-[6px] h-3 w-3 rounded-full bg-[#185eac]" />
                            T
                          </div>
                          <span className="text-[31px] font-semibold tracking-[-0.03em] text-[#1b4e8f]">
                            Taran <span className="text-[#2db85b]">App</span>
                          </span>
                        </div>
                      ) : null}

                      {partner.id === "keshflip" ? (
                        <Image
                          src="/keshflip logo.png"
                          alt="Keshflip"
                          width={3282}
                          height={823}
                          className="h-[50px] w-auto object-contain"
                        />
                      ) : null}

                      {partner.id === "amka" ? (
                        <div className="flex items-center gap-4">
                          <Image
                            src="/amka_-removebg-preview.png"
                            alt="Amka"
                            width={500}
                            height={499}
                            className={`h-[92px] w-[92px] object-contain ${
                              isDark ? "invert brightness-0" : "brightness-0 saturate-0"
                            }`}
                          />
                          <div
                            className={`leading-none ${
                              isDark ? "text-white" : "text-[#2f2929]"
                            }`}
                          >
                            <div className="text-3xl font-semibold tracking-[-0.04em]">
                              amka
                            </div>
                            <div className="mt-1 text-3xl font-light tracking-[-0.04em]">
                              stock
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-[1310px]">
          <div
            className={`rounded-[34px] px-8 py-14 sm:px-12 lg:px-18 ${
              isDark ? "bg-[#25314b]" : "bg-[#dce3ee]"
            }`}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`flex h-[190px] items-center justify-center rounded-[14px] border-[4px] ${
                    isDark ? "border-[#4c8fff]" : "border-[#1d6cff]"
                  }`}
                >
                  <div className="text-center">
                    <h3
                      className={`text-[58px] font-bold leading-none ${
                        isDark ? "text-[#6ea2ff]" : "text-[#1d6cff]"
                      }`}
                    >
                      {stat.value}
                    </h3>
                    <p
                      className={`mt-3 text-[24px] font-semibold leading-[1.1] ${
                        isDark ? "text-[#6ea2ff]" : "text-[#1d6cff]"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
