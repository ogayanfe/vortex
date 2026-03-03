"use client";

import { motion } from "framer-motion";

const props = [
  {
    title: "SYS.01 // NO HOUSE",
    desc: "We don't play. You play each other. Escrow is powered by immutable smart contracts.",
  },
  {
    title: "SYS.02 // PVP ONLY",
    desc: "Direct player vs. player action. Enter the arena, find your match, stake your crypto.",
  },
  {
    title: "SYS.03 // WINNER TAKES ALL",
    desc: "Instant payouts to the victor directly on-chain. No delays, no middlemen.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export function ValueProps() {
  return (
    <section id="how-it-works" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <h2 style={{ color: "var(--accent-primary)", textShadow: "0 0 10px var(--accent-glow)" }}>PROTOCOL INFRASTRUCTURE</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.25rem" }}>Built for high-stakes PVP arenas.</p>
        </motion.div>

        <motion.div
          className="grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {props.map((prop, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-panel"
              whileHover={{
                y: -5,
                boxShadow: "0 0 20px var(--accent-glow)",
              }}
              style={{ transition: "all 0.3s" }}
            >
              <h3
                className="font-mono"
                style={{
                  color: "var(--accent-secondary)",
                  marginBottom: "1.5rem",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  textShadow: "0 0 5px var(--accent-secondary)",
                }}
              >
                {prop.title}
              </h3>
              <p style={{ margin: 0, fontSize: "1.1rem", lineHeight: 1.6, color: "var(--text-primary)" }}>{prop.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
