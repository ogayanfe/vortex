"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export function WalletConnect() {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");
        console.log(account);
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              className: "opacity-0 pointer-events-none select-none",
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" className="primary-btn px-6 py-[0.6rem] text-[0.8rem]">
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="secondary-btn px-6 py-[0.6rem] text-[0.8rem] border-accent-primary text-accent-primary"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div className="flex gap-4 items-center">
                  <button
                    onClick={openChainModal}
                    className="flex flex-col items-end bg-transparent border-none cursor-pointer font-sans"
                    type="button"
                  >
                    {account.displayBalance && (
                      <span className="font-bold text-text-primary text-[0.8rem] leading-[1.2]">{account.displayBalance ?? 0}</span>
                    )}
                    <span className="text-accent-secondary text-[0.75rem] leading-[1.2] font-sans">{chain.name}</span>
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="bg-accent-primary text-white border-none rounded px-[0.8rem] py-[0.4rem] flex items-center gap-[0.6rem] cursor-pointer font-bold font-sans text-[0.95rem]"
                  >
                    <div
                      className="w-6 h-6 rounded-full overflow-hidden border border-white/20"
                      style={{ background: "linear-gradient(135deg, #ffaa00, #ff0055)" }}
                    >
                      {account.ensAvatar && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={account.ensAvatar} alt={account.displayName} className="w-full h-full object-cover" />
                      )}
                    </div>
                    {account.displayName}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
