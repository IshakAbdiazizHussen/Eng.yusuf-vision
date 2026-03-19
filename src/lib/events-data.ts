export type EventItem = {
  slug: string
  title: string
  description: string
  date: string
  time: string
  location: string
  youtubeUrl: string
  image: string
  format: "cover" | "contain"
  audience: string
  agenda: string[]
  details: string[]
}

export const events: EventItem[] = [
  {
    slug: "smartphone-galaxy",
    title: "Smartphone Galaxy",
    description:
      "A video discussion focused on Galaxy smartphones, key features, everyday usability, and the details that matter most for viewers who love mobile technology.",
    date: "Published on YouTube",
    time: "Eng Yuyu Channel",
    location: "@engyuyu",
    youtubeUrl: "https://youtu.be/82iLGEKSX-o?si=2hMddfWmYS_ei3Br",
    image: "/engY.png",
    format: "cover",
    audience: "Smartphone users, Android fans, and tech viewers.",
    agenda: [
      "Galaxy smartphone overview",
      "Important features and practical usage",
      "Why this phone matters to everyday users",
    ],
    details: [
      "This video focuses on Galaxy smartphone details in a practical way, helping viewers understand the design, performance, and everyday value of the device without unnecessary hype.",
      "It is the kind of content that works well for people comparing phones, following Android updates, or simply trying to decide whether a Galaxy device fits their daily needs.",
    ],
  },
  {
    slug: "ai-tools-for-productivity",
    title: "AI Tools for Productivity",
    description:
      "A practical video about AI tools that help with workflow, planning, writing, research, and saving time in everyday work.",
    date: "Published on YouTube",
    time: "Eng Yuyu Channel",
    location: "@engyuyu",
    youtubeUrl: "https://youtu.be/AtH_PJOBj5o?si=4x39RX2g6ep68BbI",
    image: "/engY-removebg-preview.png",
    format: "contain",
    audience: "Creators, students, freelancers, and professionals.",
    agenda: [
      "Useful AI tools for daily productivity",
      "How AI can save time in real tasks",
      "Simple ways to work smarter with AI",
    ],
    details: [
      "This video is designed for people who want useful AI without confusion. It introduces practical tools that can help improve speed, organization, and output in everyday digital work.",
      "The focus is on productivity, not hype, making the content especially useful for viewers who want clear examples of how AI can support study, business, and content creation.",
    ],
  },
  {
    slug: "macbookneo",
    title: "MacbookNeo",
    description:
      "A tech video exploring MacbookNeo, the idea behind it, what viewers should know, and why it stands out as a conversation topic for laptop fans.",
    date: "Published on YouTube",
    time: "Eng Yuyu Channel",
    location: "@engyuyu",
    youtubeUrl: "https://youtu.be/N-67F6ICXDw?si=nGNPUYkrM45iRw62",
    image: "/yuyu-removebg-preview.png",
    format: "contain",
    audience: "Laptop users, Apple followers, and tech enthusiasts.",
    agenda: [
      "What MacbookNeo is about",
      "Why viewers are interested in it",
      "How it fits into the current laptop conversation",
    ],
    details: [
      "This video gives viewers a chance to understand MacbookNeo from a simple and practical angle, especially for people who follow modern laptops and want straightforward explanations.",
      "It works well as content for audiences interested in Apple-related discussions, new laptop ideas, and the practical use cases behind trending tech topics.",
    ],
  },
  {
    slug: "snapchat-device-ban",
    title: "Snapchat Device Ban",
    description:
      "A direct explanation of the Snapchat device ban issue, what it means for affected users, and the important things people should understand about account and device restrictions.",
    date: "Published on YouTube",
    time: "Eng Yuyu Channel",
    location: "@engyuyu",
    youtubeUrl: "https://youtu.be/zG6fKiuliGM?si=qF73lQkgCVkn3f3X",
    image: "/engY.png",
    format: "cover",
    audience: "Snapchat users, social media users, and mobile viewers.",
    agenda: [
      "What the Snapchat device ban means",
      "Why it happens and what users should check",
      "How to stay aware of account/device restrictions",
    ],
    details: [
      "This video helps viewers understand the Snapchat device ban in simple language, including why restrictions may happen and why awareness is important for users who rely on social apps.",
      "It is useful content for people who want clear guidance on social media issues, device-related restrictions, and the practical side of staying safe with mobile platforms.",
    ],
  },
]

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug)
}
