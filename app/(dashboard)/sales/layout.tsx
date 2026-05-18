import Dashboard from "@/components/dashboard/shared/dashboard";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: {
    template: "%s | Sales | ViralOps Marketing",
    default: "Sales | ViralOps Marketing",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Dashboard role="sales" href="/sales" breadcrumb="Sales Panel" >
        {children}
      </Dashboard>
    </>
  )
}