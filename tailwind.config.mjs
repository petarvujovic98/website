/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // Tokyo Night palette, named as in nix-config's home/common/colors.nix.
      colors: {
        night: "#1a1b26",
        storm: "#24283b",
        navy: "#283457",
        slate: "#414868",
        silver: "#a9b1d6",
        moonlight: "#c0caf5",
        blue: "#7aa2f7",
        cyan: "#7dcfff",
        orange: "#ff9e64",
      },
    },
  },
  plugins: [],
};
