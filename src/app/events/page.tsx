import Image from "next/image"
import { PageFrame } from "@/components/page-frame"

export default function EventsPage() {
  return (
    <PageFrame>
      <section className="mt-10 px-6 py-6 text-center">
        <h1 className="text-4xl font-bold leading-none text-[#1d6cff] sm:text-[62px]">
          Events
        </h1>
        <p className="mt-3 text-2xl font-bold leading-none text-black sm:text-[32px]">
          Community sessions, talks, and practical digital learning moments
        </p>
      </section>

      <section className="mt-8 rounded-[40px] bg-[#dbe2ec] px-8 py-10 md:px-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[640px]">
            <h2 className="text-2xl font-bold leading-none text-black sm:text-4xl">
              Join the Community
            </h2>
            <p className="mt-4 text-lg font-light leading-[1.4] text-[#1f1f1f] sm:text-xl">
              Millions are already learning tech the simple way. Follow, watch,
              and grow with us across platforms and community events.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[#111111]">
            <Image src="/youtubeRemoving.png" alt="YouTube" width={124} height={89} className="h-[60px] w-[62px] object-contain" />
            <Image src="/Tiktok.png" alt="Tiktok" width={124} height={89} className="h-[60px] w-[62px] object-contain" />
            <Image src="/Facebook.png" alt="Facebook" width={124} height={89} className="h-[60px] w-[62px] object-contain" />
            <Image src="/Instgram.png" alt="Instagram" width={124} height={89} className="h-[60px] w-[62px] object-contain" />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[44px] bg-[#dbe2ec] px-6 py-8 sm:px-8 md:px-12 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            "Tech talks and workshops",
            "Digital education programs",
            "Community events and conferences",
          ].map((item) => (
            <div key={item} className="rounded-[28px] border-[3px] border-[#1d6cff] bg-white/20 p-8">
              <h3 className="text-2xl font-bold text-black">{item}</h3>
              <p className="mt-4 text-lg font-light leading-[1.5] text-[#1a1a1a]">
                Practical sessions focused on digital confidence, real-life tools,
                and useful technology knowledge for everyday life.
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
