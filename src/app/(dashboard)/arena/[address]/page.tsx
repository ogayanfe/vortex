"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { GAMES_LIST, GameType } from "@/components/arena/new/constants";
import { GameHeader } from "@/components/arena/waiting-area/GameHeader";
import { MatchDetailsCard } from "@/components/arena/waiting-area/MatchDetailsCard";
import { ParticipantListCard } from "@/components/arena/waiting-area/ParticipantListCard";
import { GameInfoPanel } from "@/components/arena/waiting-area/GameInfoPanel";

export default function GameWaitingRoomPage() {
  const params = useParams();
  const address = params.address as string;

  // Mocking fetched contract data based on what a game lobby needs:
  const [loading, setLoading] = useState(true);
  const [matchData, setMatchData] = useState<{
    game: GameType;
    status: "Waiting" | "In_Progress" | "Completed";
    isPublic: boolean;
    bountyType: "fixed" | "custom";
    bountyAmount: string;
    participants: { address: string; joinedAt: string; isCreator?: boolean }[];
  } | null>(null);

  useEffect(() => {
    // Simulate fetching game details from the blockchain given an `address`
    const fetchGame = async () => {
      setLoading(true);
      setTimeout(() => {
        // Randomly pick Ludo or Whot for mock visuals if real data isn't connected
        setMatchData({
          game: GAMES_LIST[0], // Ludo by default for display
          status: "Waiting",
          isPublic: true,
          bountyType: "fixed",
          bountyAmount: "0.15",
          participants: [
            { address: "0x1a2B...3c4D", joinedAt: "2 mins ago", isCreator: true },
            { address: "0x9f8E...7d6C", joinedAt: "Just now" },
          ],
        });
        setLoading(false);
      }, 1000);
    };

    fetchGame();
  }, [address]);

  // Loading Skeleton State
  if (loading || !matchData) {
    return (
      <div className="w-full h-full p-4 md:p-6 lg:p-8 flex items-center justify-center bg-transparent">
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <div className="w-16 h-16 rounded-full border-t-4 border-[var(--accent-primary)] animate-spin" />
          <p className="font-mono text-[var(--accent-primary)] font-bold tracking-widest uppercase">Fetching Match Data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-4 md:p-6 lg:p-8 flex flex-col gap-6 lg:gap-8 bg-transparent relative overflow-x-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent-primary)]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[var(--accent-secondary)]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Header & Copy Actions */}
      <GameHeader address={address} gameName={matchData.game.name} status={matchData.status} isPublic={matchData.isPublic} />

      {/* Core Panels (Cards Side-by-side on large screens) */}
      <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 w-full z-10 flex-shrink-0">
        <MatchDetailsCard
          maxPlayers={matchData.game.maxPlayers}
          currentPlayers={matchData.participants.length}
          bountyType={matchData.bountyType}
          bountyAmount={matchData.bountyAmount}
        />

        <ParticipantListCard maxPlayers={matchData.game.maxPlayers} participants={matchData.participants} />
      </div>

      {/* Auxiliary Info below (Game how to play details etc) */}
      <div className="w-full z-10">
        <GameInfoPanel
          gameName={matchData.game.name}
          shortDesc={matchData.game.shortDesc}
          description={matchData.game.description}
          howToPlay={matchData.game.howToPlay}
        />
      </div>

      {/* Spacer to prevent hidden content behind bottom action bar */}
      <div className="h-24 w-full flex-shrink-0" />

      {/* Sticky Action Bar (For Joining) */}
      <div className="fixed bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-[var(--bg-color)] via-[var(--bg-color)]/95 to-transparent z-50 flex justify-center border-t border-[var(--border-color)]/30 xl:left-[var(--sidebar-width)] xl:w-[calc(100%-var(--sidebar-width))]">
        <div className="w-full max-w-4xl flex items-center justify-between gap-4 bg-[var(--glass-bg)] backdrop-blur-xl p-4 md:px-6 md:py-4 rounded-2xl border border-[var(--border-color)] shadow-[0_-5px_30px_rgba(0,0,0,0.5)]">
          <div className="flex-col hidden sm:flex">
            <span className="font-bold text-[var(--text-primary)] font-main uppercase text-lg hidden md:block">Join Tournament</span>
            <span className="font-mono text-[var(--accent-secondary)] text-sm">Entry: {matchData.bountyAmount} Tokens</span>
          </div>

          <button className="flex-1 sm:flex-none relative overflow-hidden bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold py-3 md:py-4 px-8 rounded-xl text-sm md:text-base font-main uppercase tracking-widest shadow-[0_4px_15px_var(--accent-glow)] hover:shadow-[0_6px_25px_var(--accent-glow)] transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10 drop-shadow-md whitespace-nowrap">Pay & Join Match</span>
          </button>
        </div>
      </div>
    </div>
  );
}
