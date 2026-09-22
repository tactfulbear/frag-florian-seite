import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./uebung/App.vue";
import { routen } from "./uebung/routen";
import "./uebung/tailwind.css";

// Die Adressen der Übungen stehen hinter dem #, z. B. uebung.html#/fr/french/grammaire/en
const router = createRouter({ history: createWebHashHistory(), routes: routen });

createApp(App).use(router).mount("#gaps");
