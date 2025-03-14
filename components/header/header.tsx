"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import TypewriterEffect from "@/components/header/typewritter-effect"
import { Button } from "../ui/button"

export default function HeaderSection() {
  return (
    <div
      id="header"
      className="w-full flex flex-col md:flex-row items-center max-sm:mt-20 md:justify-center h-screen"
    >
      <div className="flex items-center justify-center flex-col md:flex-row">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Image
            src="/images/me.png"
            height={500}
            width={500}
            alt="Profile Picture"
            className="block rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center md:text-left"
        >
          <TypewriterEffect />
          <div className="flex justify-center md:justify-center space-x-2">
            <Button
              variant="outline"
              size="lg"
              className="px-6 py-3 text-black dark:text-white"
            >
              Contact Me
            </Button>
            <Button size="lg" className="px-6 py-3 text-white dark:text-black">
              Download CV
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
