<template>
  <VueHeader />
  <VueHero />

  <main id="main">
    <Nachhilfeangebot />
    <MatheUni />
    <InfoUni />
    <PhysikUni />
    <Ingenieurwesen />
    <Chemie />
    <MatheSchule />
    <PhysikSchule />
    <InfoSchule />
    <ChemieSchule />
    <Franzoesisch />
    <Englisch />
    <Spanisch />
    <Italienisch />
    <Deutsch />
    <Ernaehrung />
    <Reiki />
    <LernenUndLehren />
    <Bewusstsein />
    <Schach />
    <WebsitenUndFlyer />
    <Preise />
    <Unterrichtsmethode />
    <Tutorium />
    <Online />
    <Praesenz />
    <Feedbacks />
    <Links />
    <Impressum />
    <UeberMich />
    <WarumNachhilfeBeiFlorian />
    <VueContact />
  </main>

  <VueFooter />

  <div v-if="!geladen" id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center" :class="{ active: weitUnten }">
    <i class="bi bi-arrow-up-short"></i>
  </a>
  <!-- Vollbild für angeklickte Quiz-Bilder, ein Klick schließt es wieder -->
  <div id="fullpage" @click="schliesseVollbild"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import VueHeader from "./VueHeader.vue";
import VueHero from "./VueHero.vue";
import VueFooter from "./VueFooter.vue";
import VueContact from "./VueContact.vue";
import Nachhilfeangebot from "./abschnitte/Nachhilfeangebot.vue";
import MatheUni from "./abschnitte/MatheUni.vue";
import InfoUni from "./abschnitte/InfoUni.vue";
import PhysikUni from "./abschnitte/PhysikUni.vue";
import Ingenieurwesen from "./abschnitte/Ingenieurwesen.vue";
import Chemie from "./abschnitte/Chemie.vue";
import MatheSchule from "./abschnitte/MatheSchule.vue";
import PhysikSchule from "./abschnitte/PhysikSchule.vue";
import InfoSchule from "./abschnitte/InfoSchule.vue";
import ChemieSchule from "./abschnitte/ChemieSchule.vue";
import Franzoesisch from "./abschnitte/Franzoesisch.vue";
import Englisch from "./abschnitte/Englisch.vue";
import Spanisch from "./abschnitte/Spanisch.vue";
import Italienisch from "./abschnitte/Italienisch.vue";
import Deutsch from "./abschnitte/Deutsch.vue";
import Ernaehrung from "./abschnitte/Ernaehrung.vue";
import Reiki from "./abschnitte/Reiki.vue";
import LernenUndLehren from "./abschnitte/LernenUndLehren.vue";
import Bewusstsein from "./abschnitte/Bewusstsein.vue";
import Schach from "./abschnitte/Schach.vue";
import WebsitenUndFlyer from "./abschnitte/WebsitenUndFlyer.vue";
import Preise from "./abschnitte/Preise.vue";
import Unterrichtsmethode from "./abschnitte/Unterrichtsmethode.vue";
import Tutorium from "./abschnitte/Tutorium.vue";
import Online from "./abschnitte/Online.vue";
import Praesenz from "./abschnitte/Praesenz.vue";
import Feedbacks from "./abschnitte/Feedbacks.vue";
import Links from "./abschnitte/Links.vue";
import Impressum from "./abschnitte/Impressum.vue";
import UeberMich from "./abschnitte/UeberMich.vue";
import WarumNachhilfeBeiFlorian from "./abschnitte/WarumNachhilfeBeiFlorian.vue";

// Der Ladekreis verschwindet, sobald die Seite mit allen Bildern da ist.
const geladen = ref(document.readyState === "complete");
// Der Pfeil nach oben erscheint erst, wenn man ein Stück gescrollt hat.
const weitUnten = ref(false);

function schliesseVollbild(ereignis: Event): void {
  (ereignis.currentTarget as HTMLElement).style.display = "none";
}

onMounted(() => {
  window.addEventListener("load", () => {
    geladen.value = true;
  });
  const pruefeScroll = () => {
    weitUnten.value = window.scrollY > 100;
  };
  document.addEventListener("scroll", pruefeScroll);
  pruefeScroll();
  // Abschnitte gleiten beim Scrollen herein
  AOS.init({ duration: 1000, easing: "ease-in-out", once: true, mirror: false });
});
</script>
