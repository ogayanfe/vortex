import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { WalletConnect } from "@/components/WalletConnect";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="bg-bg-secondary border-b-2 border-border-color p-4 flex justify-between items-center z-50">
      {/* Left side */}
      <div className="flex items-center gap-8">
        <BrandLogo size={30} />

        <nav className="flex gap-6 desktop-nav">
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
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <WalletConnect />
      </div>
    </header>
  );
}
