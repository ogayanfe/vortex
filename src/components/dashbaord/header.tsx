"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { WalletConnect } from "@/components/WalletConnect";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/arena", label: "ARENA" },
  { href: "/new", label: "NEW GAME" },
  { href: "/account", label: "ACCOUNT" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-bg-secondary border-b-2 border-border-color p-4 flex justify-between items-center z-50">
      {/* Left side */}
      <div className="flex items-center gap-8">
        <BrandLogo size={30} />

        <nav className="flex gap-6 desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname.includes(link.href) ? "text-[var(--accent-secondary)] drop-shadow-[0_0_8px_rgba(0,255,204,0.6)]" : ""}`}
            >
              {link.label}
            </Link>
          ))}
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
