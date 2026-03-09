import Image from "next/image"
import { CircleHelp, FileText, Lightbulb, MessageCircleMore, Share2, Target } from "lucide-react"
import { SiteNav } from "@/components/site-nav"

const milestones = [
  {
    date: "Aug 2022",
    title: "100K Facebook\nFollowers",
    description:
      "This was the moment I realized people truly connected with what I was creating. Hitting 100,000 Facebook followers pushed me to believe in my journey and keep going.",
    badge: "100K",
    badgeLabel: "followers",
    variant: "blue",
    position: "top",
  },
  {
    date: "Sept 2024",
    title: "100K Youtube\nSubscribers",
    description:
      "Reaching 100,000 subscribers on YouTube felt like a dream becoming real. It showed me that consistency pays off and that my videos were starting to make an impact.",
    badge: "100K",
    badgeLabel: "subscribers",
    variant: "red",
    position: "bottom",
  },
  {
    date: "Jan 2025",
    title: "4 Million\nYoutube Views",
    description:
      "Crossing 4 million views reminded me that every upload counted. People were not just watching, they were returning, sharing, and growing with the channel.",
    badge: "4M",
    badgeLabel: "views",
    variant: "pink",
    position: "top",
  },
  {
    date: "Apr 2025",
    title: "300 Million\nTikTok Views",
    description:
      "Hitting 300 million views on TikTok was unreal. It proved that creativity and authenticity could reach millions, even in seconds.",
    badge: "300M",
    badgeLabel: "TikTok Views",
    variant: "dark",
    position: "bottom",
  },
  {
    date: "Sept 2025",
    title: "500K TikTok\nFollowers",
    description:
      "Reaching half a million TikTok followers was a powerful milestone. It showed me how far the journey had come and motivated me to keep creating bigger and better content.",
    badge: "500K",
    badgeLabel: "Followers",
    variant: "silver",
    position: "top",
  },
]

function badgeClasses(variant: string) {
  switch (variant) {
    case "blue":
      return "bg-[radial-gradient(circle_at_35%_30%,#4d94ff_0%,#0f61eb_52%,#0842b8_100%)] text-[#ffd23d]"
    case "red":
      return "bg-[radial-gradient(circle_at_35%_30%,#ff7b90_0%,#d91220_50%,#7e0000_100%)] text-[#ff2b2b]"
    case "pink":
      return "bg-[radial-gradient(circle_at_35%_30%,#ff7994_0%,#fa0020_50%,#99000e_100%)] text-[#ff9a00]"
    case "dark":
      return "bg-[radial-gradient(circle_at_35%_30%,#3b3b3b_0%,#131313_62%,#000000_100%)] text-[#e9e9e9]"
    case "silver":
      return "bg-[radial-gradient(circle_at_35%_30%,#ffffff_0%,#f0f0f0_60%,#dadada_100%)] text-[#3a5556]"
    default:
      return "bg-[#1d6cff] text-white"
  }
}

