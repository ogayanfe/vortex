import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { WalletConnect } from "@/components/WalletConnect";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header
      style={{
        background: "var(--bg-secondary)",
        borderBottom: "2px solid var(--border-color)",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 50,
      }}
    >
      {/* Left side */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <BrandLogo size={30} />

        <nav style={{ display: "flex", gap: "1.5rem" }} className="desktop-nav">
          <Link href="/arena" className="nav-link">
            ARENA
          </Link>
          <Link href="/launch" className="nav-link">
            NEW GAME
          </Link>
          <Link href="/account" className="nav-link">
            ACCOUNT
          </Link>
        </nav>
      </div>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <ThemeToggle />
        <WalletConnect />
      </div>
    </header>
  );
}
