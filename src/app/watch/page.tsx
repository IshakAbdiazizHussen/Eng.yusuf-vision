import { PageFrame } from "@/components/page-frame"

const videos = [
  { platform: "YouTube", shape: "h-[220px] rounded-[30px]" },
  { platform: "Facebook", shape: "h-[220px] rounded-[30px]" },
  { platform: "TikTok", shape: "h-[320px] max-w-[265px] rounded-[30px]" },
  { platform: "Instagram", shape: "h-[320px] max-w-[265px] rounded-[30px]" },
]

export default function WatchPage() {
  return (
    <PageFrame>
      <section className="mt-10 px-4 py-8 text-center">
        <h1 className="text-4xl font-bold leading-none text-[#1d6cff] sm:text-[58px]">
          WATCH &amp; LEARN
        </h1>
        <p className="mx-auto mt-5 max-w-[1080px] text-xl font-semibold leading-[1.25] text-black sm:text-[28px]">
          Short, practical tech videos designed to make technology simple, useful,
          and accessible for everyone.
        </p>
      </section>

      <section className="mt-8 rounded-[44px] bg-[#dbe2ec] px-6 py-8 sm:px-8 md:px-12 md:py-12">
        <div className="grid gap-12 xl:grid-cols-[1.7fr_0.9fr]">
          <div>
            <h2 className="mb-8 text-center text-2xl font-medium text-black sm:text-[34px]">
              Featured Videos
            </h2>

            <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
              {videos.map((video, index) => (
                <div key={`${video.platform}-${index}`}>
                  <div className={`w-full border-[3px] border-[#1d6cff] bg-transparent ${video.shape}`} />
                  <h3 className="mt-6 max-w-[420px] text-2xl font-semibold leading-[1.05] text-black">
                    How AI Is Quietly
                    <br />
                    Changing Everyday Life
                  </h3>
                  <p className="mt-4 text-lg font-light leading-[1.2] text-[#1a1a1a] sm:text-xl">
                    Platform: {video.platform}
                    <br />
                    Duration: 6:12
                  </p>
                  <a
                    href="#"
                    className="mt-6 inline-flex h-[58px] min-w-[220px] items-center justify-center rounded-[18px] bg-[#1d6cff] px-8 text-[22px] font-bold leading-none text-white transition-opacity hover:opacity-90 sm:min-w-[270px] sm:text-[28px]"
                  >
                    Watch Now
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-center text-3xl font-bold leading-none text-[#1d6cff] sm:text-4xl">
              Partners
            </h2>
            <div className="flex flex-col gap-10 sm:gap-14">
              <div className="h-[340px] rounded-[42px] bg-[#1d6cff] sm:h-[540px]" />
              <div className="h-[340px] rounded-[42px] bg-[#1d6cff] sm:h-[540px]" />
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
