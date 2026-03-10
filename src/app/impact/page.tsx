import Image from "next/image"
import { SiteNav } from "@/components/site-nav"

const socialLinks = {
  youtube: "https://www.youtube.com/@engyuyu",
  tiktok: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  instagram: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  facebook: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
}

const milestones = [
  {
    date: "Aug 2022",
    title: "100K Facebook\nFollowers",
    description:
      "This was the moment I realized people truly connected with what I was creating. Hitting 100,000 Facebook followers pushed me to believe in my journey and keep going.",
    badgeTop: "Thank you",
    badgeMain: "100K",
    badgeBottom: "FOLLOWERS",
    circleClass:
      "bg-[radial-gradient(circle_at_35%_25%,#3ea0ff_0%,#0f66ef_50%,#0a43bb_100%)] text-[#ffca1c]",
    position: "top",
  },
  {
    date: "Sept 2024",
    title: "100K Youtube\nSubscribers",
    description:
      "Reaching 100,000 subscribers on YouTube felt like a dream becoming real. It showed me that consistency pays off and that my videos were starting to make an impact.",
    badgeTop: "",
    badgeMain: "100K",
    badgeBottom: "THANK YOU SUBSCRIBERS",
    circleClass:
      "bg-[radial-gradient(circle_at_35%_25%,#ff6b6b_0%,#cc101b_56%,#7c0000_100%)] text-[#ff1f2d]",
    position: "bottom",
  },
  {
    date: "Jan 2025",
    title: "4 Million\nYoutube Views",
    description:
      "Crossing 4 million views reminded me that every upload counted. People were not just watching they were returning, sharing, and growing with the channel.",
    badgeTop: "Thank You",
    badgeMain: "4M",
    badgeBottom: "Views",
    circleClass:
      "bg-[radial-gradient(circle_at_35%_25%,#ff5c72_0%,#ef001f_54%,#99000e_100%)] text-[#ff9a00]",
    position: "top",
  },
  {
    date: "Apr 2025",
    title: "300 Million\nTikTok Views",
    description:
      "Hitting 300 million views on TikTok was unreal. It proved that creativity and authenticity could reach millions, even in seconds.",
    badgeTop: "THANK YOU!",
    badgeMain: "300M",
    badgeBottom: "TikTok Views",
    circleClass:
      "bg-[radial-gradient(circle_at_35%_25%,#2f2f2f_0%,#141414_62%,#000000_100%)] text-[#e5e5e5]",
    position: "bottom",
  },
  {
    date: "Sept 2025",
    title: "500K TikTok\nFollowers",
    description:
      "Reaching half a million TikTok followers was a powerful milestone. It showed me how far the journey had come and motivated me to keep creating bigger and better content.",
    badgeTop: "Thank You for",
    badgeMain: "500K",
    badgeBottom: "Followers",
    circleClass:
      "bg-[radial-gradient(circle_at_35%_25%,#ffffff_0%,#f1f1f1_58%,#d9d9d9_100%)] text-[#3b5257]",
    position: "top",
  },
]

