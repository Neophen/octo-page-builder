<template>
  <div :class="{ 'opb-highlight-block': showHighlight }">
    <slot />
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "@vue/composition-api";

export default {
  name: "OpbBlockLayout",
  props: {
    highlight: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const state = reactive({
      showHighlight: false
    });

    const addHighlight = () => {
      state.showHighlight = true;
      setTimeout(() => {
        state.showHighlight = false;
      }, 500);
    };

    onMounted(() => props.highlight && addHighlight());

    return { ...toRefs(state) };
  }
};
</script>
