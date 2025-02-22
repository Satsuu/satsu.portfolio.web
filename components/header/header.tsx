import Image from "next/image"
import TypewriterEffect from "@/components/header/typewritter-effect"
import { ChevronDown } from "lucide-react"
import PageContainer from "../page-container"

export default function HeaderSection() {
  return (
    <PageContainer>
      <div
        id="header"
        className="relative text-white h-screen flex flex-col md:flex-row items-center md:items-start"
      >
        <div className="w-96 md:w-3/4 flex flex-col justify-center h-full text-center md:text-left">
          <div className="absolute md:bottom-40">
            <TypewriterEffect />
          </div>
        </div>

        <div className="absolute bottom-10 flex justify-center left-1/2 transform -translate-x-1/2 z-10">
          <ChevronDown className="animate-bounce text-black dark:text-white w-10 h-10" />
        </div>

        <div className="w-full md:w-1/2 relative md:h-full hidden md:block">
          <Image
            src="/images/satsu_5.png"
            alt="Profile Picture"
            layout="fill"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </div>
    </PageContainer>
  )
}
