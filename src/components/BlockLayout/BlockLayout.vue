<template>
  <div :class="{ 'opb-show-highlight': showHighlight }">
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

<style lang="scss">
.opb-show-highlight {
  animation: opb-pulse-color 0.5s;
}

@keyframes opb-pulse-color {
  0% {
    background: white;
  }
  50% {
    background: rgba(30, 65, 241, 0.1);
  }
  100% {
    background: white;
  }
}
</style>
