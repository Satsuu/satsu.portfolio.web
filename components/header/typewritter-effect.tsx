/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect } from "react"

const TypewriterEffect = () => {
  const [displayedText, setDisplayedText] = useState<string>("")
  const [currentText, setCurrentText] = useState<string>("")
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [textIndex, setTextIndex] = useState<number>(0)

  const textSequence = [
    "I am a Web Developer.",
    "I am a Android Developer.",
    "I am ready to collaborate.",
  ]

  useEffect(() => {
    const typeSpeed: number = isDeleting ? 50 : 100
    const delayBetweenTexts: number = 1500

    const handleTypewriterEffect = () => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayedText((prev) => prev + currentText[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts)
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1))
          setCurrentIndex((prev) => prev - 1)
        } else {
          setIsDeleting(false)
          const nextIndex = (textIndex + 1) % textSequence.length
          setTextIndex(nextIndex)
          setCurrentText(textSequence[nextIndex])
        }
      }
    }

    const timer = setTimeout(handleTypewriterEffect, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentIndex, isDeleting, currentText, textIndex, textSequence])

  return (
    <div className="text-center">
      <div className="font-bold mb-0 text-black dark:text-gray-400">
        <span className="text-xl md:text-5xl">Hi, I am a Junior </span>
      </div>
      <div className="font-bold mb-0 text-black dark:text-gray-400">
        <span className="text-4xl md:text-5xl">Full-Stack Developer.</span>
      </div>

      <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
        {displayedText}
        <span className="animate-blink">|</span>
      </p>
    </div>
  )
}

export default TypewriterEffect
