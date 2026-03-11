import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock3, Share2 } from "lucide-react"
import { notFound } from "next/navigation"
import { ArticleReactions } from "@/components/article-reactions"
import { PageFrame } from "@/components/page-frame"
import {
  getArticleBySlug,
  techArticles,
} from "@/lib/tech-blog-data"

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

const socialLinks = {
  youtube: "https://www.youtube.com/@engyuyu",
  tiktok: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  instagram: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  facebook: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
}

export async function generateStaticParams() {
  return techArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {}
  }

  return {
    title: `${article.title} | Tech Blog`,
    description: article.summary,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = techArticles.filter((item) => item.slug !== article.slug).slice(0, 3)

  return (
    <PageFrame flushBottom>
      <section className="mx-auto max-w-[1120px] px-4 pb-12 pt-8 sm:px-6">
        <Link
          href="/tech-blog"
          className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/75 px-4 py-2 text-[15px] font-semibold text-[#1d6cff] transition-colors hover:bg-[#1d6cff] hover:text-white dark:border-white/10 dark:bg-[#1e2434] dark:text-[#8ec0ff] dark:hover:bg-[#1d6cff] dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Tech Blog
        </Link>

        <div className={`mt-8 rounded-[40px] bg-gradient-to-br ${article.accent} p-[1px] shadow-[0_28px_60px_rgba(23,43,92,0.16)]`}>
          <div className="rounded-[39px] bg-[#edf3ff] px-6 py-7 dark:bg-[#11192a] sm:px-10 sm:py-10">
            <div className="flex flex-wrap items-center gap-3 text-[14px] font-semibold text-[#1d6cff] dark:text-[#90bfff]">
              <span className="rounded-full bg-white/80 px-4 py-2 dark:bg-white/10">
                {article.category}
              </span>
              <span>{article.date}</span>
            </div>

            <h1 className="mt-6 max-w-[900px] text-[34px] font-bold leading-[1.02] tracking-[-0.04em] text-black dark:text-white sm:text-[52px]">
              {article.title}
            </h1>

            <p className="mt-5 max-w-[780px] text-[20px] leading-[1.45] text-[#22304f] dark:text-[#d9e5ff] sm:text-[24px]">
              {article.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-[16px] text-[#23304f] dark:text-[#d9e5ff]">
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {article.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share with your community
              </span>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.45fr_0.8fr]">
              <div className="rounded-[34px] bg-white/80 p-6 shadow-[0_18px_34px_rgba(21,33,68,0.08)] dark:bg-[#182035]">
                <div className={`rounded-[28px] bg-gradient-to-br ${article.accent} p-8 text-white sm:p-10`}>
                  <Image
                    src="/Eng Yuyu Logo-21.png"
                    alt="Eng Yuyu Logo"
                    width={180}
                    height={68}
                    className="h-[64px] w-auto object-contain"
                    style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
                  />
                  <p className="mt-10 max-w-[520px] text-[24px] font-semibold leading-[1.22] tracking-[-0.03em] sm:text-[32px]">
                    {article.summary}
                  </p>
                </div>
              </div>

              <aside className="rounded-[34px] border border-black/8 bg-white/70 p-6 dark:border-white/10 dark:bg-[#182035]">
                <h2 className="text-[24px] font-bold leading-none text-black dark:text-white">
                  Inside this article
                </h2>
                <ul className="mt-5 space-y-4">
                  {article.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-[22px] bg-[#edf3ff] px-4 py-4 text-[17px] leading-[1.45] text-[#22304f] dark:bg-[#24314b] dark:text-[#e4edff]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.78fr]">
          <article className="space-y-6 rounded-[34px] bg-[#dbe2ec] px-6 py-8 dark:bg-[#1b2438] sm:px-10 sm:py-10">
            {article.content.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[20px] leading-[1.75] tracking-[-0.02em] text-[#182033] dark:text-[#edf3ff] sm:text-[22px]"
              >
                {paragraph}
              </p>
            ))}
          </article>

          <div className="space-y-8">
            <ArticleReactions slug={article.slug} />

            <div className="rounded-[30px] bg-[#dbe2ec] p-6 dark:bg-[#1b2438]">
              <h2 className="text-[24px] font-bold leading-none text-black dark:text-white">
                Continue Reading
              </h2>
              <div className="mt-5 space-y-4">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    href={`/tech-blog/${relatedArticle.slug}`}
                    className="group block rounded-[24px] bg-white/80 p-5 transition-transform hover:-translate-y-1 dark:bg-[#24314b]"
                  >
                    <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#1d6cff] dark:text-[#8ec0ff]">
                      {relatedArticle.category}
                    </p>
                    <h3 className="mt-2 text-[21px] font-semibold leading-[1.2] text-black dark:text-white">
                      {relatedArticle.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-[#1d6cff] dark:text-[#8ec0ff]">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative left-1/2 right-1/2 mt-12 ml-[-50vw] mr-[-50vw] w-screen bg-[#156ff3] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-18">
        <div className="mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
          <Image
            src="/Eng Yuyu Logo-21.png"
            alt="Eng Yuyu Logo"
            width={300}
            height={120}
            className="h-[120px] w-auto object-contain sm:h-[150px] lg:h-[170px]"
            style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
          />

          <p className="mt-6 max-w-[760px] text-[18px] leading-[1.45] tracking-[-0.02em] text-white/95 sm:text-[20px]">
            My Goal is Simple: to Educate, Inspire and Connect people through
            technology: One video, one idea and one innovation at a time.....
          </p>

          <div className="mt-10 flex items-center gap-4 sm:gap-5">
            <a href={socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="social-icon-float-1 transition-transform duration-300 hover:scale-110">
              <Image src="/youtubeRemoving.png" alt="YouTube" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon-float-2 transition-transform duration-300 hover:scale-110">
              <Image src="/Facebook.png" alt="Facebook" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
            </a>
            <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="social-icon-float-3 transition-transform duration-300 hover:scale-110">
              <Image src="/Tiktok.png" alt="TikTok" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon-float-4 transition-transform duration-300 hover:scale-110">
              <Image src="/Instgram.png" alt="Instagram" width={58} height={58} className="h-[36px] w-auto object-contain brightness-0 invert sm:h-[42px]" />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 w-full border-t border-white/55 pt-7 text-center text-[16px] tracking-[-0.02em] text-white/95">
          © 2025 Eng Yuyu Media - All Rights Reserved.
        </div>
      </div>
    </PageFrame>
  )
}
