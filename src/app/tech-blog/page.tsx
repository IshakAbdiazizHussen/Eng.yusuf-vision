import { ArrowRight, Link2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageFrame } from "@/components/page-frame"
import { featuredArticle, techArticles } from "@/lib/tech-blog-data"

const socialLinks = {
  youtube: "https://www.youtube.com/@engyuyu",
  tiktok: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  instagram: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  facebook: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
}

const categories = [
  "All",
  "Tech News",
  "Tutorials & How-To",
  "Digital Security",
  "AI & Future Tech",
  "Content Creation",
  "Reviews",
]

export default function TechBlogPage() {
  const latestArticles = techArticles.slice(0, 4)
  const sidebarArticles = techArticles.slice(3)
  const relatedArticles = techArticles.filter(
    (article) => article.slug !== featuredArticle.slug,
  )

  const newsletterSection = (
    <section className="mt-10 rounded-[44px] bg-[#dbe2ec] px-8 py-10 dark:bg-[#20283b] md:px-14 md:py-12">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[760px]">
          <h2 className="text-3xl font-bold leading-none text-black dark:text-white">
            Join My Newsletter
          </h2>
          <p className="mt-5 max-w-[700px] text-2xl font-light leading-[1.2] text-[#1d1d1d] dark:text-[#dde6fb] md:text-[30px]">
            Get practical tech tips, digital safety guides,
            <br />
            and AI insights straight to your inbox.
          </p>

          <form className="mt-8 flex flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Your Email"
              className="h-[72px] w-full rounded-[18px] bg-white px-7 text-[24px] font-semibold text-black outline-none placeholder:text-[#8f8f8f] md:max-w-[520px]"
            />
            <button
              type="submit"
              className="inline-flex h-[72px] min-w-[220px] items-center justify-center rounded-[18px] bg-[#1d6cff] px-8 text-2xl font-bold leading-none text-white transition-opacity hover:opacity-90 md:min-w-[300px]"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-full border-[12px] border-[#00a8ff] bg-white shadow-[0_0_0_8px_#1d6cff] md:h-[210px] md:w-[210px]">
            <div className="flex h-[82px] w-[82px] items-center justify-center rounded-[16px] bg-[#1d6cff] text-[44px] text-white md:h-[104px] md:w-[104px] md:text-[56px]">
              ✉
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <PageFrame flushBottom>
      <section className="mt-10 px-6 py-6 text-center">
        <h1 className="text-4xl font-bold leading-none text-[#1d6cff] sm:text-[62px]">
          Tech Blog
        </h1>
        <p className="mt-3 text-2xl font-bold leading-none text-black dark:text-white sm:text-[32px]">
          Simple tech, real impact
        </p>
      </section>

      <section className="mt-8 rounded-[44px] bg-[#dbe2ec] px-6 py-8 dark:bg-[#20283b] sm:px-8 md:px-12 md:py-12">
        <h2 className="text-center text-3xl font-bold leading-none text-black dark:text-white">
          Categories
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category, index) => (
            <span
              key={category}
              className={`rounded-full px-5 py-3 text-[16px] font-semibold ${
                index === 0
                  ? "bg-[#1d6cff] text-white"
                  : "bg-white/80 text-[#21304f] dark:bg-[#2a3550] dark:text-[#dfe7fb]"
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-12 xl:grid-cols-[1.7fr_0.9fr]">
          <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
            {latestArticles.map((article) => (
              <article key={article.slug} className="group">
                <div className={`rounded-[30px] bg-gradient-to-br ${article.accent} p-[1px] shadow-[0_16px_34px_rgba(24,53,107,0.12)]`}>
                  <div className="flex h-[220px] w-full flex-col justify-between rounded-[29px] bg-[#eff4fd] p-6 dark:bg-[#162033] sm:h-[260px]">
                    <div className="flex items-start justify-between gap-4">
                      <Image
                        src="/Eng Yuyu Logo-21.png"
                        alt="Eng Yuyu Logo"
                        width={124}
                        height={89}
                        className="h-[56px] w-[72px] object-contain sm:h-[72px] sm:w-[96px]"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(35%) sepia(96%) saturate(2724%) hue-rotate(209deg) brightness(102%) contrast(98%)",
                        }}
                      />
                      <span className="rounded-full bg-white/90 px-4 py-2 text-[13px] font-bold uppercase tracking-[0.08em] text-[#1d6cff] dark:bg-white/10 dark:text-[#8ebfff]">
                        {article.category}
                      </span>
                    </div>

                    <p className="max-w-[280px] text-[20px] font-semibold leading-[1.2] text-[#1f2d4c] dark:text-white">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold leading-[1.18] text-black dark:text-white">
                  {article.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.5] text-[#2a3857] dark:text-[#dfe7fb]">
                  {article.excerpt}
                </p>
                <Link
                  href={`/tech-blog/${article.slug}`}
                  className="mt-6 inline-flex h-[52px] min-w-[220px] items-center justify-center gap-3 rounded-[18px] bg-[#1d6cff] px-6 text-2xl leading-none text-white transition-all hover:-translate-y-1 hover:opacity-90 sm:h-[58px] sm:min-w-[282px] sm:px-8"
                >
                  Learn More <ArrowRight className="h-5 w-5" />
                </Link>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            {sidebarArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/tech-blog/${article.slug}`}
                className="group rounded-[34px] bg-[#1d6cff] p-6 text-white transition-transform hover:-translate-y-1 sm:p-8"
              >
                <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white/80">
                  {article.category}
                </p>
                <h3 className="mt-4 text-[28px] font-bold leading-[1.08]">
                  {article.title}
                </h3>
                <p className="mt-4 text-[18px] leading-[1.45] text-white/88">
                  {article.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[16px] font-semibold">
                  Open article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[44px] bg-[#dbe2ec] px-6 py-8 dark:bg-[#0f1522] sm:px-8 md:px-12 md:py-12">
        <div className="grid gap-10 xl:grid-cols-[1.75fr_0.85fr]">
          <div className="max-w-[760px]">
            <p className="mb-6 text-center text-xl font-light text-black dark:text-white sm:mb-8 sm:text-[30px]">
              {featuredArticle.date} | {featuredArticle.category}
            </p>

            <div className={`relative h-[240px] w-full rounded-[34px] bg-gradient-to-br ${featuredArticle.accent} p-[1px] sm:h-[320px] md:h-[360px]`}>
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
                    {featuredArticle.summary}
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-7 max-w-[980px] text-2xl font-semibold leading-[1.08] tracking-[-0.03em] text-black dark:text-white sm:mt-8 sm:text-5xl">
              {featuredArticle.title}
            </h2>

            <div className="mt-5 flex items-center justify-between text-lg text-black dark:text-white sm:mt-6 sm:text-[30px]">
              <span className="font-light">{featuredArticle.readTime}</span>
              <span className="inline-flex items-center gap-3 font-light">
                <Link2 className="h-6 w-6 rotate-45 sm:h-8 sm:w-8" />
                Share
              </span>
            </div>

            <p className="mt-7 max-w-[980px] text-xl font-light leading-[1.4] tracking-[-0.02em] text-black dark:text-[#e4edff] sm:mt-8 sm:text-2xl md:text-[32px]">
              {featuredArticle.excerpt}
            </p>

            <Link
              href={`/tech-blog/${featuredArticle.slug}`}
              className="mt-8 inline-flex items-center gap-3 rounded-[18px] bg-[#1d6cff] px-8 py-4 text-[20px] font-semibold text-white transition-all hover:-translate-y-1"
            >
              Read full story
              <ArrowRight className="h-5 w-5" />
            </Link>

            <h3 className="mt-12 text-2xl font-semibold text-[#1d6cff] sm:mt-14 sm:text-[28px]">
              Latest Articles...
            </h3>

            <div className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-3">
              {relatedArticles.slice(0, 3).map((article) => (
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
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-center text-[34px] font-bold leading-none text-[#1d6cff] sm:mb-8 sm:text-[64px]">
              Partners
            </h2>
            <div className="flex flex-col gap-6 sm:gap-8">
              {techArticles.slice(0, 2).map((article) => (
                <div
                  key={`partner-${article.slug}`}
                  className={`rounded-[42px] bg-gradient-to-br ${article.accent} p-[1px]`}
                >
                  <div className="rounded-[41px] bg-[#1b4eb1] p-8 text-white sm:min-h-[320px] md:min-h-[360px]">
                    <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white/70">
                      Community Topic
                    </p>
                    <h3 className="mt-4 text-[32px] font-bold leading-[1.08]">
                      {article.category}
                    </h3>
                    <p className="mt-4 text-[18px] leading-[1.45] text-white/88">
                      {article.summary}
                    </p>
                    <Link
                      href={`/tech-blog/${article.slug}`}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/14 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/22"
                    >
                      View article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {newsletterSection}

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
