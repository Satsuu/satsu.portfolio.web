"use client"

import HeaderSection from "@/components/header/header"
import ProjectSection from "@/components/projects/projects"
import AboutSection from "@/components/about/about"
import TechnologiesSection from "@/components/technologies/technologies"
import ContactSection from "@/components/contact/contact"
import { motion, useScroll } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll()

  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black dark:bg-white origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeaderSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ProjectSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <TechnologiesSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ContactSection />
      </motion.div>

      {/* <footer className="flex flex-wrap items-center justify-center p-2 z-10">
        <p>2025 Satsu. All rights reserved.</p>
      </footer> */}
    </div>
  )
}
