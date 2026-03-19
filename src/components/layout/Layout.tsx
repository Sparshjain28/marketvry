import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileBottomNav } from "./MobileBottomNav";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full relative">
      <Navbar />
      <main className="flex-grow w-full pb-16 lg:pb-0 relative z-10">{children}</main>
      <Footer />
      <MobileBottomNav />
      <WhatsAppWidget phoneNumber="1234567890" message="Hello! I'm interested in your services." />
    </div>
  );
};
