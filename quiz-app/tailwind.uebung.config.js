/** @type {import('tailwindcss').Config} */
// Tailwind nur für die Übungsseite, damit ihre app/uebung.css keine Klassen der Startseite enthält
export default {
  content: ["./src/uebung.ts", "./src/uebung/**/*.{vue,ts}"],
  corePlugins: {
    // Bootstrap von der Übungsseite setzt die Grundstile, Tailwind soll sie nicht überschreiben
    preflight: false,
    container: false,
  },
  theme: { extend: {} },
  plugins: [],
};
