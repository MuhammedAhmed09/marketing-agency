import SalesLeadsPage from "@/components/dashboard/sales/SalesLeadsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leads",
};

export default function Page() {
    return (
        <SalesLeadsPage />
    )
}