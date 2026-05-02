import { Geist_Mono, Space_Grotesk } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata:Metadata = {
  title: {
    template: "%s | ViralOps Marketing",
    default: "ViralOps Marketing"
  },
  description: "ViralOps is a data-driven marketing agency specializing in performance marketing, branding, and scalable growth systems to help businesses go viral and grow faster.",
  icons: [
    { rel: "icon", url: "/logo.svg", type: "image/svg+xml" },
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", fontMono.variable, "font-sans", spaceGrotesk.variable)}>
      <body suppressHydrationWarning className="bg-foreground dark:bg-background">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
