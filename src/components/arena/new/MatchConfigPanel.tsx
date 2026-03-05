import React from "react";
import { Settings, Shield, Lock, Globe, DollarSign, Wallet } from "@/components/arena/GameIcons";

interface MatchConfigPanelProps {
  isPrivate: boolean;
  setIsPrivate: (val: boolean) => void;
  password: string;
  setPassword: (val: string) => void;
  bountyType: "fixed" | "custom";
  setBountyType: (val: "fixed" | "custom") => void;
  bountyAmount: string;
  setBountyAmount: (val: string) => void;
}

export function MatchConfigPanel({
  isPrivate,
  setIsPrivate,
  password,
  setPassword,
  bountyType,
  setBountyType,
  bountyAmount,
  setBountyAmount,
}: MatchConfigPanelProps) {
  return (
    <div className="w-full lg:w-[55%] flex flex-col gap-6">
      <div className="bg-[var(--glass-bg)] backdrop-blur-xl rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col">
        <div className="p-5 md:p-6 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/40 flex items-center gap-3">
          <Settings className="w-5 h-5 text-[var(--accent-primary)] drop-shadow-[0_0_5px_var(--accent-glow)]" />
          <h2 className="text-xl font-bold font-main text-[var(--text-primary)] uppercase m-0">Match Configuration</h2>
        </div>

        <div className="p-6 flex flex-col gap-8">
          {/* Privacy Settings */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold font-main text-[var(--text-primary)] uppercase flex items-center gap-2 tracking-widest">
              <Shield className="w-4 h-4 text-[var(--accent-secondary)]" />
              Privacy & Access
            </h3>

            <div className="flex bg-[var(--bg-tertiary)] rounded-xl border border-[var(--border-color)]/30 p-1">
              <button
                onClick={() => {
                  setIsPrivate(false);
                  setPassword("");
                }}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold font-main uppercase tracking-widest transition-all flex justify-center items-center gap-2 ${
                  !isPrivate
                    ? "bg-[var(--bg-secondary)] text-[var(--text-primary)] shadow-md border border-[var(--border-color)]/50"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <Globe className="w-4 h-4" /> Public
              </button>
              <button
                onClick={() => setIsPrivate(true)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold font-main uppercase tracking-widest transition-all flex justify-center items-center gap-2 ${
                  isPrivate
                    ? "bg-[var(--bg-secondary)] text-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-glow)] border border-[var(--accent-primary)]/50"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <Lock className="w-4 h-4" /> Private
              </button>
            </div>

            {isPrivate && (
              <div className="flex flex-col gap-2 mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest pl-1 font-bold">Match Password</label>
                <input
                  type="password"
                  placeholder="Enter secure password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-primary)] font-mono text-sm p-3.5 rounded-xl focus:outline-none focus:border-[var(--accent-primary)] focus:bg-[var(--bg-tertiary)] transition-all w-full shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]"
                />
              </div>
            )}
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />

          {/* Bounty Settings */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold font-main text-[var(--text-primary)] uppercase flex items-center gap-2 tracking-widest">
              <DollarSign className="w-4 h-4 text-[var(--accent-secondary)]" />
              Reward Structure
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              <div
                onClick={() => setBountyType("fixed")}
                className={`cursor-pointer border p-4 rounded-xl flex flex-col gap-2 transition-all duration-300 ${
                  bountyType === "fixed"
                    ? "bg-[var(--accent-secondary)]/10 border-[var(--accent-secondary)] shadow-[0_0_15px_rgba(0,255,204,0.15)]"
                    : "bg-[var(--bg-tertiary)]/50 border-[var(--border-color)]/30 hover:border-[var(--accent-secondary)]/50"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`font-main font-bold uppercase text-sm ${bountyType === "fixed" ? "text-[var(--accent-secondary)]" : "text-[var(--text-primary)]"}`}
                  >
                    Fixed Entry
                  </span>
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${bountyType === "fixed" ? "border-[var(--accent-secondary)] bg-[var(--accent-secondary)]" : "border-[var(--text-muted)]"}`}
                  />
                </div>
                <span className="font-mono text-xs text-[var(--text-muted)]">All players pay the exact same entry fee upfront.</span>
              </div>

              <div
                onClick={() => setBountyType("custom")}
                className={`cursor-pointer border p-4 rounded-xl flex flex-col gap-2 transition-all duration-300 ${
                  bountyType === "custom"
                    ? "bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-glow)]"
                    : "bg-[var(--bg-tertiary)]/50 border-[var(--border-color)]/30 hover:border-[var(--accent-primary)]/50"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`font-main font-bold uppercase text-sm ${bountyType === "custom" ? "text-[var(--accent-primary)]" : "text-[var(--text-primary)]"}`}
                  >
                    Custom Pool
                  </span>
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${bountyType === "custom" ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]" : "border-[var(--text-muted)]"}`}
                  />
                </div>
                <span className="font-mono text-xs text-[var(--text-muted)]">Set a reward pool and allow dynamic upfront entries.</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 relative">
              <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest pl-1 font-bold">
                {bountyType === "fixed" ? "Entry Fee per Player (Tokens)" : "Initial Reward Pool (Tokens)"}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Wallet className="w-4 h-4 text-[var(--text-muted)]" />
                </div>
                <input
                  type="number"
                  placeholder="0.0"
                  value={bountyAmount}
                  onChange={(e) => setBountyAmount(e.target.value)}
                  className="bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-primary)] font-mono text-sm py-4 pl-11 pr-4 rounded-xl focus:outline-none focus:border-[var(--accent-primary)] focus:bg-[var(--bg-tertiary)] transition-all w-full shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]"
                />
              </div>
            </div>
          </div>

          <button className="relative overflow-hidden bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold py-4 rounded-xl text-sm font-main uppercase tracking-widest shadow-[0_4px_15px_var(--accent-glow)] hover:shadow-[0_6px_25px_var(--accent-glow)] transition-all duration-300 transform hover:-translate-y-1 mt-4 group">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10 drop-shadow-md">Deploy Smart Contract</span>
          </button>
        </div>
      </div>
    </div>
  );
}
