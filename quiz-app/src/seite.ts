import { createApp } from "vue";
import App from "./seite/App.vue";
// Dasselbe Bootstrap wie im Quiz, damit die Seite genauso aussieht wie mit quiz.css
import "bootstrap/dist/css/bootstrap.min.css";

// Die ganze Seite ist eine Vue-App und hängt am <div id="app"> in index.html
createApp(App).mount("#app");
