/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const TypewriterEffect = () => {
  const [displayedText, setDisplayedText] = useState<string>("")
  const [currentText, setCurrentText] = useState<string>(
    "I know web development."
  )
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [textIndex, setTextIndex] = useState<number>(0)

  const textSequence = [
    "I am a Web Developer.",
    "I am an Android Developer.",
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
    <div>
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-400">
        Hi, I am a Junior Full-Stack Developer.
      </h1>
      <p className="text-base md:text-lg mb-8 text-gray-300">
        {displayedText}
        <span className="animate-blink">|</span>
      </p>
      <div className="flex justify-center md:justify-start space-x-2">
        <Button
          variant="outline"
          className="px-6 py-3 text-black hover:bg-gray-600 active:bg-gray-700 dark:text-white dark:hover:bg-gray-400 dark:active:bg-gray-500"
        >
          Contact Me
        </Button>
        <Button className="px-6 py-3 text-white hover:bg-gray-600 active:bg-gray-700 dark:text-black dark:hover:bg-gray-400 dark:active:bg-gray-500">
          Show Profile
        </Button>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default TypewriterEffect
