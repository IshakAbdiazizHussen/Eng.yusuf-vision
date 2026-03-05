import Image from "next/image"
import { ArrowRight } from "lucide-react"

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

      <div className="relative mx-auto w-full max-w-[1320px] px-8 pb-0 pt-4">
        <nav className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 pl-1" aria-label="Home">
            <span className="h-7 w-4 -rotate-[32deg] rounded-full border-[2.5px] border-[#1d6cff]" />
            <span className="h-14 w-8 -rotate-[32deg] rounded-[10px] bg-[#1d6cff]" />
          </a>

          <ul className="ml-auto flex items-center justify-center gap-2 rounded-lg bg-[#cfd8e8] px-6 py-2 text-[#1d6cff]">
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="px-2 text-[12px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                About
              </a>
              <span className="text-[13px] font-medium text-[#1d6cff]/90">|</span>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="px-2 text-[12px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                Watch
              </a>
              <span className="text-[13px] font-medium text-[#1d6cff]/90">|</span>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="px-2 text-[12px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                Tech Blog
              </a>
              <span className="text-[13px] font-medium text-[#1d6cff]/90">|</span>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="px-2 text-[12px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                Events
              </a>
              <span className="text-[13px] font-medium text-[#1d6cff]/90">|</span>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="px-2 text-[12px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80"
              >
                Impact
              </a>
            </li>
          </ul>
        </nav>

        <section className="mt-5 grid grid-cols-[460px_1fr] items-end gap-10 pt-10">
          <div className="w-full max-w-[440px] pb-4">
            <Image
              src="/yuyu.png"
              alt="Eng Yuyu portrait"
              width={526}
              height={628}
              className="h-auto w-full object-contain mix-blend-multiply"
              priority
            />
          </div>

          <div className="max-w-[760px] pb-10">
            <h1 className="text-[80px] font-bold leading-[0.95] text-[#1d6cff]">Eng Yuyu</h1>
            <p className="mt-3 text-[52px] font-medium leading-[1.02] text-[#0a0a0a]">
              Tech Content Creator.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-[44px] min-w-[340px] items-center justify-center gap-2 rounded-2xl bg-[#e3eaf7] px-6 text-[16px] font-semibold leading-none text-[#1d6cff] whitespace-nowrap transition-opacity hover:opacity-85"
              >
                Watch Latest Videos <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex h-[44px] min-w-[290px] items-center justify-center gap-2 rounded-2xl bg-[#1d6cff] px-6 text-[16px] font-semibold leading-none text-white whitespace-nowrap transition-opacity hover:opacity-90"
              >
                For Collaboration <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-12">
              <div className="mt-2 flex items-end gap-12">
                <div className="flex flex-col items-center justify-end gap-1">
                  <div className="h-[108px] w-[150px] overflow-hidden">
                    <Image
                      src="/premier_bank-removebg-preview.png"
                      alt="Premier Bank"
                      width={150}
                      height={108}
                      className="h-full w-full object-cover"
                      style={{ clipPath: "inset(18% 14% 18% 14%)" }}
                    />
                  </div>
                  <p className="text-center text-[18px] font-semibold leading-none tracking-tight text-[#173968]">
                    premier bank
                  </p>
                </div>

                <div className="flex items-end gap-3">
                  <div className="h-[108px] w-[128px] overflow-hidden">
                    <Image
                      src="/amka_-removebg-preview.png"
                      alt="Amka icon"
                      width={198}
                      height={168}
                      className="h-full w-full object-cover brightness-0 saturate-0"
                      style={{ clipPath: "inset(15%)" }}
                    />
                  </div>
                  <div className="mr-1 leading-none text-[#0a0a0a]">
                    <h3 className="text-[48px] font-semibold tracking-tight">amka</h3>
                    <p className="-mt-1 text-[46px] font-extralight tracking-wide">Stock</p>
                  </div>
                </div>

                <div className="flex items-end gap-3">
                  <div className="h-[116px] w-[116px] overflow-hidden">
                    <Image
                      src="/fudeydiye-removebg-preview.png"
                      alt="Fudaydiye"
                      width={116}
                      height={116}
                      className="h-full w-full object-cover"
                      style={{ clipPath: "inset(26%)" }}
                    />
                  </div>
                  <div className="leading-none text-[#0d7069]">
                    <h4 className="whitespace-nowrap text-[56px] font-semibold tracking-tight">
                      Fudaydiye
                    </h4>
                    <p className="mt-1 text-[14px] font-semibold text-[#46b97c]">
                      Click &amp; collect
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
