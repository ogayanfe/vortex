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
        minHeight: "75vh",
        position: "relative",
      }}
    >
      {/* Dynamic Gaming Background Orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "20%",
          left: "25%",
          width: "400px",
          height: "400px",
          background: "var(--accent-primary)",
          filter: "blur(150px)",
          opacity: 0.15,
          zIndex: -1,
          borderRadius: "50%",
        }}
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "20%",
          width: "350px",
          height: "350px",
          background: "var(--accent-secondary)",
          filter: "blur(120px)",
          opacity: 0.15,
          zIndex: -1,
          borderRadius: "50%",
        }}
      />

      <motion.div className="container" style={{ maxWidth: "800px" }} variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} style={{ marginBottom: "1.5rem" }}>
          <div className="status-badge">
            <div className="pulse-dot" />
            <span className="font-mono">SYSTEM: ONLINE</span>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} style={{ marginBottom: "1.5rem" }}>
          Adversarial Staking.
          <br />
          <span
            style={{
              color: "var(--accent-primary)",
              position: "relative",
              display: "inline-block",
            }}
          >
            One Winner. No House.
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} style={{ marginBottom: "3rem", maxWidth: "600px", marginInline: "auto" }}>
          Experience the thrill of peer-to-peer wagering on the games you already know. Secure, transparent, and built on the blockchain.
        </motion.p>

        <motion.div variants={itemVariants} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
          <Link href="/games" className="primary-btn">
            Enter The Arena
          </Link>
          <Link href="#how-it-works" className="secondary-btn">
            View Docs
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
