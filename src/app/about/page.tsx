import Image from "next/image"
import { Target } from "lucide-react"
import { PageFrame } from "@/components/page-frame"

export default function AboutPage() {
  return (
    <PageFrame>
      <section className="relative left-1/2 right-1/2 mt-2 ml-[-50vw] mr-[-50vw] w-screen bg-[#dfe5ef] px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-[520px_1fr] lg:gap-14">
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/yuyu-removebg-preview.png"
              alt="About Eng Yuyu"
              width={900}
              height={1200}
              className="h-auto w-full max-w-[420px] object-contain lg:max-w-[470px]"
              priority
            />
          </div>

          <div className="max-w-[760px]">
            <div className="mb-8 flex flex-wrap gap-4">
              <span className="inline-flex h-12 items-center rounded-full bg-white/60 px-6 text-[18px] font-semibold text-[#1d6cff]">
                Tech Influencer
              </span>
              <span className="inline-flex h-12 items-center rounded-full bg-white/60 px-6 text-[18px] font-semibold text-[#1d6cff]">
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
    </PageFrame>
  )
}
