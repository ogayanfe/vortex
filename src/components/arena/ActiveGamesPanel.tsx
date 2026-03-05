import React from "react";
import { Flame, Trophy, Users, ChevronRight } from "./Icons";

export function ActiveGamesPanel() {
  const games = [
    { title: "Ethereum Bulls vs Bears", players: 34, pool: "2.5 ETH", tokens: ["ETH"], tag: "High Stakes" },
    { title: "Solana Speed Run #22", players: 12, pool: "150 SOL", tokens: ["SOL"], tag: "Quick Match" },
    { title: "Polygon Chaos Match", players: 64, pool: "5,000 MATIC", tokens: ["MATIC"], tag: "Tournament" },
    { title: "Defi Degens Battle", players: 8, pool: "0.5 ETH", tokens: ["ETH", "USDC"], tag: "Private" },
  ];

  return (
    <div className="flex-grow flex flex-col bg-[var(--glass-bg)] backdrop-blur-xl rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]" />

      <div className="p-5 md:p-6 flex items-center justify-between border-b border-[var(--border-color)] flex-shrink-0 bg-[var(--bg-secondary)]/30">
        <h2 className="text-xl md:text-2xl font-bold font-main text-[var(--text-primary)] uppercase m-0 flex items-center gap-3">
          <Flame className="w-6 h-6 text-[var(--accent-secondary)] drop-shadow-[0_0_8px_rgba(0,255,204,0.5)]" />
          Live Games
        </h2>
        <div className="flex items-center gap-2 bg-[var(--accent-secondary)]/10 px-4 py-1.5 rounded-full border border-[var(--accent-secondary)]/30 backdrop-blur-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_8px_var(--accent-secondary)] animate-pulse" />
          <span className="text-xs font-mono font-bold text-[var(--accent-secondary)] tracking-widest uppercase">Live</span>
        </div>
      </div>

      {/* Games List */}
      <div className="overflow-y-auto p-5 md:p-6 gap-5 custom-scrollbar flex-grow">
        {games.map((game, i) => (
          <div
            key={i}
            className="group mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[var(--bg-tertiary)]/70 border border-[var(--border-color)]/30 p-4 md:p-5 rounded-xl hover:bg-[var(--bg-secondary)] hover:border-[var(--accent-primary)]/60 hover:shadow-[0_4px_20px_var(--accent-glow)] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-primary)]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="flex items-center gap-5 w-full sm:w-auto mb-4 sm:mb-0 relative z-10">
              <div className="relative flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--bg-color)] to-[var(--bg-secondary)] border border-[var(--border-color)]/50 shadow-[inset_0_0_15px_rgba(0,0,0,0.1)] group-hover:border-[var(--accent-primary)]/50 transition-colors">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-lg">
                  {game.tokens[0]}
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-[var(--text-primary)] text-lg md:text-xl m-0 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--text-primary)] group-hover:to-[var(--accent-secondary)] transition-colors">
                    {game.title}
                  </h3>
                  <span className="hidden md:inline-block px-2.5 py-0.5 rounded text-[0.65rem] font-bold font-mono uppercase bg-[var(--bg-color)] text-[var(--text-muted)] border border-[var(--border-color)]/40 shadow-sm">
                    {game.tag}
                  </span>
                </div>
                <div className="flex items-center gap-5 mt-2 font-mono text-xs md:text-sm text-[var(--text-muted)]">
                  <div className="flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-[var(--accent-primary)] drop-shadow-[0_0_3px_var(--accent-glow)]" />
                    <span className="text-[var(--text-primary)] font-semibold">{game.pool}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[var(--accent-secondary)] drop-shadow-[0_0_3px_rgba(0,255,204,0.4)]" />
                    <span className="text-[var(--text-primary)] font-semibold">
                      {game.players} <span className="opacity-60 font-normal">Players</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className="relative z-10 w-full sm:w-auto bg-[var(--bg-color)] hover:bg-[var(--accent-primary)] hover:text-white text-[var(--text-primary)] border border-[var(--border-color)] px-6 py-2.5 rounded-lg text-sm font-bold font-main tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 group/btn hover:shadow-[0_4px_15px_var(--accent-glow)]">
              Spectate
              <ChevronRight className="w-4 h-4 opacity-50 group-hover/btn:text-white group-hover/btn:translate-x-1 group-hover/btn:opacity-100 transition-all" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