function TimelineCard({
  date,
  title,
  description,
  badgeTop,
  badgeMain,
  badgeBottom,
  circleClass,
  position,
}: (typeof milestones)[number]) {
  const isTop = position === "top"

  return (
    <article className="flex flex-col items-center">
      {isTop ? (
        <h2 className="mb-4 text-center text-[28px] font-bold leading-none tracking-[-0.04em] text-[#156ff3] dark:text-[#6ea2ff] xl:text-[30px]">
          {date}
        </h2>
      ) : null}

      <div className={`relative w-full max-w-[248px] ${isTop ? "pt-7" : "pb-7"}`}>
        {isTop ? (
          <>
            <div className="absolute left-1/2 top-0 h-[34px] w-[34px] -translate-x-1/2 rounded-full bg-[#156ff3]" />
          </>
        ) : (
          <>
            <div className="absolute bottom-0 left-1/2 h-[34px] w-[34px] -translate-x-1/2 rounded-full bg-[#156ff3]" />
          </>
        )}

        <div
          className={`min-h-[620px] rounded-[132px] border-[12px] border-[#156ff3] bg-[#dfe4eb] px-5 dark:border-[#4c8fff] dark:bg-[#25314b] ${
            isTop
              ? "rounded-b-[72px] border-b-0 pt-5 pb-7"
              : "rounded-t-[72px] border-t-0 pt-7 pb-5"
          }`}
        >
          {isTop ? (
            <>
              <div className={`mx-auto flex h-[176px] w-[176px] items-center justify-center rounded-full ${circleClass}`}>
                <div className="text-center">
                  <p className="text-[11px] italic text-white/95">{badgeTop || " "}</p>
                  <p className="mt-2 text-[50px] font-extrabold leading-none tracking-[-0.06em]">
                    {badgeMain}
                  </p>
                  <p className="mt-2 text-[11px] font-semibold tracking-[0.12em] text-white/90">
                    {badgeBottom}
                  </p>
                </div>
              </div>

              <h3 className="mt-7 whitespace-pre-line text-center text-[18px] font-bold leading-[1.08] tracking-[-0.04em] text-[#156ff3] dark:text-[#6ea2ff] sm:text-[20px] xl:text-[22px]">
                {title}
              </h3>
              <p className="mx-auto mt-7 max-w-[190px] text-center text-[13px] leading-[1.38] tracking-[-0.02em] text-[#131313] dark:text-[#e5ebf8] sm:text-[14px] xl:text-[15px]">
                {description}
              </p>
            </>
          ) : (
            <>
              <h3 className="whitespace-pre-line text-center text-[18px] font-bold leading-[1.08] tracking-[-0.04em] text-[#156ff3] dark:text-[#6ea2ff] sm:text-[20px] xl:text-[22px]">
                {title}
              </h3>
              <p className="mx-auto mt-7 max-w-[190px] text-center text-[13px] leading-[1.38] tracking-[-0.02em] text-[#131313] dark:text-[#e5ebf8] sm:text-[14px] xl:text-[15px]">
                {description}
              </p>

              <div className={`mx-auto mt-7 flex h-[176px] w-[176px] items-center justify-center rounded-full ${circleClass}`}>
                <div className="text-center">
                  <p className="text-[11px] italic text-white/95">{badgeTop || " "}</p>
                  <p className="mt-2 text-[50px] font-extrabold leading-none tracking-[-0.06em]">
                    {badgeMain}
                  </p>
                  <p className="mt-2 text-[11px] font-semibold tracking-[0.12em] text-white/90">
                    {badgeBottom}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {!isTop ? (
        <h2 className="mt-4 text-center text-[28px] font-bold leading-none tracking-[-0.04em] text-[#156ff3] dark:text-[#6ea2ff] xl:text-[30px]">
          {date}
        </h2>
      ) : null}
    </article>
  )
}

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-white dark:bg-[#171b2b] dark:text-white">
      <div className="relative mx-auto w-full max-w-[1520px] px-4 pb-12 pt-32 sm:px-6 sm:pt-28">
        <SiteNav />

        <section className="px-2 py-8 sm:px-4">
          <h1 className="text-center text-6xl font-bold leading-[0.96] tracking-[-0.05em] text-[#156ff3] ">
            My Milestones From 2022
          </h1>

          <div className="mx-auto mt-16 grid max-w-[1320px] grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5 xl:items-start xl:gap-5">
            {milestones.map((milestone) => (
              <TimelineCard
                key={`${milestone.date}-${milestone.title}`}
                {...milestone}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[980px] px-4 pb-16 pt-6 mt-15">
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-center text-[56px] font-bold leading-none tracking-[-0.05em] text-[#156ff3] sm:text-[72px]">
              Impact
            </h2>

            <div className="mt-10 flex justify-center">
              <div className="relative flex h-[260px] w-[260px] items-center justify-center rounded-[38%] bg-[linear-gradient(145deg,#11b6ff_0%,#0d85ff_38%,#175dff_72%,#0e95ff_100%)] shadow-[inset_0_10px_30px_rgba(255,255,255,0.24),0_14px_26px_rgba(29,108,255,0.2)] sm:h-[320px] sm:w-[320px]">
                <div className="relative flex h-[200px] w-[200px] items-center justify-center rounded-[36%] bg-[radial-gradient(circle,#ffffff_0%,#f7f7f7_52%,#ebebeb_100%)] shadow-[0_16px_36px_rgba(0,0,0,0.08)] sm:h-[246px] sm:w-[246px]">
                  <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-[30%] bg-[linear-gradient(180deg,#1686ff_0%,#0d63f4_100%)] shadow-[0_14px_22px_rgba(13,99,244,0.28)] sm:h-[112px] sm:w-[112px]">
                    <div className="absolute left-[18px] top-[18px] h-[56px] w-[56px] rounded-full bg-transparent shadow-[0_0_0_9999px_transparent] sm:left-[22px] sm:top-[22px]" />
                    <div className="relative h-[44px] w-[44px] bg-[#0f72ff] [clip-path:polygon(50%_0%,61%_34%,98%_38%,71%_59%,79%_94%,50%_73%,21%_94%,29%_59%,2%_38%,39%_34%)] sm:h-[54px] sm:w-[54px]" />
                  </div>
                  <div className="absolute bottom-[20px] left-[42px] h-[30px] w-[30px] rounded-full bg-white sm:bottom-[26px] sm:left-[52px]" />
                </div>
              </div>
            </div>

            <div className="mt-12 text-[22px] leading-[1.36] tracking-[-0.02em] text-[#121212] sm:text-[26px]">
              <p>
                Technology is powerful - but impact is what truly matters.
                Over the years, Eng Yuyu has focused on creating meaningful
                digital impact by educating, empowering, and informing people at
                scale.
              </p>

              <div className="mt-10">
                <h3 className="text-[34px] font-bold leading-none tracking-[-0.03em] text-[#156ff3] sm:text-[44px]">
                  By the Numbers
                </h3>
                <div className="mt-5 space-y-1">
                  <p>1M+ followers across social platforms</p>
                  <p>Hundreds of educational videos published</p>
                  <p>Millions of views on tech and digital awareness content</p>
                  <p>Thousands reached through events and talks</p>
                </div>
              </div>

              <div className="mt-8 h-[5px] w-full max-w-[470px] bg-[#156ff3]" />

              <div className="mt-8">
                <h3 className="text-[34px] font-bold leading-none tracking-[-0.03em] text-[#156ff3] sm:text-[44px]">
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

              <div className="mt-8 h-[5px] w-full max-w-[470px] bg-[#156ff3]" />

              <div className="mt-8">
                <h3 className="text-[34px] font-bold leading-none tracking-[-0.03em] text-[#156ff3] sm:text-[44px]">
                  Community First
                </h3>
                <div className="mt-5 space-y-1">
                  <p>
                    Every piece of content, event, or collaboration is created
                    with the community in mind.
                  </p>
                  <p>
                    The goal has always been simple: give back through
                    knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen bg-[#156ff3] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-18">
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

          <div className="mx-auto mt-16 w-full border-t border-white/55 pt-7 text-center text-[16px] tracking-[-0.02em] text-white/95">
            © 2025 Eng Yuyu Media - All Rights Reserved.
          </div>
        </div>
      </div>
    </main>
  )
}
