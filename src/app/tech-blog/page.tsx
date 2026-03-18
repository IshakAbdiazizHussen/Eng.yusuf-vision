import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageFrame } from "@/components/page-frame"
import {
  TechBlogFooterBanner,
  TechBlogNewsletterSection,
} from "@/components/tech-blog-sections"
import {
  blogCategories,
  isBlogCategory,
  techArticles,
} from "@/lib/tech-blog-data"
import { getLatestYouTubeVideos, hasYouTubeConfig } from "@/lib/youtube"

type TechBlogPageProps = {
  searchParams?: Promise<{ category?: string }>
}

export default async function TechBlogPage({
  searchParams,
}: TechBlogPageProps) {
  const youtubeVideos = await getLatestYouTubeVideos(3)
  const resolvedSearchParams = searchParams ? await searchParams : undefined
  const activeCategory = resolvedSearchParams?.category
  const selectedCategory = activeCategory && isBlogCategory(activeCategory)
    ? activeCategory
    : "All"
  const filteredArticles = selectedCategory === "All"
    ? techArticles
    : techArticles.filter((article) => article.category === selectedCategory)
  const latestArticles = filteredArticles.slice(0, 6)
  const popularArticles = (filteredArticles.length > 0 ? filteredArticles : techArticles)
    .slice(0, 4)

  return (
    <PageFrame flushBottom>
      <section className="mt-8 overflow-hidden rounded-[40px] border border-[#1c56d9] bg-[linear-gradient(180deg,#1d6cff_0%,#0f58dd_28%,#edf4ff_28.1%,#f6f9ff_100%)] shadow-[0_24px_70px_rgba(20,67,170,0.18)] dark:border-[#2148a3] dark:bg-[linear-gradient(180deg,#1c56cf_0%,#143f9f_28%,#182032_28.1%,#141b2a_100%)] dark:shadow-[0_24px_70px_rgba(3,8,20,0.5)]">
        <div className="px-6 py-8 sm:px-8 md:px-12 md:py-12">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold leading-none sm:text-[62px]">
              Tech Blog
            </h1>
            <p className="mt-3 text-2xl font-medium leading-none text-white/95 sm:text-[32px]">
              Simple tech, real impact
            </p>
            <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-[1.7] text-white/88 sm:text-[19px]">
              Fresh tech stories, product updates, and practical explainers from Eng Yuyu in one clean news hub.
            </p>
          </div>

          <div className="mt-10 rounded-[34px] bg-white/12 px-4 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[6px] dark:bg-white/6 sm:px-6 md:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {blogCategories.map((category) => (
                <Link
                  key={category}
                  href={category === "All" ? "/tech-blog" : `/tech-blog?category=${encodeURIComponent(category)}`}
                  className={`rounded-full border px-5 py-3 text-[16px] font-medium shadow-[0_6px_14px_rgba(25,55,120,0.12)] ${
                    selectedCategory === category
                      ? "border-white bg-white text-[#1d53d8]"
                      : "border-white/30 bg-white/10 text-white transition-colors hover:bg-white/18 dark:border-white/15"
                  }`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {hasYouTubeConfig && youtubeVideos.length > 0 ? (
            <div className="mt-8 rounded-[30px] border border-[#d8e1f2] bg-[linear-gradient(180deg,#ffffff_0%,#f5f8fe_100%)] p-5 shadow-[0_16px_34px_rgba(31,55,113,0.07)] dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#1d6cff] dark:text-[#8ebfff]">
                    Latest from YouTube
                  </p>
                  <h2 className="mt-2 text-[28px] font-semibold text-[#172038] dark:text-[#f3f7ff]">
                    New tech videos now update here automatically
                  </h2>
                </div>
                <Link
                  href="/watch"
                  className="inline-flex h-[46px] items-center justify-center rounded-[12px] bg-[#2f5ef0] px-5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Open Watch Page
                </Link>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {youtubeVideos.map((video) => (
                  <Link
                    key={video.id}
                    href={video.watchUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[20px] border border-[#dce5f4] bg-[#fbfcff] p-3 transition hover:-translate-y-0.5 dark:border-[#31415c] dark:bg-[#1a2234]"
                  >
                    <div className="relative h-[160px] overflow-hidden rounded-[14px]">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-3 line-clamp-2 text-[18px] font-semibold leading-[1.3] text-[#172038] dark:text-white">
                      {video.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-[14px] leading-[1.5] text-[#66718b] dark:text-[#b6c7ea]">
                      {video.description || "Latest upload from your YouTube tech news videos."}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[1, 2, 3].map((slot) => (
              <div
                key={slot}
                className="rounded-[28px] border border-[#234bc9] bg-[linear-gradient(180deg,#2f5ef0_0%,#2049be_100%)] px-7 py-9 text-center text-white shadow-[0_18px_34px_rgba(29,80,215,0.24)]"
              >
                <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-white/78">
                  Advertise Here
                </p>
                <p className="mt-5 text-[42px] font-semibold leading-[1.02] sm:text-[54px]">
                  Premium
                  <br />
                  Ad Space
                </p>
                <p className="mt-6 text-[20px] font-medium text-white/90">
                  Front page placement
                </p>
                <p className="mt-3 text-[16px] leading-[1.6] text-white/78">
                  Large sponsored slot for brands, apps, and campaigns.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f4cd64] px-6 py-3 text-[16px] font-semibold text-[#17306b] transition hover:-translate-y-1"
                >
                  Book This Ad
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[34px] bg-[linear-gradient(180deg,#eef2fb_0%,#e7edf8_100%)] px-4 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:bg-[linear-gradient(180deg,#232d42_0%,#1a2234_100%)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-6 md:px-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[32px] font-bold text-[#1d53d8] dark:text-[#8ebfff] sm:text-[40px]">
                Tech Blog
              </h2>
              <p className="text-[16px] font-medium text-[#53627e] dark:text-[#bfd0ef]">
                Latest articles and updates
              </p>
            </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {latestArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="rounded-[22px] border border-[#d8e0ef] bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fd_100%)] p-4 shadow-[0_14px_32px_rgba(44,71,126,0.08)] dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)] dark:shadow-[0_14px_32px_rgba(4,10,22,0.36)]"
                  >
                    <div className={`h-[138px] rounded-[18px] bg-gradient-to-br ${article.accent} p-[1px]`}>
                      <div className="flex h-full items-end rounded-[17px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),rgba(226,235,250,0.92)_100%)] p-4 dark:bg-[radial-gradient(circle_at_20%_20%,rgba(85,110,166,0.38),rgba(24,34,52,0.96)_100%)]">
                        <span className="rounded-full bg-[#f5f8ff] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#2452d5] dark:bg-[#243049] dark:text-[#9ec0ff]">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <h4 className="mt-4 text-[18px] font-medium leading-[1.35] text-[#182338] dark:text-white">
                      {article.title}
                    </h4>
                    <p className="mt-3 line-clamp-3 text-[15px] leading-[1.55] text-[#485572] dark:text-[#c6d4ef]">
                      {article.excerpt}
                    </p>
                    <p className="mt-3 text-[14px] text-[#66718b] dark:text-[#b6c7ea]">
                      {article.readTime} - {article.category}
                    </p>
                    <Link
                      href={`/tech-blog/${article.slug}`}
                      className="mt-5 inline-flex h-[44px] items-center justify-center gap-2 rounded-[10px] bg-[#2f5ef0] px-5 text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(47,94,240,0.22)] transition hover:-translate-y-1"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                ))}
                {latestArticles.length === 0 ? (
                  <div className="md:col-span-2 xl:col-span-3 rounded-[22px] border border-[#d8e0ef] bg-white/80 p-6 text-center dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)]">
                    <p className="text-[18px] font-semibold text-[#1d53d8] dark:text-[#8ebfff]">
                      No articles are available in this category yet.
                    </p>
                  </div>
                ) : null}
              </div>
          </div>

          <div className="mt-8 rounded-[34px] border border-[#d8e0ef] bg-[linear-gradient(180deg,#ffffff_0%,#f2f6ff_100%)] px-6 py-7 shadow-[0_16px_34px_rgba(31,55,113,0.08)] dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)]">
            <h2 className="text-[30px] font-bold leading-none text-[#172d67] dark:text-[#f3f7ff] sm:text-[34px]">
              Popular Articles
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {popularArticles.map((article, index) => (
                <Link
                  key={`popular-bottom-${article.slug}`}
                  href={`/tech-blog/${article.slug}`}
                  className="flex gap-4 rounded-[22px] border border-[#dce3ef] bg-[#fbfcff] p-5 shadow-[0_10px_24px_rgba(30,57,113,0.05)] transition hover:-translate-y-0.5 dark:border-[#2c3851] dark:bg-[#192338]"
                >
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5c79df] text-[16px] font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="block">
                    <span className="block text-[18px] leading-[1.35] text-[#1a2234] dark:text-white">
                      {article.title}
                    </span>
                    <span className="mt-2 block text-[14px] text-[#707a90] dark:text-[#b6c7ea]">
                      {article.readTime} - {article.category}
                    </span>
                    <span className="mt-2 block line-clamp-2 text-[15px] leading-[1.55] text-[#4d5a76] dark:text-[#c4d3ef]">
                      {article.excerpt}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TechBlogNewsletterSection />
      <TechBlogFooterBanner />
    </PageFrame>
  )
}
