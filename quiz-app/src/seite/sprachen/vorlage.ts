import type { Seite } from "./index";
import Angebot from "../abschnitte/vorlage/Angebot.vue";
import Mathe from "../abschnitte/vorlage/Mathe.vue";
import Englisch from "../abschnitte/vorlage/Englisch.vue";
import Franzoesisch from "../abschnitte/vorlage/Franzoesisch.vue";
import Preise from "../abschnitte/vorlage/Preise.vue";
import UeberMich from "../abschnitte/vorlage/UeberMich.vue";
import Impressum from "../abschnitte/vorlage/Impressum.vue";

// Beispielseite "Frag Lena!" für weitere Nachhilfelehrer (vorlage.html).
// Eine neue Lehrerseite braucht nur diese Datei, den Ordner abschnitte/<name>/ und eine Hülle wie vorlage.html.
const vorlage: Seite = {
  logo: "Frag Lena!",
  start: "vorlage.html",
  knopf: "Schreib mir eine Nachricht",
  heroBild: "assets/img/vorlage/hero.svg",
  menue: [
    {
      titel: "Fächer",
      ziel: "#mathe",
      eintraege: [
        { titel: "Mathematik", ziel: "#mathe" },
        { titel: "Englisch", ziel: "#englisch" },
        { titel: "Französisch", ziel: "#franzoesisch" },
      ],
    },
    {
      titel: "Preise und Infos",
      ziel: "#preise",
      eintraege: [
        { titel: "Preise und Termine", ziel: "#preise" },
        { titel: "Impressum", ziel: "#impressum" },
      ],
    },
    { titel: "Über mich", ziel: "#uebermich", eintraege: [] },
  ],
  kontakt: {
    karteHoehe: "200px",
    containerId: "schreibmirnachricht",
    adresse: "Adresse:",
    email: "Email:",
    strasse: "Musterstraße 1",
    ort: "12345 Musterstadt",
    mailadresse: "lena@beispiel.de",
    absatz:
      "Schreib mir am besten eine E-Mail mit dem Thema, das gerade dran ist, oder benutze dieses Kontaktformular. Ich melde mich innerhalb eines Tages zurück.",
    formular: {
      // Hier gehört der eigene Schlüssel von web3forms.com hinein, sonst kommt die Nachricht nicht an.
      action: "https://api.web3forms.com/submit",
      botcheck: true,
      name: "Dein Name",
      mail: "Deine Email",
      betreff: "Betreff",
      nachricht: "Nachricht",
      knopf: "Nachricht senden",
    },
  },
  fuss: { telefon: "Telefon:", telefonnummer: "0123/456789", mailadresse: "lena@beispiel.de", sozial: false },
  schach: "de",
  abschnitte: [Angebot, Mathe, Englisch, Franzoesisch, Preise, UeberMich, Impressum],
};

export default vorlage;
