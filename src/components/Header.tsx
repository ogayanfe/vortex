"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("vortex-theme") || "dark";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("vortex-theme", newTheme);
  };

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
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
              color: "var(--text-primary)",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent-primary)"
              strokeWidth="2.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
              style={{ filter: "drop-shadow(0 0 10px var(--accent-glow))" }}
            >
              <path d="M2 12l10-10 10 10-10 10z" />
              <path d="M8 12l4-4 4 4-4 4z" />
            </svg>
            <span
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "2px",
                textShadow: "0 0 15px var(--accent-glow)",
                color: "var(--accent-primary)",
              }}
            >
              VORTEX
            </span>
          </Link>

          {/* Navigation Links - Desktop Only */}
          <nav className="desktop-nav" style={{ gap: "2rem", marginLeft: "2rem" }}>
            <Link href="#games" className="nav-link">
              ARENAS
            </Link>
            <Link href="#how-it-works" className="nav-link">
              DOCS
            </Link>
          </nav>
        </div>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <button
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: "1px solid var(--border-color)",
              color: "var(--accent-primary)",
              cursor: "pointer",
              padding: "0.5rem",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="miter"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="miter"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <div className="desktop-nav">
            <ConnectButton />
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
                <ConnectButton />
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
