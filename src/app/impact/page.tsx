import Image from "next/image"
import { PageFrame } from "@/components/page-frame"

export default function ImpactPage() {
  return (
    <PageFrame>
      <section className="mt-10 px-6 py-6 text-center">
        <h1 className="text-4xl font-bold leading-none text-[#1d6cff] sm:text-[62px]">
          Impact
        </h1>
        <p className="mt-3 text-2xl font-bold leading-none text-black sm:text-[32px]">
          Real digital impact through community, education, and direct support
        </p>
      </section>

      <section className="mt-12 rounded-[40px] bg-[#156BF7] px-6 py-10 text-white md:px-16 md:py-16">
        <div className="grid gap-10 xl:grid-cols-[1fr_500px] xl:items-center">
          <div className="max-w-[620px]">
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            </p>

            <div className="mt-10">
              <h3 className="text-[28px] font-bold leading-none md:text-[42px]">
                Find me here
              </h3>
              <div className="mt-4 flex items-center gap-2 md:gap-3">
                <Image src="/youtubeRemoving.png" alt="YouTube" width={124} height={89} className="h-[50px] w-[52px] object-contain md:h-[60px] md:w-[62px]" />
                <Image src="/Instgram.png" alt="Instagram" width={124} height={89} className="h-[50px] w-[52px] object-contain md:h-[60px] md:w-[62px]" />
                <Image src="/Tiktok.png" alt="Tiktok" width={124} height={89} className="h-[50px] w-[52px] object-contain md:h-[60px] md:w-[62px]" />
                <Image src="/Facebook.png" alt="Facebook" width={124} height={89} className="h-[50px] w-[52px] rounded-full bg-white object-contain md:h-[60px] md:w-[62px]" />
              </div>
            </div>
          </div>

          <div className="w-full max-w-[500px] justify-self-center xl:justify-self-end">
            <div className="rounded-[32px] bg-[#DDE4EE] px-6 py-8 md:rounded-[42px] md:px-11 md:py-11">
              <div>
                <label className="block text-[20px] font-bold leading-none text-black md:text-[24px]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
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
                  className="mt-4 h-[50px] w-full rounded-[14px] bg-[#F7F7F7] px-6 text-[17px] font-normal text-black outline-none placeholder:text-[#B9B9B9]"
                />
              </div>

              <div className="mt-5">
                <label className="block text-[20px] font-bold leading-none text-black md:text-[24px]">
                  Message
                </label>
                <textarea
                  placeholder="Describe what can i help you"
                  className="mt-4 h-[87px] w-full resize-none rounded-[14px] bg-[#F7F7F7] px-6 py-4 text-[17px] font-normal text-black outline-none placeholder:text-[#B9B9B9]"
                />
              </div>

              <button
                type="button"
                className="mt-7 inline-flex h-[53px] w-full items-center justify-center rounded-[16px] bg-[#156BF7] text-[22px] font-bold leading-none text-white transition-opacity hover:opacity-90"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
