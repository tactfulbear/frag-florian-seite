<template>
  <!-- Platzhalter in Höhe der festen Kopfzeile, damit nichts darunter verschwindet -->
  <div id="behindheader" style="visibility: hidden" :style="{ height: hoehe + 'px' }"></div>

  <header id="header" ref="kopf" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto">
        <a href="index.html">Frag Florian!</a>
      </h1>

      <nav id="navbar" class="navbar order-last order-lg-0" :class="{ 'navbar-mobile': mobil }">
        <ul>
          <li v-for="(gruppe, i) in menue" :key="gruppe.titel" class="dropdown">
            <a :class="{ active: i === 0 }" :href="gruppe.ziel" @click="klappe(i, $event)">
              <span>{{ gruppe.titel }}</span> <i class="bi bi-chevron-down"></i>
            </a>
            <ul :class="{ 'dropdown-active': offen.includes(i) }">
              <li v-for="eintrag in gruppe.eintraege" :key="eintrag.ziel">
                <a :href="eintrag.ziel">{{ eintrag.titel }}</a>
              </li>
            </ul>
          </li>
        </ul>
        <i class="bi mobile-nav-toggle" :class="mobil ? 'bi-x' : 'bi-list'" @click="mobil = !mobil"></i>
      </nav>

      <a href="#contact" class="get-started-btn">Schreib mir eine Nachricht</a>

      <div id="selectlanguage" style="margin-left: 10px; display: flex; flex-direction: column">
        <a href="index.html"><img src="assets/img/flags/german.png" alt="DE" style="height: 10px"></a>
        <a href="indexfranz.html"><img src="assets/img/flags/franceflag.gif" alt="FR" style="height: 10px"></a>
        <a href="indexeng.html"><img src="assets/img/flags/englishflag.jpg" alt="ENG" style="height: 10px"></a>
        <a href="indexesp.html"><img src="assets/img/flags/spanish.png" alt="ESP" style="height: 10px"></a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Eintrag {
  titel: string;
  ziel: string;
}

interface Gruppe extends Eintrag {
  eintraege: Eintrag[];
}

// Das Menü oben: jede Gruppe klappt eine Liste von Abschnitten auf.
const menue: Gruppe[] = [
  {
    titel: "Uni",
    ziel: "#matheuni",
    eintraege: [
      { titel: "Mathematik", ziel: "#matheuni" },
      { titel: "Informatik", ziel: "#infouni" },
      { titel: "Physik", ziel: "#physikuni" },
      { titel: "Ingenieurwesen", ziel: "#ingenieurwesen" },
      { titel: "Chemie", ziel: "#chemie" },
    ],
  },
  {
    titel: "Schule",
    ziel: "#matheschule",
    eintraege: [
      { titel: "Mathematik", ziel: "#matheschule" },
      { titel: "Physik", ziel: "#physikschule" },
      { titel: "Informatik", ziel: "#infoschule" },
      { titel: "Chemie", ziel: "#chemieschule" },
      { titel: "Französisch", ziel: "#franzoesisch" },
      { titel: "Englisch", ziel: "#englisch" },
      { titel: "Spanisch", ziel: "#spanisch" },
      { titel: "Italienisch", ziel: "#italienisch" },
      { titel: "Deutsch", ziel: "#deutsch" },
    ],
  },
  {
    titel: "Leben, Lernen und Lehren",
    ziel: "#ernaehrung",
    eintraege: [
      { titel: "Länger lernen mit Sprossen", ziel: "#ernaehrung" },
      { titel: "Reiki", ziel: "#reiki" },
      { titel: "Lernen und Lehren", ziel: "#lernenundlehren" },
      { titel: "Bewusstsein", ziel: "#bewusstsein" },
      { titel: "Schach", ziel: "#schach" },
      { titel: "Websiten", ziel: "#websitenundflyer" },
    ],
  },
  {
    titel: "Preise und andere Infos",
    ziel: "#preise",
    eintraege: [
      { titel: "Preise, Termine und Bezahlung", ziel: "#preise" },
      { titel: "Ablauf einer Nachhilfestunde", ziel: "#unterrichtsmethode" },
      { titel: "Tutorium/Gruppenunterricht", ziel: "#tutorium" },
      { titel: "Online-Nachhilfe", ziel: "#online" },
      { titel: "Präsenz-Nachhilfe", ziel: "#praesenz" },
      { titel: "Feedbacks", ziel: "#feedbacks" },
      { titel: "Links", ziel: "#links" },
      { titel: "Impressum", ziel: "#impressum" },
    ],
  },
  {
    titel: "Über mich",
    ziel: "#uebermich",
    eintraege: [
      { titel: "Über mich", ziel: "#uebermich" },
      { titel: "Warum Nachhilfe bei Florian?", ziel: "#warumnachhilfebeiflorian" },
      { titel: "Feedbacks", ziel: "#feedbacks" },
      { titel: "Links", ziel: "#links" },
    ],
  },
];

const kopf = ref<HTMLElement>();
const hoehe = ref(0);
// Handy-Ansicht: Menü offen und welche Gruppen aufgeklappt sind
const mobil = ref(false);
const offen = ref<number[]>([]);

// Auf dem Handy klappt ein Klick die Gruppe auf statt zum Abschnitt zu springen.
function klappe(i: number, ereignis: Event): void {
  if (!mobil.value) return;
  ereignis.preventDefault();
  offen.value = offen.value.includes(i) ? offen.value.filter((n) => n !== i) : [...offen.value, i];
}

onMounted(() => {
  hoehe.value = kopf.value?.offsetHeight ?? 0;
  // Anker-Sprünge sollen unter der festen Kopfzeile landen, nicht dahinter.
  document.documentElement.style.scrollPaddingTop = `${hoehe.value}px`;
});
</script>
