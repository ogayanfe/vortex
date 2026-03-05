import React from "react";
import { Gamepad2, Check } from "@/components/arena/GameIcons";
import { GameType, GAMES_LIST } from "./constants";

interface GameSelectionPanelProps {
  selectedGame: GameType;
  setSelectedGame: (game: GameType) => void;
}

export function GameSelectionPanel({ selectedGame, setSelectedGame }: GameSelectionPanelProps) {
  return (
    <div className="w-full xl:w-1/3 flex flex-col gap-6">
      <div className="bg-[var(--glass-bg)] backdrop-blur-xl rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col">
        <div className="p-5 md:p-6 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/40 flex items-center gap-3">
          <Gamepad2 className="w-5 h-5 text-[var(--accent-secondary)]" />
          <h2 className="text-xl font-bold font-main text-[var(--text-primary)] uppercase m-0">Select Game</h2>
        </div>

        <div className="p-5 flex flex-col gap-4">
          {GAMES_LIST.map((game) => (
            <div
              key={game.id}
              onClick={() => setSelectedGame(game)}
              className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                selectedGame.id === game.id
                  ? "bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] shadow-[0_4px_15px_var(--accent-glow)]"
                  : "bg-[var(--bg-tertiary)]/50 border-[var(--border-color)]/30 hover:border-[var(--accent-primary)]/50"
              }`}
            >
              <div className="flex justify-between items-start mb-2 relative z-10">
                <h3
                  className={`font-bold text-lg transition-colors ${selectedGame.id === game.id ? "text-[var(--accent-primary)]" : "text-[var(--text-primary)] group-hover:text-[var(--accent-secondary)]"}`}
                >
                  {game.name}
                </h3>
                {selectedGame.id === game.id && (
                  <div className="bg-[var(--accent-primary)] rounded-full p-1 shadow-[0_0_8px_var(--accent-glow)]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              <p className="font-mono text-xs text-[var(--text-muted)] leading-relaxed m-0 relative z-10">{game.shortDesc}</p>

              {selectedGame.id === game.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/0 via-[var(--accent-primary)]/5 to-transparent pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
