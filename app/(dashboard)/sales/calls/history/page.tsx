import { Metadata } from "next";
import CallHistoryPage from "./CallHistoryPage";
 
export const metadata: Metadata = {
  title: "Call History",
};

export default function Page() {
  return <CallHistoryPage />;
}