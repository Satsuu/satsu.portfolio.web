"use client"

import PageContainer from "../page-container"
import ProjectList from "./project-list"
import { motion } from "framer-motion"

export default function ProjectSection() {
  return (
    <PageContainer>
      <div id="projects" className="h-auto pt-10 md:pt-20">
        <div className="flex flex-col md:flex-row items-start justify-center md:items-center">
          <motion.div
            className="w-full flex flex-col justify-center h-full text-center md:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Top Projects I've Built
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              A collection of web and mobile apps I've built, focusing on
              functionality and great user experience.
            </p>

            <div className="mt-20">
              <ProjectList />
            </div>
          </motion.div>
        </div>
      </div>
    </PageContainer>
  )
}
