"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { WalletConnect } from "@/components/WalletConnect";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 bg-bg-secondary backdrop-blur-[15px] border-b-2 border-border-color z-50 py-4"
    >
      <div className="container flex justify-between items-center">
        <div className="flex gap-10 items-center">
          {/* SVG Logo & Brand Name */}
          <BrandLogo size={40} />

          {/* Navigation Links - Desktop Only */}
          <nav className="desktop-nav flex gap-8 ml-8">
            <Link href="/arena" className="nav-link">
              ARENA
            </Link>
            <Link href="#how-it-works" className="nav-link">
              DOCS
            </Link>
          </nav>
        </div>

        <div className="flex gap-4 items-center">
          <ThemeToggle />

          <div className="desktop-nav">
            <WalletConnect />
          </div>

          <button
            className="mobile-nav-toggle bg-transparent border-none text-accent-primary cursor-pointer p-2 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-sidebar-overlay"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="mobile-sidebar"
            >
              <div className="flex justify-end">
                <button onClick={() => setIsMobileMenuOpen(false)} className="bg-transparent border-none text-text-primary cursor-pointer p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-8">
                <Link href="#games" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  ARENAS
                </Link>
                <Link href="#how-it-works" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  DOCS
                </Link>
                <WalletConnect />
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
