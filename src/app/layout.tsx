import type { Metadata } from "next";
import { JSX, PropsWithChildren } from "react";
import "@/app/styles/globals.css";
import "@/app/styles/fonts.css";

export const metadata: Metadata = {
  title: "T3IND",
  description: "Тестовое задание T3IND",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