function MilestoneCard({
  date,
  title,
  description,
  badge,
  badgeLabel,
  variant,
  position,
}: (typeof milestones)[number]) {
  const topLayout = position === "top"
  const sideDotClass = topLayout ? "top-[285px]" : "bottom-[285px]"
  const shellClass = topLayout
    ? "rounded-t-[210px] rounded-b-[110px] border-b-0 pb-10 pt-8"
    : "rounded-t-[110px] rounded-b-[210px] border-t-0 pb-8 pt-10"

  return (
    <article className="relative flex flex-col items-center">
      {topLayout ? (
        <>
          <h2 className="mb-5 text-center text-[32px] font-bold leading-none tracking-[-0.03em] text-[#156bf7] xl:text-[42px]">
            {date}
          </h2>

          <div className="relative w-full pt-9">
            <div className="absolute left-1/2 top-0 h-11 w-11 -translate-x-1/2 rounded-full bg-[#156bf7]" />
            <div className={`absolute left-[2px] h-11 w-11 rounded-full bg-[#156bf7] ${sideDotClass}`} />
            <div className={`absolute right-[2px] h-11 w-11 rounded-full bg-[#156bf7] ${sideDotClass}`} />

            <div className={`mx-auto flex min-h-[930px] w-full max-w-[372px] flex-col items-center border-[18px] border-[#156bf7] bg-[#dfe5ef] px-8 ${shellClass}`}>
              <div className={`mx-auto flex h-[235px] w-[235px] shrink-0 self-center items-center justify-center rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] ${badgeClasses(variant)}`}>
                <div className="text-center">
                  <div className="text-[68px] font-extrabold leading-none tracking-[-0.05em]">
                    {badge}
                  </div>
                  <div className="mt-2 text-[18px] font-medium tracking-[0.12em] text-white/90">
                    {badgeLabel}
                  </div>
                </div>
              </div>

              <h3 className="mt-10 whitespace-pre-line text-center text-[31px] font-bold leading-[1.02] tracking-[-0.03em] text-[#156bf7]">
                {title}
              </h3>

              <p className="mx-auto mt-10 max-w-[258px] text-center text-[20px] leading-[1.32] tracking-[-0.02em] text-[#111111]">
                {description}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative w-full pb-9">
            <div className="absolute bottom-0 left-1/2 h-11 w-11 -translate-x-1/2 rounded-full bg-[#156bf7]" />
            <div className={`absolute left-[2px] h-11 w-11 rounded-full bg-[#156bf7] ${sideDotClass}`} />
            <div className={`absolute right-[2px] h-11 w-11 rounded-full bg-[#156bf7] ${sideDotClass}`} />

            <div className={`mx-auto flex min-h-[930px] w-full max-w-[372px] flex-col items-center border-[18px] border-[#156bf7] bg-[#dfe5ef] px-8 ${shellClass}`}>
              <h3 className="whitespace-pre-line text-center text-[31px] font-bold leading-[1.02] tracking-[-0.03em] text-[#156bf7]">
                {title}
              </h3>

              <p className="mx-auto mt-10 max-w-[258px] text-center text-[20px] leading-[1.32] tracking-[-0.02em] text-[#111111]">
                {description}
              </p>

              <div className={`mx-auto mt-10 flex h-[235px] w-[235px] shrink-0 self-center items-center justify-center rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] ${badgeClasses(variant)}`}>
                <div className="text-center">
                  <div className="text-[68px] font-extrabold leading-none tracking-[-0.05em]">
                    {badge}
                  </div>
                  <div className="mt-2 text-[18px] font-medium tracking-[0.12em] text-white/90">
                    {badgeLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-4 text-center text-[32px] font-bold leading-none tracking-[-0.03em] text-[#156bf7] xl:text-[42px]">
            {date}
          </h2>
        </>
      )}
    </article>
  )
}

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <div className="relative mx-auto w-full max-w-[1520px] px-4 pb-12 pt-32 sm:px-6 sm:pt-28">
        <SiteNav />

        <section className="px-2 pb-10 pt-8 sm:px-4">
          <h1 className="text-center text-5xl font-bold leading-[0.96] tracking-[-0.05em] text-[#156bf7] ">
            My Milestones From 2022
          </h1>

          <div className="mx-auto mt-14 grid max-w-[1860px] grid-cols-1 gap-8 lg:grid-cols-5 lg:items-start lg:gap-5 xl:gap-7">
            {milestones.map((milestone) => (
              <MilestoneCard key={`${milestone.date}-${milestone.title}`} {...milestone} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-[1360px] pb-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.6fr]">
            <article className="rounded-[36px] bg-[#dfe5ef] px-10 py-9">
              <div className="flex justify-center">
                <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#1d6cff] shadow-[inset_0_3px_8px_rgba(255,255,255,0.3)]">
                  <Target className="h-14 w-14 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <h2 className="mt-8 text-center text-[36px] font-bold leading-none tracking-[-0.03em] text-[#1d6cff]">
                My Mission
              </h2>
              <p className="mt-7 text-[18px] leading-[1.3] tracking-[-0.02em] text-[#151515]">
                My mission is straightforward:
                <br />
                to help people use technology with confidence, protect their
                digital lives, and benefit from innovation instead of being
                overwhelmed by it.
                <br />
                Technology should serve people - not confuse them.
              </p>
            </article>

            <article className="rounded-[36px] bg-[#dfe5ef] px-10 py-9">
              <div className="flex justify-center">
                <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#1d6cff] shadow-[inset_0_3px_8px_rgba(255,255,255,0.3)]">
                  <CircleHelp className="h-14 w-14 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <h2 className="mt-8 text-center text-[36px] font-bold leading-none tracking-[-0.03em] text-[#1d6cff]">
                What I Do
              </h2>
              <div className="mt-7 text-[18px] leading-[1.38] tracking-[-0.02em] text-[#151515]">
                <p>Through short videos, tutorials, talks, and events, I focus on:</p>
                <p>Everyday smartphone tips (iPhone &amp; Android)</p>
                <p>Digital security and privacy awareness</p>
                <p>Artificial Intelligence explained simply</p>
                <p>Content creation and digital skills</p>
                <p>Helping people turn ideas into real opportunities</p>
                <p>Everything I share is practical, honest, and tested in real life</p>
              </div>
            </article>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_0.95fr]">
            <article className="rounded-[36px] bg-[#dfe5ef] px-10 py-9">
              <div className="flex justify-center">
                <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#1d6cff] shadow-[inset_0_3px_8px_rgba(255,255,255,0.3)]">
                  <Lightbulb className="h-14 w-14 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <h2 className="mt-8 text-center text-[36px] font-bold leading-none tracking-[-0.03em] text-[#1d6cff]">
                Why I Started
              </h2>
              <div className="mt-7 text-[18px] leading-[1.34] tracking-[-0.02em] text-[#151515]">
                <p>When I began, I noticed a big gap:</p>
                <p className="mt-5">
                  many people were using technology daily, yet didn&apos;t fully
                  understand how it worked or how to protect themselves online.
                </p>
                <p className="mt-5">
                  I made it a personal commitment to share clear, useful, and
                  trustworthy tech knowledge, especially for the Somali
                  community and anyone navigating the digital world.
                </p>
              </div>
            </article>

            <article className="rounded-[36px] bg-[#dfe5ef] px-10 py-9">
              <div className="flex justify-center">
                <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#1d6cff] shadow-[inset_0_3px_8px_rgba(255,255,255,0.3)]">
                  <Share2 className="h-14 w-14 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <h2 className="mt-8 text-center text-[36px] font-bold leading-none tracking-[-0.03em] text-[#1d6cff]">
                Community Impact
              </h2>
              <div className="mt-7 text-[18px] leading-[1.34] tracking-[-0.02em] text-[#151515]">
                <p>Today, more than 1 million people follow my content across social platforms.</p>
                <p className="mt-5">
                  I&apos;ve published hundreds of educational videos, hosted live
                  events, and delivered tech education that reaches millions.
                </p>
                <p className="mt-5">
                  This journey has been built on consistency, patience, and
                  community trust.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.6fr]">
            <article className="rounded-[36px] bg-[#dfe5ef] px-10 py-9">
              <div className="flex justify-center">
                <div className="flex h-[110px] w-[110px] items-center justify-center rounded-[24px] bg-[#1d6cff] shadow-[inset_0_3px_8px_rgba(255,255,255,0.3)]">
                  <FileText className="h-14 w-14 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <h2 className="mt-8 text-center text-[36px] font-bold leading-none tracking-[-0.03em] text-[#1d6cff]">
                Beyond Content
              </h2>
              <div className="mt-7 text-[18px] leading-[1.3] tracking-[-0.02em] text-[#151515]">
                <p>I regularly participate in:</p>
                <p>Tech talks and workshops</p>
                <p>Digital education programs</p>
                <p>Community events and conferences</p>
                <p className="mt-4">
                  I also collaborate with brands and organizations that align
                  with education, innovation, and positive digital impact.
                </p>
              </div>
            </article>

            <article className="rounded-[36px] bg-[#dfe5ef] px-10 py-9">
              <div className="flex justify-center">
                <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#1d6cff] shadow-[inset_0_3px_8px_rgba(255,255,255,0.3)]">
                  <Share2 className="h-14 w-14 -rotate-45 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <h2 className="mt-8 text-center text-[36px] font-bold leading-none tracking-[-0.03em] text-[#1d6cff]">
                Looking Ahead
              </h2>
              <div className="mt-7 text-center text-[18px] leading-[1.34] tracking-[-0.02em] text-[#151515]">
                <p>Technology evolves fast - and so do we.</p>
                <p>I&apos;m committed to continuing this journey by:</p>
                <p>Improving content quality</p>
                <p>Expanding educational formats</p>
                <p>Reaching more communities</p>
                <p>Preparing people for the future of digital life</p>
              </div>
            </article>
          </div>

          <section id="contact" className="mt-8 rounded-[34px] bg-[#dfe5ef] px-10 py-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[620px]">
                <h2 className="text-[26px] font-bold leading-none text-black">
                  Join the Community
                </h2>
                <p className="mt-4 text-[18px] leading-[1.28] text-[#151515]">
                  Millions are already learning tech the simple way. Follow,
                  watch, and grow with us across platforms.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Image src="/youtubeRemoving.png" alt="YouTube" width={70} height={50} className="h-[46px] w-auto object-contain" />
                <Image src="/Tiktok.png" alt="TikTok" width={52} height={52} className="h-[46px] w-auto object-contain" />
                <Image src="/Facebook.png" alt="Facebook" width={52} height={52} className="h-[46px] w-auto object-contain" />
                <Image src="/Instgram.png" alt="Instagram" width={52} height={52} className="h-[46px] w-auto object-contain" />
              </div>
            </div>
          </section>

          <section className="mx-auto mt-8 max-w-[1100px] rounded-[34px] bg-[#f5f5f5] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <h2 className="text-center text-[56px] font-bold leading-none tracking-[-0.04em] text-[#1d6cff] sm:text-[72px]">
              Impact
            </h2>

            <div className="mt-8 flex justify-center">
              <div className="relative flex h-[260px] w-[260px] items-center justify-center rounded-[40%] bg-[linear-gradient(145deg,#1fb2ff_0%,#0f76ff_45%,#0f57ff_100%)] shadow-[inset_0_10px_30px_rgba(255,255,255,0.28),0_16px_30px_rgba(29,108,255,0.22)] sm:h-[320px] sm:w-[320px]">
                <div className="relative flex h-[190px] w-[190px] items-center justify-center rounded-[38%] bg-white shadow-[inset_0_10px_25px_rgba(0,0,0,0.07)] sm:h-[230px] sm:w-[230px]">
                  <MessageCircleMore className="h-20 w-20 text-[#1d6cff] sm:h-24 sm:w-24" strokeWidth={2.5} />
                  <div className="absolute right-[54px] top-[46px] flex h-14 w-14 items-center justify-center rounded-full bg-[#1d6cff] shadow-[0_10px_18px_rgba(29,108,255,0.22)] sm:right-[62px] sm:top-[54px] sm:h-16 sm:w-16">
                    <span className="text-[34px] text-white sm:text-[40px]">★</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-[760px] text-[20px] leading-[1.34] tracking-[-0.02em] text-[#111111] sm:text-[24px]">
              <p>
                Technology is powerful - but impact is what truly matters.
                Over the years, Eng Yuyu has focused on creating meaningful
                digital impact by educating, empowering, and informing people at
                scale.
              </p>

              <div className="mt-10">
                <h3 className="text-[34px] font-bold leading-none tracking-[-0.03em] text-[#1d6cff] sm:text-[42px]">
                  By the Numbers
                </h3>
                <div className="mt-5 space-y-1">
                  <p>1M+ followers across social platforms</p>
                  <p>Hundreds of educational videos published</p>
                  <p>Millions of views on tech and digital awareness content</p>
                  <p>Thousands reached through events and talks</p>
                </div>
              </div>

              <div className="mt-8 h-[5px] w-full max-w-[470px] bg-[#1d6cff]" />

              <div className="mt-8">
                <h3 className="text-[34px] font-bold leading-none tracking-[-0.03em] text-[#1d6cff] sm:text-[42px]">
                  Real Impact
                </h3>
                <div className="mt-5 space-y-1">
                  <p>Helping people protect their digital identities</p>
                  <p>Making smartphones and AI easier to understand</p>
                  <p>Guiding creators toward digital opportunities</p>
                  <p>Raising awareness about online safety and privacy</p>
                  <p>Supporting youth and professionals in digital growth</p>
                  <p>
                    This impact is built on trust, consistency, and real value -
                    not trends.
                  </p>
                </div>
              </div>

              <div className="mt-8 h-[5px] w-full max-w-[470px] bg-[#1d6cff]" />

              <div className="mt-8">
                <h3 className="text-[34px] font-bold leading-none tracking-[-0.03em] text-[#1d6cff] sm:text-[42px]">
                  Community First
                </h3>
                <div className="mt-5 space-y-1">
                  <p>Every piece of content, event, or collaboration is</p>
                  <p>created with the community in mind.</p>
                  <p>The goal has always been simple: give back through</p>
                  <p>knowledge.</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}
