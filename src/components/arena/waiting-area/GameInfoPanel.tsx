import React from "react";
import { Gamepad2, ShieldCheck, Zap } from "lucide-react";

interface GameInfoPanelProps {
  gameName: string;
  shortDesc: string;
  description: string;
  howToPlay: string[];
}

export function GameInfoPanel({ gameName, shortDesc, description, howToPlay }: GameInfoPanelProps) {
  return (
    <div className="bg-[var(--glass-bg)] backdrop-blur-xl rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col relative z-10 w-full transition-all duration-300">
      <div className="p-5 md:p-6 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/40 flex items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-3">
          <Gamepad2 className="w-5 h-5 text-[var(--text-primary)]" />
          <h2 className="text-xl font-bold font-main text-[var(--text-primary)] uppercase m-0">About {gameName}</h2>
        </div>
      </div>

      <div className="p-6 flex flex-col md:flex-row gap-8 relative z-10">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-lg font-bold font-main text-[var(--accent-secondary)] uppercase m-0 drop-shadow-[0_0_8px_rgba(0,255,204,0.3)]">
            {shortDesc}
          </h3>
          <p className="text-sm font-mono leading-relaxed text-[var(--text-primary)] text-justify">{description}</p>

          <div className="flex gap-4 mt-2 border-t border-[var(--border-color)]/30 pt-4">
            <span className="flex items-center gap-2 bg-[var(--bg-tertiary)]/50 px-3 py-1.5 text-xs font-mono font-bold uppercase rounded-lg border border-[var(--border-color)] text-[var(--text-muted)]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% On-Chain
            </span>
            <span className="flex items-center gap-2 bg-[var(--bg-tertiary)]/50 px-3 py-1.5 text-xs font-mono font-bold uppercase rounded-lg border border-[var(--border-color)] text-[var(--text-muted)]">
              <Zap className="w-4 h-4 text-amber-400" />
              Instant Payout
            </span>
          </div>
        </div>

        <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[var(--border-color)] to-transparent" />

        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <h4 className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-widest border-b border-[var(--border-color)]/30 pb-2 flex items-center gap-2">
            <Gamepad2 className="w-4 h-4" /> How To Play
          </h4>
          <ul className="flex flex-col gap-3 m-0 p-0 list-none mt-2">
            {howToPlay.map((step, idx) => (
              <li
                key={idx}
                className="flex gap-3 items-start text-sm font-mono text-[var(--text-primary)] leading-relaxed bg-[var(--bg-color)] p-3 rounded-xl border border-[var(--border-color)]/40 shadow-sm relative overflow-hidden group hover:border-[var(--accent-primary)]/50 transition-all"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent-primary)]/50 group-hover:bg-[var(--accent-primary)] transition-colors" />
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-bold border border-[var(--accent-primary)]/30">
                  {idx + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
