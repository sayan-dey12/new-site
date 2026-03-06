import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DepthDemo() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

  {/* background gradient */}
  <div className="absolute inset-0 -z-10 bg-linear-to-br from-black via-zinc-900 to-black" />

  {/* glow */}
  <div className="absolute right-0 top-0 w-150 h-150 bg-orange-500/30 blur-[180px] -z-10" />

  <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-600/20 blur-[200px] -z-10" />

  {/* pattern */}
  <div
    className="absolute inset-0 opacity-[0.05] -z-10"
    style={{
      backgroundImage:
        "radial-gradient(circle, white 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />

  {/* content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">

    <h1 className="text-6xl font-bold mb-6">
      Modern Background Demo
    </h1>

    <p className="text-zinc-400 max-w-xl">
      This is a layered background effect using Tailwind.
    </p>

  </div>

</div>
  )
}