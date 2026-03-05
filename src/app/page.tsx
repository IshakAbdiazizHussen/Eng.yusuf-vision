import Image from "next/image"
import { ArrowRight, Facebook, Instagram, Tiktok, Youtube } from "lucide-react"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f4f6]">
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-[62%]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(29,108,255,0.08) 1.2px, transparent 1.9px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1520px] px-6 pb-0 pt-4">
        <nav className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 pl-1" aria-label="Home">
            <span className="h-7 w-4 -rotate-[32deg] rounded-full border-[2.5px] border-[#1d6cff]" />
            <span className="h-14 w-8 -rotate-[32deg] rounded-lg bg-[#1d6cff]" />
          </a>

          <ul className="ml-auto flex items-center justify-center gap-2 rounded-xl bg-[#d5deed] px-7 py-2.5 text-[#1d6cff]">
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="px-2 text-[14px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                About
              </a>
              <span className="text-[14px] font-medium text-[#1d6cff]/90">|</span>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="px-2 text-[14px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                Watch
              </a>
              <span className="text-[14px] font-medium text-[#1d6cff]/90">|</span>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="px-2 text-[14px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                Tech Blog
              </a>
              <span className="text-[14px] font-medium text-[#1d6cff]/90">|</span>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="px-2 text-[14px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                Events
              </a>
              <span className="text-[14px] font-medium text-[#1d6cff]/90">|</span>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="px-2 text-[14px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                Impact
              </a>
            </li>
          </ul>
        </nav>

        <section className="mt-5 grid grid-cols-[500px_1fr] items-end gap-10 pt-8">
          <div className="mb-0 h-[690px] w-full max-w-[500px] overflow-hidden">
            <Image
              src="/yuyu.png"
              alt="Eng Yuyu portrait"
              width={526}
              height={628}
              className="h-full w-full object-cover object-top mix-blend-multiply"
              priority
            />
          </div>

          <div className="max-w-[820px] pb-8 ml-38 mb-18">
            <h1 className="text-8xl font-bold leading-[0.95] text-[#1d6cff]">Eng Yuyu</h1>
            <p className="mt-2 text-[62px] font-medium leading-[1.02] text-[#0a0a0a]">
              Tech Content Creator.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-[52px] min-w-[300px] items-center justify-center gap-2 rounded-2xl bg-[#e3eaf7] px-6 text-[18px] font-semibold leading-none text-[#1d6cff] whitespace-nowrap transition-opacity hover:opacity-85"
              >
                Watch Latest Videos <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex h-[52px] min-w-[300px] items-center justify-center gap-2 rounded-2xl bg-[#1d6cff] px-6 text-[18px] font-semibold leading-none text-white whitespace-nowrap transition-opacity hover:opacity-90"
              >
                For Collaboration <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-12">
              <h2 className="text-[50px] font-bold leading-none text-[#1d6cff]">Partners</h2>
              <div className="mt-4 flex items-end gap-10">
                <div className="flex flex-col items-center justify-end gap-1">
                  <div className="h-[94px] w-[132px] overflow-hidden">
                    <Image
                      src="/premier_bank-removebg-preview.png"
                      alt="Premier Bank"
                      width={132}
                      height={94}
                      className="h-full w-full object-cover"
                      style={{ clipPath: "inset(18% 14% 18% 14%)" }}
                    />
                  </div>
                  <p className="text-center text-[16px] font-semibold leading-none tracking-tight text-[#173968]">
                    premier bank
                  </p>
                </div>

                <div className="flex items-end gap-3">
                  <div className="h-[94px] w-[112px] overflow-hidden">
                    <Image
                      src="/amka_-removebg-preview.png"
                      alt="Amka icon"
                      width={112}
                      height={94}
                      className="h-full w-full object-cover brightness-0 saturate-0"
                      style={{ clipPath: "inset(15%)" }}
                    />
                  </div>
                  <div className="mr-1 leading-none text-[#0a0a0a]">
                    <h3 className="text-[42px] font-semibold tracking-tight">amka</h3>
                    <p className="-mt-1 text-[40px] font-extralight tracking-wide">Stock</p>
                  </div>
                </div>

                <div className="flex items-end gap-3">
                  <div className="h-[96px] w-[96px] overflow-hidden">
                    <Image
                      src="/fudeydiye-removebg-preview.png"
                      alt="Fudaydiye"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                      style={{ clipPath: "inset(26%)" }}
                    />
                  </div>
                  <div className="leading-none text-[#0d7069]">
                    <h4 className="whitespace-nowrap text-[46px] font-semibold tracking-tight">
                      Fudaydiye
                    </h4>
                    <p className="mt-1 text-[13px] font-semibold text-[#46b97c]">
                      Click &amp; collect
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 mb-8 pb-10">
          <div className="rounded-[44px] bg-gray-200 px-10 py-12 backdrop-blur-[1px]">
            <div className="grid grid-cols-4 gap-8">
              <div className="flex h-[170px] items-center justify-center rounded-[26px] border-[5px] border-[#1d6cff]">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[52px] font-bold leading-none text-[#1d6cff]">600+</h3>
                  <p className="mt-1 text-[17px] font-medium leading-none text-[#1d6cff]">
                    Tech Videos
                  </p>
                </div>
              </div>

              <div className="flex h-[170px] items-center justify-center rounded-[26px] border-[5px] border-[#1d6cff]">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[52px] font-bold leading-none text-[#1d6cff]">25+</h3>
                  <p className="mt-1 text-[17px] font-medium leading-none text-[#1d6cff]">
                    Countries
                  </p>
                </div>
              </div>

              <div className="flex h-[170px] items-center justify-center rounded-[26px] border-[5px] border-[#1d6cff]">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[52px] font-bold leading-none text-[#1d6cff]">27+</h3>
                  <p className="mt-1 text-[17px] font-medium leading-none text-[#1d6cff]">
                    Million Views
                  </p>
                </div>
              </div>

              <div className="flex h-[170px] items-center justify-center rounded-[26px] border-[5px] border-[#1d6cff]">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[52px] font-bold leading-none text-[#1d6cff]">10+</h3>
                  <p className="mt-1 text-[17px] font-medium leading-none text-[#1d6cff]">
                    Collaborations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-12 text-center text-[72px] font-bold leading-[1.05] text-[#1d6cff]">
            Empowering 1M+ Somali Tech
            <br />
            Learners Worldwide.
          </h2>

          <div className="mx-auto mt-10 max-w-[1120px] rounded-[44px] bg-[#ccd5e4] px-12 py-12">
            <div className="grid grid-cols-2 gap-x-24 gap-y-12">
              <div className="flex items-center gap-5">
                <div className="flex h-22 w-32 items-center justify-center rounded-[26px] bg-[#ff0000]">
                  <Youtube className="h-11 w-11 text-white" fill="currentColor" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[18px] leading-none text-[#161616]">YouTube Subscribers</p>
                  <h3 className="mt-2 text-[64px] font-bold leading-none text-black">155k+</h3>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-22 w-22 items-center justify-center rounded-full bg-[#111111]">
                  <Tiktok className="h-11 w-11 text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[18px] leading-none text-[#161616]">TikTok Followers</p>
                  <h3 className="mt-2 text-[64px] font-bold leading-none text-black">513.9k+</h3>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="relative h-22 w-22 rounded-[26px] bg-[linear-gradient(135deg,#fbc700_0%,#ff6a00_35%,#ff0068_70%,#7c2cff_100%)]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Instagram className="h-10 w-10 text-white" strokeWidth={2.2} />
                  </div>
                </div>
                <div>
                  <p className="text-[18px] leading-none text-[#161616]">
                    Instagram Followers
                  </p>
                  <h3 className="mt-2 text-[64px] font-bold leading-none text-black">56k+</h3>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-22 w-22 items-center justify-center rounded-full bg-[#2577e7]">
                  <Facebook className="h-11 w-11 text-white" fill="currentColor" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[18px] leading-none text-[#161616]">Facebook Followers</p>
                  <h3 className="mt-2 text-[64px] font-bold leading-none text-black">290k+</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
