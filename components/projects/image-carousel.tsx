"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ImageCarouselProps {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
      className="md:w-1/2 flex justify-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ height: "100px" }}
        >
          <Image
            src={images[index]}
            alt={`Project image ${index + 1}`}
            height={100}
            width={700}
            className="rounded-lg shadow-lg transition-all duration-700 ease-in-out"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
