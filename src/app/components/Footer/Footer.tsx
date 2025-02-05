"use client";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import QuickLinks from "./components/QuickLinks/QuickLinks";
import Copyright from "./components/Copyright/Copyright";
import CujaeLogo from "@/components/assets/cujae-logo";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function Footer() {
  const breakpoint = useBreakpoint();
  return (
    <footer className={`w-full bg-primary text-secondary shadow-lg px-4 py-4`}>
      {breakpoint !== "sm" ? (
        // Desktop Version
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start order-2 md:order-1">
              <h3 className=" font-semibold text-base text-white mb-1">
                Enlaces rápidos
              </h3>
              <QuickLinks className="flex flex-col items-center md:items-start gap-1 text-1xl font-bold" />
            </div>
            {/* Copyright */}
            <Copyright />
            {/* Social Media and Logo */}
            <div className="flex flex-col-reverse items-center gap-5 md:items-end order-3 md:order-3">
              <SocialMedia />
              <a href="/" className="flex justify-center items-center gap-2">
                <CujaeLogo />
                <span className="text-xl font-bold text-white">Cujae</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        // Mobile Version
        <div className="flex flex-col items-center text-center gap-2">
          <a href="/" className="flex justify-center items-center gap-2">
            <CujaeLogo />
            <span className="text-lg font-bold text-white">Cujae</span>
          </a>
          <QuickLinks className="flex gap-3 mt-2" />
          <SocialMedia />
          <Copyright />
        </div>
      )}
    </footer>
  );
}
