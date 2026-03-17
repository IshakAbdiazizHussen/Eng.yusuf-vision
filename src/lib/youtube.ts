type YouTubeSearchResponse = {
  items?: Array<{
    id?: {
      videoId?: string
    }
    snippet?: {
      title?: string
      description?: string
      publishedAt?: string
      thumbnails?: {
        high?: { url?: string }
        medium?: { url?: string }
        default?: { url?: string }
      }
    }
  }>
}

export type YouTubeVideo = {
  id: string
  title: string
  description: string
  publishedAt: string
  thumbnail: string
  watchUrl: string
  embedUrl: string
}

export const hasYouTubeConfig = Boolean(
  process.env.YOUTUBE_API_KEY && process.env.YOUTUBE_CHANNEL_ID,
)

export async function getLatestYouTubeVideos(maxResults = 6): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY
  const channelId = process.env.YOUTUBE_CHANNEL_ID

  if (!apiKey || !channelId) {
    return []
  }

  const params = new URLSearchParams({
    key: apiKey,
    channelId,
    part: "snippet",
    order: "date",
    maxResults: String(maxResults),
    type: "video",
  })

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?${params.toString()}`,
    {
      next: { revalidate: 900 },
    },
  )

  if (!response.ok) {
    return []
  }

  const data = (await response.json()) as YouTubeSearchResponse

  return (data.items ?? [])
    .map((item) => {
      const videoId = item.id?.videoId

      if (!videoId) {
        return null
      }

      const snippet = item.snippet
      const thumbnail =
        snippet?.thumbnails?.high?.url ??
        snippet?.thumbnails?.medium?.url ??
        snippet?.thumbnails?.default?.url ??
        `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

      return {
        id: videoId,
        title: snippet?.title ?? "Untitled video",
        description: snippet?.description ?? "",
        publishedAt: snippet?.publishedAt ?? "",
        thumbnail,
        watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
      }
    })
    .filter((video): video is YouTubeVideo => video !== null)
}
