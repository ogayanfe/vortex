import React from "react";
import { ChevronRight } from "./Icons";

export function JoinGamePanel() {
  return (
    <div className="flex-shrink-0 w-full lg:w-[380px] xl:w-[420px] flex flex-col gap-6 z-10">
      <div className="bg-[var(--glass-bg)] backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-[var(--border-color)] flex flex-col h-full flex-grow relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent-primary)]/10 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--accent-secondary)]/10 rounded-full blur-[50px] pointer-events-none" />

        <div className="mb-8 relative z-10">
          <h2 className="text-2xl font-bold font-main text-[var(--text-primary)] uppercase m-0 mb-3 tracking-wide flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[var(--accent-primary)] rounded-full shadow-[0_0_10px_var(--accent-glow)]"></span>
            Enter Arena
          </h2>
          <p className="text-sm font-mono text-[var(--text-muted)] leading-relaxed">
            Got an invite code or match address? Enter it below to join the battle immediately.
          </p>
        </div>

        <div className="flex flex-col gap-5 mt-auto mb-auto relative z-10">
          <div className="flex flex-col gap-2.5">
            <label className="text-xs font-mono text-[var(--text-primary)] uppercase tracking-widest pl-1 font-bold flex items-center justify-between">
              <span>Match Code</span>
              <span className="text-[0.65rem] text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 px-2 py-0.5 rounded border border-[var(--accent-primary)]/20">
                Required
              </span>
            </label>
            <div className="relative group/input">
              <input
                type="text"
                placeholder="e.g. VORTEX-9X or 0x123..."
                className="bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-primary)] font-mono text-sm p-4 rounded-xl focus:outline-none focus:border-[var(--accent-primary)] focus:bg-[var(--bg-tertiary)] transition-all w-full placeholder:text-[var(--text-muted)]/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] group-hover/input:border-[var(--accent-primary)]/50"
              />
              <div className="absolute inset-0 rounded-xl border border-transparent pointer-events-none group-focus-within/input:border-[var(--accent-primary)]/50 group-focus-within/input:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-500" />
            </div>
          </div>

          <button className="relative w-full overflow-hidden bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold py-4 rounded-xl text-sm font-main uppercase tracking-widest shadow-[0_4px_15px_var(--accent-glow)] hover:shadow-[0_6px_25px_var(--accent-glow)] transition-all duration-300 transform hover:-translate-y-1 group/joinbtn mt-2">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover/joinbtn:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">
              Join Match
              <ChevronRight className="w-5 h-5 opacity-70 group-hover/joinbtn:translate-x-1 group-hover/joinbtn:opacity-100 transition-all drop-shadow-md" />
            </span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border-color)]/50 flex flex-col items-center justify-center text-center gap-4 relative z-10">
          <p className="text-xs font-mono text-[var(--text-muted)]">Don't have a code?</p>
          <button className="text-sm font-main font-bold text-[var(--accent-secondary)] bg-[var(--bg-color)] hover:bg-[var(--bg-tertiary)] px-6 py-3 rounded-xl border border-[var(--accent-secondary)]/50 transition-all uppercase tracking-widest w-full hover:border-[var(--accent-secondary)] hover:shadow-[0_0_15px_rgba(0,255,204,0.3)] hover:-translate-y-0.5">
            Create Match
          </button>
        </div>
      </div>
    </div>
  );
}
