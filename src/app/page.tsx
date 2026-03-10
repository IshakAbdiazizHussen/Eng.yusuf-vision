import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"
import { PageFrame } from "@/components/page-frame"

const partners = ["taran", "keshflip", "amka"]
const socialLinks = {
  youtube: "https://www.youtube.com/@engyuyu",
  tiktok: "https://www.tiktok.com/@eng_yuyu?_r=1&_t=ZS-94Xp4UIvowa",
  instagram: "https://www.instagram.com/eng_yuyu?igsh=ZndnZXJuY252N2Jl",
  facebook: "https://www.facebook.com/share/1LymomoL4L/?mibextid=wwXIfr",
}

function PartnerLogo({ partner }: { partner: string }) {
  if (partner === "taran") {
    return (
      <div className="flex items-center gap-3">
        <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-[#2db85b] text-[31px] font-bold text-[#185eac]">
          <span className="absolute -left-[3px] top-[5px] h-3 w-3 rounded-full bg-[#185eac]" />
          <span className="absolute -right-[3px] bottom-[6px] h-3 w-3 rounded-full bg-[#185eac]" />
          T
        </div>
        <span className="text-[31px] font-semibold tracking-[-0.03em] text-[#1b4e8f] dark:text-white">
          Taran <span className="text-[#2db85b]">App</span>
        </span>
      </div>
    )
  }

  if (partner === "keshflip") {
    return (
      <Image
        src="/keshflip logo.png"
        alt="Keshflip"
        width={3282}
        height={823}
        className="h-[50px] w-auto object-contain"
      />
    )
  }

  return (
    <div className="flex items-center gap-4">
      <Image
        src="/amka_-removebg-preview.png"
        alt="Amka"
        width={500}
        height={499}
        className="h-[92px] w-[92px] object-contain brightness-0 saturate-0 dark:invert dark:brightness-0"
      />
      <div className="leading-none text-[#2f2929] dark:text-white">
        <div className="text-3xl font-semibold tracking-[-0.04em]">amka</div>
        <div className="mt-1 text-3xl font-light tracking-[-0.04em]">stock</div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const marqueePartners = [...partners, ...partners]

  return (
    <PageFrame>
      <section className="mx-auto grid max-w-[1320px] grid-cols-1 items-end gap-10 pt-6 lg:grid-cols-[560px_1fr] lg:gap-10 lg:pt-10">
        <div className="mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-[560px]">
          <Image
            src="/yuyu-removebg-preview.png"
            alt="Eng Yuyu portrait"
            width={900}
            height={1200}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        <div className="max-w-[760px] pb-4 lg:pb-16">
          <h1 className="mt-12 max-w-[720px] text-3xl font-semibold leading-[0.98] tracking-[-0.03em] text-black dark:text-white lg:text-[66px]">
            Eng Yuyu, The Tech Content Creator
          </h1>

          <p className="mt-7 max-w-[760px] text-[22px] font-normal leading-[1.5] text-[#121212] dark:text-white/88 sm:text-[28px] lg:text-[26px]">
            I&apos;m Yusuf Mohamed (Eng Yuyu), a Somali Tech Influencer, Digital
            Creator, and Educator with a mission to make technology simple,
            practical, and empowering for everyone.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-[72px] min-w-[300px] items-center justify-center gap-3 rounded-[18px] border-2 border-[#1d6cff] bg-[#dce3ee] 
              px-8 text-[22px] font-semibold text-[#1d6cff] transition-opacity hover:bg-blue-600 hover:text-white dark:border-[#3b87f6]"
            >
              Watch Latest Video <ArrowRight className="h-6 w-6 " />
            </a>
            <a
              href="#"
              className="inline-flex h-[72px] min-w-[300px] items-center justify-center gap-3 rounded-[18px] bg-[#1d6cff] px-8 
              text-[22px] font-semibold text-white transition-opacity hover:bg-white hover:text-blue-600 dark:border-blue-400"
            >
              For Collaboration <ArrowRight className="h-6 w-6" />
            </a>
          </div>

          <div className="mt-12">
            <h2 className="text-[32px] font-bold leading-none text-black dark:text-white">
              Partner With:
            </h2>

            <div className="relative mt-7 overflow-hidden">
              <div className="partner-marquee flex w-max items-center gap-8 sm:gap-10">
                {marqueePartners.map((partner, index) => (
                  <div
                    key={`${partner}-${index}`}
                    className="flex h-[94px] shrink-0 items-center justify-center"
                  >
                    <PartnerLogo partner={partner} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="mx-auto mb-10 max-w-[1310px]">
        <div className="rounded-[34px] bg-gray-300 px-8 py-14 dark:bg-[#25314b] sm:px-12 lg:px-18">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex h-[190px] items-center justify-center rounded-[14px] border-[4px] border-[#1d6cff] dark:border-[#4c8fff]">
              <div className="text-center">
                <h3 className="text-[58px] font-bold leading-none text-[#1d6cff] dark:text-[#6ea2ff]">
                  600+
                </h3>
                <p className="mt-3 text-[24px] font-semibold leading-[1.1] text-[#1d6cff] dark:text-[#6ea2ff]">
                  Tech Videos
                </p>
              </div>
            </div>

            <div className="flex h-[190px] items-center justify-center rounded-[14px] border-[4px] border-[#1d6cff] dark:border-[#4c8fff]">
              <div className="text-center">
                <h3 className="text-[58px] font-bold leading-none text-[#1d6cff] dark:text-[#6ea2ff]">
                  25+
                </h3>
                <p className="mt-3 text-[24px] font-semibold leading-[1.1] text-[#1d6cff] dark:text-[#6ea2ff]">
                  Countries
                </p>
              </div>
            </div>

            <div className="flex h-[190px] items-center justify-center rounded-[14px] border-[4px] border-[#1d6cff] dark:border-[#4c8fff]">
              <div className="text-center">
                <h3 className="text-[58px] font-bold leading-none text-[#1d6cff] dark:text-[#6ea2ff]">
                  27+
                </h3>
                <p className="mt-3 text-[24px] font-semibold leading-[1.1] text-[#1d6cff] dark:text-[#6ea2ff]">
                  Million Views
                </p>
              </div>
            </div>

            <div className="flex h-[190px] items-center justify-center rounded-[14px] border-[4px] border-[#1d6cff] dark:border-[#4c8fff]">
              <div className="text-center">
                <h3 className="text-[58px] font-bold leading-none text-[#1d6cff] dark:text-[#6ea2ff]">
                  10+
                </h3>
                <p className="mt-3 text-[24px] font-semibold leading-[1.1] text-[#1d6cff] dark:text-[#6ea2ff]">
                  Collaborate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1320px] px-4 pb-8 sm:px-6">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.04em] text-black dark:text-white sm:text-[48px]">
            Empowering 1M+ Somali Tech
            <br />
            Learners Worldwide
          </h2>

          <div className="mt-10 rounded-[16px] bg-gray-300 px-8 py-10 dark:bg-[#25314b] sm:px-12">
            <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
              <div className="flex items-center gap-5">
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex h-[58px] w-[78px] items-center justify-center rounded-[18px] bg-[#ff1307] text-white"
                >
                  <FaYoutube className="h-8 w-8" />
                </a>
                <div className="text-left">
                  <p className="text-[20px] leading-none text-[#121212] dark:text-white">
                    Subscribers
                  </p>
                  <p className="mt-2 text-[34px] font-bold leading-none text-black dark:text-white">
                    148k+
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="text-[#161616] dark:text-white"
                >
                  <FaTiktok className="h-14 w-14" />
                </a>
                <div className="text-left">
                  <p className="text-[20px] leading-none text-[#121212] dark:text-white">
                    Followers
                  </p>
                  <p className="mt-2 text-[34px] font-bold leading-none text-black dark:text-white">
                    506.3k+
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#1d6cff] text-white"
                >
                  <FaFacebookF className="h-10 w-10" />
                </a>
                <div className="text-left">
                  <p className="text-[20px] leading-none text-[#121212] dark:text-white">
                    Followers
                  </p>
                  <p className="mt-2 text-[34px] font-bold leading-none text-black dark:text-white">
                    276k+
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-[64px] w-[64px] items-center justify-center rounded-[18px] bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_8%,#fd5949_30%,#d6249f_60%,#285AEB_100%)] text-white"
                >
                  <FaInstagram className="h-9 w-9" />
                </a>
                <div className="text-left">
                  <p className="text-[20px] leading-none text-[#121212] dark:text-white">
                    Followers
                  </p>
                  <p className="mt-2 text-[34px] font-bold leading-none text-black dark:text-white">
                    276k+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageFrame>
  )
}
