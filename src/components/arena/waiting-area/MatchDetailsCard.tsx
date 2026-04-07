import React from "react";
import { Users, Clock, Award, Handshake } from "lucide-react";

interface MatchDetailsCardProps {
  maxPlayers: number;
  currentPlayers: number;
  bountyType: "fixed" | "custom";
  bountyAmount: string;
}

export function MatchDetailsCard({ maxPlayers, currentPlayers, bountyType, bountyAmount }: MatchDetailsCardProps) {
  return (
    <div className="bg-[var(--glass-bg)] backdrop-blur-xl rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col h-full relative z-10 w-full xl:w-1/3 transition-all duration-300">
      <div className="p-5 md:p-6 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/40 flex items-center gap-3 relative z-10">
        <Handshake className="w-5 h-5 text-[var(--accent-secondary)] drop-shadow-[0_0_5px_rgba(0,255,204,0.5)]" />
        <h2 className="text-xl font-bold font-main text-[var(--text-primary)] uppercase m-0">Match Rules</h2>
      </div>

      <div className="p-6 flex flex-col gap-6 relative z-10 h-full">
        <div className="flex flex-col gap-2">
          <h3 className="text-[var(--text-muted)] text-sm font-bold uppercase tracking-widest font-mono border-b border-[var(--border-color)]/50 pb-2 flex justify-between items-center">
            <span>Participants</span>
            <span className="text-[var(--text-primary)] bg-[var(--bg-color)] px-2 py-0.5 rounded border border-[var(--border-color)]">
              {currentPlayers}/{maxPlayers}
            </span>
          </h3>
          <div className="flex items-center gap-4 bg-[var(--bg-tertiary)]/30 p-4 rounded-xl border border-[var(--border-color)]/30">
            <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)]/10 flex flex-shrink-0 items-center justify-center text-[var(--accent-primary)] border border-[var(--accent-primary)]/30">
              <Users className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[var(--text-primary)] text-sm">Target Capacity</span>
              <span className="text-xs text-[var(--text-muted)] font-mono">Game starts when {maxPlayers} players join</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 h-full">
          <h3 className="text-[var(--text-muted)] text-sm font-bold uppercase tracking-widest font-mono border-b border-[var(--border-color)]/50 pb-2 flex justify-between items-center">
            <span>Prize Pool</span>
          </h3>
          <div className="flex flex-col items-center justify-center gap-2 bg-[var(--bg-tertiary)]/30 p-6 rounded-xl border border-[var(--border-color)]/30 flex-grow relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[var(--accent-primary)]/10 blur-[40px] rounded-full pointer-events-none" />

            <Award className="w-10 h-10 text-[var(--accent-primary)] drop-shadow-[0_0_8px_var(--accent-glow)] mb-2" />

            <div className="flex items-end gap-2 text-[var(--text-primary)]">
              <span className="text-4xl font-bold font-mono tracking-tighter tabular-nums drop-shadow-md">
                {bountyType === "fixed" ? (Number(bountyAmount) * maxPlayers).toFixed(2) : bountyAmount}
              </span>
              <span className="text-sm font-bold uppercase mb-1 text-[var(--accent-secondary)]">Tokens</span>
            </div>

            <span className="text-xs text-[var(--text-muted)] font-mono bg-[var(--bg-color)] px-3 py-1 rounded-full border border-[var(--border-color)] mt-2">
              {bountyType === "fixed" ? `${bountyAmount} Entry per player` : "Custom Reward Structure"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
