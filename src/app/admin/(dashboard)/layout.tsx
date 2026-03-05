import Sidebar from "@/components/admin/Sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-[250px_1fr] min-h-screen">

      <Sidebar />

      <main className="p-8">
        {children}
      </main>

    </div>
  )
}