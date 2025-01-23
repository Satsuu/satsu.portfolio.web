import NavBar from "@/components/navbar/nav-bar"
import HeaderSection from "@/components/header/header"

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeaderSection />
      <footer className="flex flex-wrap items-center justify-center p-2 z-10">
        <p>2025 Satsu. All rights reserved.</p>
      </footer>
    </div>
  )
}
