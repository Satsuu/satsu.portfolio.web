import TypewriterEffect from "@/components/header/typewritter-effect"
import { ChevronDown } from "lucide-react"

export default function AboutSection() {
  return (
    <div
      id="about"
      className="relative bg-black dark:bg-white  text-white h-screen flex flex-col md:flex-row items-center md:items-start"
    >
      <div className="w-96 md:w-3/4 pl-2 md:pl-20 flex flex-col justify-center h-full text-center md:text-left">
        <div className="absolute md:bottom-40">
          <TypewriterEffect />
        </div>
      </div>

      <div className="absolute bottom-10 flex justify-center left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown className="animate-bounce text-black dark:text-white w-10 h-10" />
      </div>
    </div>
  )
}
