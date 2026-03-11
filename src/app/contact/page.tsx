import Image from "next/image"
import { PageFrame } from "@/components/page-frame"

const socialLinks = {
  youtube: "https://www.youtube.com/@engyuyu",
  tiktok: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  instagram: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  facebook: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
}

export default function ContactPage() {
  return (
    <PageFrame flushBottom>
      <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] mt-0 w-screen">
        <div className="overflow-hidden bg-[#156ff3] px-6 py-16 text-white dark:bg-[#0b49c4] sm:px-10 lg:px-16 lg:py-18">
          <div
            className="absolute inset-0 hidden bg-cover bg-center opacity-60 dark:block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(7,50,163,0.88), rgba(29,105,223,0.72)), url('/engY.png')",
            }}
          />
          <div className="absolute inset-0 opacity-45 dark:hidden">
            <div className="absolute -left-10 top-[-30px] h-[240px] w-[240px] rounded-full bg-white/16 blur-[38px]" />
            <div className="absolute left-[20%] top-[-40px] h-[260px] w-[120px] rotate-[20deg] rounded-full bg-white/18 blur-[24px]" />
            <div className="absolute left-[38%] top-[-12px] h-[220px] w-[260px] rounded-full bg-white/14 blur-[46px]" />
            <div className="absolute right-[16%] top-[-24px] h-[240px] w-[250px] rounded-full bg-white/16 blur-[40px]" />
            <div className="absolute right-[-20px] top-[-18px] h-[230px] w-[160px] rounded-full bg-white/18 blur-[30px]" />
          </div>

          <div className="relative mx-auto w-full max-w-[760px] text-center">
            <h1 className="text-[44px] font-bold leading-none tracking-[-0.04em] text-white sm:text-[56px]">
              Get in Touch
            </h1>
            <p className="mx-auto mt-5 max-w-[720px] text-[18px] leading-[1.45] tracking-[-0.02em] text-white/95 sm:text-[20px]">
              Have questions, collaboration ideas, or just want to say hi?
              Reach out to Yuyu easily whether it&apos;s for tech advice,
              projects, or partnerships, he&apos;s always happy to connect.
            </p>
          </div>
        </div>

        <div className="relative bg-[#f3f3f3] px-6 py-14 dark:bg-[#171b2b] sm:px-10 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute inset-0 hidden dark:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,108,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(39,179,255,0.12),transparent_24%)]" />
          </div>
          <div className="mx-auto grid w-full max-w-[920px] grid-cols-1 gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <section className="rounded-[16px] border border-[#77a9ff] bg-[#f7f7f5] px-8 py-8 dark:border-[#2d88ff] dark:bg-[#1b2033] dark:shadow-[0_0_0_1px_rgba(24,111,255,0.18),0_18px_40px_rgba(5,10,28,0.42)]">
              <h2 className="text-[24px] font-bold leading-none tracking-[-0.03em] text-[#161616] dark:text-white">
                Simple Contact Form
              </h2>

              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#f5f7ff]">
                      First Name <span className="text-[#ef4444]">*</span>
                    </span>
                    <input
                      name="firstName"
                      type="text"
                      required
                      placeholder="First name here"
                      className="mt-2 h-[44px] w-full rounded-[6px] border border-[#e3e3e3] bg-[#f2f4f7] px-4 text-[12px] text-black outline-none placeholder:text-[#8b8b8b] dark:border-[#8f9de8] dark:bg-[#4f4b73] dark:text-[#ffffff] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#aab4e8]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#f5f7ff]">
                      Last Name <span className="text-[#ef4444]">*</span>
                    </span>
                    <input
                      name="lastName"
                      type="text"
                      required
                      placeholder="Last name here"
                      className="mt-2 h-[44px] w-full rounded-[6px] border border-[#e3e3e3] bg-[#f2f4f7] px-4 text-[12px] text-black outline-none placeholder:text-[#8b8b8b] dark:border-[#8f9de8] dark:bg-[#4f4b73] dark:text-[#ffffff] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#aab4e8]"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#f5f7ff]">
                      Email Address <span className="text-[#ef4444]">*</span>
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Add email"
                      className="mt-2 h-[44px] w-full rounded-[6px] border border-[#e3e3e3] bg-[#f2f4f7] px-4 text-[12px] text-black outline-none placeholder:text-[#8b8b8b] dark:border-[#8f9de8] dark:bg-[#4f4b73] dark:text-[#ffffff] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#aab4e8]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#f5f7ff]">
                      Subject <span className="text-[#ef4444]">*</span>
                    </span>
                    <input
                      name="subject"
                      type="text"
                      required
                      placeholder="How can we help you?"
                      className="mt-2 h-[44px] w-full rounded-[6px] border border-[#e3e3e3] bg-[#f2f4f7] px-4 text-[12px] text-black outline-none placeholder:text-[#8b8b8b] dark:border-[#8f9de8] dark:bg-[#4f4b73] dark:text-[#ffffff] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#aab4e8]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-[12px] font-semibold text-[#1c2440] dark:text-[#f5f7ff]">
                    Comments / Questions <span className="text-[#ef4444]">*</span>
                  </span>
                  <textarea
                    name="message"
                    required
                    placeholder="Comments"
                    className="mt-2 h-[140px] w-full resize-none rounded-[6px] border border-[#e3e3e3] bg-[#f2f4f7] px-4 py-3 text-[12px] text-black outline-none placeholder:text-[#8b8b8b] dark:border-[#8f9de8] dark:bg-[#4f4b73] dark:text-[#ffffff] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#aab4e8]"
                  />
                </label>

                <div className="flex items-start">
                  <button
                    type="submit"
                    className="inline-flex h-[42px] items-center justify-center rounded-[6px] border border-[#4d9dff] bg-[#156ff3] px-6 text-[12px] font-semibold text-white transition-all hover:opacity-90 dark:border-[#6cb7ff] dark:bg-[linear-gradient(180deg,#3493ff_0%,#1f73ff_100%)] dark:shadow-[0_10px_24px_rgba(47,134,255,0.42)]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </section>

            <section className="h-fit rounded-[16px] bg-[#dfe4eb] px-8 py-9 dark:border dark:border-[#243b7a] dark:bg-[#1e2338] dark:shadow-[0_18px_40px_rgba(5,10,28,0.34)]">
              <h2 className="text-[22px] font-bold leading-none tracking-[-0.03em] text-[#111111] dark:text-white">
                Join the Community
              </h2>
              <p className="mt-5 max-w-[300px] text-[18px] leading-[1.28] tracking-[-0.02em] text-[#161616] dark:text-[#f1f5ff]">
                Millions are already learning tech the simple way. Follow,
                watch, and grow with us across platforms.
              </p>

              <div className="mt-8 flex items-center gap-2">
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-[6px] dark:border dark:border-[#3b8cff] dark:bg-[#2269de] dark:p-3 dark:shadow-[0_6px_18px_rgba(34,105,222,0.35)]">
                  <Image src="/Facebook.png" alt="Facebook" width={52} height={52} className="h-[40px] w-auto object-contain dark:h-[24px] dark:brightness-0 dark:invert" />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-[6px] dark:border dark:border-[#3b8cff] dark:bg-[#2269de] dark:p-3 dark:shadow-[0_6px_18px_rgba(34,105,222,0.35)]">
                  <Image src="/Instgram.png" alt="Instagram" width={52} height={52} className="h-[40px] w-auto object-contain dark:h-[24px] dark:brightness-0 dark:invert" />
                </a>
                <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="rounded-[6px] dark:border dark:border-[#3b8cff] dark:bg-[#2269de] dark:p-3 dark:shadow-[0_6px_18px_rgba(34,105,222,0.35)]">
                  <Image src="/Tiktok.png" alt="TikTok" width={52} height={52} className="h-[40px] w-auto object-contain dark:h-[24px] dark:brightness-0 dark:invert" />
                </a>
                <a href={socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-[6px] dark:border dark:border-[#3b8cff] dark:bg-[#2269de] dark:p-3 dark:shadow-[0_6px_18px_rgba(34,105,222,0.35)]">
                  <Image src="/youtubeRemoving.png" alt="YouTube" width={52} height={52} className="h-[40px] w-auto object-contain dark:h-[24px] dark:brightness-0 dark:invert" />
                </a>
              </div>
            </section>
          </div>

          <section className="mx-auto mt-16 w-full max-w-[920px] rounded-[16px] bg-[#dfe4eb] px-8 py-10 dark:border dark:border-[#243b7a] dark:bg-[#1e2338] dark:shadow-[0_18px_40px_rgba(5,10,28,0.34)]">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_220px]">
              <div className="max-w-[520px]">
                <h2 className="text-[24px] font-bold leading-none tracking-[-0.03em] text-[#111111] dark:text-white">
                  Join My Newsletter
                </h2>
                <p className="mt-5 text-[18px] leading-[1.3] tracking-[-0.02em] text-[#161616] dark:text-[#f1f5ff]">
                  Get practical tech tips, digital safety guides,
                  <br />
                  and AI insights straight to your inbox.
                </p>

                <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="h-[56px] w-full rounded-[2px] border border-[#e2e2e2] bg-[#f7f7f5] px-4 text-[14px] text-black outline-none placeholder:text-[#676767] dark:border-[#8f9de8] dark:bg-[#4f4b73] dark:text-[#ffffff] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#aab4e8] sm:max-w-[360px]"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-[56px] min-w-[112px] items-center justify-center rounded-[4px] border border-[#6cb7ff] bg-[#156ff3] px-6 text-[16px] font-bold text-white transition-all hover:opacity-90 dark:bg-[linear-gradient(180deg,#3493ff_0%,#1f73ff_100%)] dark:shadow-[0_10px_24px_rgba(47,134,255,0.42)]"
                  >
                    Submit
                  </button>
                </form>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative flex h-[140px] w-[140px] items-center justify-center rounded-full border-[8px] border-[#11a5ff] bg-white shadow-[0_0_0_8px_#156ff3] dark:border-[#27b3ff] dark:bg-[#131c36] dark:shadow-[0_0_0_10px_#0f72ff]">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.55),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(0,153,255,0.24),transparent_45%)] dark:opacity-100" />
                  <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-[10px] bg-[#156ff3] dark:bg-[#0976ff]">
                    <div className="absolute inset-x-0 top-[14px] mx-auto h-[2px] w-[34px] bg-white/35" />
                    <div className="absolute left-[10px] top-[11px] h-[2px] w-[18px] rotate-[38deg] bg-white/65" />
                    <div className="absolute right-[10px] top-[11px] h-[2px] w-[18px] -rotate-[38deg] bg-white/65" />
                  </div>
                  <div className="absolute bottom-[40px] h-[14px] w-[40px] rounded-b-[10px] rounded-t-[4px] border-b-[6px] border-white bg-transparent" />
                  <div className="absolute bottom-[22px] left-[40px] h-[22px] w-[36px] rounded-b-[18px] border-b-[7px] border-l-[7px] border-[#131c36] dark:border-[#131c36]" />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-[#1f5db8] px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-16">
          <div className="mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
            <Image
              src="/Eng Yuyu Logo-21.png"
              alt="Eng Yuyu Logo"
              width={300}
              height={120}
              className="h-[120px] w-auto object-contain sm:h-[150px] lg:h-[170px]"
              style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
            />

            <p className="mt-5 max-w-[760px] text-[17px] leading-[1.45] tracking-[-0.02em] text-white/95 sm:text-[18px]">
              My Goal is Simple: to Educate, Inspire and Connect people through
              technology: One video, one idea and one innovation at a time.....
            </p>

            <div className="mt-8 flex items-center gap-4 sm:gap-5">
              <a href={socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="social-icon-float-1 transition-transform duration-300 hover:scale-110">
                <Image src="/youtubeRemoving.png" alt="YouTube" width={58} height={58} className="h-[28px] w-auto object-contain brightness-0 invert sm:h-[32px]" />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon-float-2 transition-transform duration-300 hover:scale-110">
                <Image src="/Facebook.png" alt="Facebook" width={58} height={58} className="h-[28px] w-auto object-contain brightness-0 invert sm:h-[32px]" />
              </a>
              <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="social-icon-float-3 transition-transform duration-300 hover:scale-110">
                <Image src="/Tiktok.png" alt="TikTok" width={58} height={58} className="h-[28px] w-auto object-contain brightness-0 invert sm:h-[32px]" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon-float-4 transition-transform duration-300 hover:scale-110">
                <Image src="/Instgram.png" alt="Instagram" width={58} height={58} className="h-[28px] w-auto object-contain brightness-0 invert sm:h-[32px]" />
              </a>
            </div>
          </div>

          <div className="mx-auto mt-12 w-screen border-t border-white/35 pt-6 text-center text-[16px] tracking-[-0.02em] text-white/95">
            © 2025 Eng Yuyu Media - All Rights Reserved.
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
