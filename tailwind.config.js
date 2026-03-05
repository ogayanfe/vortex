/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        foreground: "var(--text-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "accent-primary": "var(--accent-primary)",
        "accent-secondary": "var(--accent-secondary)",
        "border-color": "var(--border-color)",
        "text-primary": "var(--text-primary)",
      },
    },
  },
  plugins: [],
};
