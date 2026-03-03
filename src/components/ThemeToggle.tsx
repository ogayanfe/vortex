"use client";

import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("vortex-theme") || "dark";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("vortex-theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "transparent",
        border: "1px solid var(--border-color)",
        color: "var(--accent-primary)",
        cursor: "pointer",
        padding: "0.5rem",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
