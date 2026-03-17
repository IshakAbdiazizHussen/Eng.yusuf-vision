"use client"

import { useEffect, useState } from "react"
import { Flame, Heart, MessageCircle, Sparkles } from "lucide-react"

type CommentItem = {
  name: string
  text: string
  time: string
}

type ReactionOption = {
  label: string
  value: string
  accent: string
}

const reactionOptions: ReactionOption[] = [
  { label: "Helpful", value: "helpful", accent: "text-[#2f5ef0]" },
  { label: "Love", value: "love", accent: "text-[#ef4b7b]" },
  { label: "Interesting", value: "interesting", accent: "text-[#ff9b3d]" },
  { label: "Discuss", value: "discuss", accent: "text-[#49566f]" },
]

const reactionIcons = {
  helpful: Sparkles,
  love: Heart,
  interesting: Flame,
  discuss: MessageCircle,
} as const

type ArticleDiscussionProps = {
  slug: string
  initialComments: CommentItem[]
}

export function ArticleDiscussion({
  slug,
  initialComments,
}: ArticleDiscussionProps) {
  const commentsStorageKey = `eng-yuyu-comments-${slug}`
  const reactionStorageKey = `eng-yuyu-reaction-${slug}`
  const [comments, setComments] = useState<CommentItem[]>(initialComments)
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  useEffect(() => {
    const savedComments = window.localStorage.getItem(commentsStorageKey)
    const savedReaction = window.localStorage.getItem(reactionStorageKey)

    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments) as CommentItem[])
      } catch {
        setComments(initialComments)
      }
    }

    if (savedReaction) {
      setSelectedReaction(savedReaction)
    }
  }, [commentsStorageKey, initialComments, reactionStorageKey])

  const handleReaction = (value: string) => {
    setSelectedReaction(value)
    window.localStorage.setItem(reactionStorageKey, value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedComment = comment.trim()

    if (!trimmedName || !trimmedEmail || !trimmedComment) {
      return
    }

    const updatedComments = [
      {
        name: trimmedName,
        text: trimmedComment,
        time: "Just now",
      },
      ...comments,
    ]

    setComments(updatedComments)
    window.localStorage.setItem(commentsStorageKey, JSON.stringify(updatedComments))
    setName("")
    setEmail("")
    setComment("")
  }

  return (
    <>
      <div className="rounded-[22px] border border-[#dce5f4] bg-[linear-gradient(180deg,#fbfcff_0%,#f1f5fc_100%)] px-5 py-5 shadow-[0_10px_24px_rgba(30,57,113,0.06)] dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)]">
        <h2 className="text-[22px] font-semibold text-[#172038] dark:text-[#f3f7ff]">
          Leave a Comment
        </h2>
        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-[14px] font-medium text-[#2e3b57] dark:text-[#d5dff7]">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="h-11 w-full rounded-[12px] border border-[#dce5f4] bg-white px-4 text-[15px] text-[#172038] outline-none transition focus:border-[#2f5ef0] dark:border-[#31415c] dark:bg-[#1a2234] dark:text-white"
            />
          </div>
          <div>
            <label className="mb-1 block text-[14px] font-medium text-[#2e3b57] dark:text-[#d5dff7]">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-11 w-full rounded-[12px] border border-[#dce5f4] bg-white px-4 text-[15px] text-[#172038] outline-none transition focus:border-[#2f5ef0] dark:border-[#31415c] dark:bg-[#1a2234] dark:text-white"
            />
          </div>
          <div>
            <label className="mb-1 block text-[14px] font-medium text-[#2e3b57] dark:text-[#d5dff7]">
              Comment
            </label>
            <textarea
              placeholder="Comment"
              rows={4}
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              className="w-full rounded-[12px] border border-[#dce5f4] bg-white px-4 py-3 text-[15px] text-[#172038] outline-none transition focus:border-[#2f5ef0] dark:border-[#31415c] dark:bg-[#1a2234] dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center rounded-[12px] bg-[linear-gradient(180deg,#4d7df6_0%,#2553dd_100%)] text-[16px] font-semibold text-white shadow-[0_12px_24px_rgba(42,84,209,0.24)] transition hover:-translate-y-0.5"
          >
            Post Comment
          </button>
        </form>
      </div>

      <div className="mt-8 rounded-[22px] border border-[#dce5f4] bg-[linear-gradient(180deg,#fbfcff_0%,#f1f5fc_100%)] px-5 py-5 shadow-[0_10px_24px_rgba(30,57,113,0.06)] dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)]">
        <h2 className="text-[26px] font-semibold text-[#172038] dark:text-[#f3f7ff] sm:text-[32px]">
          Comments
        </h2>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {reactionOptions.map((reaction) => {
            const Icon = reactionIcons[reaction.value as keyof typeof reactionIcons]
            const isActive = selectedReaction === reaction.value

            return (
              <button
                key={reaction.value}
                type="button"
                onClick={() => handleReaction(reaction.value)}
                className={`inline-flex items-center justify-center gap-2 rounded-[12px] border px-4 py-3 text-[15px] font-medium shadow-[0_8px_18px_rgba(35,58,108,0.05)] transition hover:-translate-y-0.5 ${
                  isActive
                    ? "border-[#2f5ef0] bg-[#2f5ef0] text-white dark:border-[#5d8cff] dark:bg-[#2f5ef0]"
                    : "border-[#dce5f4] bg-[#fbfcff] text-[#25324c] dark:border-[#31415c] dark:bg-[#1b2436] dark:text-[#e5edff]"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-white" : reaction.accent}`} />
                {reaction.label}
              </button>
            )
          })}
        </div>

        <div className="mt-5 space-y-3">
          {comments.map((savedComment, index) => (
            <div
              key={`${savedComment.name}-${savedComment.time}-${index}`}
              className="flex items-start gap-4 rounded-[16px] border border-[#dce5f4] bg-[linear-gradient(180deg,#ffffff_0%,#f6f8fd_100%)] px-4 py-4 shadow-[0_10px_24px_rgba(30,57,113,0.05)] dark:border-[#31415c] dark:bg-[linear-gradient(180deg,#1b2436_0%,#151c2b_100%)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#7e90b2_0%,#566580_100%)] text-[18px] font-semibold text-white">
                {savedComment.name.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[18px] font-semibold text-[#172038] dark:text-[#f3f7ff]">
                    {savedComment.name}
                  </p>
                  <p className="text-[14px] text-[#7c88a3] dark:text-[#9eb0d1]">
                    {savedComment.time}
                  </p>
                </div>
                <p className="mt-1 text-[16px] text-[#2b3854] dark:text-[#d6e0f7]">
                  {savedComment.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
