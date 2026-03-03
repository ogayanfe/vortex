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
      style={{
        position: "sticky",
        top: 0,
        background: "var(--bg-secondary)",
        backdropFilter: "blur(15px)",
        borderBottom: "2px solid var(--border-color)",
        zIndex: 50,
        padding: "1rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {/* SVG Logo & Brand Name */}
          <BrandLogo size={40} />

          {/* Navigation Links - Desktop Only */}
          <nav className="desktop-nav" style={{ gap: "2rem", marginLeft: "2rem" }}>
            <Link href="/arena" className="nav-link">
              ARENA
            </Link>
            <Link href="#how-it-works" className="nav-link">
              DOCS
            </Link>
          </nav>
        </div>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <ThemeToggle />

          <div className="desktop-nav">
            <WalletConnect />
          </div>

          <button
            className="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--accent-primary)",
              cursor: "pointer",
              padding: "0.5rem",
              alignItems: "center",
              justifyContent: "center",
            }}
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
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-primary)",
                    cursor: "pointer",
                    padding: "0.5rem",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
