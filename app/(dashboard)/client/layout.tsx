import Dashboard from "@/components/dashboard/shared/dashboard";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: {
    template: "%s | Client | ViralOps Marketing",
    default: "Client | ViralOps Marketing",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Dashboard role="client" href="/client" breadcrumb="Client Panel" >
        {children}
      </Dashboard>
    </>
  )
}