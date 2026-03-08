"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Link2 } from "lucide-react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <main
      id="top"
      className={`relative min-h-screen overflow-hidden ${
        darkMode ? "bg-[#111111] text-white" : "bg-[#f3f4f6]"
      }`}
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-[62%]"
        style={{
          backgroundImage:
            darkMode
              ? "radial-gradient(circle, rgba(255,255,255,0.08) 1.2px, transparent 1.9px)"
              : "radial-gradient(circle, rgba(29,108,255,0.08) 1.2px, transparent 1.9px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1520px] px-4 pb-0 pt-28 sm:px-6 sm:pt-24">
        <nav
          className="fixed inset-x-0 top-0 z-50 flex items-center gap-3 px-4 py-3 sm:left-1/2 sm:right-auto sm:top-4 sm:w-[calc(100%-3rem)] sm:max-w-[1520px] sm:-translate-x-1/2 sm:gap-8 sm:bg-transparent sm:px-6 sm:py-3"
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
              darkMode ? "bg-white text-black" : "bg-[#d5deed] text-[#1d6cff]"
            }`}
          >
            <li className="flex items-center gap-2">
              <Link
                href="/about"
                className="px-2 text-[13px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[14px]"
              >
                About
              </Link>
              <span className={`hidden text-[14px] font-medium sm:inline ${darkMode ? "text-black/60" : "text-[#1d6cff]/70"}`}>|</span>
            </li>
            <li className="flex items-center gap-2">
              <Link
                href="/watch"
                className="px-2 text-[13px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[14px]"
              >
                Watch
              </Link>
              <span className={`hidden text-[14px] font-medium sm:inline ${darkMode ? "text-black/60" : "text-[#1d6cff]/70"}`}>|</span>
            </li>
            <li className="flex items-center gap-2">
              <Link
                href="/tech-blog"
                className="px-2 text-[13px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[14px]"
              >
                Tech Blog
              </Link>
              <span className={`hidden text-[14px] font-medium sm:inline ${darkMode ? "text-black/60" : "text-[#1d6cff]/70"}`}>|</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="px-2 text-[13px] font-semibold leading-none tracking-tight opacity-80 sm:text-[14px]">
                Events
              </span>
              <span className={`hidden text-[14px] font-medium sm:inline ${darkMode ? "text-black/60" : "text-[#1d6cff]/70"}`}>|</span>
            </li>
            <li className="flex items-center">
              <span className="px-2 text-[13px] font-semibold leading-none tracking-tight opacity-80 sm:text-[14px]">
                Impact
              </span>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            className={`shrink-0 rounded-xl px-4 py-2 text-[13px] font-semibold transition-opacity hover:opacity-85 sm:text-[14px] ${
              darkMode ? "bg-[#1d6cff] text-white" : "bg-[#d5deed] text-[#1d6cff]"
            }`}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </nav>

        <section className="mt-3 grid grid-cols-1 items-end gap-8 pt-4 lg:mt-5 lg:gap-10 lg:pt-8 lg:grid-cols-[minmax(0,500px)_1fr]">
          <div className="mx-auto h-[320px] w-full max-w-[360px] overflow-hidden sm:h-[520px] sm:max-w-[500px] lg:mx-0 lg:h-[690px]">
            <Image
              src="/yuyu.png"
              alt="Eng Yuyu portrait"
              width={526}
              height={628}
              className="h-full w-full object-contain object-top mix-blend-multiply sm:object-cover"
              priority
            />
          </div>

          <div className="max-w-[820px] pb-4 lg:mb-30 lg:ml-38 lg:pb-8">
            <h1 className="text-[64px] font-bold leading-[0.95] text-[#1d6cff] sm:text-6xl lg:text-8xl">
              Eng Yuyu
            </h1>
            <p className="mt-2 text-4xl font-light leading-[1.02] text-black">
              Tech Content Creator.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href="#"
                className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#e3eaf7] px-6 text-[16px] font-semibold leading-none text-[#1d6cff] whitespace-nowrap transition-opacity hover:opacity-85 sm:min-w-[260px] sm:text-[18px] lg:min-w-[300px]"
              >
                Watch Latest Videos <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#1d6cff] px-6 text-[16px] font-semibold leading-none text-white whitespace-nowrap transition-opacity hover:opacity-90 sm:min-w-[260px] sm:text-[18px] lg:min-w-[300px]"
              >
                For Collaboration <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold leading-none text-[#1d6cff] sm:text-[40px] lg:text-[50px]">
                Partners
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-end lg:gap-10">
                <div className="flex flex-col items-center justify-end gap-1">
                  <div className="h-[94px] w-[132px] overflow-hidden">
                    <Image
                      src="/premier_bank-removebg-preview.png"
                      alt="Premier Bank"
                      width={132}
                      height={94}
                      className="h-full w-full object-cover"
                      style={{ clipPath: "inset(18% 14% 18% 14%)" }}
                    />
                  </div>
                  <p className="text-center text-[16px] font-semibold leading-none tracking-tight text-[#173968]">
                    premier bank
                  </p>
                </div>

                <div className="flex items-end gap-3">
                  <div className="h-[94px] w-[112px] overflow-hidden">
                    <Image
                      src="/amka_-removebg-preview.png"
                      alt="Amka icon"
                      width={112}
                      height={94}
                      className="h-full w-full object-cover brightness-0 saturate-0"
                      style={{ clipPath: "inset(15%)" }}
                    />
                  </div>
                  <div className="mr-1 leading-none text-[#0a0a0a]">
                    <h3 className="text-[42px] font-semibold tracking-tight">amka</h3>
                    <p className="-mt-1 text-[40px] font-extralight tracking-wide">Stock</p>
                  </div>
                </div>

                <div className="flex items-end gap-3">
                  <div className="h-[96px] w-[96px] overflow-hidden">
                    <Image
                      src="/fudeydiye-removebg-preview.png"
                      alt="Fudaydiye"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                      style={{ clipPath: "inset(26%)" }}
                    />
                  </div>
                  <div className="leading-none text-[#0d7069]">
                    <h4 className="whitespace-nowrap text-[46px] font-semibold tracking-tight">
                      Fudaydiye
                    </h4>
                    <p className="mt-1 text-[13px] font-semibold text-[#46b97c]">
                      Click &amp; collect
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 pb-10">
          <div className="rounded-[44px] bg-gray-200 px-10 py-12 backdrop-blur-[1px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              <div className="flex h-[150px] items-center justify-center rounded-[26px] border-[5px] border-[#1d6cff] sm:h-[170px]">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[42px] font-bold leading-none text-[#1d6cff] sm:text-[52px]">600+</h3>
                  <p className="mt-1 text-[15px] font-medium leading-none text-[#1d6cff] sm:text-[17px]">
                    Tech Videos
                  </p>
                </div>
              </div>

              <div className="flex h-[150px] items-center justify-center rounded-[26px] border-[5px] border-[#1d6cff] sm:h-[170px]">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[42px] font-bold leading-none text-[#1d6cff] sm:text-[52px]">25+</h3>
                  <p className="mt-1 text-[15px] font-medium leading-none text-[#1d6cff] sm:text-[17px]">
                    Countries
                  </p>
                </div>
              </div>

              <div className="flex h-[150px] items-center justify-center rounded-[26px] border-[5px] border-[#1d6cff] sm:h-[170px]">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[42px] font-bold leading-none text-[#1d6cff] sm:text-[52px]">27+</h3>
                  <p className="mt-1 text-[15px] font-medium leading-none text-[#1d6cff] sm:text-[17px]">
                    Million Views
                  </p>
                </div>
              </div>

              <div className="flex h-[150px] items-center justify-center rounded-[26px] border-[5px] border-[#1d6cff] sm:h-[170px]">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[42px] font-bold leading-none text-[#1d6cff] sm:text-[52px]">10+</h3>
                  <p className="mt-1 text-[15px] font-medium leading-none text-[#1d6cff] sm:text-[17px]">
                    Collaborations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-20 text-center text-4xl font-bold leading-[1.05] text-blue-600 sm:text-6xl lg:text-7xl">
            Empowering 1M+ Somali Tech
            <br />
            Learners Worldwide.
          </h2>

          <div className="mx-auto mt-10 max-w-[1320px] rounded-[44px] bg-[#ccd5e4] px-6 py-10 sm:px-10 md:px-14 md:py-14">
            <div className="grid grid-cols-1 gap-x-28 gap-y-10 md:grid-cols-2 md:gap-y-14">
              <div className="flex items-center gap-6">
                <div className="flex h-[89px] w-[124px] items-center justify-center overflow-hidden bg-transparent">
                <a
                  href="https://www.youtube.com/@engyuyu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Eng Yuyu YouTube channel"
                >
                  <Image
                    src="/youtubeRemoving.png"
                    alt="YouTube"
                    width={124}
                    height={89}
                    className="h-[89px] w-[124px] object-contain"
                  />
                </a>
              </div>

                <div>
                  <p className="text-[18px] leading-none text-[#161616] sm:text-[22px]">Subscribers</p>
                  <h3 className="mt-2 text-[42px] font-bold leading-none text-black sm:text-[64px]">155k+</h3>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div>
                <a
                  href="https://www.tiktok.com/@eng_yuyu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Eng Yuyu TikTok profile"
                >
                  <Image
                    src="/Tiktok.png"
                    alt="Tiktok"
                    width={124}
                    height={89}
                    className="h-[89px] w-[124px] object-contain"
                  />
                </a>
              </div>
                <div>
                  <p className="text-[18px] leading-none text-[#161616] sm:text-[22px]">Followers</p>
                  <h3 className="mt-2 text-[42px] font-bold leading-none text-black sm:text-[64px]">513.9k+</h3>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="">
                <div>
                <a
                  href="https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Eng Yuyu Instagram profile"
                >
                  <Image
                    src="/Instgram.png"
                    alt="Instagram"
                    width={124}
                    height={89}
                    className="h-[89px] w-[124px] object-contain"
                  />
                </a>
              </div>

                </div>
                <div>
                  <p className="text-[18px] leading-none text-[#161616] sm:text-[22px]">Followers</p>
                  <h3 className="mt-2 text-[42px] font-bold leading-none text-black sm:text-[64px]">56k+</h3>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div>
                <a
                  href="https://www.facebook.com/share/189a6Qbxfk/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Eng Yuyu Facebook page"
                >
                  <Image
                    src="/Facebook.png"
                    alt="Facebook"
                    width={124}
                    height={89}
                    className="h-[89px] w-[124px] object-contain"
                  />
                </a>
              </div>
                <div>
                  <p className="text-[18px] leading-none text-[#161616] sm:text-[22px]">Followers</p>
                  <h3 className="mt-2 text-[42px] font-bold leading-none text-black sm:text-[64px]">290k+</h3>
                </div>
              </div>
            </div>
          </div>

          <section id="about" className="mt-20 grid scroll-mt-40 grid-cols-1 gap-10 xl:mt-60 xl:grid-cols-[560px_1fr] xl:gap-12">
            <div className="flex h-full flex-col">
              <Image
                src="/engY.png"
                alt="About Eng Yuyu"
                width={526}
                height={628}
                className="mx-auto h-auto w-full max-w-[540px] object-contain mix-blend-multiply xl:mx-0"
              />
              <div className="mt-0 hidden w-full max-w-[540px] flex-1 rounded-[56px] bg-[#ccd5e4] xl:block" />
            </div>

            {/* About section */}

            <div className="max-w-[1120px] pt-3">
              <div className="mb-8 flex flex-wrap gap-3 sm:gap-5">
                <span className="inline-flex h-12 items-center rounded-2xl bg-[#dfdfdf] px-6 text-[16px] font-semibold text-black sm:h-14 sm:px-10 sm:text-[20px]">
                  Tech Influencer
                </span>
                <span className="inline-flex h-12 items-center rounded-2xl bg-[#dbe5f7] px-6 text-[16px] font-semibold text-[#1d6cff] sm:h-14 sm:px-10 sm:text-[20px]">
                  Digital Creator
                </span>
              </div>

              <h2 className="text-5xl font-bold leading-none text-[#1d6cff]">About Me</h2>
              <h3 className="mt-5 text-2xl font-bold leading-[1.08] text-black">
                Making technology simple, useful, and accessible for everyone.
              </h3>

              <p className="mt-7 text-xl font-light leading-[1.24] text-[#141414]">
                I&apos;m Yusuf Mohamed Osman (Eng Yuyu) - a tech educator,
                content creator, and digital awareness advocate focused on
                helping people understand and use technology without fear or
                confusion.
              </p>

              <p className="mt-4 text-xl font-light leading-[1.24] text-[#141414]">
                Over the past years, I&apos;ve built a growing digital community
                by breaking down complex tech topics into simple, practical ideas
                that anyone can apply in daily life.
              </p>

              <h4 className="mt-8 text-2xl font-sans font-bold leading-none text-black">My Mission</h4>
              <p className="mt-4 text-xl font-light leading-[1.24] text-[#141414]">
                My mission is straightforward:
                <br />
                to help people use technology with confidence, protect their
                digital lives, and benefit from innovation instead of being
                overwhelmed by it.
                <br />
                Technology should serve people - not confuse them.
              </p>

              <h4 className="mt-10 text-2xl font-bold leading-none text-black">What I Do</h4>
              <p className="mt-4 text-xl font-light leading-[1.24] text-[#141414]">
                Through short videos, tutorials, talks, and events, I focus on:
                <br />
                Everyday smartphone tips (iPhone &amp; Android)
                <br />
                Digital security and privacy awareness
                <br />
                Artificial Intelligence explained simply
                <br />
                Content creation and digital skills
                <br />
                Helping people turn ideas into real opportunities
                <br />
                Everything I share is practical, honest, and tested in real
                life.
              </p>

              <h4 className="mt-10 text-2xl font-bold leading-none text-black">
                Why I Started
              </h4>
              <p className="mt-4 text-xl font-light leading-[1.24] text-[#141414]">
                When I began, I noticed a big gap:
                <br />
                many people were using technology daily, yet didn&apos;t fully
                understand how it worked or how to protect themselves online.
                <br />
                I made it a personal commitment to share clear, useful, and
                trustworthy tech knowledge, especially for the Somali community
                and anyone navigating the digital world.
              </p>

              <h4 className="mt-10 text-2xl font-bold leading-none text-black">
                Community Impact
              </h4>
              <p className="mt-4 text-xl font-light leading-[1.24] text-[#141414]">
                Today, more than 1 million people follow my content across
                social platforms.
                <br />
                I&apos;ve published hundreds of educational videos, hosted live
                events, and delivered tech education that reaches millions.
                <br />
                This journey has been built on consistency, patience, and
                community trust.
              </p>

              <h4 className="mt-10 text-2xl font-bold leading-none text-black">
                Beyond Content
              </h4>
              <p className="mt-4 text-xl font-light leading-[1.24] text-[#141414]">
                I regularly participate in:
                <br />
                Tech talks and workshops
                <br />
                Digital education programs
                <br />
                Community events and conferences
                <br />
                I also collaborate with brands and organizations that align
                with education, innovation, and positive digital impact.
              </p>

              <h4 className="mt-10 text-2xl font-bold leading-none text-black">
                Looking Ahead
              </h4>
              <p className="mt-4 text-xl font-light leading-[1.24] text-[#141414]">
                Technology evolves fast - and so do we.
                <br />
                I&apos;m committed to continuing this journey by:
                <br />
                Improving content quality
                <br />
                Expanding educational formats
                <br />
                Reaching more communities
                <br />
                Preparing people for the future of digital life
              </p>

              <p className="mt-15 text-2xl font-bold text-black">
                Thank you for being part of this journey.
                <br />
                The learning never stops.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-[40px] bg-[#dbe2ec] px-8 py-10 md:px-14">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-[640px]">
                <h2 className="text-2xl font-bold leading-none text-black">
                  Join the Community
                </h2>
                <p className="mt-4 text-xl font-light leading-[1.3] text-[#1f1f1f]">
                  Millions are already learning tech the simple way.
                  <br />
                  Follow, watch, and grow with us across platforms.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[#111111]">
                <a
                  href="https://www.youtube.com/@engyuyu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Eng Yuyu YouTube channel"
                >
                  <Image
                    src="/youtubeRemoving.png"
                    alt="YouTube"
                    width={124}
                    height={89}
                    className="h-[60px] w-[62px] object-contain"
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@eng_yuyu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Eng Yuyu TikTok profile"
                >
                  <Image
                    src="/Tiktok.png"
                    alt="Tiktok"
                    width={124}
                    height={89}
                    className="h-[60px] w-[62px] object-contain"
                  />
                </a>

                <a
                  href="https://www.facebook.com/share/189a6Qbxfk/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Eng Yuyu Facebook page"
                >
                  <Image
                    src="/Facebook.png"
                    alt="Facebook"
                    width={124}
                    height={89}
                    className="h-[60px] w-[62px] object-contain"
                  />
                </a>

                <a
                  href="https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Eng Yuyu Instagram profile"
                >
                  <Image
                    src="/Instgram.png"
                    alt="Instagram"
                    width={124}
                    height={89}
                    className="h-[60px] w-[62px] object-contain"
                  />
                </a>
              </div>
            </div>
          </section>

          <section id="watch" className="mt-28 scroll-mt-24 px-6 py-8 text-center">
            <h2 className="text-[58px] font-bold leading-none text-[#1d6cff]">
              WATCH &amp; LEARN
            </h2>
            <p className="mx-auto mt-5 max-w-[1080px] text-[28px] font-semibold leading-[1.25] text-black">
              Short, practical tech videos designed to make technology simple,
              useful, and accessible for everyone.
            </p>
          </section>

          <section id="events" className="mt-8 scroll-mt-32 rounded-[44px] bg-[#dbe2ec] px-8 py-10 md:px-12 md:py-12">
            <div className="grid gap-12 xl:grid-cols-[1.7fr_0.9fr]">
              <div>
                <h3 className="mb-8 text-center text-[34px] font-light text-black">
                  Featured Videos
                </h3>

                <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
                  {[
                    { platform: "YouTube", shape: "h-[260px] rounded-[30px]" },
                    { platform: "Facebook", shape: "h-[260px] rounded-[30px]" },
                    { platform: "Tiktok", shape: "h-[380px] max-w-[265px] rounded-[30px]" },
                    { platform: "Instagram", shape: "h-[380px] max-w-[265px] rounded-[30px]" },
                  ].map((video, index) => (
                    <div key={`${video.platform}-${index}`}>
                      <div
                        className={`w-full border-[3px] border-[#1d6cff] bg-transparent ${video.shape}`}
                      />
                      <h4 className="mt-6 max-w-[420px] text-2xl font-semibold leading-[1.02] text-black">
                        How AI Is Quietly
                        <br />
                        Changing Everyday Life
                      </h4>
                      <p className="mt-4 text-xl font-light leading-[1.1] text-[#1a1a1a]">
                        Platform: {video.platform}
                        <br />
                        Duration: 6:12
                      </p>
                      <a
                        href="#"
                        className="mt-6 inline-flex h-[58px] min-w-[270px] items-center justify-center rounded-[18px] bg-[#1d6cff] px-8 text-[28px] font-bold leading-none text-white transition-opacity hover:opacity-90"
                      >
                        Watch Now
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-8 text-center text-4xl font-bold leading-none text-[#1d6cff]">
                  Partners
                </h3>
                <div className="flex flex-col gap-14">
                  <div className="h-[540px] rounded-[42px] bg-[#1d6cff]" />
                  <div className="h-[540px] rounded-[42px] bg-[#1d6cff]" />
                </div>
              </div>
            </div>
          </section>

        </section>

        <section className="mt-12 rounded-[40px] bg-[#dbe2ec] px-8 py-10 md:px-14">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-[640px]">
                <h2 className="text-2xl font-bold leading-none text-black">
                  Join the Community
                </h2>
                <p className="mt-4 text-xl font-light leading-[1.3] text-[#1f1f1f]">
                  Millions are already learning tech the simple way.
                  <br />
                  Follow, watch, and grow with us across platforms.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[#111111]">
                <a
                  href="https://www.youtube.com/@engyuyu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Eng Yuyu YouTube channel"
                >
                  <Image
                    src="/youtubeRemoving.png"
                    alt="YouTube"
                    width={124}
                    height={89}
                    className="h-[60px] w-[62px] object-contain"
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@eng_yuyu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Eng Yuyu TikTok profile"
                >
                  <Image
                    src="/Tiktok.png"
                    alt="Tiktok"
                    width={124}
                    height={89}
                    className="h-[60px] w-[62px] object-contain"
                  />
                </a>

                <a
                  href="https://www.facebook.com/share/189a6Qbxfk/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Eng Yuyu Facebook page"
                >
                  <Image
                    src="/Facebook.png"
                    alt="Facebook"
                    width={124}
                    height={89}
                    className="h-[60px] w-[62px] object-contain"
                  />
                </a>

                <a
                  href="https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Eng Yuyu Instagram profile"
                >
                  <Image
                    src="/Instgram.png"
                    alt="Instagram"
                    width={124}
                    height={89}
                    className="h-[60px] w-[62px] object-contain"
                  />
                </a>

              </div>
            </div>
          </section>
        <section id="tech-blog" className="mt-40 scroll-mt-24 px-6 py-6 text-center">
                <h2 className="text-[62px] font-bold leading-none text-[#1d6cff]">
                  Tech Blog
                </h2>
                <p className="mt-3 text-2xl font-bold leading-none text-black">
                  Insights, tutorials, and digital awareness content for the somali community and beyond
                </p>
          </section>

          <section className="mt-8 rounded-[44px] bg-[#dbe2ec] px-8 py-10 md:px-12 md:py-12">
            <div className="grid gap-12 xl:grid-cols-[1.7fr_0.9fr]">
              <div>
                <p className="mb-8 text-center text-2xl font-light text-black md:text-[30px]">
                  December 22, 2025 | Security
                </p>

                <div className="relative h-[320px] w-full rounded-[34px] border-[4px] border-[#1d6cff] bg-transparent">
                  <div className="absolute left-6 top-6 flex items-center justify-center rounded-full">
                    <Image
            src="/Eng Yuyu Logo-21.png"
            alt="Eng Yuyu Logo"
            width={124}
            height={89}
            className="h-[89px] w-[124px] object-contain"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(35%) sepia(96%) saturate(2724%) hue-rotate(209deg) brightness(102%) contrast(98%)",
            }}
          />
                  </div>
                </div>

                <h3 className="mt-8 max-w-[980px] text-xl font-semibold leading-[1.08] tracking-[-0.03em] text-black md:text-5xl">
                  How AI Is Changing the Way
                  <br />
                  Somalis Learn Technology
                </h3>

                <div className="mt-6 flex items-center justify-between text-[22px] text-black md:text-[30px]">
                  <span className="font-light">7min Read</span>
                  <span className="inline-flex font-light items-center gap-3">
                    <Link2 className="h-7 w-7 rotate-45 md:h-8 md:w-8" />
                    Share
                  </span>
                </div>

                <p className="mt-8 max-w-[980px] text-2xl leading-[1.18] tracking-[-0.02em] text-black font-light">
                  Artificial Intelligence is no longer the future - it&apos;s
                  <br />
                  already shaping how we learn, work, and create.
                  <br />
                  Here&apos;s what that means for our community.
                </p>

                <h4 className="mt-14 text-2xl font-semibold text-[#1d6cff] md:text-2xl">
                  Latest Articles...
                </h4>

                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index}>
                      <div className="h-[220px] rounded-[24px] border-[3px] border-[#1d6cff] bg-transparent" />
                      <h5 className="mt-4 text-xl font-semibold leading-[1.15] text-black">
                        Digniin Muhiim ah oo ku
                        <br />
                        Socota Dadka Weli
                        <br />
                        Adeegsada Windows 10!
                      </h5>
                      <a
                        href="#"
                        className="mt-4 inline-flex h-[46px] min-w-[184px] items-center justify-center rounded-[14px] bg-[#1d6cff] px-6 text-[18px] font-bold text-white"
                      >
                        Learn More
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-8 text-center text-3xl font-bold leading-none text-[#1d6cff] md:text-[64px]">
                  Partners
                </h3>
                <div className="flex flex-col gap-14">
                  <div className="h-[540px] rounded-[42px] bg-[#1d6cff]" />
                  <div className="h-[540px] rounded-[42px] bg-[#1d6cff]" />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-[36px] bg-[#dfe6f1] px-8 py-8 md:px-10 md:py-9">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[760px]">
                <h3 className="text-2xl font-bold leading-none tracking-[-0.02em] text-black md:text-[38px]">
                  Join My Newsletter
                </h3>

                <p className="mt-4 max-w-[700px] text-xl font-light leading-[1.15] tracking-[-0.01em] text-[#1d1d1d] md:text-[24px]">
                  Get practical tech tips, digital safety guides,
                  <br />
                  and AI insights straight to your inbox.
                </p>

                <form className="mt-7 flex flex-col gap-4 md:flex-row md:items-center">
                  <input
                    type="email"
                    placeholder="Your Email"
                    suppressHydrationWarning
                    className="h-[72px] w-full rounded-[22px] bg-[#f5f5f5] px-8 text-[24px] font-semibold leading-none text-black outline-none placeholder:text-[#8f8f8f] md:w-[500px] lg:w-[540px]"
                  />

                  <button
                    type="submit"
                    suppressHydrationWarning
                    className="inline-flex h-[72px] w-full items-center justify-center rounded-[22px] bg-[#156BF7] px-8 text-[24px] font-bold leading-none text-white transition-opacity hover:opacity-90 md:w-[260px]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative h-[160px] w-[160px]">
                  <div className="absolute inset-0 rounded-full bg-[#0A84FF]" />
                  <div className="absolute inset-[16px] rounded-full bg-white" />
                  <div className="absolute bottom-[18px] left-[28px] h-[22px] w-[22px] rotate-[38deg] rounded-[6px] bg-white" />

                  <div className="absolute left-1/2 top-1/2 flex h-[66px] w-[66px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[16px] bg-[#156BF7]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[32px] w-[32px]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg" >
                      <rect x="3" y="5" width="18" height="14" rx="2.5" fill="#1D5FEA" />
                      <path
                        d="M5.5 7.5L12 12.8L18.5 7.5"
                        stroke="#2E7BFF"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="impact" className="relative left-1/2 right-1/2 mt-12 ml-[-50vw] mr-[-50vw] w-screen scroll-mt-32 bg-[#156BF7] text-white">
          <div className="grid min-h-[785px] gap-10 px-6 py-10 md:px-16 md:py-16 xl:grid-cols-[1fr_500px] xl:items-center">
            <div className="max-w-[620px] self-center xl:ml-[120px]">
              <div className="mb-5">
                <Image
                  src="/Eng Yuyu Logo-21.png"
                  alt="Eng Yuyu Logo"
                  width={124}
                  height={89}
                  className="mt-1 h-[56px] w-[80px] object-contain invert brightness-0 md:h-[62px] md:w-[88px]"
                />
              </div>

              <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-0.02em] md:text-[48px]">
                My Goal is Simple:
              </h2>

              <p className="mt-5 max-w-[610px] text-[22px] font-light leading-[1.18] tracking-[-0.01em] text-white md:text-[30px]">
                Lorem ipsum dolor sit amet, consectetuer
                <br />
                adipiscing elit, sed diam nonummy nibh
                <br />
                euismod tincidunt ut laoreet dolore
                <br />
                magna aliquam
              </p>

              <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
                <h3 className="text-[28px] font-bold leading-none md:text-2xl">
                  Find me here
                </h3>

                <div className="flex items-center gap-2 md:gap-3">
                  <a
                    href="https://www.youtube.com/@engyuyu"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Eng Yuyu YouTube channel"
                  >
                    <Image
                      src="/youtubeRemoving.png"
                      alt="YouTube"
                      width={124}
                      height={89}
                      className="h-[50px] w-[52px] object-contain md:h-[60px] md:w-[62px]"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Eng Yuyu Instagram profile"
                  >
                    <Image
                      src="/Instgram.png"
                      alt="Instagram"
                      width={124}
                      height={89}
                      className="h-[50px] w-[52px] object-contain md:h-[60px] md:w-[62px]"
                    />
                  </a>

                  <a
                    href="https://www.tiktok.com/@eng_yuyu"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Eng Yuyu TikTok profile"
                  >
                    <Image
                      src="/Tiktok.png"
                      alt="Tiktok"
                      width={124}
                      height={89}
                      className="h-[50px] w-[52px] object-contain md:h-[60px] md:w-[62px]"
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/share/189a6Qbxfk/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Eng Yuyu Facebook page"
                  >
                    <Image
                      src="/Facebook.png"
                      alt="Facebook"
                      width={124}
                      height={89}
                      className="h-[50px] w-[52px] rounded-full bg-white object-contain md:h-[60px] md:w-[62px]"
                    />
                  </a>

                </div>
              </div>
            </div>

            <div className="w-full max-w-[500px] justify-self-center xl:justify-self-end xl:mr-[120px]">
              <div className="rounded-[32px] bg-[#DDE4EE] px-6 py-8 md:rounded-[42px] md:px-11 md:py-11">
                <div>
                  <label className="block text-[20px] font-bold leading-none text-black md:text-[24px]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    suppressHydrationWarning
                    className="mt-4 h-[50px] w-full rounded-[14px] bg-[#F7F7F7] px-6 text-[17px] font-normal text-black outline-none placeholder:text-[#B9B9B9]"
                  />
                </div>

                <div className="mt-5">
                  <label className="block text-[20px] font-bold leading-none text-black md:text-[24px]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    suppressHydrationWarning
                    className="mt-4 h-[50px] w-full rounded-[14px] bg-[#F7F7F7] px-6 text-[17px] font-normal text-black outline-none placeholder:text-[#B9B9B9]"
                  />
                </div>

                <div className="mt-5">
                  <label className="block text-[20px] font-bold leading-none text-black md:text-[24px]">
                    Message
                  </label>
                  <textarea
                    placeholder="Describe what can i help you"
                    suppressHydrationWarning
                    className="mt-4 h-[87px] w-full resize-none rounded-[14px] bg-[#F7F7F7] px-6 py-4 text-[17px] font-normal text-black outline-none placeholder:text-[#B9B9B9]"
                  />
                </div>

                <button
                  type="button"
                  suppressHydrationWarning
                  className="mt-7 inline-flex h-[53px] w-full items-center justify-center rounded-[16px] bg-[#156BF7] 
                  text-[22px] font-bold leading-none text-white transition-opacity hover:opacity-90"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
    </div>
    </main>
  )
}
