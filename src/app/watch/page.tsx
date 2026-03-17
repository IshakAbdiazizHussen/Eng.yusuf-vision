import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageFrame } from "@/components/page-frame"
import { getLatestYouTubeVideos, hasYouTubeConfig } from "@/lib/youtube"

function formatPublishedDate(value: string) {
  if (!value) {
    return "Latest upload"
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value))
}

export default async function WatchPage() {
  const videos = await getLatestYouTubeVideos(6)
  const featuredVideo = videos[0]
  const moreVideos = videos.slice(1)

  return (
    <PageFrame>
      <section className="mt-10 px-4 py-8 text-center">
        <h1 className="text-4xl font-bold leading-none text-[#1d6cff] sm:text-[58px]">
          WATCH &amp; LEARN
        </h1>
        <p className="mx-auto mt-5 max-w-[1080px] text-xl font-semibold leading-[1.25] text-black dark:text-white sm:text-[28px]">
          Latest videos from Eng Yuyu on YouTube, pulled into your website
          automatically with thumbnails, titles, and direct watch links.
        </p>
      </section>

      <section className="mt-8 rounded-[44px] bg-[#dbe2ec] px-6 py-8 dark:bg-[#1d2538] sm:px-8 md:px-12 md:py-12">
        {featuredVideo ? (
          <div className="grid gap-10 xl:grid-cols-[1.45fr_0.85fr]">
            <div className="rounded-[34px] border border-[#d5dff1] bg-[linear-gradient(180deg,#ffffff_0%,#f6f8fe_100%)] p-5 shadow-[0_18px_34px_rgba(21,33,68,0.08)] dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)]">
              <div className="overflow-hidden rounded-[26px]">
                <div className="relative aspect-video w-full overflow-hidden rounded-[26px] bg-[#0f1728]">
                  <iframe
                    src={featuredVideo.embedUrl}
                    title={featuredVideo.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <p className="mt-5 text-[15px] font-medium uppercase tracking-[0.08em] text-[#1d6cff] dark:text-[#8ebfff]">
                YouTube Tech News
              </p>
              <h2 className="mt-3 text-[28px] font-semibold leading-[1.15] text-[#131b31] dark:text-white sm:text-[38px]">
                {featuredVideo.title}
              </h2>
              <p className="mt-4 text-[16px] text-[#61708f] dark:text-[#b7c7e8]">
                {formatPublishedDate(featuredVideo.publishedAt)}
              </p>
              <p className="mt-5 text-[18px] leading-[1.6] text-[#26344e] dark:text-[#dde6fb]">
                {featuredVideo.description || "This video was uploaded on your YouTube channel and is now shown here automatically."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={featuredVideo.watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-[14px] bg-[#1d6cff] px-6 text-[16px] font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Watch on YouTube
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={`/tech-blog?category=Tech%20News`}
                  className="inline-flex h-[50px] items-center justify-center rounded-[14px] border border-[#cfd9ee] px-6 text-[16px] font-semibold text-[#1d315f] transition hover:bg-white dark:border-[#3a4b6e] dark:text-[#dbe7ff] dark:hover:bg-[#222d44]"
                >
                  View Tech News
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              {moreVideos.slice(0, 3).map((video) => (
                <Link
                  key={video.id}
                  href={video.watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-4 rounded-[26px] border border-[#d5dff1] bg-[linear-gradient(180deg,#ffffff_0%,#f6f8fe_100%)] p-4 shadow-[0_14px_28px_rgba(21,33,68,0.06)] transition hover:-translate-y-0.5 dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)]"
                >
                  <div className="relative h-[96px] w-[132px] shrink-0 overflow-hidden rounded-[16px]">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#1d6cff] dark:text-[#8ebfff]">
                      {formatPublishedDate(video.publishedAt)}
                    </p>
                    <h3 className="mt-2 line-clamp-2 text-[18px] font-semibold leading-[1.25] text-[#162039] dark:text-white">
                      {video.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[14px] leading-[1.45] text-[#63708b] dark:text-[#b3c5e7]">
                      {video.description || "Latest YouTube upload from your channel."}
                    </p>
                  </div>
                </Link>
              ))}

              <div className="rounded-[26px] bg-[linear-gradient(180deg,#2f5ef0_0%,#2a4ec8_100%)] p-6 text-white shadow-[0_18px_32px_rgba(29,80,215,0.24)]">
                <h2 className="text-[24px] font-semibold">Automatic YouTube Sync</h2>
                <p className="mt-3 text-[16px] leading-[1.55] text-white/88">
                  New uploads can appear here automatically using your YouTube
                  API connection. Thumbnails, titles, publish dates, and links
                  are loaded from your channel.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-[30px] border border-dashed border-[#9fb5e8] px-6 py-10 text-center dark:border-[#40547d]">
            <h2 className="text-[26px] font-semibold text-[#18316d] dark:text-[#dbe7ff]">
              YouTube feed is not connected yet
            </h2>
            <p className="mx-auto mt-4 max-w-[760px] text-[17px] leading-[1.6] text-[#4e5d7d] dark:text-[#c4d4f3]">
              Add `YOUTUBE_API_KEY` and `YOUTUBE_CHANNEL_ID` to your project
              environment so new videos from your YouTube channel can appear
              here automatically.
            </p>
          </div>
        )}

        {hasYouTubeConfig && moreVideos.length > 3 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {moreVideos.slice(3).map((video) => (
              <Link
                key={video.id}
                href={video.watchUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[24px] border border-[#d5dff1] bg-[linear-gradient(180deg,#ffffff_0%,#f6f8fe_100%)] p-4 shadow-[0_14px_28px_rgba(21,33,68,0.06)] transition hover:-translate-y-0.5 dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)]"
              >
                <div className="relative h-[180px] overflow-hidden rounded-[18px]">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 line-clamp-2 text-[20px] font-semibold leading-[1.25] text-[#162039] dark:text-white">
                  {video.title}
                </h3>
                <p className="mt-2 text-[14px] text-[#61708f] dark:text-[#b7c7e8]">
                  {formatPublishedDate(video.publishedAt)}
                </p>
                <p className="mt-3 line-clamp-3 text-[15px] leading-[1.5] text-[#26344e] dark:text-[#dde6fb]">
                  {video.description || "Latest YouTube upload from your channel."}
                </p>
              </Link>
            ))}
          </div>
        ) : null}
      </section>
    </PageFrame>
  )
}
