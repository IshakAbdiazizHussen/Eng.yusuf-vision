import { ArrowRight, Link2 } from "lucide-react"
import Image from "next/image"
import { PageFrame } from "@/components/page-frame"

export default function TechBlogPage() {
  return (
    <PageFrame>
      <section className="mt-10 px-6 py-6 text-center">
        <h1 className="text-4xl font-bold leading-none text-[#1d6cff] sm:text-[62px]">
          Tech Blog
        </h1>
        <p className="mt-3 text-2xl font-bold leading-none text-black sm:text-[32px]">
          Insights, tutorials, and digital awareness content for the Somali
          community and beyond
        </p>
      </section>

      <section className="mt-8 rounded-[44px] bg-[#dbe2ec] px-6 py-8 sm:px-8 md:px-12 md:py-12">
        <div className="grid gap-12 xl:grid-cols-[1.7fr_0.9fr]">
          <div>
            <p className="mb-8 text-center text-xl font-light text-black sm:text-[30px]">
              December 22, 2025 | Security
            </p>

            <div className="relative h-[320px] w-full rounded-[34px] border-[4px] border-[#1d6cff] bg-transparent">
              <div className="absolute left-6 top-6">
                <Image
                  src="/Eng Yuyu Logo-21.png"
                  alt="Eng Yuyu Logo"
                  width={124}
                  height={89}
                  className="h-[72px] w-[96px] object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(35%) sepia(96%) saturate(2724%) hue-rotate(209deg) brightness(102%) contrast(98%)",
                  }}
                />
              </div>
            </div>

            <h2 className="mt-8 max-w-[980px] text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-black sm:text-5xl">
              How AI Is Changing the Way
              <br />
              Somalis Learn Technology
            </h2>

            <div className="mt-6 flex items-center justify-between text-xl text-black sm:text-[30px]">
              <span className="font-light">7min Read</span>
              <span className="inline-flex items-center gap-3 font-light">
                <Link2 className="h-7 w-7 rotate-45 sm:h-8 sm:w-8" />
                Share
              </span>
            </div>

            <p className="mt-8 max-w-[980px] text-xl font-light leading-[1.3] tracking-[-0.02em] text-black sm:text-2xl">
              Artificial Intelligence is no longer the future - it&apos;s already
              shaping how we learn, work, and create. Here&apos;s what that means
              for our community.
            </p>

            <h3 className="mt-14 text-2xl font-semibold text-[#1d6cff]">
              Latest Articles...
            </h3>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index}>
                  <div className="h-[220px] rounded-[24px] border-[3px] border-[#1d6cff] bg-transparent" />
                  <h4 className="mt-4 text-xl font-semibold leading-[1.2] text-black">
                    Digniin Muhiim ah oo ku
                    <br />
                    Socota Dadka Weli
                    <br />
                    Adeegsada Windows 10!
                  </h4>
                  <a
                    href="#"
                    className="mt-4 inline-flex h-[46px] min-w-[184px] items-center justify-center gap-3 rounded-[14px] bg-[#1d6cff] px-6 text-[18px] font-bold text-white"
                  >
                    Learn More <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-center text-3xl font-bold leading-none text-[#1d6cff] sm:text-[64px]">
              Partners
            </h2>
            <div className="flex flex-col gap-14">
              <div className="h-[340px] rounded-[42px] bg-[#1d6cff] sm:h-[540px]" />
              <div className="h-[340px] rounded-[42px] bg-[#1d6cff] sm:h-[540px]" />
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
