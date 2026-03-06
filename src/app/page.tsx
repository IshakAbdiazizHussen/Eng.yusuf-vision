import Image from "next/image"
import { ArrowRight, Facebook, Instagram, Music2, Youtube } from "lucide-react"

export default function Home() {
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

      <div className="relative mx-auto w-full max-w-[1520px] px-6 pb-0 pt-4">
        <nav className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 pl-1" aria-label="Home">
            <span className="h-7 w-4 -rotate-[32deg] rounded-full border-[2.5px] border-[#1d6cff]" />
            <span className="h-14 w-8 -rotate-[32deg] rounded-lg bg-[#1d6cff]" />
          </a>

          <ul className="ml-auto flex items-center justify-center gap-2 rounded-xl bg-[#d5deed] px-7 py-2.5 text-[#1d6cff]">
            <li className="flex items-center gap-2">
              <a
                href="/about"
                className="px-2 text-[14px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                About
              </a>
              <span className="text-[14px] font-medium text-[#1d6cff]/90">|</span>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="px-2 text-[14px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                Watch
              </a>
              <span className="text-[14px] font-medium text-[#1d6cff]/90">|</span>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="px-2 text-[14px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                Tech Blog
              </a>
              <span className="text-[14px] font-medium text-[#1d6cff]/90">|</span>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="px-2 text-[14px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                Events
              </a>
              <span className="text-[14px] font-medium text-[#1d6cff]/90">|</span>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="px-2 text-[14px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                Impact
              </a>
            </li>
          </ul>
        </nav>

        <section className="mt-5 grid grid-cols-[500px_1fr] items-end gap-10 pt-8">
          <div className="mb-0 h-[690px] w-full max-w-[500px] overflow-hidden">
            <Image
              src="/Yuyu.png"
              alt="Eng Yuyu portrait"
              width={526}
              height={628}
              className="h-full w-full object-cover object-top mix-blend-multiply"
              priority
            />
          </div>

          <div className="max-w-[820px] pb-8 ml-38 mb-18">
            <h1 className="text-8xl font-bold leading-[0.95] text-[#1d6cff]">Eng Yuyu</h1>
            <p className="mt-2 text-[62px] font-medium leading-[1.02] text-[#0a0a0a]">
              Tech Content Creator.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-[52px] min-w-[300px] items-center justify-center gap-2 rounded-2xl bg-[#e3eaf7] px-6 text-[18px] font-semibold leading-none text-[#1d6cff] whitespace-nowrap transition-opacity hover:opacity-85"
              >
                Watch Latest Videos <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex h-[52px] min-w-[300px] items-center justify-center gap-2 rounded-2xl bg-[#1d6cff] px-6 text-[18px] font-semibold leading-none text-white whitespace-nowrap transition-opacity hover:opacity-90"
              >
                For Collaboration <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-12">
              <h2 className="text-[50px] font-bold leading-none text-[#1d6cff]">Partners</h2>
              <div className="mt-4 flex items-end gap-10">
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

        <section className="mb-8 mb-8 pb-10">
          <div className="rounded-[44px] bg-gray-200 px-10 py-12 backdrop-blur-[1px]">
            <div className="grid grid-cols-4 gap-8">
              <div className="flex h-[170px] items-center justify-center rounded-[26px] border-[5px] border-[#1d6cff]">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[52px] font-bold leading-none text-[#1d6cff]">600+</h3>
                  <p className="mt-1 text-[17px] font-medium leading-none text-[#1d6cff]">
                    Tech Videos
                  </p>
                </div>
              </div>

              <div className="flex h-[170px] items-center justify-center rounded-[26px] border-[5px] border-[#1d6cff]">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[52px] font-bold leading-none text-[#1d6cff]">25+</h3>
                  <p className="mt-1 text-[17px] font-medium leading-none text-[#1d6cff]">
                    Countries
                  </p>
                </div>
              </div>

              <div className="flex h-[170px] items-center justify-center rounded-[26px] border-[5px] border-[#1d6cff]">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[52px] font-bold leading-none text-[#1d6cff]">27+</h3>
                  <p className="mt-1 text-[17px] font-medium leading-none text-[#1d6cff]">
                    Million Views
                  </p>
                </div>
              </div>

              <div className="flex h-[170px] items-center justify-center rounded-[26px] border-[5px] border-[#1d6cff]">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[52px] font-bold leading-none text-[#1d6cff]">10+</h3>
                  <p className="mt-1 text-[17px] font-medium leading-none text-[#1d6cff]">
                    Collaborations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-20 text-center text-7xl font-bold leading-[1.05] text-blue-600">
            Empowering 1M+ Somali Tech
            <br />
            Learners Worldwide.
          </h2>

          <div className="mx-auto mt-10 max-w-[1320px] rounded-[44px] bg-[#ccd5e4] px-14 py-14">
            <div className="grid grid-cols-2 gap-x-28 gap-y-14">
              <div className="flex items-center gap-6">
                <div className="flex h-24 w-44 items-center justify-center rounded-[28px] bg-[#ff0e0e]">
                  <Youtube className="h-12 w-12 text-white" fill="currentColor" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[22px] leading-none text-[#161616]">Subscribers</p>
                  <h3 className="mt-2 text-[64px] font-bold leading-none text-black">155k+</h3>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-24 w-24 items-center justify-center">
                  <Music2 className="h-16 w-16 text-[#1f1b20]" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-[22px] leading-none text-[#161616]">Followers</p>
                  <h3 className="mt-2 text-[64px] font-bold leading-none text-black">513.9k+</h3>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="relative h-24 w-24 rounded-[28px] bg-[linear-gradient(135deg,#fbc700_0%,#ff6a00_35%,#ff0068_70%,#7c2cff_100%)] p-2">
                  <div className="flex h-full w-full items-center justify-center rounded-[22px] bg-white">
                    <Instagram className="h-11 w-11 text-[#ff2a54]" strokeWidth={2.6} />
                  </div>
                </div>
                <div>
                  <p className="text-[22px] leading-none text-[#161616]">Followers</p>
                  <h3 className="mt-2 text-[64px] font-bold leading-none text-black">56k+</h3>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#2577e7]">
                  <Facebook className="h-14 w-14 text-white" fill="currentColor" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[22px] leading-none text-[#161616]">Followers</p>
                  <h3 className="mt-2 text-[64px] font-bold leading-none text-black">290k+</h3>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-60 grid grid-cols-[560px_1fr] gap-12">
            <div className="flex h-full flex-col">
              <Image
                src="/engY.png"
                alt="About Eng Yuyu"
                width={526}
                height={628}
                className="h-auto w-full max-w-[540px] object-contain mix-blend-multiply"
              />
              <div className="mt-0 w-full max-w-[540px] flex-1 rounded-[56px] bg-[#ccd5e4]" />
            </div>

            <div className="max-w-[1120px] pt-3">
              <div className="mb-8 flex gap-5">
                <span className="inline-flex h-[54px] items-center rounded-2xl bg-[#dfdfdf] px-10 text-[20px] font-semibold text-black">
                  Tech Influencer
                </span>
                <span className="inline-flex h-[54px] items-center rounded-2xl bg-[#dbe5f7] px-10 text-[20px] font-semibold text-[#1d6cff]">
                  Digital Creator
                </span>
              </div>

              <h2 className="text-[64px] font-bold leading-none text-[#1d6cff]">About Me</h2>
              <h3 className="mt-5 text-[54px] font-bold leading-[1.08] text-black">
                Making technology simple, useful, and accessible for everyone.
              </h3>

              <p className="mt-7 text-[22px] leading-[1.24] text-[#141414]">
                I&apos;m Yusuf Mohamed Osman (Eng Yuyu) - a tech educator,
                content creator, and digital awareness advocate focused on
                helping people understand and use technology without fear or
                confusion.
              </p>

              <p className="mt-4 text-[22px] leading-[1.24] text-[#141414]">
                Over the past years, I&apos;ve built a growing digital community
                by breaking down complex tech topics into simple, practical ideas
                that anyone can apply in daily life.
              </p>

              <h4 className="mt-8 text-[52px] font-bold leading-none text-black">My Mission</h4>
              <p className="mt-4 text-[22px] leading-[1.24] text-[#141414]">
                My mission is straightforward:
                <br />
                to help people use technology with confidence, protect their
                digital lives, and benefit from innovation instead of being
                overwhelmed by it.
                <br />
                Technology should serve people - not confuse them.
              </p>

              <h4 className="mt-10 text-[52px] font-bold leading-none text-black">What I Do</h4>
              <p className="mt-4 text-[22px] leading-[1.24] text-[#141414]">
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

              <h4 className="mt-10 text-[52px] font-bold leading-none text-black">
                Why I Started
              </h4>
              <p className="mt-4 text-[22px] leading-[1.24] text-[#141414]">
                When I began, I noticed a big gap:
                <br />
                many people were using technology daily, yet didn&apos;t fully
                understand how it worked or how to protect themselves online.
                <br />
                I made it a personal commitment to share clear, useful, and
                trustworthy tech knowledge, especially for the Somali community
                and anyone navigating the digital world.
              </p>

              <h4 className="mt-10 text-[52px] font-bold leading-none text-black">
                Community Impact
              </h4>
              <p className="mt-4 text-[22px] leading-[1.24] text-[#141414]">
                Today, more than 1 million people follow my content across
                social platforms.
                <br />
                I&apos;ve published hundreds of educational videos, hosted live
                events, and delivered tech education that reaches millions.
                <br />
                This journey has been built on consistency, patience, and
                community trust.
              </p>

              <h4 className="mt-10 text-[52px] font-bold leading-none text-black">
                Beyond Content
              </h4>
              <p className="mt-4 text-[22px] leading-[1.24] text-[#141414]">
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

              <h4 className="mt-10 text-[52px] font-bold leading-none text-black">
                Looking Ahead
              </h4>
              <p className="mt-4 text-[22px] leading-[1.24] text-[#141414]">
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

              <p className="mt-15 text-3xl font-bold text-black">
                Thank you for being part of this journey.
                <br />
                The learning never stops.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-[40px] bg-[#dbe2ec] px-8 py-10 md:px-14">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-[640px]">
                <h2 className="text-[42px] font-bold leading-none text-black">
                  Join the Community
                </h2>
                <p className="mt-4 text-[24px] leading-[1.3] text-[#1f1f1f]">
                  Millions are already learning tech the simple way.
                  <br />
                  Follow, watch, and grow with us across platforms.
                </p>
              </div>

              <div className="flex items-center gap-5 text-[#111111]">
                <a
                  href="#"
                  aria-label="YouTube"
                  className="transition-transform hover:scale-105"
                >
                  <Youtube className="h-14 w-14 text-[#ff0000]" fill="currentColor" strokeWidth={1.8} />
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="transition-transform hover:scale-105"
                >
                  <Music2 className="h-12 w-12" strokeWidth={2.5} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="transition-transform hover:scale-105"
                >
                  <Facebook className="h-14 w-14 text-[#1877f2]" fill="currentColor" strokeWidth={1.8} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="transition-transform hover:scale-105"
                >
                  <Instagram className="h-14 w-14 text-[#e1306c]" strokeWidth={2.2} />
                </a>
              </div>
            </div>
          </section>

          <section className="mt-28 px-6 py-8 text-center">
            <h2 className="text-[58px] font-bold leading-none text-[#1d6cff]">
              WATCH &amp; LEARN
            </h2>
            <p className="mx-auto mt-5 max-w-[1080px] text-[28px] font-semibold leading-[1.25] text-black">
              Short, practical tech videos designed to make technology simple,
              useful, and accessible for everyone.
            </p>
          </section>

          <section className="mt-8 rounded-[44px] bg-[#dbe2ec] px-8 py-10 md:px-12 md:py-12">
            <div className="grid gap-12 xl:grid-cols-[1.7fr_0.9fr]">
              <div>
                <h3 className="mb-8 text-center text-[34px] font-medium text-black">
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
                      <p className="mt-4 text-[22px] leading-[1.1] text-[#1a1a1a]">
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
                <h2 className="text-[42px] font-bold leading-none text-black">
                  Join the Community
                </h2>
                <p className="mt-4 text-[24px] leading-[1.3] text-[#1f1f1f]">
                  Millions are already learning tech the simple way.
                  <br />
                  Follow, watch, and grow with us across platforms.
                </p>
              </div>

              <div className="flex items-center gap-5 text-[#111111]">
                <a
                  href="#"
                  aria-label="YouTube"
                  className="transition-transform hover:scale-105"
                >
                  <Youtube className="h-14 w-14 text-[#ff0000]" fill="currentColor" strokeWidth={1.8} />
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="transition-transform hover:scale-105"
                >
                  <Music2 className="h-12 w-12" strokeWidth={2.5} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="transition-transform hover:scale-105"
                >
                  <Facebook className="h-14 w-14 text-[#1877f2]" fill="currentColor" strokeWidth={1.8} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="transition-transform hover:scale-105"
                >
                  <Instagram className="h-14 w-14 text-[#e1306c]" strokeWidth={2.2} />
                </a>
              </div>
            </div>
          </section>


          <section className="mt-40 px-6 py-6 text-center">
            <h2 className="text-[62px] font-bold leading-none text-blue-500">
              Tech Blog
            </h2>
            <p className="mt-3 text-[32px] font-bold leading-none text-black">
              Simple tech, real impact
            </p>
          </section>

      </div>
    </main>
  )
}
