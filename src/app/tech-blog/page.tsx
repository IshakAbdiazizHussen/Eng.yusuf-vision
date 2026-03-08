import { ArrowRight, Link2 } from "lucide-react"
import Image from "next/image"
import { PageFrame } from "@/components/page-frame"

export default function TechBlogPage() {
  const newsletterSection = (
    <section className="mt-10 rounded-[44px] bg-[#dbe2ec] px-8 py-10 md:px-14 md:py-12">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[760px]">
          <h2 className="text-3xl font-bold leading-none text-black ">
            Join My Newsletter
          </h2>
          <p className="mt-5 max-w-[700px] text-2xl font-light leading-[1.2] text-[#1d1d1d] md:text-[30px]">
            Get practical tech tips, digital safety guides,
            <br />
            and AI insights straight to your inbox.
          </p>

          <form className="mt-8 flex flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Your Email"
              className="h-[72px] w-full rounded-[18px] bg-white px-7 text-[24px] font-semibold text-black outline-none
               placeholder:text-[#8f8f8f] md:max-w-[520px] "
            />
            <button
              type="submit"
              className="inline-flex h-[72px] min-w-[220px] items-center justify-center rounded-[18px] bg-[#1d6cff]
               px-8 text-2xl font-bold leading-none text-white transition-opacity hover:opacity-90 md:min-w-[300px]"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-full border-[12px] border-[#00a8ff] bg-white shadow-[0_0_0_8px_#1d6cff] md:h-[210px] md:w-[210px]">
            <div className="flex h-[82px] w-[82px] items-center justify-center rounded-[16px] bg-[#1d6cff] text-[44px] text-white md:h-[104px] md:w-[104px] md:text-[56px]">
              ✉
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <PageFrame flushBottom>
      <section className="mt-10 px-6 py-6 text-center">
        <h1 className="text-4xl font-bold leading-none text-[#1d6cff] sm:text-[62px]">
          Tech Blog
        </h1>
        <p className="mt-3 text-2xl font-bold leading-none text-black sm:text-[32px]">
          Simple tech, real impact
        </p>
      </section>

      <section className="mt-8 rounded-[44px] bg-[#dbe2ec] px-6 py-8 sm:px-8 md:px-12 md:py-12">
        <h2 className="text-center text-3xl font-bold leading-none text-black ">
          Categories
        </h2>
        <p className="mt-6 text-center text-2xl leading-[1.35] text-black">
          All | Tech News | Tutorials &amp; How-To | Digital Security | AI &amp;
          Future Tech | Content Creation | Reviews
        </p>

        <div className="mt-12 grid gap-12 xl:grid-cols-[1.7fr_0.9fr]">
          <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <div className="flex h-[220px] w-full items-start rounded-[30px] border-[3px] border-[#1d6cff] p-6 sm:h-[260px]">
                  <Image
                    src="/Eng Yuyu Logo-21.png"
                    alt="Eng Yuyu Logo"
                    width={124}
                    height={89}
                    className="h-[56px] w-[72px] object-contain sm:h-[72px] sm:w-[96px]"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(35%) sepia(96%) saturate(2724%) hue-rotate(209deg) brightness(102%) contrast(98%)",
                    }}
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-[1.12] text-black">
                  Digniin Muhiim ah oo ku
                  <br />
                  Socota Dadka Weli
                  <br />
                  Adeegsada Windows 10!
                </h3>
                <a
                  href="#"
                  className="mt-6 inline-flex h-[52px] min-w-[220px] items-center justify-center gap-3 rounded-[18px] bg-[#1d6cff] px-6 text-2xl 
                   leading-none text-white transition-opacity hover:opacity-90 sm:h-[58px] sm:min-w-[282px] sm:px-8 "
                >
                  Learn More <ArrowRight className="h-5 w-5  " />
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-10 sm:gap-14">
            <div className="h-[340px] rounded-[42px] bg-[#1d6cff] sm:h-[520px]" />
            <div className="h-[340px] rounded-[42px] bg-[#1d6cff] sm:h-[520px]" />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[44px] bg-[#dbe2ec] px-6 py-8 sm:px-8 md:px-12 md:py-12">
        <div className="grid gap-10 xl:grid-cols-[1.75fr_0.85fr]">
          <div className="max-w-[760px]">
            <p className="mb-6 text-center text-xl font-light text-black sm:mb-8 sm:text-[30px]">
              December 22, 2025 | Security
            </p>

            <div className="relative h-[240px] w-full rounded-[34px] border-[4px] border-[#1d6cff] bg-transparent sm:h-[320px] md:h-[360px]">
              <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                <Image
                  src="/Eng Yuyu Logo-21.png"
                  alt="Eng Yuyu Logo"
                  width={124}
                  height={89}
                  className="h-[52px] w-[66px] object-contain sm:h-[72px] sm:w-[96px]"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(35%) sepia(96%) saturate(2724%) hue-rotate(209deg) brightness(102%) contrast(98%)",
                  }}
                />
              </div>
            </div>

            <h2 className="mt-7 max-w-[980px] text-2xl font-semibold leading-[1.08] tracking-[-0.03em] text-black sm:mt-8 
            sm:text-5xl ">
              How AI Is Changing the Way
              <br />
              Somalis Learn Technology
            </h2>

            <div className="mt-5 flex items-center justify-between text-lg text-black sm:mt-6 sm:text-[30px]">
              <span className="font-light">7min Read</span>
              <span className="inline-flex items-center gap-3 font-light">
                <Link2 className="h-6 w-6 rotate-45 sm:h-8 sm:w-8" />
                Share
              </span>
            </div>

            <p className="mt-7 max-w-[980px] text-xl font-light leading-[1.28] tracking-[-0.02em] text-black sm:mt-8 sm:text-2xl md:text-[36px]">
              Artificial Intelligence is no longer the future - it&apos;s
              <br />
              already shaping how we learn, work, and create.
              <br />
              Here&apos;s what that means for our community.
            </p>

            <h3 className="mt-12 text-2xl font-semibold text-[#1d6cff] sm:mt-14 sm:text-[28px]">
              Latest Articles...
            </h3>

            <div className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={`latest-${index}`}>
                  <div className="h-[126px] rounded-[20px] border-[2px] border-[#1d6cff] bg-transparent sm:h-[180px] sm:rounded-[24px] sm:border-[3px] md:h-[220px]" />
                  <h4 className="mt-4 text-2xl font-semibold leading-[1.2] text-black sm:text-lg ">
                    Digniin Muhiim ah oo ku
                    <br />
                    Socota Dadka Weli
                    <br />
                    Adeegsada Windows 10!
                  </h4>
                  <a
                    href="#"
                    className="mt-4 inline-flex h-[36px] min-w-[126px] items-center justify-center rounded-[10px] bg-[#1d6cff] px-4 text-[14px] font-bold text-white sm:h-[42px] sm:min-w-[160px] sm:rounded-[12px] sm:text-[16px] md:h-[46px] md:min-w-[184px] md:rounded-[14px] md:px-6 md:text-[18px]"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-center text-[34px] font-bold leading-none text-[#1d6cff] sm:mb-8 sm:text-[64px]">
              Partners
            </h2>
            <div className="flex flex-col gap-10 sm:gap-14">
              <div className="h-[340px] rounded-[42px] bg-[#1d6cff] sm:h-[460px] md:h-[540px]" />
              <div className="h-[340px] rounded-[42px] bg-[#1d6cff] sm:h-[460px] md:h-[540px]" />
            </div>
          </div>
        </div>
      </section>

      {newsletterSection}

      <section className="relative left-1/2 right-1/2 mt-10 ml-[-50vw] mr-[-50vw] w-screen bg-[#156bf7] px-8 py-16 md:px-14 md:py-24">
        <div className="mx-auto grid w-full max-w-[1520px] gap-14 xl:grid-cols-[1.18fr_0.9fr] xl:items-center">
          <div className="max-w-[720px] xl:pl-6">
            <Image
              src="/Eng Yuyu Logo-21.png"
              alt="Eng Yuyu Logo"
              width={124}
              height={89}
              className="h-[78px] w-[104px] object-contain md:h-[104px] md:w-[136px]"
            />

            <h2 className="mt-3 text-4xl font-bold leading-[1.05] text-white md:mt-4 ">
              My Goal is Simple:
            </h2>

            <p className="mt-6 max-w-[680px] text-3xl font-light leading-[1.18] text-white ">
              Lorem ipsum dolor sit amet, consectetuer
              <br />
              adipiscing elit, sed diam nonummy nibh
              <br />
              euismod tincidunt ut laoreet dolore
              <br />
              magna aliquam
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-2 md:mt-12 md:gap-3">
              <span className="mr-1 text-2xl font-bold leading-none text-white ">
                Find me here
              </span>

              <a
                href="https://www.youtube.com/@engyuyu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[42px] w-[42px] items-center justify-center transition-opacity hover:opacity-90 md:h-[46px] md:w-[46px]"
              >
                <Image
                  src="/youtubeRemoving.png"
                  alt="YouTube"
                  width={32}
                  height={32}
                  className="h-[32px] w-[32px] object-contain md:h-[36px] md:w-[36px]"
                />
              </a>

              <a
                href="https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[42px] w-[42px] items-center justify-center transition-opacity hover:opacity-90 md:h-[46px] md:w-[46px]"
              >
                <Image
                  src="/Instgram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="h-[32px] w-[32px] object-contain md:h-[36px] md:w-[36px]"
                />
              </a>

              <a
                href="https://www.tiktok.com/@eng_yuyu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[42px] w-[42px] items-center justify-center transition-opacity hover:opacity-90 md:h-[46px] md:w-[46px]"
              >
                <Image
                  src="/Tiktok.png"
                  alt="TikTok"
                  width={32}
                  height={32}
                  className="h-[32px] w-[32px] object-contain md:h-[36px] md:w-[36px]"
                />
              </a>

              <a
                href="https://www.facebook.com/share/189a6Qbxfk/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[42px] w-[42px] items-center justify-center transition-opacity hover:opacity-90 md:h-[46px] md:w-[46px]"
              >
                <Image
                  src="/Facebook.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="h-[32px] w-[32px] object-contain md:h-[36px] md:w-[36px]"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[540px] rounded-[38px] bg-[#dbe2ec] px-8 py-9 md:px-12 md:py-12">
            <form className="flex flex-col">
              <label className="text-[22px] font-bold text-black md:text-[26px]">
                Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="mt-4 h-[62px] rounded-[16px] bg-[#f5f5f5] px-6 text-[20px] text-black outline-none placeholder:text-[#b1b1b1] md:h-[68px] md:text-[20px]"
              />

              <label className="mt-6 text-[22px] font-bold text-black md:text-[26px]">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="mt-4 h-[62px] rounded-[16px] bg-[#f5f5f5] px-6 text-[20px] text-black outline-none placeholder:text-[#b1b1b1] md:h-[68px] md:text-[20px]"
              />

              <label className="mt-6 text-[22px] font-bold text-black md:text-[26px]">
                Message
              </label>
              <textarea
                placeholder="Describe what can i help you"
                rows={4}
                className="mt-4 min-h-[124px] rounded-[16px] bg-[#f5f5f5] px-6 py-5 text-[20px] text-black outline-none placeholder:text-[#b1b1b1] md:min-h-[132px] md:text-[20px]"
              />

              <button
                type="submit"
                className="mt-8 inline-flex h-[58px] items-center justify-center rounded-[16px] bg-[#156bf7] text-[22px] font-bold leading-none text-white transition-opacity hover:opacity-90 md:h-[66px] md:text-[24px]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
