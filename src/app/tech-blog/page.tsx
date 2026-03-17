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
  featuredArticle,
  isBlogCategory,
  techArticles,
} from "@/lib/tech-blog-data"

type TechBlogPageProps = {
  searchParams?: Promise<{ category?: string }>
}

export default async function TechBlogPage({
  searchParams,
}: TechBlogPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined
  const activeCategory = resolvedSearchParams?.category
  const selectedCategory = activeCategory && isBlogCategory(activeCategory)
    ? activeCategory
    : "All"
  const filteredArticles = selectedCategory === "All"
    ? techArticles
    : techArticles.filter((article) => article.category === selectedCategory)
  const activeFeaturedArticle = filteredArticles[0] ?? featuredArticle
  const latestArticles = filteredArticles
    .filter((article) => article.slug !== activeFeaturedArticle.slug)
    .slice(0, 3)
  const relatedArticles = filteredArticles.filter(
    (article) => article.slug !== activeFeaturedArticle.slug,
  )
  const popularArticles = (relatedArticles.length > 0 ? relatedArticles : techArticles
    .filter((article) => article.slug !== activeFeaturedArticle.slug))
    .slice(0, 4)

  return (
    <PageFrame flushBottom>
      <section className="mt-8 rounded-[40px] border border-[#d8deeb] bg-[linear-gradient(180deg,#f7f8fc_0%,#eef2fb_100%)] shadow-[0_24px_70px_rgba(35,62,124,0.08)] dark:border-[#283554] dark:bg-[#20283b]">
        <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="px-6 py-8 sm:px-8 md:px-12 md:py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold leading-none text-[#1d3f92] sm:text-[62px]">
                Tech Blog
              </h1>
              <p className="mt-3 text-2xl font-medium leading-none text-[#1c1f28] dark:text-white sm:text-[32px]">
                Simple tech, real impact
              </p>
            </div>

            <div className="mt-10 rounded-[34px] bg-[linear-gradient(180deg,#eef2fb_0%,#e7edf8_100%)] px-4 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:bg-[#1d2638] sm:px-6 md:px-8">
              <h2 className="text-center text-3xl font-bold leading-none text-[#162d6a] dark:text-white">
                Featured
              </h2>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {blogCategories.map((category) => (
                  <Link
                    key={category}
                    href={category === "All" ? "/tech-blog" : `/tech-blog?category=${encodeURIComponent(category)}`}
                    className={`rounded-full border px-5 py-3 text-[16px] font-medium shadow-[0_6px_14px_rgba(25,55,120,0.06)] ${
                      selectedCategory === category
                        ? "border-[#305de4] bg-[#2e5ff0] text-white"
                        : "border-[#d0d8e8] bg-[#f6f8fd] text-[#21304f] transition-colors hover:bg-white dark:border-[#384866] dark:bg-[#263147] dark:text-[#dfe7fb]"
                    }`}
                  >
                    {category}
                  </Link>
                ))}
              </div>

              <div className="mt-8 rounded-[30px] border border-[#dce3f1] bg-[linear-gradient(180deg,#ffffff_0%,#f8faff_100%)] p-4 shadow-[0_18px_40px_rgba(42,72,130,0.08)] dark:border-[#31415c] dark:bg-[#182033] sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#f2f6ff] px-3 py-2 dark:bg-[#243049]">
                    <Image
                      src="/Eng Yuyu Logo-21.png"
                      alt="Eng Yuyu Logo"
                      width={48}
                      height={32}
                      className="h-8 w-auto object-contain"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(35%) sepia(96%) saturate(2724%) hue-rotate(209deg) brightness(102%) contrast(98%)",
                      }}
                    />
                  </div>
                  <span className="rounded-full bg-[#f2f6ff] px-4 py-2 text-[14px] font-bold uppercase tracking-[0.08em] text-[#1d53d8] dark:bg-[#243049] dark:text-[#9ec0ff]">
                    {activeFeaturedArticle.category}
                  </span>
                </div>

                <h3 className="mt-6 text-[28px] font-medium leading-[1.2] text-[#1d53d8] dark:text-[#8ebfff] sm:text-[34px]">
                  {activeFeaturedArticle.title}
                </h3>

                <p className="mt-5 text-[18px] text-[#222c42] dark:text-[#dce6fb]">
                  {activeFeaturedArticle.readTime} | {activeFeaturedArticle.category}
                </p>

                <div className="mt-5 rounded-[26px] border border-[#d9e3f4] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),rgba(225,234,251,0.85)_40%,rgba(205,218,245,0.92)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-[#2f3f5d] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(70,92,140,0.45),rgba(31,45,70,0.92)_100%)] sm:p-6">
                  <div className="relative h-[170px] overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#dfe8fb_0%,#cbdaf7_100%)] dark:bg-[linear-gradient(180deg,#23324f_0%,#182234_100%)] sm:h-[260px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.85),transparent_42%)]" />
                    <div className="absolute bottom-0 left-0 right-0 h-[42%] bg-[linear-gradient(180deg,rgba(189,203,233,0)_0%,rgba(173,188,220,0.95)_100%)] dark:bg-[linear-gradient(180deg,rgba(30,41,63,0)_0%,rgba(25,36,54,0.95)_100%)]" />
                    <div className="absolute bottom-[24px] left-[50%] h-[74px] w-[220px] -translate-x-1/2 rounded-[40px_58px_28px_28px] border border-white/80 bg-white shadow-[0_22px_36px_rgba(55,78,126,0.22)] sm:bottom-[34px] sm:h-[112px] sm:w-[400px]">
                      <div className="absolute left-[26px] top-[26px] h-[18px] w-[64px] skew-x-[-22deg] rounded-full bg-[#dce8ff] sm:left-[52px] sm:top-[34px] sm:h-[22px] sm:w-[100px]" />
                      <div className="absolute right-[32px] top-[24px] h-[18px] w-[58px] skew-x-[-28deg] rounded-full bg-[#dce8ff] sm:right-[54px] sm:top-[32px] sm:h-[22px] sm:w-[92px]" />
                      <div className="absolute bottom-[12px] left-[26px] h-[32px] w-[32px] rounded-full border-[6px] border-[#2f3f63] bg-[#9ab0d8] sm:bottom-[14px] sm:left-[58px] sm:h-[46px] sm:w-[46px] sm:border-[8px]" />
                      <div className="absolute bottom-[12px] right-[26px] h-[32px] w-[32px] rounded-full border-[6px] border-[#2f3f63] bg-[#9ab0d8] sm:bottom-[14px] sm:right-[58px] sm:h-[46px] sm:w-[46px] sm:border-[8px]" />
                    </div>
                  </div>
                </div>

                <h4 className="mt-6 text-[30px] font-medium leading-[1.18] text-[#111827] dark:text-white sm:text-[34px]">
                  {activeFeaturedArticle.title}
                </h4>

                <p className="mt-4 text-[18px] text-[#3a4660] dark:text-[#d0dcf7]">
                  {activeFeaturedArticle.readTime} | {activeFeaturedArticle.category}
                </p>

                <p className="mt-6 max-w-[900px] text-[18px] leading-[1.55] text-[#27344f] dark:text-[#dce6fb] sm:text-[19px]">
                  {activeFeaturedArticle.excerpt}
                </p>

                <Link
                  href={`/tech-blog/${activeFeaturedArticle.slug}`}
                  className="mt-7 inline-flex h-[50px] items-center justify-center gap-2 rounded-[10px] bg-[#2f5ef0] px-6 text-[16px] font-semibold text-white shadow-[0_12px_24px_rgba(47,94,240,0.24)] transition hover:-translate-y-1"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <h3 className="mt-10 text-[32px] font-bold text-[#1d53d8] sm:text-[40px]">
                Latest
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {latestArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="rounded-[22px] border border-[#d8e0ef] bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fd_100%)] p-4 shadow-[0_14px_32px_rgba(44,71,126,0.08)] dark:border-[#31415c] dark:bg-[#182033]"
                  >
                    <div className={`h-[138px] rounded-[18px] bg-gradient-to-br ${article.accent} p-[1px]`}>
                      <div className="flex h-full items-end rounded-[17px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),rgba(226,235,250,0.92)_100%)] p-4 dark:bg-[linear-gradient(180deg,#253450_0%,#182234_100%)]">
                        <span className="rounded-full bg-[#f5f8ff] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#2452d5] dark:bg-[#243049] dark:text-[#9ec0ff]">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <h4 className="mt-4 text-[18px] font-medium leading-[1.35] text-[#182338] dark:text-white">
                      {article.title}
                    </h4>
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
                  <div className="md:col-span-3 rounded-[22px] border border-[#d8e0ef] bg-white/80 p-6 text-center dark:border-[#31415c] dark:bg-[#182033]">
                    <p className="text-[18px] font-semibold text-[#1d53d8] dark:text-[#8ebfff]">
                      This category currently has one featured article.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <aside className="border-t border-[#dde3ef] px-4 py-6 xl:border-l xl:border-t-0 xl:px-5 xl:py-5 dark:border-[#2d3851]">
            <div className="flex flex-col gap-5">
              <div className="rounded-[14px] border border-[#234bc9] bg-[linear-gradient(180deg,#2f5ef0_0%,#2a4ec8_100%)] px-6 py-7 text-center text-white shadow-[0_16px_34px_rgba(29,80,215,0.22)]">
                <p className="text-[34px] font-semibold leading-[1.05] sm:text-[48px]">
                  Advertise
                  <br />
                  Here
                </p>
                <p className="mt-8 text-[28px] font-medium sm:text-[40px]">300 × 600</p>
                <p className="mt-5 text-[18px] text-white/88">Premium Placement</p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f4cd64] px-6 py-3 text-[16px] font-semibold text-[#17306b] transition hover:-translate-y-1"
                >
                  Advertise Here
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-[14px] border border-[#234bc9] bg-[linear-gradient(180deg,#2f5ef0_0%,#2a4ec8_100%)] px-6 py-7 text-center text-white shadow-[0_16px_34px_rgba(29,80,215,0.22)]">
                <p className="text-[18px] text-white/88">Sponsored</p>
                <p className="mt-5 text-[32px] font-semibold leading-[1.05] sm:text-[44px]">
                  Advertise Here
                </p>
                <p className="mt-6 text-[26px] font-medium sm:text-[38px]">300 × 450</p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f4cd64] px-6 py-3 text-[16px] font-semibold text-[#17306b] transition hover:-translate-y-1"
                >
                  Advertise Here
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-[14px] border border-[#dde3ef] bg-[linear-gradient(180deg,#f9fbff_0%,#f1f4fb_100%)] px-6 py-6 shadow-[0_10px_26px_rgba(30,57,113,0.06)] dark:border-[#31415c] dark:bg-[#182033]">
                <h2 className="text-[30px] font-bold leading-none text-[#172d67] dark:text-white">
                  Popular Articles
                </h2>
                <div className="mt-5 space-y-4">
                  {popularArticles.map((article, index) => (
                    <Link
                      key={`popular-top-${article.slug}`}
                      href={`/tech-blog/${article.slug}`}
                      className="flex gap-3 border-b border-[#dce3ef] pb-4 last:border-b-0 last:pb-0 dark:border-[#2c3851]"
                    >
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5c79df] text-[16px] font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="block">
                        <span className="block text-[18px] leading-[1.3] text-[#1a2234] dark:text-white">
                          {article.title}
                        </span>
                        <span className="mt-1 block text-[14px] text-[#707a90] dark:text-[#b6c7ea]">
                          {article.readTime} - {article.category}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[14px] border border-[#dde3ef] bg-[linear-gradient(180deg,#f9fbff_0%,#f1f4fb_100%)] px-6 py-6 shadow-[0_10px_26px_rgba(30,57,113,0.06)] dark:border-[#31415c] dark:bg-[#182033]">
                <h2 className="text-[30px] font-bold leading-none text-[#172d67] dark:text-white">
                  Popular Articles
                </h2>
                <div className="mt-5 space-y-4">
                  {popularArticles.map((article, index) => (
                    <Link
                      key={`popular-bottom-${article.slug}`}
                      href={`/tech-blog/${article.slug}`}
                      className="flex gap-3 border-b border-[#dce3ef] pb-4 last:border-b-0 last:pb-0 dark:border-[#2c3851]"
                    >
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5c79df] text-[16px] font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="block">
                        <span className="block text-[18px] leading-[1.3] text-[#1a2234] dark:text-white">
                          {article.title}
                        </span>
                        <span className="mt-1 block text-[14px] text-[#707a90] dark:text-[#b6c7ea]">
                          {article.readTime} - {article.category}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <TechBlogNewsletterSection />
      <TechBlogFooterBanner />
    </PageFrame>
  )
}
