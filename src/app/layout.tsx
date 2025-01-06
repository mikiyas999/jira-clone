import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jira Clone",
  description:
    "Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software",
  icons: {
    icon: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "antialiased min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
