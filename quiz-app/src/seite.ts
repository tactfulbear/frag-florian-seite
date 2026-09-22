import { createApp } from "vue";
import App from "./seite/App.vue";
import { lader, type Sprache } from "./seite/sprachen";
// Dasselbe Bootstrap wie im Quiz, damit die Seite genauso aussieht wie mit quiz.css
import "bootstrap/dist/css/bootstrap.min.css";
import "./seite/tailwind.css";

// Jede index*.html sagt über data-sprache am <div id="app">, welche Sprache sie zeigt
const wurzel = document.getElementById("app");
const sprache = (wurzel?.dataset.sprache ?? "de") as Sprache;
const seite = (await lader[sprache]()).default;

createApp(App, { seite }).mount("#app");
