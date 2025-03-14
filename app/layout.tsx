import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingNav } from "@/components/navbar/floating-nav"
import { GeistSans } from "geist/font/sans"

export const metadata: Metadata = {
  title: "Satsu.portfolio",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav />

          <div className="fixed top-5 right-5 z-50">
            <ThemeToggle />
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
