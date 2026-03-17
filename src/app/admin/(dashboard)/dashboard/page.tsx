import StatsSection from "@/components/admin/dashboard/StatsSection"
import QuickActionsSection from "@/components/admin/dashboard/QuickActionsSection"


export const metadata = {
  title: "Admin Dashboard",

  robots: {
    index: false,
    follow: false,
  },
}


export default function DashboardPage() {
  return (
    <div className="p-8 space-y-10">

      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      {/* Stats */}
      <StatsSection />

      {/* Quick Actions */}
      <QuickActionsSection />

    </div>
  )
}