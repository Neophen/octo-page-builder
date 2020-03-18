<template>
  <span>
    <!-- <span v-for="(locale, i) in site.locales" :key="i"> -->

    <a
      v-for="(locale, i) in site.locales"
      :key="i"
      class="oct-locale"
      :class="{ '--active': site.currentLocale === locale.short }"
      :href="`${locale.url}${site.query}`"
      >{{ locale.label }}</a
    >
    <!-- <p v-if="i < site.locales" class="text-white mx-1">|</p> -->
    <!-- </span> -->
  </span>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  name: "OctLocales",
  setup() {
    const state = reactive({
      site: {
        currentLocale: "lt",
        query: "",
        locales: [
          {
            short: "en",
            label: "EN",
            url: "en/"
          },
          {
            short: "lt",
            label: "LT",
            url: "/"
          }
        ]
      }
    });

    return { ...toRefs(state) };
  }
};
</script>
