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
  </main>
</template>

<script setup lang="ts">
import VueHeader from "./VueHeader.vue";
import VueHero from "./VueHero.vue";
import Nachhilfeangebot from "./abschnitte/Nachhilfeangebot.vue";
import MatheUni from "./abschnitte/MatheUni.vue";
import InfoUni from "./abschnitte/InfoUni.vue";
import PhysikUni from "./abschnitte/PhysikUni.vue";
import Ingenieurwesen from "./abschnitte/Ingenieurwesen.vue";
import Chemie from "./abschnitte/Chemie.vue";
</script>
