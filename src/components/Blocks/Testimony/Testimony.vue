<template>
  <highlight-block :highlight="highlight">
    <div>This block needs to be finished</div>
    <spacer-block v-model="spacer" />
  </highlight-block>
</template>

<script>
import { reactive, toRefs, onMounted } from "@vue/composition-api";

import HighlightBlock from "../../shared/HighlightBlock.vue";
import SpacerBlock from "../../shared/SpacerBlock.vue";

export default {
  name: "OpbBlockTestimony",
  components: {
    HighlightBlock,
    SpacerBlock
  },
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
