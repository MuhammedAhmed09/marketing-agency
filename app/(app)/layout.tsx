import Navbar from "@/components/landing-page/Navbar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}