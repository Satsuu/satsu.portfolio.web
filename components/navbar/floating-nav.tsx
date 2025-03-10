"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { navItems, type NavItem } from "../../lib/nav-items"

// NavItem component for individual navigation links
interface NavItemProps extends NavItem {
  isActive: boolean
}

function NavItemComponent({ href, icon: Icon, name, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center gap-1 rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground md:flex-row md:gap-2",
        isActive && "text-foreground"
      )}
    >
      <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
      <span className="text-xs font-medium md:text-sm">{name}</span>
    </Link>
  )
}

const navVariants = cva(
  "fixed bottom-0 left-0 right-0 z-50 flex w-full items-center justify-around border-t bg-background/80 p-2 backdrop-blur-lg transition-all duration-200 md:bottom-4 md:left-1/2 md:w-auto md:-translate-x-1/2 md:rounded-full md:border md:px-6 md:py-3 md:shadow-lg",
  {
    variants: {
      variant: {
        default: "border-border",
        floating: "border-border/40 bg-background/70",
      },
    },
    defaultVariants: {
      variant: "floating",
    },
  }
)

interface FloatingNavProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "floating"
}

export function FloatingNav({
  className,
  variant,
  ...props
}: FloatingNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn(navVariants({ variant }), className)} {...props}>
      {navItems.map((item) => (
        <NavItemComponent
          key={item.name}
          {...item}
          isActive={pathname === item.href}
        />
      ))}
    </nav>
  )
}
