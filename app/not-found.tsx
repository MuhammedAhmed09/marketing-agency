import Link from "next/link"

export default function NotFound() {
  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center flex flex-col items-center gap-5 max-w-md">

        <p className="text-8xl font-bold tracking-tighter text-foreground">
          404
        </p>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-medium">
            الصفحة دي اتشالت أو مش موجودة
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            يمكن الرابط اتكتب غلط أو الصفحة اتنقلت لمكان تاني.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap justify-center mt-2">
          <Link
            href="/"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium bg-primary text-accent-foreground hover:bg-primary/90 transition-colors"
          >
            Home
          </Link>
        </div>

      </div>
    </div>
  )
}