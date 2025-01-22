import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { navLinks } from "@/constants/nav-items"
import MenuIcon from "./menu-icon"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function MobileNav() {
  return (
    <div className="flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="md:hidden">
          <div className="grid gap-6 p-6 text-lg font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <div className="md:hidden">
        <ThemeToggle />
      </div>
    </div>
  )
}
