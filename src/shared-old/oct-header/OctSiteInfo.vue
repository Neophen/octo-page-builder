<template>
  <div class="oct-site-info">
    <div class="oct-site-info__container">
      <div class="oct-site-info__logo-container">
        <a href="/">
          <o-icon
            icon="scanorama"
            pack="icons_site-logos"
            class="oct-site-info__logo"
          />
        </a>
      </div>
      <div class="oct-site-info__info-p">
        <p class="oct-font-bold">{{ site.info.top }}</p>
        <p>{{ site.info.bottom }}</p>
      </div>
      <div class="oct-site-info__nav-pc">
        <oct-locales class="oct-mr-4" />
        <oct-nav-site />
      </div>
      <div class="oct-site-info__nav-mob">
        <oct-nav-site-mob />
      </div>
    </div>
    <div class="oct-mt-4">
      <oct-breadcrumbs />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";
import OctLocales from "./OctLocales.vue";
import OctNavSite from "./OctNavSite.vue";
import OctNavSiteMob from "./OctNavSiteMob.vue";
import OctBreadcrumbs from "./OctBreadcrumbs.vue";

export default {
  name: "OctSiteInfo",
  components: {
    OctLocales,
    OctNavSite,
    OctNavSiteMob,
    OctBreadcrumbs
  },
  setup() {
    const state = reactive({
      site: {
        info: {
          top: "2020 lapkričio",
          bottom: "5-22 d."
        }
      }
    });

    return { ...toRefs(state) };
  }
};
</script>
