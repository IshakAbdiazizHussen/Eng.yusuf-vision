export type MediaAppearance = {
  slug: string
  series: string
  title: string
  subtitle: string
  description: string
  image: string
  format: "cover" | "contain"
  buttonLabel: string
  buttonHref: string
  overview: string
  topics: string[]
}

export const mediaAppearances: MediaAppearance[] = [
  {
    slug: "future-of-ai-in-somalia",
    series: "Tech Talk Somalia",
    title: "The Future of AI in Somalia",
    subtitle:
      "A conversation about how artificial intelligence is shaping education, business, and digital opportunities in Somalia.",
    description:
      "A conversation about how artificial intelligence is shaping education, business, and digital opportunities in Somalia.",
    image: "/engY.png",
    format: "cover",
    buttonLabel: "Watch on YouTube",
    buttonHref: "https://www.youtube.com/@engyuyu",
    overview:
      "This episode explores the role of artificial intelligence in Somalia's digital landscape, including opportunities for creators, students, and businesses.",
    topics: [
      "AI in Somalia",
      "Content creation with AI",
      "Opportunities for youth",
      "Risks and awareness",
      "Future of digital growth",
    ],
  },
  {
    slug: "digital-creators-show-tech-brand",
    series: "Digital Creators Show",
    title: "Building a Tech Brand",
    subtitle:
      "A focused conversation on building trust, consistency, and a strong digital identity as a tech creator.",
    description:
      "A focused conversation on building trust, consistency, and a strong digital identity as a tech creator.",
    image: "/engY-removebg-preview.png",
    format: "contain",
    buttonLabel: "Listen Now",
    buttonHref: "https://www.youtube.com/@engyuyu",
    overview:
      "This conversation looks at what it takes to build a recognizable tech brand online, from content strategy and audience trust to visual identity and platform consistency.",
    topics: [
      "Personal branding for creators",
      "Building audience trust",
      "Content consistency",
      "Positioning in the Somali tech space",
      "Turning visibility into opportunity",
    ],
  },
  {
    slug: "startup-innovation-youth-and-innovation",
    series: "Startup & Innovation Podcast",
    title: "Youth & Innovation",
    subtitle:
      "A podcast discussion on youth-led innovation, startup energy, and the role of technology in shaping new opportunities.",
    description:
      "A podcast discussion on youth-led innovation, startup energy, and the role of technology in shaping new opportunities.",
    image: "/engY.png",
    format: "cover",
    buttonLabel: "Listen Now",
    buttonHref: "https://www.youtube.com/@engyuyu",
    overview:
      "This episode explores how young innovators can turn ideas into action, how startup thinking is growing in Somalia, and why community support matters for new builders.",
    topics: [
      "Youth entrepreneurship",
      "Startup culture",
      "Innovation mindset",
      "Community-led growth",
      "Digital future opportunities",
    ],
  },
]

export function getMediaAppearanceBySlug(slug: string) {
  return mediaAppearances.find((item) => item.slug === slug)
}
