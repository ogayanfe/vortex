"use client";

import { motion } from "framer-motion";

export function ValueProps() {
  const props = [
    {
      title: "01 // SECURED ESCROW",
      desc: "Funds are locked in a non-custodial smart contract. No middleman, no central point of failure.",
    },
    {
      title: "02 // PEER-TO-PEER",
      desc: "Direct player vs. player competition. The system only provides the infrastructure, not the opponent.",
    },
    {
      title: "03 // INSTANT PAYOUTS",
      desc: "Automated, immediate settlement on the blockchain upon game conclusion. Winners take all.",
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

  return (
    <section id="how-it-works" style={{ padding: "6rem 0", position: "relative", borderTop: "1px solid var(--border-color)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Infrastructure Highlights</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto" }}>Built for trustless, high-stakes environments.</p>
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
              style={{
                padding: "2.5rem 2rem",
                position: "relative",
                overflow: "hidden",
                border: "1px solid var(--border-highlight)",
                background: "linear-gradient(180deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 40px var(--accent-glow)",
                borderColor: "var(--accent-primary)",
              }}
            >
              <h3
                className="font-mono"
                style={{
                  color: "var(--accent-primary)",
                  marginBottom: "1.5rem",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                {prop.title}
              </h3>
              <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.6 }}>{prop.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
