import Navbar from "@/components/landing-page/Navbar"

export default function appLayout({
  children,
}: {
    children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}