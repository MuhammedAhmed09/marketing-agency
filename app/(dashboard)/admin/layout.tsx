import Dashboard from "@/components/dashboard/shared/dashboard";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Dashboard role="admin" href="/admin" breadcrumb="Admin Panel">
        {children}
      </Dashboard>
    </>
  )
}