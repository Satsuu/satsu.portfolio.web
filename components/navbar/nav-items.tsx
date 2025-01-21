import Link from "next/link"
import { navLinks } from "@/constants/nav-items"

export default function NavItems() {
  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-muted-foreground hover:text-foreground dark:text-white"
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}
