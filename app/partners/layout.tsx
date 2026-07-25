import type { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PartnersLayoutProps {
  children: ReactNode;
}

export default function PartnersLayout({
  children,
}: PartnersLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}