import { Link } from "lucide-react";

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
            The page you are looking for does not exist.
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            It might have been removed, renamed, or did not exist in the first place.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center cursor-pointer gap-2 text-sm font-medium text-background bg-foreground dark:text-foreground dark:bg-background hover:text-primary/80 transition-colors"
        >
          Go back home
        </Link>

      </div>
    </div>
  )
}