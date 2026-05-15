import { Link } from "lucide-react";

export default function NotFound() {
  return (
    <div
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
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-muted-foreground/80">
          Go back home
        </Link>
      </div>
    </div>
  )
}