import "./../globals.css";
import { Inter } from "next/font/google";
import SearchHeader from "@/components/SearchHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone",
  description: "Google clone created with next js 13",
};

export default function SearchLayout({ children }) {
  return (
    <div className={inter.className}>
      <SearchHeader />
      {children}
    </div>
  );
}
