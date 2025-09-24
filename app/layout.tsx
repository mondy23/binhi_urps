// No "use client" here!

import "./globals.css";
import React from "react";
import DrawerWrapper from "./components/DrawerWrapper";

// ✅ Metadata exported directly
export const metadata = {
  title: "My App",
  description: "Your app description",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex overflow-hidden">
        {/* Drawer toggle must be a client component */}
        <DrawerWrapper>{children}</DrawerWrapper>
      </body>
    </html>
  );
}
