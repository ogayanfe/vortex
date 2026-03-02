"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      style={{
        padding: "8rem 0 6rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        position: "relative",
      }}
    >
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')",
          zIndex: -2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle, rgba(255,0,85,0.1) 0%, transparent 60%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      <motion.div className="container" style={{ maxWidth: "900px" }} variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} style={{ marginBottom: "2rem" }}>
          <div
            className="status-badge"
            style={{ borderColor: "var(--accent-primary)", color: "var(--accent-primary)", textShadow: "0 0 10px var(--accent-glow)" }}
          >
            <div className="pulse-dot" style={{ backgroundColor: "var(--accent-primary)", boxShadow: "0 0 10px var(--accent-primary)" }} />
            <span className="font-mono">MULTIPLAYER ARENA // LIVE</span>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} style={{ marginBottom: "1.5rem" }}>
          Adversarial Staking.
          <br />
          <span style={{ color: "var(--accent-primary)", textShadow: "0 0 20px var(--accent-glow)" }}>One Winner. No House.</span>
        </motion.h1>

        <motion.p variants={itemVariants} style={{ marginBottom: "3rem", fontSize: "1.5rem", color: "var(--text-primary)", fontWeight: 600 }}>
          Stake crypto. Play games. Take everything.
        </motion.p>

        <motion.div variants={itemVariants} style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
          <Link href="/games" className="primary-btn">
            ENTER THE ARENA
          </Link>
          <Link href="#how-it-works" className="secondary-btn">
            HOW IT WORKS
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
