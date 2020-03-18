<template>
  <div class="oct-nav">
    <a
      v-for="link in site.links"
      :key="link.uri"
      :href="link.uri"
      class="oct-nav__link"
      :class="{ '--active': isUri(link.uri) }"
      >{{ link.label }}</a
    >
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  name: "OctSiteNav",
  setup() {
    const state = reactive({
      site: {
        url: "/",
        links: [
          {
            label: "Scanorama",
            uri: ""
          },
          {
            label: "Archyvas",
            uri: "archyvas"
          },
          {
            label: "Apie mus",
            uri: "apie-mus"
          },
          {
            label: "Rėmėjai",
            uri: "remejai"
          }
        ]
      }
    });

    const isUri = (...urls) => {
      if (urls[0] === "") {
        return state.site.url === "";
      }

      return urls.filter(url => state.site.url.startsWith(`/${url}`)).length;
    };

    return {
      ...toRefs(state),
      isUri
    };
  }
};
</script>
