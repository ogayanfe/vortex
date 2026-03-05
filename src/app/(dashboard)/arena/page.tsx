import React from "react";
import { Swords } from "@/components/arena/Icons";
import { ActiveGamesPanel } from "@/components/arena/ActiveGamesPanel";
import { JoinGamePanel } from "@/components/arena/JoinGamePanel";

export default function Page() {
  return (
    <div className="h-full p-4 md:p-6 lg:p-8 flex flex-col gap-6 lg:gap-8 overflow-hidden bg-transparent relative">
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--accent-primary)]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent-secondary)]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Page Header */}
      <div className="flex justify-between items-end flex-shrink-0 z-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold font-main text-[var(--text-primary)] uppercase tracking-wider mb-2 flex items-center gap-4 drop-shadow-[0_0_15px_var(--accent-glow)]">
            <Swords className="w-8 h-8 md:w-10 md:h-10 text-[var(--accent-primary)] drop-shadow-[0_0_8px_var(--accent-glow)]" />
            Arena
          </h1>
          <p className="text-[var(--text-muted)] font-mono text-sm md:text-base border-l-2 border-[var(--accent-primary)] pl-3">
            Join ongoing battles or enter a specific match code.
          </p>
        </div>
      </div>

      {/* Main Content: 2 Columns */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 flex-grow min-h-0 z-10">
        <ActiveGamesPanel />
        <JoinGamePanel />
      </div>
    </div>
  );
}
