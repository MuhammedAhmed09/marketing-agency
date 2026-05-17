import Dashboard from "@/components/dashboard/shared/dashboard";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Dashboard role="sales" href="/sales" breadcrumb="Sales Panel" >
        {children}
      </Dashboard>
    </>
  )
}