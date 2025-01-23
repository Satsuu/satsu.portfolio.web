import NavItems from "./nav-items"
import MobileNav from "./mobile-nav"

export default function NavBar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <nav className="hidden md:flex items-center gap-6 ml-auto">
          <NavItems />
        </nav>
        <MobileNav />
      </div>
    </header>
  )
}
