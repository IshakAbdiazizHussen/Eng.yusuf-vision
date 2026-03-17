import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ArticleShareButton } from "@/components/article-share-button"
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
      <section className="mt-8 rounded-[44px] bg-[#dbe2ec] px-6 py-8 dark:bg-[#20283b] sm:px-8 md:px-12 md:py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-none text-[#1d6cff] sm:text-[62px]">
            Tech Blog
          </h1>
          <p className="mt-3 text-2xl font-bold leading-none text-black dark:text-white sm:text-[32px]">
            Simple tech, real impact
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {blogCategories.map((category) => (
            <Link
              key={category}
              href={category === "All" ? "/tech-blog" : `/tech-blog?category=${encodeURIComponent(category)}`}
              className={`rounded-full px-5 py-3 text-[16px] font-semibold ${
                selectedCategory === category
                  ? "bg-[#1d6cff] text-white"
                  : "bg-white/80 text-[#21304f] transition-colors hover:bg-[#cfe0ff] dark:bg-[#2a3550] dark:text-[#dfe7fb] dark:hover:bg-[#344466]"
              }`}
            >
              {category}
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-10 xl:grid-cols-[minmax(0,1fr)_300px] xl:items-start">
          <div className="min-w-0">
            <p className="mb-6 text-center text-xl font-light text-black dark:text-white sm:mb-8 sm:text-[30px]">
              {activeFeaturedArticle.date} | {activeFeaturedArticle.category}
            </p>

            <div className={`relative h-[240px] w-full rounded-[34px] bg-gradient-to-br ${activeFeaturedArticle.accent} p-[1px] sm:h-[320px] md:h-[360px]`}>
              <div className="relative h-full rounded-[33px] bg-[#edf3ff] dark:bg-[#151d2d]">
                <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                  <Image
                    src="/Eng Yuyu Logo-21.png"
                    alt="Eng Yuyu Logo"
                    width={124}
                    height={89}
                    className="h-[52px] w-[66px] object-contain sm:h-[72px] sm:w-[96px]"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(35%) sepia(96%) saturate(2724%) hue-rotate(209deg) brightness(102%) contrast(98%)",
                    }}
                  />
                </div>

                <div className="flex h-full items-end p-6 sm:p-8">
                  <p className="max-w-[660px] text-[24px] font-semibold leading-[1.18] text-[#1d6cff] dark:text-[#9ac1ff] sm:text-[34px]">
                    {activeFeaturedArticle.summary}
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-7 max-w-[980px] text-2xl font-semibold leading-[1.08] tracking-[-0.03em] text-black dark:text-white sm:mt-8 sm:text-5xl">
              {activeFeaturedArticle.title}
            </h2>

            <div className="mt-5 flex items-center justify-between text-lg text-black dark:text-white sm:mt-6 sm:text-[30px]">
              <span className="font-light">{activeFeaturedArticle.readTime}</span>
              <ArticleShareButton
                title={activeFeaturedArticle.title}
                url={`/tech-blog/${activeFeaturedArticle.slug}`}
                label="Share"
                className="inline-flex items-center gap-3 font-light text-black transition-colors hover:text-[#1d6cff] dark:text-white dark:hover:text-[#8ebfff] sm:text-[30px]"
                messageAlignClassName="items-end"
              />
            </div>

            <p className="mt-7 max-w-[980px] text-xl font-light leading-[1.4] tracking-[-0.02em] text-black dark:text-[#e4edff] sm:mt-8 sm:text-2xl md:text-[32px]">
              {activeFeaturedArticle.excerpt}
            </p>

            <Link
              href={`/tech-blog/${activeFeaturedArticle.slug}`}
              className="mt-8 inline-flex items-center gap-3 rounded-[18px] bg-[#1d6cff] px-8 py-4 text-[20px] font-semibold text-white transition-all hover:-translate-y-1"
            >
              Read full story
              <ArrowRight className="h-5 w-5" />
            </Link>

            <h3 className="mt-12 text-2xl font-semibold text-[#1d6cff] sm:mt-14 sm:text-[28px]">
              {selectedCategory === "All" ? "Latest Articles..." : `${selectedCategory} Articles`}
            </h3>

            <div className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-3">
              {latestArticles.map((article) => (
                <article key={article.slug}>
                  <div className={`h-[126px] rounded-[20px] bg-gradient-to-br ${article.accent} p-[1px] sm:h-[180px] sm:rounded-[24px] md:h-[220px]`}>
                    <div className="flex h-full items-end rounded-[19px] bg-[#eef4fd] p-4 dark:bg-[#172033] sm:rounded-[23px] sm:p-5">
                      <p className="text-[16px] font-semibold leading-[1.2] text-[#1d6cff] dark:text-[#8ebfff] sm:text-[20px]">
                        {article.category}
                      </p>
                    </div>
                  </div>
                  <h4 className="mt-4 text-[20px] font-semibold leading-[1.2] text-black dark:text-white sm:text-lg">
                    {article.title}
                  </h4>
                  <Link
                    href={`/tech-blog/${article.slug}`}
                    className="mt-4 inline-flex h-[36px] min-w-[126px] items-center justify-center rounded-[10px] bg-[#1d6cff] px-4 text-[14px] font-bold text-white sm:h-[42px] sm:min-w-[160px] sm:rounded-[12px] sm:text-[16px] md:h-[46px] md:min-w-[184px] md:rounded-[14px] md:px-6 md:text-[18px]"
                  >
                    Learn More
                  </Link>
                </article>
              ))}
              {latestArticles.length === 0 ? (
                <div className="md:col-span-3 rounded-[24px] bg-white/80 p-6 text-center dark:bg-[#172033]">
                  <p className="text-[18px] font-semibold text-[#1d6cff] dark:text-[#8ebfff]">
                    This category currently has one featured article.
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          <aside className="flex flex-col gap-6 xl:w-[300px]">
            <div className="rounded-[34px] bg-[linear-gradient(180deg,#1d6cff_0%,#2458cf_100%)] p-6 text-center text-white shadow-[0_18px_34px_rgba(29,108,255,0.22)] xl:min-h-[600px]">
              <p className="text-[14px] font-semibold uppercase tracking-[0.1em] text-white/75">
                Premium Placement
              </p>
              <div className="mt-12">
                <p className="text-[48px] font-bold leading-[0.95]">Advertise Here</p>
                <p className="mt-8 text-[42px] font-semibold leading-none">300 x 600</p>
              </div>
              <Link
                href="/contact"
                className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#ffd76a] px-6 py-3 text-[18px] font-semibold text-[#18316d] transition hover:-translate-y-1"
              >
                Advertise Here
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="rounded-[34px] bg-[linear-gradient(180deg,#1d6cff_0%,#2458cf_100%)] p-6 text-center text-white shadow-[0_18px_34px_rgba(29,108,255,0.22)] xl:min-h-[450px]">
              <p className="text-[14px] font-semibold uppercase tracking-[0.1em] text-white/75">
                Sponsored
              </p>
              <div className="mt-10">
                <p className="text-[40px] font-bold leading-[0.98]">Advertise Here</p>
                <p className="mt-7 text-[38px] font-semibold leading-none">300 x 450</p>
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#ffd76a] px-6 py-3 text-[18px] font-semibold text-[#18316d] transition hover:-translate-y-1"
              >
                Advertise Here
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="rounded-[34px] bg-[linear-gradient(180deg,#1d6cff_0%,#2458cf_100%)] p-6 text-center text-white shadow-[0_18px_34px_rgba(29,108,255,0.22)] xl:min-h-[250px]">
              <p className="text-[14px] font-semibold uppercase tracking-[0.1em] text-white/75">
                Campaign Slot
              </p>
              <div className="mt-8">
                <p className="text-[32px] font-bold leading-[1]">Advertise Here</p>
                <p className="mt-5 text-[30px] font-semibold leading-none">300 x 250</p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ffd76a] px-6 py-3 text-[16px] font-semibold text-[#18316d] transition hover:-translate-y-1"
              >
                Book This Slot
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-[34px] bg-white/80 p-6 shadow-[0_16px_34px_rgba(24,53,107,0.08)] dark:bg-[#172033]">
              <h2 className="text-[32px] font-bold leading-none text-[#1d2b4f] dark:text-white">
                Popular Articles
              </h2>
              <div className="mt-6 space-y-5">
                {popularArticles.map((article, index) => (
                  <Link
                    key={`popular-${article.slug}`}
                    href={`/tech-blog/${article.slug}`}
                    className="flex gap-4 border-b border-[#d7dfec] pb-5 last:border-b-0 last:pb-0 dark:border-[#2c3851]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dce7ff] text-[18px] font-bold text-[#1d6cff] dark:bg-[#22304c] dark:text-[#9ac1ff]">
                      {index + 1}
                    </span>
                    <span className="block">
                      <span className="block text-[22px] font-semibold leading-[1.15] text-[#1d2b4f] dark:text-white">
                        {article.title}
                      </span>
                      <span className="mt-2 block text-[15px] text-[#5a6785] dark:text-[#b7c7e8]">
                        {article.readTime} • {article.category}
                      </span>
                    </span>
                  </Link>
                ))}
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
