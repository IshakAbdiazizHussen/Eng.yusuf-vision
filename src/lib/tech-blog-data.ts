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
    slug: "tesla-model-pi-warbixin",
    title: "Tesla Model Pi goorma ayuu soo bixi doonaa?",
    category: "Tech News",
    date: "November 23, 2022",
    readTime: "5 min read",
    excerpt:
      "Warbixin kooban oo eegaysa waxa laga sheegayo taleefanka Tesla Model Pi, astaamihiisa la hadal hayo, qiimaha suurtagalka ah, iyo in uu dhab ahaan soo bixi karo.",
    summary:
      "Faahfaahin sahlan oo ku saabsan xanta Tesla Model Pi iyo waxa ay uga dhigan tahay dadka jecel wararka teknoolojiyadda.",
    accent: "from-[#1d6cff] via-[#2d86ff] to-[#83b8ff]",
    bullets: [
      "Maxaa run ah, maxaase xanta ah",
      "Astaamaha lagu sheegayo taleefanka",
      "Qiimaha iyo waqtiga soo bixitaanka suurtagalka ah",
    ],
    content: [
      "Mid ka mid ah mowduucyada aadka looga hadal hayo wararka teknoolojiyadda waa Tesla Model Pi. Dad badan ayaa xiiseynaya haddii Tesla ay dhab ahaan soo saari doonto taleefan la tartama iPhone iyo Samsung.",
      "Waxyaabaha lagu xuso warbixinnada noocan ah waxaa ka mid ah naqshad casri ah, xiriir wanaagsan oo lala yeesho adeegyada Tesla, iyo awood sare oo loogu talagalay isticmaaleyaasha jecel teknoolojiyadda cusub.",
      "Qodobka ugu muhiimsan ee blog-kan waa in akhristuhu kala saaro xogta la xaqiijiyay iyo xanta internet-ka ku wareegaysa. Taasi waxay ka dhigeysaa maqaalka mid si fiican ula jaanqaadaya nooca fiidiyowyada wararka teknoolojiyadda ee kanaalka Eng Yuyu.",
    ],
  },
  {
    slug: "ios-17-bandhigga-apple",
    title: "iOS 17 ayaa soo baxay: Bandhigga Apple wax badan ka ogow",
    category: "Tech News",
    date: "March 23, 2024",
    readTime: "6 min read",
    excerpt:
      "Bandhigga Apple waxa uu keenay nidaamyo cusub iyo qalab cusub. Qoraalkan waxa uu soo koobayaa waxa ugu muhiimsan ee iOS 17 iyo qalabka kale lagu soo bandhigay.",
    summary:
      "Dulmar sahlan oo ku saabsan iOS 17, iPadOS 17, macOS Sonoma, iyo qalabkii Apple ee lagu soo bandhigay dhacdadaas.",
    accent: "from-[#2555ff] via-[#6c63ff] to-[#8fd8ff]",
    bullets: [
      "Waxyaabaha ugu waaweyn ee Apple soo bandhigtay",
      "Waxa iOS 17 cusub ka dhigay",
      "Cidda ay wararkani ugu muhiimsan yihiin",
    ],
    content: [
      "Markii Apple ay soo bandhigtay iOS 17, isla waqtigaas waxaa la arkay qalab iyo nidaamyo kale oo cusub sida iPadOS 17, macOS Sonoma, Mac Studio, iyo Mac Pro. Dadka la socda wararka teknoolojiyadda waxay rabaan hal meel oo si cad loogu sharaxay waxyaabahaas.",
      "Qoraalkan gudaha blog-ga waxa uu xooga saarayaa isbeddellada ugu muuqda ee iOS 17 iyo sida ay uga faa'iideysan karaan dadka isticmaala iPhone, iPad, iyo Mac.",
      "Qaabkan wuxuu la jaanqaadayaa fiidiyowga kanaalka oo ahaa warbixin degdeg ah oo ku saabsan bandhigga Apple iyo waxyaabihii ugu muhiimsanaa ee kasoo baxay.",
    ],
  },
  {
    slug: "chatgpt-somalia-maka-shaqeeyaa",
    title: "ChatGPT en Somalie: Maka Shaqeeyaa?",
    category: "AI & Future Tech",
    date: "February 12, 2023",
    readTime: "6 min read",
    excerpt:
      "Maqaalkan waxa uu sharxayaa sida ChatGPT iyo AI guud ahaan u shaqeeyaan, waxa ay faa'iido u leeyihiin, iyo sida si caqli leh loogu isticmaali karo bulshada Soomaaliyeed.",
    summary:
      "Hage fudud oo ku saabsan AI, sida ChatGPT u caawiyo waxbarashada iyo shaqada, iyo halka ay tahay in laga taxaddaro.",
    accent: "from-[#0f7ff0] via-[#00a6c7] to-[#8ce6ff]",
    bullets: [
      "ChatGPT waa maxay, sideese u shaqeeyaa",
      "Faa'iidooyinka AI ee barashada iyo shaqada",
      "Khaladaadka ugu badan marka AI la isticmaalayo",
    ],
    content: [
      "Dad badan ayaa is weydiinaya in ChatGPT si dhab ah uga shaqeyn karo baahidooda waxbarasho, ganacsi, iyo fahamka teknoolojiyadda. Taasi waa sababta mowduucan uu muhiim ugu yahay qaybta AI & Future Tech.",
      "Qoraalkani waxa uu qeexayaa in AI uu ka caawin karo isticmaalaha sharaxaad, soo koobid, iyo fikrado bilow ah, balse aanu beddeli karin hubinta xogta iyo fahamka qofka.",
      "Blog-gu waxa uu sii wadaa fariinta fiidiyowga kanaalka: AI waa aalad waxtar leh haddii loo adeegsado si mas'uuliyad leh, gaar ahaan dadka cusub ee doonaya inay fahmaan sida teknoolojiyaddu u shaqeyso.",
    ],
  },
  {
    slug: "apple-creator-studio",
    title: "Apple Creator Studio: Apple ayaa si xooggan ugu soo biirtay suuqa barnaamajyada hal-abuurka!",
    category: "Content Creation",
    date: "February 2026",
    readTime: "8 min read",
    excerpt:
      "Apple waxa ay isku dayaysaa inay si toos ah ula tartanto Adobe iyada oo hal meel ku mideyneysa qalabka creators-ka u baahan yihiin.",
    summary:
      "Warbixin creator-focused ah oo eegaysa Apple Creator Studio, waxa ku jira, qiimihiisa, iyo sababta uu muhiim ugu noqon karo dadka sameeya content.",
    accent: "from-[#1d6cff] via-[#6a8dff] to-[#ffb86b]",
    bullets: [
      "Waxa ku jira Apple Creator Studio",
      "Sida uu ula tartamayo Adobe",
      "Qiimaha iyo cidda ka faa'iideysan karta",
    ],
    content: [
      "Apple Creator Studio waxa hal subscription ku mideynaya barnaamijyo waaweyn sida Final Cut Pro, Logic Pro, Pixelmator Pro, iyo Motion. Arrintan waxa ay si gaar ah u xiiseyneysaa creators-ka raadinaya xal ka fudud ama ka jaban Adobe.",
      "Marka laga eego dhinaca shaqo-abuurka, tartankan cusub wuxuu beddeli karaa sida creators-ku u doortaan aaladahooda tafatirka, codka, iyo design-ka.",
      "Maqaalkan gudaha blog-ga waxa uu la jaanqaadayaa fiidiyowga kanaalka adiga oo sharaxaya qiimaha, faa'iidada, iyo su'aasha weyn ee taagan: creators-ku ma u wareegi doonaan Apple mise wali Adobe ayay la sii joogayaan?",
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
