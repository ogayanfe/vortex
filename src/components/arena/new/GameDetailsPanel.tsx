import React from "react";
import { Info } from "@/components/arena/GameIcons";
import { GameType } from "./constants";

interface GameDetailsPanelProps {
  selectedGame: GameType;
}

export function GameDetailsPanel({ selectedGame }: GameDetailsPanelProps) {
  return (
    <div className="w-full lg:w-[45%] flex flex-col gap-6">
      <div className="bg-[var(--glass-bg)] backdrop-blur-xl rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col sticky top-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-secondary)]/10 rounded-full blur-[40px] pointer-events-none" />

        <div className="p-5 md:p-6 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/40 flex items-center gap-3 relative z-10">
          <Info className="w-5 h-5 text-[var(--accent-secondary)] drop-shadow-[0_0_5px_rgba(0,255,204,0.5)]" />
          <h2 className="text-xl font-bold font-main text-[var(--text-primary)] uppercase m-0">Game Details</h2>
        </div>

        <div className="p-6 flex flex-col gap-6 relative z-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold font-main text-[var(--accent-secondary)] uppercase m-0 drop-shadow-[0_0_8px_rgba(0,255,204,0.3)]">
              {selectedGame.name}
            </h3>
            <div className="flex gap-4 items-center">
              <span className="bg-[var(--bg-secondary)] px-3 py-1 text-xs font-mono font-bold uppercase rounded border border-[var(--border-color)]/50 text-[var(--text-muted)]">
                Max Players: {selectedGame.maxPlayers}
              </span>
              <span className="bg-[var(--accent-secondary)]/10 px-3 py-1 text-xs font-mono font-bold uppercase rounded border border-[var(--accent-secondary)]/30 text-[var(--accent-secondary)]">
                Smart Contract
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-widest">About</h4>
            <p className="text-sm font-mono leading-relaxed text-[var(--text-primary)]">{selectedGame.description}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-widest border-b border-[var(--border-color)]/30 pb-2">
              How To Play
            </h4>
            <ul className="flex flex-col gap-3 m-0 p-0 list-none mt-2">
              {selectedGame.howToPlay.map((step, idx) => (
                <li key={idx} className="flex gap-3 items-start text-sm font-mono text-[var(--text-primary)] leading-relaxed">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-bold border border-[var(--accent-primary)]/30 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
