"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function SupportedGames() {
  const games = [
    {
      id: "whot",
      name: "WHOT",
      status: "STABLE",
      players: "1v1",
      stake: "0.01 - 1 ETH",
    },
    {
      id: "ludo",
      name: "LUDO",
      status: "BETA",
      players: "2 - 4",
      stake: "0.05 - 0.5 ETH",
    },
    {
      id: "draughts",
      name: "DRAUGHTS",
      status: "IN DEV",
      players: "1v1",
      stake: "TBD",
    },
  ];

  return (
    <section id="games" style={{ padding: "6rem 0", background: "var(--bg-tertiary)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            borderBottom: "1px solid var(--border-highlight)",
            paddingBottom: "1.5rem",
          }}
        >
          <div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Supported Arenas</h2>
            <p>Select your game, set your stake, and challenge an opponent.</p>
          </div>
          <Link href="/games" className="secondary-btn" style={{ display: "none" }}>
            View All
          </Link>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {games.map((game, i) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto auto auto",
                alignItems: "center",
                gap: "2rem",
                padding: "1.5rem 2rem",
                background: "linear-gradient(90deg, var(--bg-secondary) 0%, transparent 100%)",
                borderRadius: "8px",
                border: "1px solid var(--border-color)",
                borderLeft: "4px solid var(--accent-primary)",
                transition: "border-color 0.2s, background-color 0.2s",
              }}
              whileHover={{
                borderColor: "var(--accent-secondary)",
                borderLeftColor: "var(--accent-secondary)",
                background: "linear-gradient(90deg, var(--bg-tertiary) 0%, transparent 100%)",
              }}
            >
              <div style={{ fontWeight: 800, fontSize: "1.25rem", letterSpacing: "0.05em", color: "var(--text-primary)" }}>{game.name}</div>
              <div className="font-mono" style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                PLAYERS: {game.players}
              </div>
              <div className="font-mono" style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                STAKE: {game.stake}
              </div>
              <div
                className="font-mono"
                style={{
                  color:
                    game.status === "STABLE" ? "var(--accent-secondary)" : game.status === "BETA" ? "var(--accent-primary)" : "var(--text-muted)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                [{game.status}]
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
