<template>
  <div class="opb-top-bar">
    <o-button
      icon="arrow"
      icon-pack="opb"
      icon-dir="left"
      pack="opb"
      @click="exit"
    />
    <o-h size="2" class="mx-4">{{ page.title.en }}</o-h>
    <div class="h-6 border-l border-muted-700"></div>
    <!-- <v-popover trigger="click" placement="bottom" popoverClass="--select">
      <button type="button" class="tooltip-target focus:outline-none">
        <o-h size="4" type="primary" class="mx-4 underline">
          {{ currentLocaleLabel }}
        </o-h>
      </button>
      <template slot="popover">
        <div class="bg-white">
          <o-radio-field
            v-for="locale in availableLocales"
            class="p-2"
            v-model="currentLocale"
            :radio-value="locale.value"
            :key="locale.value"
            v-close-menu
          >
            <o-h size="5" type="inherit">{{ locale.label }}</o-h>
          </o-radio-field>
        </div>
      </template>
    </v-popover> -->
    <div class="ml-auto flex items-center">
      <o-text>Preview</o-text>

      <o-button
        icon="mobile"
        icon-pack="opb"
        @click="openMobile"
        class="top-panel__btn ml-3"
      >
      </o-button>
      <o-button
        icon="desktop"
        icon-pack="opb"
        @click="openMobile"
        class="top-panel__btn ml-3"
      />
      <o-button class="ml-6" @click="$emit('publish')">Publish</o-button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed, watch } from "@vue/composition-api";

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
      defaultLocale: "en",
      currentLocale: "en",
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

    const currentLocaleLabel = computed(
      () =>
        state.availableLocales.find(
          locale => locale.value === state.currentLocale
        ).label
    );

    const openMobile = async () => {
      const height = screen.height;
      const left = Math.round(screen.width / 2 - 320);
      const win = await window.open(
        "https://scanorama.octafest.test",
        "mobile-preview",
        `menubar=0,resizable=1,left=${left},width=640,height=${height}`
      );
      if (win) {
        win.moveTo(0, 0);
      }
    };

    const exit = async () => {
      emit("exit");
    };

    watch(
      () => state.currentLocale,
      locale => {
        emit("change-locale", locale);
      },
      {
        lazy: true
      }
    );

    return {
      ...toRefs(state),
      openMobile,
      currentLocaleLabel,
      exit
    };
  }
};
</script>
<style lang="scss">
.top-panel {
  height: 67px;
  background: #f4f4f4;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  @apply flex items-center px-10;

  .top-panel__btn {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: 1px solid transparent;
    border-radius: 38px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    &:hover {
      @apply border-primary text-primary;
      box-shadow: 0px 0px 10px rgba(24, 68, 224, 0.4);
    }
    &:active {
      @apply border-primary bg-primary text-inverted;
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
