<template>
  <div class="opb-top-bar">
    <o-button
      icon="arrow"
      icon-pack="opb"
      icon-dir="left"
      pack="opb"
      @click="exit"
    />
    <o-h size="2" class="opb-top-bar__page-title">{{ page.title.en }}</o-h>
    <div class="opb-top-bar__divider"></div>
    <o-label-select v-model="currentLocale" :options="availableLocales" />
    <div class="opb-top-bar__right">
      <o-text>Preview</o-text>
      <o-button icon="mobile" icon-pack="opb" @click="previewWidth('320px')" />
      <o-button icon="tablet" icon-pack="opb" @click="previewWidth('768px')" />
      <o-button icon="desktop" icon-pack="opb" @click="previewWidth('100%')" />
      <o-button @click="$emit('publish')">Publish</o-button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "@vue/composition-api";

export default {
  name: "OpbTopBar",
  props: {
    page: {
      type: Object,
      required: true
    },
    localeInfo: Object
  },
  setup(props, { emit }) {
    const state = reactive({
      defaultLocale: {
        label: "English",
        value: "en"
      },
      currentLocale: {
        label: "English",
        value: "en"
      },
      availableLocales: [
        {
          label: "English",
          value: "en"
        },
        {
          label: "Lithuanian",
          value: "lt"
        }
      ]
    });

    const previewWidth = width => {
      emit("change-width", width);
    };

    const exit = async () => {
      emit("exit");
    };

    // EXAMPLE OF HOW TO OPEN PREVIEW
    //  const openMobile = async () => {
    //   const height = screen.height;
    //   const left = Math.round(screen.width / 2 - 320);
    //   const win = await window.open(
    //     'https://scanorama.octafest.test',
    //     'mobile-preview',
    //     `menubar=0,resizable=1,left=${left},width=640,height=${height}`,
    //   );
    //   if (win) {
    //     win.moveTo(0, 0);
    //   }
    // };

    watch(
      () => state.currentLocale,
      locale => {
        emit("change-locale", locale.value);
      },
      {
        lazy: true
      }
    );

    return {
      ...toRefs(state),
      previewWidth,
      exit
    };
  }
};
</script>
