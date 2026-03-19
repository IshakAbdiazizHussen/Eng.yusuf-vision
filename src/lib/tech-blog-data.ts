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

export const blogCategories = [
  "All",
  "Tech News",
  "AI & Future Tech",
  "Digital Security",
  "Content Creation",
] as const

export type BlogCategory = (typeof blogCategories)[number]

export const techArticles: TechArticle[] = [
  {
    slug: "generax-power-warbixin",
    title: "GENERAX Power: maxay shirkaddani ka qabataa tamarta iyo generators-ka casriga ah?",
    category: "Tech News",
    date: "March 19, 2026",
    readTime: "5 min read",
    excerpt:
      "Warbixin kooban oo sharxaysa waxa ay tahay GENERAX Power, noocyada generators-ka ay bixiso, iyo sababta xalalka tamarta joogtada ahi muhiim ugu yihiin guryaha iyo ganacsiyada.",
    summary:
      "Dulmar sahlan oo ku saabsan GENERAX Power, qalabka korontada ee ay bixiso, iyo sida teknoolojiyadda energy backup-ku uga mid noqotay wararka muhiimka ah ee tech-ga.",
    accent: "from-[#1453d1] via-[#2780ff] to-[#84d8ff]",
    bullets: [
      "Maxay tahay GENERAX Power",
      "Noocyada generators-ka iyo xalalka tamarta",
      "Sababta teknoolojiyaddan ay muhiim ugu tahay isticmaalayaasha maanta",
    ],
    content: [
      "GENERAX Power waa shirkad diiradda saarta generators, transformers, iyo xalal tamareed oo loogu talagalay guryaha, ganacsiyada, iyo warshadaha u baahan koronto joogto ah. Tani waxay ka dhigeysaa mowduuc ka duwan wararka taleefannada, balse si dhab ah ula xiriira teknoolojiyadda nolosha iyo ganacsiga taabanaysa.",
      "Waxyaabaha ugu badan ee lagu xuso GENERAX waxaa ka mid ah generators diesel, gas, iyo qalab taageera automatic start, remote monitoring, iyo xalal loogu talagalay emergency power. Dad badan oo daawanaya content-ka tech-ga maanta waxay rabaan inay fahmaan sida teknoolojiyadda korontadu uga shaqeyso meel ka baxsan mobilada iyo laptops-ka.",
      "Qoraalkan waxa uu bogga tech-ga ka dhigaya mid leh mowduucyo kala duwan oo dhab ah: AI, Apple, digital safety, iyo sidoo kale energy technology. Taasi waxay ka caawinaysaa akhristaha inuu arko in teknoolojiyaddu aysan ku ekaan software oo keliya, balse ay ku jirto kaabayaal nololeed oo muhiim ah.",
    ],
  },
  {
    slug: "ios-17-bandhigga-apple",
    title: "iOS 17 ayaa sooo baxay: Bandhigga Apple June 2023 wax badan ka ogow",
    category: "Tech News",
    date: "March 23, 2024",
    readTime: "6 min read",
    excerpt:
      "Bandhigga Apple waxa uu keenay iOS 17, iPadOS 17, macOS Sonoma, watchOS 10, iyo qalab cusub sida 15-inch MacBook Air, Mac Studio, iyo Mac Pro.",
    summary:
      "Dulmar sahlan oo ku saabsan waxyaabihii ugu waaweynaa ee Apple kusoo bandhigtay, iyo waxa iOS 17 cusub ka dhigay war muhiim ah.",
    accent: "from-[#2555ff] via-[#6c63ff] to-[#8fd8ff]",
    bullets: [
      "Waxyaabaha ugu waaweyn ee Apple soo bandhigtay",
      "Waxa iOS 17 iyo watchOS 10 cusub ka dhigay",
      "Qalabka cusub ee kusoo baxay bandhigga",
    ],
    content: [
      "Bandhigga Apple wuxuu isu keenay nidaamyo badan oo hal mar la cusbooneysiiyay, sida iOS 17, iPadOS 17, macOS Sonoma, iyo watchOS 10. Waxaa sidoo kale goobta lagu arkay qalab cusub oo ay ka mid yihiin 15-inch MacBook Air, Mac Studio, iyo Mac Pro.",
      "Qoraalkan waxa uu xoogga saaraya isbeddellada dadka isticmaala iPhone iyo Apple ecosystem-ka si toos ah u dareemi karaan, sida astaamaha cusub ee iOS 17 iyo horumarka la xiriira continuity-ga qalabka Apple.",
      "Waxa uu la jaanqaadayaa nooca tech-news ee Eng Yuyu: war kooban, cad, oo dadka si degdeg ah uga caawinaya inay fahmaan waxa Apple dhab ahaantii soo kordhisay iyo sababta ay u muhiim tahay.",
    ],
  },
  {
    slug: "chatgpt-somalia-maka-shaqeeyaa",
    title: "ChatGPT en Somalie: sidee ayuu uga caawin karaa waxbarashada iyo shaqada?",
    category: "AI & Future Tech",
    date: "February 12, 2023",
    readTime: "6 min read",
    excerpt:
      "Maqaalkan waxa uu sharxayaa sida ChatGPT iyo AI guud ahaan uga caawin karaan qorista, fahamka casharrada, tarjumaadda, iyo fikradaha shaqo ee dadka Soomaaliyeed.",
    summary:
      "Hage fudud oo ku saabsan sida ChatGPT loo isticmaali karo si wax ku ool ah, iyo halka ay tahay in laga taxaddaro marka xog muhiim ah lala shaqeynayo.",
    accent: "from-[#0f7ff0] via-[#00a6c7] to-[#8ce6ff]",
    bullets: [
      "ChatGPT waa maxay, sideese u shaqeeyaa",
      "Sida uu uga caawin karo waxbarashada iyo shaqada",
      "Waxa ay tahay inaad hubiso ka hor intaadan ku tiirsanaan AI",
    ],
    content: [
      "Dad badan ayaa maanta doonaya inay ogaadaan in ChatGPT uu ka caawin karo shaqooyinka maalinlaha ah sida email writing, idea generation, sharaxaadda casharrada, iyo diyaarinta qoraallo kooban. Taasi waa sababta mowduucani uu muhiim ugu yahay qaybta AI & Future Tech.",
      "Qoraalkani waxa uu muujinayaa in AI uu noqon karo caawiye degdeg ah marka aad rabto sharaxaad, tarjumaad, ama bilow qoraal, balse aanu ahayn beddel buuxa oo go'aan ama xaqiijin xogeed.",
      "Fariinta ugu weyn ee maqaalku waa tan: ChatGPT waa aalad faa'iido leh haddii loo isticmaalo si caqli leh, gaar ahaan dadka cusub ee doonaya inay la jaanqaadaan isbeddelka AI iyo shaqada casriga ah.",
    ],
  },
  {
    slug: "apple-creator-studio",
    title: "Apple Creator Studio: Apple ma la tartami kartaa Adobe ee suuqa creators-ka?",
    category: "Content Creation",
    date: "February 2026",
    readTime: "8 min read",
    excerpt:
      "Apple waxa ay isku dayaysaa inay hal meel ku mideyso aaladaha creators-ka, taas oo si toos ah cadaadis ugu keenaysa Adobe iyo adeegyada kale ee design-ka iyo editing-ka.",
    summary:
      "Warbixin creator-focused ah oo eegaysa Apple Creator Studio, waxa ku jira, qiimihiisa, iyo sababta creators badan u xiiseyn karaan.",
    accent: "from-[#1d6cff] via-[#6a8dff] to-[#ffb86b]",
    bullets: [
      "Waxa ku jira Apple Creator Studio",
      "Sida uu ula tartamayo Adobe",
      "Cidda ugu badan ee ka faa'iideysan karta",
    ],
    content: [
      "Apple Creator Studio waxa hal subscription ku mideynaya barnaamijyo muhiim u ah creators-ka sida Final Cut Pro, Logic Pro, Pixelmator Pro, iyo Motion. Tani waxay si gaar ah u xiiseyneysaa dadka sameeya video, audio, iyo design oo raadinaya xal isku xiran.",
      "Marka laga eego dhinaca content creation-ka, tartankan cusub wuxuu beddeli karaa sida creators-ku u doortaan software-kooda, gaar ahaan haddii qiimaha, performance-ka, iyo isku xirnaanta Apple devices-ku noqdaan faa'iido muuqata.",
      "Qoraalkani waxa uu si fiican ula jaanqaadayaa mowduucyada Eng Yuyu ee creators-ka khuseeya, sababtoo ah wuxuu sharxayaa faa'iidada, qiimaha, iyo su'aasha weyn ee taagan: creators-ku ma u wareegi doonaan Apple mise wali Adobe ayay la sii joogayaan?",
    ],
  },
  {
    slug: "digital-safety-phone-users",
    title: "Digital Security: Qaladaadka yar yar ee taleefanka khatar geliya sirtaada",
    category: "Digital Security",
    date: "2026",
    readTime: "5 min read",
    excerpt:
      "Amniga dijitaalka mar walba ma aha weerar weyn. Marar badan waxa dhibka keena rukhsado badan, fariimo aan la hubin, iyo settings aan dib loo eegin.",
    summary:
      "Qoraal si toos ah ugu habboon content-ka Eng Yuyu ee diiradda saara digital safety iyo talooyin sahlan oo dadka ka caawiya isticmaalka taleefankooda.",
    accent: "from-[#1c6cff] via-[#3b8cff] to-[#9ed0ff]",
    bullets: [
      "Permissions-ka ay tahay inaad eegto",
      "Fariimaha iyo links-ka aan la aamini karin",
      "Hababka ugu fudud ee aad iskaga ilaalin karto xog lumis",
    ],
    content: [
      "Qeybtan Digital Security waxaa loo qaabeeyey si ay ula jaanqaaddo nooca content-ka Eng Yuyu lagu yaqaan ee ku saabsan digital safety, smartphone tips, iyo tech hacks.",
      "Waxaan diiradda saarnay arrimo ay dadka intooda badan si maalinle ah ula kulmaan sida apps-ka oggolaanshaha badan helay, links-ka shakiga leh, iyo fariimaha sirta ah ee kasoo muuqda lock screen-ka.",
      "Qaabkan wuxuu blog-ga ka dhigayaa mid u dhow fiidiyowyada kanaalka, sababtoo ah wuxuu akhristaha siinayaa talooyin degdeg ah, fudud, oo si dhab ah loogu dabaqi karo isticmaalka taleefanka maalin kasta.",
    ],
  },
]

export const featuredArticle = techArticles[0]

export function getArticleBySlug(slug: string) {
  return techArticles.find((article) => article.slug === slug)
}

export function isBlogCategory(value: string): value is BlogCategory {
  return blogCategories.includes(value as BlogCategory)
}
