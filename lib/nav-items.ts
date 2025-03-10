import { Home, FileCode2, CodeXml, MessageSquare, User } from "lucide-react"

export interface NavItem {
  href: string
  icon: React.ComponentType<{ className?: string }>
  name: string
}

export const navItems: NavItem[] = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FileCode2,
  },
  {
    name: "Technologies",
    href: "#technologies",
    icon: CodeXml,
  },
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: MessageSquare,
  },
]
