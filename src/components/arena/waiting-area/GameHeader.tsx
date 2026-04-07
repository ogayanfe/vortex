import React from "react";
import { Copy, Sparkles, ExternalLink, ShieldAlert } from "lucide-react";

interface GameHeaderProps {
  address: string;
  gameName: string;
  status: "Waiting" | "In_Progress" | "Completed";
  isPublic: boolean;
}

export function GameHeader({ address, gameName, status, isPublic }: GameHeaderProps) {
  // Format the address for display (e.g., 0x1234...5678)
  const shortAddress = `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;

  return (
    <div className="flex flex-col gap-4 w-full z-10">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl md:text-5xl font-bold font-main text-[var(--text-primary)] uppercase tracking-wider mb-2 flex items-center gap-4 drop-shadow-[0_0_15px_var(--accent-glow)]">
          {gameName} Arena
        </h1>
        <div className="flex gap-2">
          <span className="bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)] px-3 py-1 text-xs font-mono font-bold uppercase rounded border border-[var(--accent-secondary)]/50 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)] animate-pulse" />
            {status}
          </span>
          {!isPublic && (
            <span className="bg-rose-500/20 text-rose-400 px-3 py-1 text-xs font-mono font-bold uppercase rounded border border-rose-500/50 flex items-center gap-1">
              <ShieldAlert className="w-3 h-3" />
              Private Match
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 bg-[var(--bg-tertiary)]/50 border border-[var(--border-color)] p-2 rounded-xl self-start backdrop-blur-md">
        <span className="font-mono text-sm text-[var(--text-muted)] tracking-wider">Contract:</span>
        <code className="bg-[var(--bg-color)] px-3 py-1 rounded-lg text-[var(--accent-primary)] font-mono text-sm flex items-center gap-2 border border-[var(--accent-primary)]/30">
          <Sparkles className="w-4 h-4" /> {shortAddress}
        </code>
        <div className="flex gap-1 border-l border-[var(--border-color)] pl-2">
          <button
            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 rounded-md transition-colors"
            title="Copy Address"
          >
            <Copy className="w-4 h-4" />
          </button>
          <button
            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--accent-secondary)] hover:bg-[var(--accent-secondary)]/10 rounded-md transition-colors"
            title="View on Block Explorer"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
