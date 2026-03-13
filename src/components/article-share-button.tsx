"use client"

import { useState } from "react"
import { Share2 } from "lucide-react"

type ArticleShareButtonProps = {
  title: string
  url?: string
  label?: string
  className?: string
  messageAlignClassName?: string
}

export function ArticleShareButton({
  title,
  url,
  label = "Share with your community",
  className,
  messageAlignClassName,
}: ArticleShareButtonProps) {
  const [message, setMessage] = useState("")

  const handleShare = async () => {
    const shareUrl = url
      ? new URL(url, window.location.origin).toString()
      : window.location.href

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: `Check out this article from Eng Yuyu: ${title}`,
          url: shareUrl,
        })
        setMessage("Shared successfully.")
        return
      }

      await navigator.clipboard.writeText(shareUrl)
      setMessage("Article link copied.")
    } catch {
      setMessage("Share cancelled.")
    }
  }

  return (
    <div className={`flex flex-col gap-2 ${messageAlignClassName ?? "sm:items-end"}`}>
      <button
        type="button"
        onClick={handleShare}
        className={className ?? "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 font-medium text-[#23304f] transition-colors hover:bg-[#1d6cff] hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-[#d9e5ff] dark:hover:bg-[#1d6cff]"}
      >
        <Share2 className="h-4 w-4" />
        {label}
      </button>

      {message ? (
        <p className="text-[13px] font-medium text-[#3a4b73] dark:text-[#b9c8e6]">
          {message}
        </p>
      ) : null}
    </div>
  )
}
