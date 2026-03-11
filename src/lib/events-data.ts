export type EventItem = {
  slug: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  format: "cover" | "contain"
  audience: string
  agenda: string[]
  details: string[]
}

export const events: EventItem[] = [
  {
    slug: "tech-innovation-digital-growth-summit-2025",
    title: "Tech Innovation & Digital Growth Summit 2025",
    description:
      "A full-day event exploring the future of technology, creativity, and business. Join innovators, creators, and leaders shaping tomorrow.",
    date: "March 22, 2025",
    time: "10:00 AM - 4:30 PM",
    location: "Mogadishu Innovation Hub",
    image: "/engY.png",
    format: "cover",
    audience: "Creators, startup founders, students, and digital leaders.",
    agenda: [
      "Opening keynote on digital growth opportunities",
      "Panels on content, AI, and online business",
      "Community networking with Somali tech builders",
    ],
    details: [
      "This summit brings together people who care about practical innovation. It is designed for attendees who want real ideas they can apply in business, content creation, or digital education.",
      "The sessions focus on growth, collaboration, and the technology habits that help people build stronger careers and projects in a fast-changing digital world.",
    ],
  },
  {
    slug: "ai-tools-for-everyday-creators-workshop",
    title: "AI Tools for Everyday Creators Workshop",
    description:
      "A practical workshop for creators, students, and entrepreneurs on using AI tools for editing, research, and content planning.",
    date: "May 14, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Hargeisa Digital Center",
    image: "/engY-removebg-preview.png",
    format: "contain",
    audience: "Content creators, students, freelancers, and small business owners.",
    agenda: [
      "Simple AI workflows for planning and production",
      "Responsible use of AI in content and business",
      "Hands-on examples with real creator tasks",
    ],
    details: [
      "This workshop is built for people who want useful AI without the hype. The goal is to turn AI into something practical and understandable for daily work.",
      "Attendees will see how AI can support better planning, faster drafting, and more consistent publishing while still keeping creativity and trust in human hands.",
    ],
  },
  {
    slug: "smartphone-security-privacy-bootcamp",
    title: "Smartphone Security & Privacy Bootcamp",
    description:
      "Learn how to protect your phone, secure your accounts, and build safer digital habits with clear, simple steps anyone can follow.",
    date: "July 5, 2025",
    time: "9:30 AM - 1:30 PM",
    location: "Garowe Community Hall",
    image: "/yuyu-removebg-preview.png",
    format: "contain",
    audience: "Everyday smartphone users, parents, students, and workers.",
    agenda: [
      "Account safety and password hygiene",
      "Phone privacy settings that matter most",
      "Scam awareness and safer online behavior",
    ],
    details: [
      "This bootcamp focuses on daily digital safety rather than technical jargon. It helps people understand how to protect themselves using settings and habits they can actually maintain.",
      "The sessions are especially valuable for users who rely heavily on phones for work, school, and communication and want a stronger sense of confidence online.",
    ],
  },
  {
    slug: "somali-youth-tech-content-expo",
    title: "Somali Youth Tech & Content Expo",
    description:
      "A networking and inspiration event connecting young creators, startup builders, and digital learners through talks, demos, and collaboration.",
    date: "September 18, 2025",
    time: "11:00 AM - 5:00 PM",
    location: "Bosaso Business Forum",
    image: "/engY.png",
    format: "cover",
    audience: "Young creators, aspiring founders, and digital learners.",
    agenda: [
      "Live creator and startup showcases",
      "Talks on digital careers and community growth",
      "Networking sessions for future collaborations",
    ],
    details: [
      "The expo is built to inspire action. It gives young people a place to see what is possible when creativity, technology, and community support come together.",
      "It also creates room for new partnerships by connecting ambitious learners with experienced creators and professionals who are already building in the space.",
    ],
  },
]

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug)
}
