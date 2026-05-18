import { Metadata } from "next";
import BookedCallsPage from "./BookedCallsPage";

export const metadata: Metadata = {
  title: "Booked Calls",
};
 
export default function Page() {
  return <BookedCallsPage />;
}