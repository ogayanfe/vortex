"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export function WalletConnect() {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="primary-btn"
                    style={{ padding: "0.6rem 1.5rem", fontSize: ".8rem", fontFamily: "var(--font-mono)" }}
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="secondary-btn"
                    style={{ padding: "0.6rem 1.5rem", fontSize: ".8rem", borderColor: "var(--accent-primary)", color: "var(--accent-primary)" }}
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <button
                    onClick={openChainModal}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-main)",
                    }}
                    type="button"
                  >
                    {account.displayBalance && (
                      <span style={{ fontWeight: "bold", color: "var(--text-primary)", fontSize: ".8rem", lineHeight: "1.2" }}>
                        {account.displayBalance}
                      </span>
                    )}
                    <span style={{ color: "var(--accent-secondary)", fontSize: "0.75rem", lineHeight: "1.2", fontFamily: "var(--font-mono)" }}>
                      {chain.name}
                    </span>
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    style={{
                      background: "var(--accent-primary)",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "4px",
                      padding: "0.4rem 0.8rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontFamily: "var(--font-main)",
                      fontSize: "0.95rem",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        background: "linear-gradient(135deg, #ffaa00, #ff0055)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      {account.ensAvatar && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={account.ensAvatar} alt={account.displayName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
