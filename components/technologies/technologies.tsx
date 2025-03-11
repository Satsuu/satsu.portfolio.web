"use client"

import PageContainer from "../page-container"
import { Card, CardContent } from "../ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { technologiesItem, techItem } from "@/lib/technology-items"
import { motion } from "framer-motion"

export default function TechnologiesSection() {
  return (
    <PageContainer>
      <div
        id="technologies"
        className="h-screen pt-10 md:pt-20 md:mt-20 flex flex-col items-center"
      >
        <motion.div
          className="w-full md:w-1/2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Skills & Technologies
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Explore the diverse set of tools, programming languages, and
            frameworks I specialize in, enabling the development of dynamic,
            scalable, and high-performing web and mobile applications.
          </p>
        </motion.div>

        <div className="w-full mt-10 flex flex-wrap justify-center gap-2 p-6">
          <TooltipProvider>
            <div className="overflow-hidden w-full mt-10 p-6">
              <motion.div
                className="flex gap-4 whitespace-nowrap"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
                  ease: "linear",
                }}
              >
                {technologiesItem
                  .concat(technologiesItem)
                  .map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-4 cursor-pointer"
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.span
                            whileHover={{ scale: 1.3 }}
                            transition={{ duration: 0.1 }}
                          >
                            <i className={`${tech.icon} colored text-6xl`} />
                          </motion.span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm items-center font-semibold">
                            {tech.name}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  ))}
              </motion.div>
            </div>
          </TooltipProvider>

          <TooltipProvider>
            <div className="overflow-hidden w-full mt-10 p-6">
              <motion.div
                className="flex gap-4 whitespace-nowrap"
                animate={{ x: ["-100%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
                  ease: "linear",
                }}
              >
                {techItem.concat(techItem).map((techs, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 cursor-pointer"
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.span
                          whileHover={{ scale: 1.3 }}
                          transition={{ duration: 0.1 }}
                        >
                          <i className={`${techs.icon} colored text-6xl`} />
                        </motion.span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm items-center font-semibold">
                          {techs.name}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                ))}
              </motion.div>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </PageContainer>
  )
}
