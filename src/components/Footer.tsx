export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        padding: "4rem 0 2rem",
        background: "var(--bg-secondary)",
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <span style={{ fontSize: "1rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>VORTEX</span>
        </div>

        <p className="font-mono" style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
          Adversarial Staking Protocol
        </p>

        <div style={{ display: "flex", gap: "2rem", marginBottom: "3rem" }}>
          <a href="#" className="nav-link">
            Twitter
          </a>
          <a href="#" className="nav-link">
            Discord
          </a>
          <a href="#" className="nav-link">
            GitHub
          </a>
          <a href="#" className="nav-link">
            Docs
          </a>
        </div>

        <div
          style={{
            width: "100%",
            borderTop: "1px solid var(--border-color)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.875rem",
            color: "var(--text-muted)",
          }}
        >
          <span className="font-mono">© {new Date().getFullYear()} VORTEX PROTOCOL.</span>
          <span className="font-mono">BUILT FOR THE BOLD.</span>
        </div>
      </div>
    </footer>
  );
}
