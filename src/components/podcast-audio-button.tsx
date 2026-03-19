"use client"

import { useEffect, useRef, useState } from "react"
import { Headphones, Square } from "lucide-react"

export function PodcastAudioButton({
  text,
  label = "Listen Now",
}: {
  text: string
  label?: string
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const togglePlayback = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return
    }

    if (isPlaying) {
      window.speechSynthesis.cancel()
      utteranceRef.current = null
      setIsPlaying(false)
      return
    }

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.68
    utterance.pitch = 0.9
    utterance.lang = "en-US"

    const voices = window.speechSynthesis.getVoices()
    const preferredVoiceNames = [
      "Victoria",
      "Microsoft Aria Online (Natural) - English (United States)",
      "Microsoft Aria Online (Natural)",
      "Microsoft Aria - English (United States)",
      "Microsoft Aria",
      "Google UK English Female",
      "Samantha",
    ]

    const matchedVoice = preferredVoiceNames
      .map((voiceName) => voices.find((voice) => voice.name === voiceName))
      .find((voice) => voice)

    if (matchedVoice) {
      utterance.voice = matchedVoice
      utterance.lang = matchedVoice.lang || "en-US"
    }

    utterance.onend = () => {
      setIsPlaying(false)
      utteranceRef.current = null
    }
    utterance.onerror = () => {
      setIsPlaying(false)
      utteranceRef.current = null
    }

    utteranceRef.current = utterance
    setIsPlaying(true)
    window.speechSynthesis.speak(utterance)
  }

  return (
    <button
      type="button"
      onClick={togglePlayback}
      className="inline-flex h-14 items-center gap-3 rounded-[14px] bg-[linear-gradient(90deg,#2f6fed_0%,#4a7cf0_100%)] px-7 text-[18px] font-semibold text-white shadow-[0_14px_30px_rgba(47,111,237,0.24)] transition hover:-translate-y-0.5"
    >
      {isPlaying ? <Square className="h-5 w-5" /> : <Headphones className="h-5 w-5" />}
      {isPlaying ? "Stop Audio" : label}
    </button>
  )
}
