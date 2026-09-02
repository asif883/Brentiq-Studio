import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/SharedSections/Navbar";
import Footer from "@/Components/SharedSections/Footer";


export const metadata: Metadata = {
  title: "Brentiq Studio",
  description: "Brentiq Studio is a leading design and development agency specializing in creating exceptional digital experiences. We offer a wide range of services, including UI/UX design, web design, branding, and more. Our team of experts is dedicated to delivering innovative solutions that help businesses thrive in the digital landscape.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className="h-full antialiased"
    >
      <body>
        {/* <Navbar /> */}
         <div className="min-h-screen">
            {children}
          </div>
          <Footer />
      </body>
    </html>
  );
}
