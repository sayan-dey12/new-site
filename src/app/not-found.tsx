import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-secondary px-6 space-y-6">
      
      <h1 className="text-5xl font-bold">404</h1>

      <h2 className="text-xl font-semibold">
        Page Not Found
      </h2>

      <p className="text-muted-foreground max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <div className="flex gap-4">
        <Link
          href="/"
          className="px-4 py-2 rounded-lg bg-accent text-accent-foreground"
        >
          Go Home
        </Link>

        <Link
          href="/blogs"
          className="px-4 py-2 rounded-lg border"
        >
          Read Blogs
        </Link>
      </div>
    </div>
  );
}