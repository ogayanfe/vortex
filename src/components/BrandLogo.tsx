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
    <Link href="/" className="flex items-center gap-3 no-underline text-text-primary">
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
          className="font-extrabold uppercase tracking-[2px]"
          style={{
            fontSize: textSize,
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
