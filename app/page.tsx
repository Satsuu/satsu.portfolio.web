import NavBar from "@/components/navbar/nav-bar"
import Image from "next/image"
import TypewriterEffect from "@/components/typewritter-effect"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="relative bg-white dark:bg-black  text-white h-screen flex flex-col md:flex-row items-center md:items-start">
        <div className="w-96 md:w-3/4 pl-2 md:pl-20 flex flex-col justify-center h-full text-center md:text-left">
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
      </main>
      <footer className="flex flex-wrap items-center justify-center p-2 z-10">
        <p>2025 Satsu. All rights reserved.</p>
      </footer>
    </div>
  )
}
