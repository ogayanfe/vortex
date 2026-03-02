"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function SupportedGames() {
  const games = [
    {
      id: "whot",
      name: "WHOT",
      status: "ONLINE",
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
    <section
      id="games"
      style={{
        padding: "6rem 0",
        background:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')",
      }}
    >
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
            borderBottom: "2px solid var(--border-highlight)",
            paddingBottom: "1.5rem",
          }}
        >
          <div>
            <h2 style={{ color: "var(--accent-secondary)", textShadow: "0 0 10px var(--accent-secondary)" }}>ACTIVE ARENAS</h2>
            <p style={{ color: "var(--text-primary)" }}>Select arena. Set stake. Challenge.</p>
          </div>
          <Link href="/games" className="secondary-btn" style={{ display: "none" }}>
            VIEW ALL
          </Link>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {games.map((game, i) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto auto auto",
                alignItems: "center",
                gap: "3rem",
                padding: "1.5rem 2rem",
                borderLeft: "4px solid var(--accent-primary)",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
              whileHover={{
                borderLeftWidth: "12px",
                borderColor: "var(--accent-secondary)",
                boxShadow: "0 0 20px rgba(0,255,204,0.2) inset, 0 0 20px rgba(0,255,204,0.2)",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "2rem",
                  letterSpacing: "2px",
                  color: "var(--text-primary)",
                  textShadow: "0 0 10px var(--text-glow-white)",
                }}
              >
                {game.name}
              </div>
              <div className="font-mono" style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
                MODE: <span style={{ color: "var(--text-primary)" }}>{game.players}</span>
              </div>
              <div className="font-mono" style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
                STAKE: <span style={{ color: "var(--text-primary)" }}>{game.stake}</span>
              </div>
              <div
                className="font-mono status-badge"
                style={{
                  color:
                    game.status === "ONLINE" ? "var(--accent-secondary)" : game.status === "BETA" ? "var(--accent-primary)" : "var(--text-muted)",
                  borderColor:
                    game.status === "ONLINE" ? "var(--accent-secondary)" : game.status === "BETA" ? "var(--accent-primary)" : "var(--text-muted)",
                  fontSize: "1rem",
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
