"use client";

import React, { useState } from "react";
import { Gamepad2 } from "@/components/arena/GameIcons";
import { GAMES_LIST, GameType } from "@/components/arena/new/constants";
import { GameSelectionPanel } from "@/components/arena/new/GameSelectionPanel";
import { MatchConfigPanel } from "@/components/arena/new/MatchConfigPanel";
import { GameDetailsPanel } from "@/components/arena/new/GameDetailsPanel";

export default function NewGamePage() {
  const [selectedGame, setSelectedGame] = useState<GameType>(GAMES_LIST[0]);

  // States originally scoped to the Match Configuration component logic
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [password, setPassword] = useState("");
  const [bountyType, setBountyType] = useState<"fixed" | "custom">("fixed");
  const [bountyAmount, setBountyAmount] = useState<string>("0.1");

  return (
    <div className="w-full h-full p-4 md:p-6 lg:p-8 flex flex-col gap-6 lg:gap-8 bg-transparent relative overflow-x-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent-primary)]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[var(--accent-secondary)]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Page Header */}
      <div className="flex flex-col z-10 w-full mb-2">
        <h1 className="text-3xl md:text-5xl font-bold font-main text-[var(--text-primary)] uppercase tracking-wider mb-2 flex items-center gap-4 drop-shadow-[0_0_15px_var(--accent-glow)]">
          <Gamepad2 className="w-8 h-8 md:w-10 md:h-10 text-[var(--accent-primary)] drop-shadow-[0_0_8px_var(--accent-glow)]" />
          Create Match
        </h1>
        <p className="text-[var(--text-muted)] font-mono text-sm md:text-base border-l-2 border-[var(--accent-primary)] pl-3">
          Launch a new game into the arena. Configure rules and entry fees.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 w-full z-10 flex-shrink-0">
        <GameSelectionPanel selectedGame={selectedGame} setSelectedGame={setSelectedGame} />

        <div className="w-full xl:w-2/3 flex flex-col lg:flex-row gap-6 lg:gap-8">
          <MatchConfigPanel
            isPrivate={isPrivate}
            setIsPrivate={setIsPrivate}
            password={password}
            setPassword={setPassword}
            bountyType={bountyType}
            setBountyType={setBountyType}
            bountyAmount={bountyAmount}
            setBountyAmount={setBountyAmount}
          />

          <GameDetailsPanel selectedGame={selectedGame} />
        </div>
      </div>
    </div>
  );
}
