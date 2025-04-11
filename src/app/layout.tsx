import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Neo Cloud Learning Management System",
  icons: {
    icon: '/logo-icon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden`}
      >
        <NavBar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
