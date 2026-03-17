import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock3, Flame, Heart, MessageCircle, Sparkles } from "lucide-react"
import { notFound } from "next/navigation"
import { ArticleShareButton } from "@/components/article-share-button"
import { PageFrame } from "@/components/page-frame"
import {
  TechBlogFooterBanner,
  TechBlogNewsletterSection,
} from "@/components/tech-blog-sections"
import {
  getArticleBySlug,
  techArticles,
} from "@/lib/tech-blog-data"

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

const articleComments = [
  { name: "Ahmed", text: "Great explanation!", time: "2 hours ago" },
  { name: "Fatima", text: "Looking forward to Tesla phone.", time: "3 hours ago" },
]

const reactionOptions = [
  { label: "Helpful", icon: Sparkles, accent: "text-[#2f5ef0]" },
  { label: "Love", icon: Heart, accent: "text-[#ef4b7b]" },
  { label: "Interesting", icon: Flame, accent: "text-[#ff9b3d]" },
  { label: "Discuss", icon: MessageCircle, accent: "text-[#49566f]" },
] as const

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

  const relatedArticles = techArticles
    .filter((item) => item.slug !== article.slug)
    .sort((left, right) => {
      const leftScore = left.category === article.category ? 0 : 1
      const rightScore = right.category === article.category ? 0 : 1

      return leftScore - rightScore
    })
    .slice(0, 3)

  return (
    <PageFrame flushBottom>
      <section className="mx-auto max-w-[1280px] px-4 pb-12 pt-8 sm:px-6">
        <div className="overflow-hidden rounded-[34px] border border-[#d8deeb] bg-[linear-gradient(180deg,#f7f8fc_0%,#eef2fb_100%)] shadow-[0_22px_64px_rgba(31,55,113,0.08)] dark:border-[#2b3750] dark:bg-[linear-gradient(180deg,#1f2739_0%,#171e2d_100%)] dark:shadow-[0_22px_64px_rgba(3,8,20,0.45)]">
          <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="px-6 py-8 sm:px-8 md:px-10">
              <span className="inline-flex rounded-full border border-[#dce5f6] bg-[#f7faff] px-4 py-2 text-[15px] font-medium text-[#2857d7] dark:border-[#33425e] dark:bg-[#243049] dark:text-[#95bbff]">
                {article.category}
              </span>

              <h1 className="mt-5 max-w-[760px] text-[42px] font-medium leading-[1.08] tracking-[-0.04em] text-[#131b31] dark:text-[#f4f7ff] sm:text-[56px]">
                {article.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-[16px] text-[#3e4a66] dark:text-[#c7d5f3]">
                <span>{article.date}</span>
                <span className="text-[#9aa6bf] dark:text-[#6f83ac]">·</span>
                <span>By Eng Yuyu</span>
                <span className="text-[#9aa6bf] dark:text-[#6f83ac]">·</span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {article.readTime}
                </span>
                <ArticleShareButton
                  title={article.title}
                  label="Share"
                  className="inline-flex items-center gap-2 rounded-full border border-[#dbe4f2] bg-[#f8fbff] px-4 py-2 text-[15px] font-medium text-[#4a5b7b] transition-colors hover:bg-[#edf3ff] dark:border-[#354661] dark:bg-[#243049] dark:text-[#dce7ff] dark:hover:bg-[#2d3a56]"
                  messageAlignClassName="items-start"
                />
              </div>

              <p className="mt-7 max-w-[860px] text-[18px] leading-[1.6] text-[#1f2b46] dark:text-[#dde6fb] sm:text-[19px]">
                {article.content[0]}
              </p>

              <div className="mt-7 overflow-hidden rounded-[22px] border border-[#dce5f4] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.98),rgba(224,233,249,0.9)_48%,rgba(207,220,246,0.95)_100%)] shadow-[0_16px_34px_rgba(34,57,104,0.08)] dark:border-[#31415c] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(76,96,141,0.35),rgba(25,35,54,0.96)_100%)]">
                <div className="relative h-[220px] sm:h-[320px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.78),transparent_40%)] dark:bg-[radial-gradient(circle_at_left,rgba(140,166,221,0.12),transparent_42%)]" />
                  <div className="absolute bottom-0 left-0 right-0 h-[36%] bg-[linear-gradient(180deg,rgba(189,203,233,0)_0%,rgba(173,188,220,0.88)_100%)] dark:bg-[linear-gradient(180deg,rgba(30,41,63,0)_0%,rgba(25,36,54,0.92)_100%)]" />
                  <div className="absolute bottom-[24px] left-[8%] h-[70px] w-[160px] rounded-[28px] bg-[linear-gradient(180deg,#7f91b3_0%,#566580_100%)] shadow-[0_16px_28px_rgba(58,78,120,0.24)] sm:h-[108px] sm:w-[260px]">
                    <div className="absolute left-[12px] top-[12px] h-[46px] w-[26px] rounded-[12px] bg-[#1f2634] sm:left-[18px] sm:top-[18px] sm:h-[70px] sm:w-[40px]" />
                    <div className="absolute right-[18px] top-[18px] h-[24px] w-[24px] rounded-full border-[5px] border-[#2e3a53] bg-[#a8bbdd] sm:right-[30px] sm:top-[28px] sm:h-[34px] sm:w-[34px] sm:border-[6px]" />
                    <div className="absolute bottom-[10px] left-[18px] right-[18px] h-[12px] rounded-full bg-[#d6e1f6] opacity-80 sm:bottom-[16px] sm:left-[30px] sm:right-[30px] sm:h-[18px]" />
                  </div>
                  <div className="absolute bottom-[22px] left-[34%] h-[82px] w-[170px] rounded-[42px_58px_24px_24px] border border-white/75 bg-white shadow-[0_18px_32px_rgba(52,75,121,0.22)] sm:bottom-[28px] sm:left-[33%] sm:h-[126px] sm:w-[300px]">
                    <div className="absolute left-[24px] top-[20px] h-[14px] w-[48px] skew-x-[-22deg] rounded-full bg-[#dce8ff] sm:left-[40px] sm:top-[30px] sm:h-[20px] sm:w-[82px]" />
                    <div className="absolute right-[26px] top-[18px] h-[14px] w-[42px] skew-x-[-28deg] rounded-full bg-[#dce8ff] sm:right-[42px] sm:top-[28px] sm:h-[20px] sm:w-[74px]" />
                    <div className="absolute bottom-[10px] left-[24px] h-[28px] w-[28px] rounded-full border-[5px] border-[#2f3f63] bg-[#9ab0d8] sm:bottom-[16px] sm:left-[46px] sm:h-[40px] sm:w-[40px] sm:border-[7px]" />
                    <div className="absolute bottom-[10px] right-[24px] h-[28px] w-[28px] rounded-full border-[5px] border-[#2f3f63] bg-[#9ab0d8] sm:bottom-[16px] sm:right-[46px] sm:h-[40px] sm:w-[40px] sm:border-[7px]" />
                  </div>
                  <div className="absolute bottom-[14px] left-[63%] h-[150px] w-[90px] rounded-[18px] bg-[linear-gradient(180deg,#2d3442_0%,#424d60_100%)] shadow-[0_22px_34px_rgba(31,49,91,0.22)] sm:bottom-[18px] sm:h-[220px] sm:w-[150px]">
                    <div className="absolute left-[50%] top-[18px] h-[12px] w-[34px] -translate-x-1/2 rounded-full bg-[#909fb9] sm:top-[26px] sm:h-[16px] sm:w-[46px]" />
                    <div className="absolute inset-x-[10px] bottom-[10px] top-[32px] rounded-[12px] bg-[linear-gradient(180deg,#0f1522_0%,#30415c_100%)] sm:inset-x-[16px] sm:bottom-[16px] sm:top-[48px]" />
                  </div>
                  <div className="absolute bottom-[26px] right-[6%] h-[110px] w-[52px] rounded-[28px_28px_16px_16px] bg-[linear-gradient(180deg,#d9e3f4_0%,#93a6c7_100%)] opacity-90 sm:h-[170px] sm:w-[70px]" />
                </div>
              </div>

              <div className="mt-7 grid gap-6 lg:grid-cols-[1.35fr_0.78fr]">
                <div className="space-y-6">
                  <p className="text-[18px] leading-[1.6] text-[#1f2b46] dark:text-[#dde6fb] sm:text-[19px]">
                    {article.content[1]}
                  </p>
                  <p className="text-[16px] leading-[1.85] text-[#27344f] dark:text-[#c9d7f5]">
                    {article.content[2]}
                  </p>
                  <p className="text-[16px] leading-[1.85] text-[#27344f] dark:text-[#c9d7f5]">
                    {article.summary}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="overflow-hidden rounded-[18px] border border-[#dce5f4] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.96),rgba(223,232,248,0.92)_100%)] dark:border-[#31415c] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(76,96,141,0.35),rgba(25,35,54,0.96)_100%)]">
                    <div className="relative h-[182px]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.76),transparent_40%)] dark:bg-[radial-gradient(circle_at_left,rgba(140,166,221,0.1),transparent_42%)]" />
                      <div className="absolute bottom-[18px] left-[12%] h-[60px] w-[100px] rounded-[24px] bg-[linear-gradient(180deg,#7f91b3_0%,#566580_100%)] sm:w-[120px]" />
                      <div className="absolute bottom-[20px] left-[38%] h-[90px] w-[72px] rounded-[18px] bg-[linear-gradient(180deg,#101623_0%,#31415d_100%)] shadow-[0_16px_28px_rgba(31,49,91,0.22)]" />
                      <div className="absolute bottom-[22px] right-[12%] h-[52px] w-[92px] rounded-[22px_34px_16px_16px] border border-white/70 bg-white shadow-[0_16px_28px_rgba(52,75,121,0.18)]" />
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[18px] border border-[#dce5f4] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.96),rgba(223,232,248,0.92)_100%)] dark:border-[#31415c] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(76,96,141,0.35),rgba(25,35,54,0.96)_100%)]">
                    <div className="relative h-[182px]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.76),transparent_40%)] dark:bg-[radial-gradient(circle_at_left,rgba(140,166,221,0.1),transparent_42%)]" />
                      <div className="absolute bottom-[20px] left-[12%] h-[88px] w-[48px] rounded-[20px_20px_10px_10px] bg-[linear-gradient(180deg,#d9e3f4_0%,#93a6c7_100%)]" />
                      <div className="absolute bottom-[18px] right-[12%] h-[56px] w-[122px] rounded-[22px_34px_16px_16px] border border-white/75 bg-white shadow-[0_16px_28px_rgba(52,75,121,0.18)]" />
                      <div className="absolute left-[42%] top-[26px] h-[82px] w-[82px] rounded-[18px] bg-[linear-gradient(180deg,#2d3442_0%,#424d60_100%)] opacity-85" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-col justify-between gap-5 rounded-[18px] border border-[#dce5f4] bg-[linear-gradient(180deg,#fbfcff_0%,#f1f5fc_100%)] px-5 py-5 shadow-[0_10px_24px_rgba(30,57,113,0.06)] dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)] sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-[24px] font-medium text-[#1a2338] dark:text-[#f3f7ff]">
                    Watch More About Tesla Model Pi
                  </h2>
                  <p className="mt-2 text-[16px] text-[#4f5c78] dark:text-[#c7d5f3]">
                    For more explanation watch the video above.
                  </p>
                </div>
                <div className="relative h-[58px] w-full overflow-hidden rounded-[14px] bg-[linear-gradient(180deg,#1a2235_0%,#2f3f63_100%)] shadow-[0_14px_26px_rgba(28,47,90,0.18)] sm:w-[210px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_58%)]" />
                  <div className="absolute left-[50%] top-[50%] h-0 w-0 -translate-x-1/2 -translate-y-1/2 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-white border-t-transparent" />
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-[26px] font-semibold text-[#172038] dark:text-[#f3f7ff] sm:text-[32px]">
                  Comments
                </h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {reactionOptions.map((reaction) => {
                    const Icon = reaction.icon

                    return (
                      <button
                        key={reaction.label}
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-[#dce5f4] bg-[#fbfcff] px-4 py-3 text-[15px] font-medium text-[#25324c] shadow-[0_8px_18px_rgba(35,58,108,0.05)] transition hover:-translate-y-0.5 dark:border-[#31415c] dark:bg-[#1b2436] dark:text-[#e5edff]"
                      >
                        <Icon className={`h-5 w-5 ${reaction.accent}`} />
                        {reaction.label}
                      </button>
                    )
                  })}
                </div>

                <div className="mt-5 space-y-3">
                  {articleComments.map((comment) => (
                    <div
                      key={comment.name}
                      className="flex items-start gap-4 rounded-[16px] border border-[#dce5f4] bg-[linear-gradient(180deg,#ffffff_0%,#f6f8fd_100%)] px-4 py-4 shadow-[0_10px_24px_rgba(30,57,113,0.05)] dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#7e90b2_0%,#566580_100%)] text-[18px] font-semibold text-white">
                        {comment.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-[18px] font-semibold text-[#172038] dark:text-[#f3f7ff]">
                            {comment.name}
                          </p>
                          <p className="text-[14px] text-[#7c88a3] dark:text-[#9eb0d1]">
                            {comment.time}
                          </p>
                        </div>
                        <p className="mt-1 text-[16px] text-[#2b3854] dark:text-[#d6e0f7]">
                          {comment.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="border-t border-[#dce5f4] px-4 py-5 xl:border-l xl:border-t-0 dark:border-[#2d3851]">
              <div className="space-y-4">
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

                <div className="rounded-[16px] border border-[#dce5f4] bg-[linear-gradient(180deg,#fbfcff_0%,#f1f5fc_100%)] px-4 py-5 shadow-[0_10px_24px_rgba(30,57,113,0.06)] dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)]">
                  <h2 className="text-[22px] font-semibold text-[#172038] dark:text-[#f3f7ff]">
                    React to this article
                  </h2>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {reactionOptions.map((reaction) => {
                      const Icon = reaction.icon

                      return (
                        <button
                          key={`sidebar-${reaction.label}`}
                          type="button"
                          className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-[#dce5f4] bg-[#fbfcff] px-3 py-3 text-[15px] font-medium text-[#25324c] shadow-[0_8px_18px_rgba(35,58,108,0.05)] transition hover:-translate-y-0.5 dark:border-[#31415c] dark:bg-[#1b2436] dark:text-[#e5edff]"
                        >
                          <Icon className={`h-5 w-5 ${reaction.accent}`} />
                          {reaction.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="rounded-[16px] border border-[#dce5f4] bg-[linear-gradient(180deg,#fbfcff_0%,#f1f5fc_100%)] px-4 py-5 shadow-[0_10px_24px_rgba(30,57,113,0.06)] dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)]">
                  <h2 className="text-[22px] font-semibold text-[#172038] dark:text-[#f3f7ff]">
                    Comments
                  </h2>
                  <form className="mt-4 space-y-3">
                    <div>
                      <label className="mb-1 block text-[14px] font-medium text-[#2e3b57] dark:text-[#d5dff7]">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        className="h-11 w-full rounded-[12px] border border-[#dce5f4] bg-white px-4 text-[15px] text-[#172038] outline-none transition focus:border-[#2f5ef0] dark:border-[#31415c] dark:bg-[#1a2234] dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[14px] font-medium text-[#2e3b57] dark:text-[#d5dff7]">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="h-11 w-full rounded-[12px] border border-[#dce5f4] bg-white px-4 text-[15px] text-[#172038] outline-none transition focus:border-[#2f5ef0] dark:border-[#31415c] dark:bg-[#1a2234] dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[14px] font-medium text-[#2e3b57] dark:text-[#d5dff7]">
                        Comment
                      </label>
                      <textarea
                        placeholder="Comment"
                        rows={4}
                        className="w-full rounded-[12px] border border-[#dce5f4] bg-white px-4 py-3 text-[15px] text-[#172038] outline-none transition focus:border-[#2f5ef0] dark:border-[#31415c] dark:bg-[#1a2234] dark:text-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex h-12 w-full items-center justify-center rounded-[12px] bg-[linear-gradient(180deg,#4d7df6_0%,#2553dd_100%)] text-[16px] font-semibold text-white shadow-[0_12px_24px_rgba(42,84,209,0.24)] transition hover:-translate-y-0.5"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>

                <div className="rounded-[16px] border border-[#dce5f4] bg-[linear-gradient(180deg,#fbfcff_0%,#f1f5fc_100%)] px-4 py-5 shadow-[0_10px_24px_rgba(30,57,113,0.06)] dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)]">
                  <h2 className="text-[22px] font-semibold text-[#172038] dark:text-[#f3f7ff]">
                    More in {article.category}
                  </h2>
                  <div className="mt-4 space-y-3">
                    {relatedArticles.map((relatedArticle, index) => (
                      <Link
                        key={relatedArticle.slug}
                        href={`/tech-blog/${relatedArticle.slug}`}
                        className="flex gap-3 rounded-[14px] border border-[#dce5f4] bg-white/80 p-3 transition hover:-translate-y-0.5 dark:border-[#31415c] dark:bg-[#1a2234]"
                      >
                        <div className={`h-[74px] w-[86px] shrink-0 rounded-[10px] bg-gradient-to-br ${relatedArticle.accent}`} />
                        <div className="min-w-0">
                          <p className="text-[13px] font-medium text-[#2f5ef0] dark:text-[#95bbff]">
                            {index + 1}
                          </p>
                          <h3 className="line-clamp-2 text-[15px] font-medium leading-[1.35] text-[#172038] dark:text-[#f3f7ff]">
                            {relatedArticle.title}
                          </h3>
                          <p className="mt-1 text-[12px] text-[#6c7892] dark:text-[#9fb1d2]">
                            {relatedArticle.readTime} - {relatedArticle.category}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <TechBlogNewsletterSection />
      <TechBlogFooterBanner />
    </PageFrame>
  )
}
