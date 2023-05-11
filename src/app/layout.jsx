import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone",
  description: "Google clone created with next js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="../public/favicon.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
