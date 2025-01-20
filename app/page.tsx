import NavBar from "@/components/navbar/nav-bar"
import Image from "next/image"
import TypewriterEffect from "@/components/typewritter-effect"

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="relative bg-black text-white h-screen flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 pl-2 md:pl-44 flex flex-col justify-center h-full text-center md:text-left">
          <TypewriterEffect />
        </div>

        <div className="w-full md:w-1/2 relative h-1/2 md:h-full">
          <Image
            src="/images/satsu_3.png"
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
