import HeaderSection from "@/components/header/header"
import ProjectSection from "@/components/projects/projects"
import AboutSection from "@/components/about/about"
import TechnologiesSection from "@/components/technologies/technologies"
import ContactSection from "@/components/contact/contact"

export default function Home() {
  return (
    <div>
      <div>
        <HeaderSection />
      </div>
      <div>
        <ProjectSection />
      </div>
      <div>
        <TechnologiesSection />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <ContactSection />
      </div>
      {/* <footer className="flex flex-wrap items-center justify-center p-2 z-10">
        <p>2025 Satsu. All rights reserved.</p>
      </footer> */}
    </div>
  )
}
