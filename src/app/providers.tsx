"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState, useEffect } from "react";
import { type State, WagmiProvider } from "wagmi";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";

import { getConfig } from "@/wagmi";

export function Providers(props: { children: ReactNode; initialState?: State }) {
  const [config] = useState(() => getConfig());
  const [queryClient] = useState(() => new QueryClient());

  // Basic hook to handle document data-theme explicitly
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getTheme = () => {
        const storedTheme = localStorage.getItem("vortex-theme");
        if (storedTheme) {
          return storedTheme === "dark";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      };

      const theme = getTheme();
      setIsDarkMode(theme);
      document.documentElement.setAttribute("data-theme", theme ? "dark" : "light");

      const handleThemeChange = () => {
        setIsDarkMode(document.documentElement.getAttribute("data-theme") === "dark");
      };

      window.addEventListener("themeChange", handleThemeChange);
      return () => window.removeEventListener("themeChange", handleThemeChange);
    }
  }, []);

  const themeConfig = {
    accentColor: "var(--accent-primary)",
    accentColorForeground: "white",
    borderRadius: "small" as const,
  };

  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={isDarkMode ? darkTheme(themeConfig) : lightTheme(themeConfig)}>{props.children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
