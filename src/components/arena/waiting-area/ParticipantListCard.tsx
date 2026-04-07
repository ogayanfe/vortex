import React from "react";
import { Users, AlertCircle } from "lucide-react";

interface ParticipantListCardProps {
  maxPlayers: number;
  participants: Array<{ address: string; joinedAt: string; isCreator?: boolean }>;
}

export function ParticipantListCard({ maxPlayers, participants }: ParticipantListCardProps) {
  // Pad the array to show empty slots
  const slots = Array.from({ length: maxPlayers }, (_, i) => participants[i] || null);

  return (
    <div className="bg-[var(--glass-bg)] backdrop-blur-xl rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col h-full relative z-10 w-full xl:w-2/3 transition-all duration-300">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-primary)]/10 rounded-full blur-[40px] pointer-events-none" />

      <div className="p-5 md:p-6 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/40 flex items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-[var(--accent-primary)] drop-shadow-[0_0_5px_var(--accent-glow)]" />
          <h2 className="text-xl font-bold font-main text-[var(--text-primary)] uppercase m-0">Participants</h2>
        </div>
        <span className="text-xs font-mono font-bold text-[var(--text-muted)] bg-[var(--bg-tertiary)] px-3 py-1 rounded border border-[var(--border-color)]">
          {participants.length} / {maxPlayers} Joined
        </span>
      </div>

      <div className="p-6 flex flex-col gap-4 relative z-10 h-full overflow-y-auto">
        {slots.map((participant, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
              participant
                ? "bg-[var(--bg-tertiary)]/50 border-[var(--border-color)]/50 hover:border-[var(--accent-primary)]/30"
                : "bg-transparent border-dashed border-[var(--border-color)]/30"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border font-mono ${
                  participant
                    ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border-[var(--accent-primary)]/30"
                    : "bg-[var(--bg-color)] text-[var(--text-muted)] border-[var(--border-color)]/30"
                }`}
              >
                {idx + 1}
              </div>

              <div className="flex flex-col gap-1">
                {participant ? (
                  <>
                    <span className="font-mono text-sm text-[var(--text-primary)] font-bold flex items-center gap-2">
                      {participant.address}
                      {participant.isCreator && (
                        <span className="text-[10px] uppercase bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)] px-2 py-0.5 rounded-full border border-[var(--accent-secondary)]/30">
                          Host
                        </span>
                      )}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">Joined {participant.joinedAt}</span>
                  </>
                ) : (
                  <span className="text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full border border-[var(--text-muted)] flex items-center justify-center">
                      <span className="w-1 h-1 bg-[var(--text-muted)]/50 rounded-full animate-pulse" />
                    </span>
                    Waiting for player...
                  </span>
                )}
              </div>
            </div>

            {participant && (
              <div className="text-xs font-mono font-bold text-[var(--accent-secondary)] bg-[var(--accent-secondary)]/10 px-3 py-1.5 rounded border border-[var(--accent-secondary)]/20 shadow-sm">
                Paid Stake
              </div>
            )}
          </div>
        ))}

        {participants.length < maxPlayers && (
          <div className="flex items-start gap-3 mt-4 text-xs font-mono text-[var(--text-muted)] p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
            <AlertCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="m-0">
              The game smart contract will automatically lock the funds and kick off the match once all{" "}
              <strong className="text-orange-400">{maxPlayers}</strong> slots have been successfully filled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
