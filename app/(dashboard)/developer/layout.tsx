import Dashboard from "@/components/dashboard/shared/dashboard";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: {
    template: "%s | Developer | ViralOps Marketing",
    default: "Developer | ViralOps Marketing",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Dashboard role="developer" href="/developer" breadcrumb="Developer Panel" >
        {children}
      </Dashboard>
    </>
  )
}