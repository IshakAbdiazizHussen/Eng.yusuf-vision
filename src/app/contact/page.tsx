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
        <div className="overflow-hidden bg-[#156ff3] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-18">
          <div className="absolute inset-0 opacity-45">
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

        <div className="bg-[#f3f3f3] px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
          <div className="mx-auto grid w-full max-w-[920px] grid-cols-1 gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <section className="rounded-[16px] border border-[#77a9ff] bg-[#f7f7f5] px-8 py-8">
              <h2 className="text-[24px] font-bold leading-none tracking-[-0.03em] text-[#161616]">
                Simple Contact Form
              </h2>

              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#1b1b1b]">
                      First Name <span className="text-[#ef4444]">*</span>
                    </span>
                    <input
                      type="text"
                      placeholder="First name here"
                      className="mt-2 h-[44px] w-full rounded-[4px] border border-[#e3e3e3] bg-[#f2f4f7] px-3 text-[12px] text-black outline-none placeholder:text-[#8b8b8b]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#1b1b1b]">
                      Last Name <span className="text-[#ef4444]">*</span>
                    </span>
                    <input
                      type="text"
                      placeholder="Last name here"
                      className="mt-2 h-[44px] w-full rounded-[4px] border border-[#e3e3e3] bg-[#f2f4f7] px-3 text-[12px] text-black outline-none placeholder:text-[#8b8b8b]"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#1b1b1b]">
                      Email Address <span className="text-[#ef4444]">*</span>
                    </span>
                    <input
                      type="email"
                      placeholder="Add email"
                      className="mt-2 h-[44px] w-full rounded-[4px] border border-[#e3e3e3] bg-[#f2f4f7] px-3 text-[12px] text-black outline-none placeholder:text-[#8b8b8b]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#1b1b1b]">
                      Subject <span className="text-[#ef4444]">*</span>
                    </span>
                    <input
                      type="text"
                      placeholder="How can we help you?"
                      className="mt-2 h-[44px] w-full rounded-[4px] border border-[#e3e3e3] bg-[#f2f4f7] px-3 text-[12px] text-black outline-none placeholder:text-[#8b8b8b]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-[12px] font-semibold text-[#1b1b1b]">
                    Comments / Questions <span className="text-[#ef4444]">*</span>
                  </span>
                  <textarea
                    placeholder="Comments"
                    className="mt-2 h-[126px] w-full resize-none rounded-[4px] border border-[#e3e3e3] bg-[#f2f4f7] px-3 py-3 text-[12px] text-black outline-none placeholder:text-[#8b8b8b]"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex h-[34px] items-center justify-center rounded-[4px] bg-[#156ff3] px-5 text-[12px] font-medium text-white transition-opacity hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </section>

            <section className="h-fit rounded-[16px] bg-[#dfe4eb] px-8 py-9">
              <h2 className="text-[22px] font-bold leading-none tracking-[-0.03em] text-[#111111]">
                Join the Community
              </h2>
              <p className="mt-5 max-w-[300px] text-[18px] leading-[1.28] tracking-[-0.02em] text-[#161616]">
                Millions are already learning tech the simple way. Follow,
                watch, and grow with us across platforms.
              </p>

              <div className="mt-8 flex items-center gap-2">
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <Image src="/Facebook.png" alt="Facebook" width={52} height={52} className="h-[40px] w-auto object-contain" />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Image src="/Instgram.png" alt="Instagram" width={52} height={52} className="h-[40px] w-auto object-contain" />
                </a>
                <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
                  <Image src="/Tiktok.png" alt="TikTok" width={52} height={52} className="h-[40px] w-auto object-contain" />
                </a>
                <a href={socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                  <Image src="/youtubeRemoving.png" alt="YouTube" width={52} height={52} className="h-[40px] w-auto object-contain" />
                </a>
              </div>
            </section>
          </div>

          <section className="mx-auto mt-16 w-full max-w-[920px] rounded-[16px] bg-[#dfe4eb] px-8 py-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_220px]">
              <div className="max-w-[520px]">
                <h2 className="text-[24px] font-bold leading-none tracking-[-0.03em] text-[#111111]">
                  Join My Newsletter
                </h2>
                <p className="mt-5 text-[18px] leading-[1.3] tracking-[-0.02em] text-[#161616]">
                  Get practical tech tips, digital safety guides,
                  <br />
                  and AI insights straight to your inbox.
                </p>

                <form className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-[48px] w-full rounded-[2px] border border-[#e2e2e2] bg-[#f7f7f5] px-4 text-[14px] text-black outline-none placeholder:text-[#676767] sm:max-w-[360px]"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-[48px] min-w-[84px] items-center justify-center rounded-[4px] bg-[#156ff3] px-6 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Submit
                  </button>
                </form>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[8px] border-[#11a5ff] bg-white shadow-[0_0_0_6px_#156ff3]">
                  <div className="relative flex h-[56px] w-[56px] items-center justify-center rounded-[10px] bg-[#156ff3]">
                    <div className="absolute inset-x-0 top-[14px] mx-auto h-[2px] w-[34px] bg-white/35" />
                    <div className="absolute left-[10px] top-[11px] h-[2px] w-[18px] rotate-[38deg] bg-white/65" />
                    <div className="absolute right-[10px] top-[11px] h-[2px] w-[18px] -rotate-[38deg] bg-white/65" />
                  </div>
                  <div className="absolute bottom-[10px] h-[12px] w-[34px] rounded-b-[10px] rounded-t-[4px] border-b-[6px] border-white bg-transparent" />
                </div>
              </div>
            </div>
          </section>
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
