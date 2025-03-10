import PageContainer from "@/components/page-container"
import { FloatingNav } from "@/components/navbar/floating-nav"
import HeaderSection from "@/components/header/header"
import AboutSection from "@/components/about/about"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div>
      <div className="flex justify-end p-5">
        <ThemeToggle />
      </div>
      <div>
        <FloatingNav />
      </div>
      <div>
        <HeaderSection />
      </div>
      <div>
        <AboutSection />
      </div>
      {/* <footer className="flex flex-wrap items-center justify-center p-2 z-10">
        <p>2025 Satsu. All rights reserved.</p>
      </footer> */}
    </div>
  )
}
