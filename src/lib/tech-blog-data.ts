export type TechArticle = {
  slug: string
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  summary: string
  accent: string
  bullets: string[]
  content: string[]
}

export const techArticles: TechArticle[] = [
  {
    slug: "windows-10-support-ending",
    title: "Digniin Muhiim ah oo ku Socota Dadka Weli Adeegsada Windows 10!",
    category: "Security",
    date: "December 22, 2025",
    readTime: "6 min read",
    excerpt:
      "Microsoft is closing the Windows 10 chapter, and that means many users need to plan their next step now instead of waiting for security risks to grow.",
    summary:
      "A simple guide to what the end of Windows 10 support means and how everyday users can stay safe.",
    accent: "from-[#1d6cff] via-[#2d86ff] to-[#83b8ff]",
    bullets: [
      "What end-of-support means in practical daily use",
      "Which users should upgrade first",
      "The safest options if your device is older",
    ],
    content: [
      "Windows 10 has been reliable for millions of people, but support timelines matter because they affect how secure a device stays over time. Once a system stops receiving important updates, even normal browsing, downloading files, or using email becomes riskier.",
      "For many Somali users and small businesses, the biggest issue is not just the software itself but the habit of waiting too long before preparing. A late upgrade often means more stress, rushed decisions, and less time to back up files properly.",
      "The best response is practical: check your device health, confirm whether Windows 11 is supported, back up important documents, and avoid unofficial workarounds that create bigger security problems later.",
    ],
  },
  {
    slug: "ai-changing-somali-tech-learning",
    title: "How AI Is Changing the Way Somalis Learn Technology",
    category: "AI & Future Tech",
    date: "January 8, 2026",
    readTime: "7 min read",
    excerpt:
      "Artificial intelligence is no longer something far away. It is already changing how people search, study, write, edit, and solve problems in everyday life.",
    summary:
      "Why AI tools are becoming learning partners and what that means for digital growth in our community.",
    accent: "from-[#2555ff] via-[#6c63ff] to-[#8fd8ff]",
    bullets: [
      "Why AI lowers the barrier to learning",
      "Where AI can save time for students and creators",
      "How to avoid overtrusting AI answers",
    ],
    content: [
      "AI can now explain difficult topics in simpler language, help summarize complex information, and offer faster starting points for people who are learning alone. That matters in communities where access to structured training is still uneven.",
      "The opportunity is powerful, but AI should not replace thinking. It works best when people use it as a helper for drafts, study plans, and quick explanations while still verifying important claims and building real understanding.",
      "For content creators, educators, and curious learners, the smart path is balance: use AI to save time on repetition, but keep human judgment for trust, context, and local relevance.",
    ],
  },
  {
    slug: "phone-privacy-checklist-2026",
    title: "A Simple Phone Privacy Checklist for 2026",
    category: "Digital Security",
    date: "February 3, 2026",
    readTime: "5 min read",
    excerpt:
      "Most privacy mistakes are not dramatic hacks. They are small settings, weak passwords, and permissions people forget to review.",
    summary:
      "A quick privacy reset guide that ordinary smartphone users can actually follow.",
    accent: "from-[#0f7ff0] via-[#00a6c7] to-[#8ce6ff]",
    bullets: [
      "Permissions you should review today",
      "Why lock-screen privacy matters",
      "The easiest security habits that make the biggest difference",
    ],
    content: [
      "Privacy starts with visibility. If too many apps have access to location, microphone, photos, or contacts, your phone becomes more open than most people realize. Reviewing those permissions just once can make a big difference.",
      "Another overlooked issue is notification privacy. Sensitive codes, banking alerts, or personal messages often appear on the lock screen where anyone nearby can see them. A small settings change solves that instantly.",
      "Good privacy is not about fear. It is about using technology with confidence and reducing avoidable exposure in everyday moments.",
    ],
  },
  {
    slug: "content-creation-tools-that-save-time",
    title: "Content Creation Tools That Actually Save Time",
    category: "Content Creation",
    date: "February 14, 2026",
    readTime: "8 min read",
    excerpt:
      "Creators do not need more apps just because they are popular. They need tools that remove friction and support consistency.",
    summary:
      "A creator-focused breakdown of tools that help with recording, editing, planning, and publishing without overcomplicating the workflow.",
    accent: "from-[#1d6cff] via-[#6a8dff] to-[#ffb86b]",
    bullets: [
      "What to automate and what to keep manual",
      "Tools that improve consistency instead of adding clutter",
      "How to build a workflow that survives busy weeks",
    ],
    content: [
      "A strong creator workflow is less about having the newest app and more about removing repeated pain points. Caption templates, thumbnail systems, script outlines, and shared folders are often more valuable than flashy software.",
      "Many creators lose time switching between too many tools. A lean setup usually performs better because it reduces decision fatigue and keeps publishing momentum high.",
      "The right stack should help you record faster, organize ideas clearly, and publish with less last-minute stress.",
    ],
  },
  {
    slug: "smartphone-tricks-everyday-users-miss",
    title: "Smartphone Tricks Everyday Users Still Miss",
    category: "Tutorials & How-To",
    date: "March 1, 2026",
    readTime: "4 min read",
    excerpt:
      "Modern phones hide useful features in plain sight. Small shortcuts can improve battery life, reduce clutter, and make daily use feel much smoother.",
    summary:
      "Useful iPhone and Android habits that save time without needing advanced technical knowledge.",
    accent: "from-[#2f71ff] via-[#3ec7ff] to-[#b0ecff]",
    bullets: [
      "Quick wins that improve daily phone use",
      "Battery and storage habits that really matter",
      "The settings most people forget exist",
    ],
    content: [
      "A better phone experience often comes from tiny habits: clearing notification noise, controlling background refresh, using focus modes, and customizing quick settings for the actions you use most.",
      "Battery anxiety is also often caused by poor charging habits and apps running more often than needed. A few checks can stretch device performance without buying anything new.",
      "People do not need to become experts to use smartphones well. They just need the right practical tips at the right moment.",
    ],
  },
]

export const featuredArticle = techArticles[1]

export function getArticleBySlug(slug: string) {
  return techArticles.find((article) => article.slug === slug)
}
