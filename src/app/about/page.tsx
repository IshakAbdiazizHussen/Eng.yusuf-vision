import Image from "next/image"
import { PageFrame } from "@/components/page-frame"

export default function AboutPage() {
  return (
    <PageFrame>
      <section className="mt-10 grid grid-cols-1 gap-10 xl:mt-24 xl:grid-cols-[560px_1fr] xl:gap-12">
        <div className="flex h-full flex-col">
          <Image
            src="/engY.png"
            alt="About Eng Yuyu"
            width={526}
            height={628}
            className="mx-auto h-auto w-full max-w-[540px] rounded-[28px] object-contain mix-blend-multiply dark:mix-blend-normal xl:mx-0"
          />
          <div className="mt-0 hidden w-full max-w-[540px] flex-1 rounded-[56px] bg-[#ccd5e4] xl:block" />
        </div>

        <div className="max-w-[1120px] pt-3">
          <div className="mb-8 flex flex-wrap gap-3 sm:gap-5">
            <span className="inline-flex h-12 items-center rounded-2xl bg-[#dfdfdf] px-6 text-[16px] font-semibold text-black sm:h-14 sm:px-10 sm:text-[20px]">
              Tech Influencer
            </span>
            <span className="inline-flex h-12 items-center rounded-2xl bg-[#dbe5f7] px-6 text-[16px] font-semibold text-[#1d6cff] sm:h-14 sm:px-10 sm:text-[20px]">
              Digital Creator
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-none text-[#1d6cff] sm:text-5xl">
            About Me
          </h1>
          <h2 className="mt-5 text-2xl font-bold leading-[1.08] text-black sm:text-3xl">
            Making technology simple, useful, and accessible for everyone.
          </h2>

          <p className="mt-7 text-lg font-light leading-[1.5] text-[#141414] sm:text-xl">
            I&apos;m Yusuf Mohamed Osman (Eng Yuyu) - a tech educator, content creator,
            and digital awareness advocate focused on helping people understand and use
            technology without fear or confusion.
          </p>

          <p className="mt-4 text-lg font-light leading-[1.5] text-[#141414] sm:text-xl">
            Over the past years, I&apos;ve built a growing digital community by breaking
            down complex tech topics into simple, practical ideas that anyone can apply
            in daily life.
          </p>

          <h3 className="mt-10 text-2xl font-bold leading-none text-black">My Mission</h3>
          <p className="mt-4 text-lg font-light leading-[1.5] text-[#141414] sm:text-xl">
            My mission is straightforward: to help people use technology with confidence,
            protect their digital lives, and benefit from innovation instead of being
            overwhelmed by it.
          </p>

          <h3 className="mt-10 text-2xl font-bold leading-none text-black">What I Do</h3>
          <p className="mt-4 text-lg font-light leading-[1.5] text-[#141414] sm:text-xl">
            Through short videos, tutorials, talks, and events, I focus on everyday
            smartphone tips, digital security awareness, AI explained simply, and
            content creation skills that turn ideas into real opportunities.
          </p>

          <h3 className="mt-10 text-2xl font-bold leading-none text-black">
            Community Impact
          </h3>
          <p className="mt-4 text-lg font-light leading-[1.5] text-[#141414] sm:text-xl">
            Today, more than 1 million people follow my content across social platforms,
            and the learning community keeps growing through videos, live events, and
            practical digital education.
          </p>
        </div>
      </section>
    </PageFrame>
  )
}
