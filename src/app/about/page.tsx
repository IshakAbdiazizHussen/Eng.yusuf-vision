import Image from "next/image"
import { CircleHelp, Lightbulb, Target } from "lucide-react"
import { PageFrame } from "@/components/page-frame"

const socialLinks = {
  youtube: "https://www.youtube.com/@engyuyu",
  tiktok: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  instagram: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  facebook: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
}

export default function AboutPage() {
  return (
    <PageFrame flushBottom>
      <section className="relative left-1/2 right-1/2 mt-2 ml-[-50vw] mr-[-50vw] w-screen bg-[#dfe5ef] px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-[520px_1fr] lg:gap-14">
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/engY-removebg-preview.png"
              alt="About Eng Yuyu"
              width={900}
              height={1200}
              className="h-auto w-full max-w-[420px] object-contain lg:max-w-[470px]"
              priority
            />
          </div>

          <div className="max-w-[760px]">
            <div className="mb-8 flex flex-wrap gap-4">
              <span className="inline-flex h-12 items-center rounded-full bg-[#eef4ff] px-6 text-[18px] font-semibold text-[#1d6cff] dark:bg-[#1d6cff] dark:text-white">
                Tech Influencer
              </span>
              <span className="inline-flex h-12 items-center rounded-full bg-[#eef4ff] px-6 text-[18px] font-semibold text-[#1d6cff] dark:bg-[#1d6cff] dark:text-white">
                Digital Creator
              </span>
            </div>

            <h1 className="text-[54px] font-bold leading-none tracking-[-0.04em] text-[#1d6cff] sm:text-[66px]">
              About Me
            </h1>

            <h2 className="mt-6 max-w-[760px] text-[30px] font-bold leading-[1.18] tracking-[-0.03em] text-black sm:text-[36px]">
              Making technology simple, useful, and accessible for everyone.
            </h2>

            <div className="mt-6 max-w-[820px] space-y-4 text-[22px] leading-[1.45] tracking-[-0.02em] text-[#141414] sm:text-[24px]">
              <p>
                I&apos;m Yusuf Mohamed Osman (Eng Yuyu) - a tech educator, content
                creator, and digital awareness advocate focused on helping
                people understand and use technology without fear or confusion.
              </p>
              <p>
                Over the past years, I&apos;ve built a growing digital community by
                breaking down complex tech topics into simple, practical ideas
                that anyone can apply in daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-[1180px] grid-cols-1 items-center gap-12 px-4 pb-10 sm:px-0 lg:grid-cols-[1fr_380px]">
        <div className="max-w-[760px]">
          <h2 className="text-[58px] font-bold leading-none tracking-[-0.04em] text-[#1d6cff]">
            My Mission
          </h2>
          <div className="mt-6 space-y-3 text-[22px] leading-[1.48] tracking-[-0.02em] text-black sm:text-[24px]">
            <p>My mission is straightforward:</p>
            <p>
              to help people use technology with confidence, protect their
              digital lives, and benefit from innovation instead of being
              overwhelmed by it.
            </p>
            <p>Technology should serve people not confuse them.</p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative flex h-[250px] w-[250px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#7dbdff_0%,#2b86ef_56%,#1258d6_100%)] shadow-[inset_0_10px_22px_rgba(255,255,255,0.28),0_10px_22px_rgba(29,108,255,0.18)] sm:h-[290px] sm:w-[290px]">
            <div className="flex h-[190px] w-[190px] items-center justify-center rounded-full bg-[radial-gradient(circle,#ffffff_0%,#efe5ff_46%,#d2c8ff_100%)] sm:h-[220px] sm:w-[220px]">
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[radial-gradient(circle,#ffffff_0%,#d6d9ff_50%,#b8b6ff_100%)] shadow-[0_8px_20px_rgba(29,108,255,0.18)] sm:h-[140px] sm:w-[140px]">
                <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#1d6cff] shadow-[0_8px_18px_rgba(29,108,255,0.2)] sm:h-[92px] sm:w-[92px]">
                  <Target className="h-10 w-10 text-[#ffd54a] sm:h-12 sm:w-12" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 mt-6 ml-[-50vw] mr-[-50vw] w-screen bg-[#dfe5ef] px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-[520px_1fr] lg:gap-14">
          <div className="flex justify-center">
            <div className="flex h-[250px] w-[250px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#50b6ff_0%,#1777f7_58%,#0a56d5_100%)] shadow-[inset_0_10px_22px_rgba(255,255,255,0.26),0_10px_20px_rgba(29,108,255,0.16)] sm:h-[300px] sm:w-[300px]">
              <CircleHelp className="h-36 w-36 text-white/90 sm:h-44 sm:w-44" strokeWidth={2} />
            </div>
          </div>

          <div className="max-w-[760px]">
            <h2 className="text-[58px] font-bold leading-none tracking-[-0.04em] text-[#1d6cff]">
              What I Do
            </h2>
            <div className="mt-6 space-y-3 text-[22px] leading-[1.5] tracking-[-0.02em] text-black sm:text-[24px]">
              <p>Through short videos, tutorials, talks, and events, I focus on:</p>
              <p>Everyday smartphone tips (iPhone &amp; Android)</p>
              <p>Digital security and privacy awareness</p>
              <p>Artificial intelligence explained simply</p>
              <p>Content creation and digital skills</p>
              <p>Helping people turn ideas into real opportunities</p>
              <p>Everything I share is practical, honest, and tested in real life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-[1180px] grid-cols-1 items-center gap-12 px-4 pb-10 sm:px-0 lg:grid-cols-[1fr_380px]">
        <div className="max-w-[760px]">
          <h2 className="text-[58px] font-bold leading-none tracking-[-0.04em] text-[#1d6cff]">
            Why I Started
          </h2>
          <div className="mt-6 space-y-5 text-[22px] leading-[1.5] tracking-[-0.02em] text-black sm:text-[24px]">
            <p>When I began, I noticed a big gap:</p>
            <p>
              many people were using technology daily, yet didn&apos;t fully
              understand how it worked or how to protect themselves online.
            </p>
            <p>
              I made it a personal commitment to share clear, useful, and
              trustworthy tech knowledge, especially for the Somali community
              and anyone navigating the digital world.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="flex h-[250px] w-[250px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#4b96ff_0%,#2a73ec_58%,#1d5fde_100%)] shadow-[inset_0_10px_22px_rgba(255,255,255,0.26),0_10px_20px_rgba(29,108,255,0.16)] sm:h-[300px] sm:w-[300px]">
            <Lightbulb className="h-28 w-28 text-white sm:h-32 sm:w-32" strokeWidth={2.3} />
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 mt-6 ml-[-50vw] mr-[-50vw] w-screen">
        <div className="bg-[#dfe4eb] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-y-10 lg:grid-cols-[430px_1fr] lg:gap-x-24">
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle_at_50%_28%,#5a97f2_0%,#3a7fe8_48%,#0050cf_76%,#0044b3_100%)] shadow-[inset_0_10px_20px_rgba(255,255,255,0.18),inset_0_-12px_16px_rgba(0,61,170,0.45),0_6px_14px_rgba(13,86,209,0.18)] sm:h-[270px] sm:w-[270px]">
                <div className="absolute left-1/2 top-[52px] h-[50px] w-[50px] -translate-x-1/2 rounded-full bg-[#efefef] shadow-[0_4px_8px_rgba(0,0,0,0.28)] sm:top-[58px] sm:h-[52px] sm:w-[52px]" />
                <div className="absolute bottom-[62px] left-[56px] h-[50px] w-[50px] rounded-full bg-[#efefef] shadow-[0_4px_8px_rgba(0,0,0,0.28)] sm:bottom-[70px] sm:left-[62px] sm:h-[52px] sm:w-[52px]" />
                <div className="absolute bottom-[56px] right-[56px] h-[50px] w-[50px] rounded-full bg-[#efefef] shadow-[0_4px_8px_rgba(0,0,0,0.28)] sm:bottom-[64px] sm:right-[62px] sm:h-[52px] sm:w-[52px]" />
                <div className="absolute left-[71px] top-[92px] h-[58px] w-[20px] rotate-[16deg] rounded-full bg-[#efefef] shadow-[0_4px_8px_rgba(0,0,0,0.24)] sm:left-[80px] sm:top-[103px]" />
                <div className="absolute right-[71px] top-[92px] h-[58px] w-[20px] rotate-[-16deg] rounded-full bg-[#efefef] shadow-[0_4px_8px_rgba(0,0,0,0.24)] sm:right-[80px] sm:top-[103px]" />
                <div className="absolute bottom-[58px] left-1/2 h-[16px] w-[52px] -translate-x-1/2 rounded-full bg-[#efefef] shadow-[0_4px_8px_rgba(0,0,0,0.24)] sm:bottom-[66px] sm:h-[18px] sm:w-[56px]" />
              </div>
            </div>

            <div className="max-w-[560px]">
              <h2 className="text-[34px] font-bold leading-none tracking-[-0.04em] text-[#1d6cff] sm:text-[40px]">
                Community Impact
              </h2>
              <div className="mt-6 space-y-2 text-[20px] leading-[1.55] tracking-[-0.02em] text-black sm:text-[23px]">
                <p>Today, more than 1 million people follow my content across social platforms.</p>
                <p>
                  I&apos;ve published hundreds of educational videos, hosted live
                  events, and delivered tech education that reaches millions.
                </p>
                <p>
                  This journey has been built on consistency, patience, and
                  community trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f3f3f3] px-6 py-16 dark:bg-[#1b1f30] sm:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-y-10 lg:grid-cols-[1fr_430px] lg:gap-x-24">
            <div className="max-w-[620px] lg:justify-self-start lg:pl-2">
              <h2 className="text-[34px] font-bold leading-none tracking-[-0.04em] text-[#1d6cff] sm:text-[40px]">
                Beyond Content
              </h2>
              <div className="mt-6 space-y-2 text-[20px] leading-[1.55] tracking-[-0.02em] text-black dark:text-[#f2f5fb] sm:text-[23px]">
                <p>I regularly participate in:</p>
                <p className="pt-3">Tech talks and workshops</p>
                <p>Digital education programs</p>
                <p>Community events and conferences</p>
                <p className="pt-5">
                  I also collaborate with brands and organizations that align
                  with education, innovation, and positive digital impact.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-center">
              <div className="relative h-[250px] w-[250px] sm:h-[280px] sm:w-[280px]">
                <div className="absolute left-1/2 top-[6px] h-[170px] w-[170px] -translate-x-1/2 rounded-[18px] bg-[linear-gradient(180deg,#1871ee_0%,#0d67e6_100%)] shadow-[inset_0_8px_16px_rgba(255,255,255,0.18),0_5px_10px_rgba(24,113,238,0.18)] sm:h-[182px] sm:w-[182px]">
                  <div className="absolute left-1/2 top-[32px] h-[11px] w-[92px] -translate-x-1/2 rounded-full bg-[#f1f1f1] shadow-[0_4px_8px_rgba(0,0,0,0.3)] dark:bg-[#f1f1f1]" />
                  <div className="absolute left-1/2 top-[64px] h-[11px] w-[92px] -translate-x-1/2 rounded-full bg-[#f1f1f1] shadow-[0_4px_8px_rgba(0,0,0,0.3)] dark:bg-[#f1f1f1]" />
                  <div className="absolute left-1/2 top-[96px] h-[11px] w-[92px] -translate-x-1/2 rounded-full bg-[#f1f1f1] shadow-[0_4px_8px_rgba(0,0,0,0.3)] dark:bg-[#f1f1f1]" />
                  <div className="absolute left-1/2 top-[128px] h-[11px] w-[92px] -translate-x-1/2 rounded-full bg-[#f1f1f1] shadow-[0_4px_8px_rgba(0,0,0,0.3)] dark:bg-[#f1f1f1]" />
                </div>
                <div className="absolute left-1/2 top-[150px] h-[74px] w-[40px] -translate-x-[8px] skew-x-[-28deg] rounded-b-[14px] bg-[linear-gradient(180deg,#1871ee_0%,#0d67e6_100%)] shadow-[0_5px_10px_rgba(24,113,238,0.2)] sm:top-[162px] sm:h-[82px] sm:w-[42px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] mt-0 w-screen">
        <div className="bg-[#dfe4eb] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-y-10 lg:grid-cols-[430px_1fr] lg:gap-x-24">
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle_at_50%_28%,#1f80f3_0%,#0d6de8_48%,#075ee2_76%,#0854d3_100%)] shadow-[inset_0_3px_8px_rgba(255,255,255,0.25),inset_0_-10px_18px_rgba(0,74,194,0.35),0_6px_14px_rgba(13,86,209,0.15)] sm:h-[270px] sm:w-[270px]">
                <svg
                  viewBox="0 0 120 120"
                  className="absolute left-1/2 top-1/2 h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_4px_5px_rgba(0,0,0,0.28)] sm:h-[148px] sm:w-[148px]"
                  aria-hidden="true"
                >
                  <path
                    d="M32 83C36 60 49 41 75 28L74 19C86 20 96 24 104 31C102 42 95 52 83 61L82 53C59 63 44 77 36 92Z"
                    fill="#efefef"
                  />
                </svg>
              </div>
            </div>

            <div className="max-w-[560px]">
              <h2 className="text-[34px] font-bold leading-none tracking-[-0.04em] text-[#1d6cff] sm:text-[40px]">
                Looking Ahead
              </h2>
              <div className="mt-6 space-y-2 text-[20px] leading-[1.55] tracking-[-0.02em] text-black sm:text-[23px]">
                <p>Technology evolves fast and so do we.</p>
                <p>I&apos;m committed to continuing this journey by:</p>
                <p className="pt-3">Improving content quality</p>
                <p>Expanding educational formats</p>
                <p>Reaching more communities</p>
                <p>Preparing people for the future of digital life</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f3f3f3] px-6 py-16 dark:bg-[#171b2b] sm:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto w-full max-w-[980px] rounded-[22px] bg-[#dfe4eb] px-10 py-12 dark:bg-[#1b1f30] sm:px-14 sm:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[470px]">
                <h2 className="text-[28px] font-bold leading-none tracking-[-0.03em] text-black dark:text-white sm:text-[32px]">
                  Join the Community
                </h2>
                <p className="mt-5 text-[20px] leading-[1.32] tracking-[-0.02em] text-[#151515] dark:text-[#e6ecf8] sm:text-[22px]">
                  Millions are already learning tech the simple way. Follow,
                  watch, and grow with us across platforms.
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <Image src="/Facebook.png" alt="Facebook" width={58} height={58} className="h-[44px] w-auto object-contain sm:h-[50px]" />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Image src="/Instgram.png" alt="Instagram" width={58} height={58} className="h-[44px] w-auto object-contain sm:h-[50px]" />
                </a>
                <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
                  <Image src="/Tiktok.png" alt="TikTok" width={58} height={58} className="h-[44px] w-auto object-contain sm:h-[50px]" />
                </a>
                <a href={socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                  <Image src="/youtubeRemoving.png" alt="YouTube" width={58} height={58} className="h-[44px] w-auto object-contain sm:h-[50px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#156ff3] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-18">
          <div className="mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
            <Image
              src="/Eng Yuyu Logo-21.png"
              alt="Eng Yuyu Logo"
              width={300}
              height={120}
              className="h-[70px] w-auto object-contain sm:h-[82px]"
              style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
            />

            <p className="mt-6 max-w-[760px] text-[18px] leading-[1.45] tracking-[-0.02em] text-white/95 sm:text-[20px]">
              My Goal is Simple: to Educate, Inspire and Connect people through
              technology: One video, one idea and one innovation at a time.....
            </p>

            <div className="mt-10 flex items-center gap-4 sm:gap-5">
              <a href={socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <Image src="/youtubeRemoving.png" alt="YouTube" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Image src="/Facebook.png" alt="Facebook" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
              </a>
              <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
                <Image src="/Tiktok.png" alt="TikTok" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Image src="/Instgram.png" alt="Instagram" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
              </a>
            </div>
          </div>

          <div className="mx-auto mt-16 w-screen border-t border-white/55 pt-7 text-center text-[16px] tracking-[-0.02em] text-white/95">
            © 2025 Eng Yuyu Media - All Rights Reserved.
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
