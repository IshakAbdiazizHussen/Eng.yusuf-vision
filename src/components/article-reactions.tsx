"use client"

import { useSyncExternalStore, useState } from "react"
import { Heart, Laugh, MessageCircleMore, Sparkles } from "lucide-react"

const reactions = [
  { key: "helpful", label: "Helpful", icon: Sparkles },
  { key: "love", label: "Love", icon: Heart },
  { key: "wow", label: "Wow", icon: Laugh },
  { key: "discuss", label: "Discuss", icon: MessageCircleMore },
] as const

export function ArticleReactions({ slug }: { slug: string }) {
  const storageKey = `eng-yuyu-reaction-${slug}`
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null)
  const isHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
  const savedReaction = isHydrated ? window.localStorage.getItem(storageKey) : null
  const activeReaction = selectedReaction ?? savedReaction

  const handleReaction = (reactionKey: string) => {
    setSelectedReaction(reactionKey)
    window.localStorage.setItem(storageKey, reactionKey)
  }

  return (
    <div className="rounded-[26px] border border-black/8 bg-white/80 p-6 shadow-[0_16px_34px_rgba(21,33,68,0.08)] dark:border-white/10 dark:bg-[#1d2436]">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-[24px] font-bold leading-none text-black dark:text-white">
            React to this article
          </h3>
          <p className="mt-2 text-[17px] leading-[1.4] text-[#3a4052] dark:text-[#d7def0]">
            Tap one reaction to save how this story felt for you.
          </p>
        </div>

        {isHydrated && activeReaction ? (
          <div className="rounded-full bg-[#1d6cff]/12 px-4 py-2 text-[14px] font-semibold text-[#1d6cff] dark:bg-white/10 dark:text-white">
            Saved: {reactions.find((reaction) => reaction.key === activeReaction)?.label}
          </div>
        ) : null}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {reactions.map((reaction) => {
          const Icon = reaction.icon
          const isActive = activeReaction === reaction.key

          return (
            <button
              key={reaction.key}
              type="button"
              onClick={() => handleReaction(reaction.key)}
              className={`flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-[22px] border transition-all ${
                isActive
                  ? "border-[#1d6cff] bg-[#1d6cff] text-white shadow-[0_16px_26px_rgba(29,108,255,0.28)]"
                  : "border-black/8 bg-[#eef4ff] text-[#1c2a4a] hover:-translate-y-1 hover:border-[#1d6cff] hover:text-[#1d6cff] dark:border-white/10 dark:bg-[#25314b] dark:text-[#e5edff] dark:hover:border-[#6ea2ff]"
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-[16px] font-semibold">{reaction.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
