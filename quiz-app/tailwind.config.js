/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/seite.ts", "./src/seite/**/*.{vue,ts}"],
  corePlugins: {
    // Die Seite hängt an Bootstrap und style.css. Tailwind liefert nur Hilfsklassen dazu
    // und darf weder die Grundschrift zurücksetzen noch den .container von Bootstrap überschreiben.
    preflight: false,
    container: false,
  },
};
