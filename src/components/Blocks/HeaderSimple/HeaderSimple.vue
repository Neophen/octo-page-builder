<template>
  <opb-block-layout :highlight="highlight">
    <header class="oct-header --simple">
      <!-- <oct-site-info class="oct-container" /> -->
    </header>
    <opb-block-spacer v-model="spacer" />
  </opb-block-layout>
</template>

<script>
import { reactive, toRefs, onMounted } from "@vue/composition-api";

// import OctSiteInfo from "../../shared/oct-header/OctSiteInfo.vue";

export default {
  name: "OpbBlockHeaderSimple",
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
