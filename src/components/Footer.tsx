export function Footer() {
  return (
    <footer
      style={{
        borderTop: "2px solid var(--border-color)",
        padding: "4rem 0 2rem",
        background: "rgba(5, 5, 5, 0.9)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
            style={{ filter: "drop-shadow(0 0 10px var(--accent-glow))" }}
          >
            <path d="M2 12l10-10 10 10-10 10z" />
          </svg>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              letterSpacing: "2px",
              color: "var(--accent-primary)",
              textShadow: "0 0 10px var(--accent-glow)",
            }}
          >
            VORTEX
          </span>
        </div>

        <p
          className="font-mono"
          style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "2rem", textShadow: "0 0 5px rgba(255,255,255,0.3)" }}
        >
          MULTIPLAYER WEB3 ARENA
        </p>

        <div style={{ display: "flex", gap: "2rem", marginBottom: "3rem" }}>
          <a href="#" className="nav-link">
            TWITTER
          </a>
          <a href="#" className="nav-link">
            DISCORD
          </a>
          <a href="#" className="nav-link">
            GITHUB
          </a>
          <a href="#" className="nav-link">
            DOCS
          </a>
        </div>

        <div
          style={{
            width: "100%",
            borderTop: "1px solid var(--border-color)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1rem",
            color: "var(--text-muted)",
          }}
        >
          <span className="font-mono">© {new Date().getFullYear()} VORTEX PROTOCOL.</span>
          <span className="font-mono" style={{ color: "var(--accent-secondary)", textShadow: "0 0 5px var(--accent-secondary)" }}>
            SYSTEM: ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
}
