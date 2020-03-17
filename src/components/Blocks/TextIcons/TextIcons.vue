<template>
  <opb-block-layout :highlight="highlight">
    <div class="oct-container oct-grid-2">
      <div class="oct-text-content">
        <!-- <rich-text v-model="text"></rich-text> -->
        <h2 class="oct-h2">Europos šalių kino forumas „Scanorama“</h2>
        <p class="oct-p">
          Didžiausias ir ryškiausias rudens sezono tarptautinis kultūrinis kino
          įvykis, kasmet suburiantis 40 000 kino gerbėjų. Kiekvieną lapkritį
          pristatome rinktinius filmus iš Europos ir kritikų numylėtinius iš
          kitų žemynų.<br />
        </p>
        <h3 class="oct-h3">Aukšta meninė vertė ir Europos kino balsas</h3>
        <p class="oct-p">
          Pagrindinis „Scanoramos“ programos atrankos kriterijus – aukšta meninė
          vertė. Naujas Europos kino tendencijas formuojantys filmai
          išsirikiuoja specialiai dedikuotose programos sekcijose, kurios
          žiūrovams padeda išsamiau tyrinėti juos labiausiai dominantį kino
          lauką. Festivalio išskirtinumą pastebi ir pripažįsta lietuvių kino
          industrijos profesionalai, taip pat ir tarptautiniai ekspertai.
          Europos festivalių asociacija „Scanoramai“ kasmet suteikia kokybės
          ženklą „EFFE Label“.&nbsp;
        </p>
        <h3 class="oct-h3">Misija: edukacija ir kino kultūros puoselėjimas</h3>
        <p class="oct-p">
          „Scanorama“ nuo pat pradžių grindė savo koncepciją Europos kino
          vertybėmis, akcentavo šiaurietiškų ir baltiškųjų dimensijų artumą,
          apgalvotai plėtė bendraeuropinį kontekstą.&nbsp; Konkursinė
          trumpametražių filmų programa „Naujasis Baltijos kinas“ brėžia
          Baltiškojo kino ateities kontūrą, o programa „Galvok ką nori“ atveria
          kelią į naujų kino kalbos formų paieškas. Kruopščiai atrinktos
          retrospektyvos apjuosia visas šiuolaikinio kino programas ir puoselėja
          pagarbą kino istorijai.
        </p>
      </div>
      <div class="oct-text-icons__icons">
        <div>
          <o-icon
            icon="established"
            pack="icons_site"
            class="oct-text-icons__icon"
          />
          <div class="oct-hr"></div>
          <h3 class="oct-h3 oct-mb-1">Nuo 2003 metų</h3>
          <p class="oct-p">Vienas seniausių kino festivalių Lietuvoje</p>
        </div>
        <div>
          <o-icon
            icon="cities"
            pack="icons_site"
            class="oct-text-icons__icon"
          />
          <div class="oct-hr"></div>
          <h3 class="oct-h3 oct-mb-1">4 Lietuvos miestai</h3>
          <p class="oct-p">Vilnius, Kaunas, Klaipėda, Šiauliai</p>
        </div>
        <div>
          <o-icon
            icon="cities"
            pack="icons_site"
            class="oct-text-icons__icon"
          />
          <div class="oct-hr"></div>
          <h3 class="oct-h3 oct-mb-1">Kultūra ir edukacija</h3>
          <p class="oct-p">
            Industriniai renginiai: dirbtuvės, koprodukcijos forumai, diskusijos
            su kino kūrėjais
          </p>
        </div>
        <div>
          <o-icon
            icon="established"
            pack="icons_site"
            class="oct-text-icons__icon"
          />
          <div class="oct-hr"></div>
          <h3 class="oct-h3 oct-mb-1">Per 100 filmų kasmet</h3>
          <p class="oct-p">
            Rinktiniai Europos filmai ir kritikų numylėtiniai iš kitų žemynų
          </p>
        </div>
      </div>
    </div>
    <opb-block-spacer v-model="spacer" />
  </opb-block-layout>
</template>

<script>
import { reactive, toRefs, onMounted } from "@vue/composition-api";

export default {
  name: "OpbBlockTextIcons",
  props: {
    highlight: {
      type: Boolean,
      default: false
    },
    block: {
      type: Object,
      required: true
    },
    locale: String,
    getDataValue: null
  },
  model: {
    prop: "getDataValue",
    event: "setGetDataValue"
  },
  setup(props, { emit }) {
    const state = reactive({
      spacer: props.block.settings.spacer
    });

    const getData = () => ({
      id: props.block.id,
      type: props.block.type,
      getData: getData,
      settings: {
        spacer: state.spacer
      }
    });

    onMounted(() => emit("setGetDataValue", getData));

    return { ...toRefs(state) };
  }
};
</script>
