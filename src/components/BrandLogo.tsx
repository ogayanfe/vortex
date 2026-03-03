import Link from "next/link";

interface BrandLogoProps {
  logoColor?: string;
  textColor?: string;
  size?: number;
  showText?: boolean;
}

export function BrandLogo({ logoColor = "var(--accent-primary)", textColor = "var(--accent-primary)", size = 40, showText = true }: BrandLogoProps) {
  const textSize = `${size * 0.05}rem`;

  return (
    <Link
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        textDecoration: "none",
        color: "var(--text-primary)",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={logoColor}
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        style={{ filter: "drop-shadow(0 0 10px var(--accent-glow))" }}
      >
        <path d="M2 12l10-10 10 10-10 10z" />
        <path d="M8 12l4-4 4 4-4 4z" />
      </svg>
      {showText && (
        <span
          style={{
            fontSize: textSize,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "0 0 15px var(--accent-glow)",
            color: textColor,
          }}
        >
          VORTEX
        </span>
      )}
    </Link>
  );
}
