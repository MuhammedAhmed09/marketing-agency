import { Metadata } from "next";
import TodaysCallsPage from "./TodaysCallsPage";

export const metadata: Metadata = {
  title: "Calls Today",
};
 
export default function Page() {
  return <TodaysCallsPage />;
}