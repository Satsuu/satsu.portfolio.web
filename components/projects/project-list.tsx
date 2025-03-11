"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { projectItem } from "@/lib/project-items"
import ImageCarousel from "./image-carousel"

export default function ProjectList() {
  return (
    <div className="flex flex-col gap-12 p-4">
      {projectItem.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start w-full gap-6 p-4"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-center md:w-1/2 space-y-4"
          >
            <div className="flex items-center space-x-4">
              <h1 className="text-7xl md:text-9xl font-bold text-black dark:text-white">
                {project.project_count}
              </h1>
              <div className="flex flex-col items-start">
                <h1 className="text-4xl md:text-7xl font-semibold">
                  {project.project_name}
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                  {project.project_job}
                </p>
              </div>
            </div>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 text-justify">
              {project.project_description}
            </p>

            <div className="flex">
              {project.project_link ? (
                <Button
                  onClick={() => window.open(project.project_link, "_blank")}
                >
                  Visit Now
                </Button>
              ) : null}
            </div>
          </motion.div>

          <ImageCarousel images={project.project_image} />
        </div>
      ))}
    </div>
  )
}
