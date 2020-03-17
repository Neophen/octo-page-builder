<template>
  <div :class="spacing" class="opb-block-spacer" @click="toggleSpacing">
    <div class="opb-block-spacer__info">
      <o-icon icon="arrow-y" pack="opb" class="w-4 mr-4" />
      <o-text>Click to increase spacing</o-text>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "@vue/composition-api";

export default {
  name: "OpbBlockSpacer",
  props: {
    value: {
      type: String,
      default: "oct-spacing-block"
    }
  },
  setup(props, { emit }) {
    const spacings = ["oct-spacing-block", "oct-spacing-section"];

    const state = reactive({
      spacing: props.value,
      currentSpacing: spacings.indexOf(props.value)
    });

    const toggleSpacing = () => {
      if (state.currentSpacing + 1 < spacings.length) {
        state.spacing = spacings[state.currentSpacing + 1];
        state.currentSpacing = state.currentSpacing + 1;
        return;
      }
      state.spacing = spacings[0];
      state.currentSpacing = 0;
    };

    watch(
      () => state.spacing,
      spacing => emit("input", spacing)
    );

    return { ...toRefs(state), toggleSpacing };
  }
};
</script>

<style lang="scss">
.opb-block-spacer {
  box-sizing: border-box;
  border: 1px dashed #e4e4e4;
  transition: height 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .opb-block-spacer__info {
    display: none;
  }

  &:hover {
    background: rgba(24, 68, 224, 0.05);
    border: 1px dashed #1844e0;
    color: #1844e0;
    .opb-block-spacer__info {
      display: flex;
      align-items: center;
    }
  }
}
</style>
