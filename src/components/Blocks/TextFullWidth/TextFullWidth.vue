<template>
  <opb-block-layout :highlight="highlight">
    <div class="opb-block-empty">
      <div class="opb-block-empty__content">
        <o-icon icon="warning" pack="opb" size="is-xl" />
        <o-text type="is-inherit" size="is-semi">
          Text full width
        </o-text>
        <o-text type="is-inherit" size="is-xs"
          >This block needs to be finished</o-text
        >
      </div>
    </div>
    <opb-block-settings
      :block="block"
      :index="index"
      :max-index="maxIndex"
      @delete="$emit('delete', block)"
      @move-up="$emit('move-up', index)"
      @move-down="$emit('move-down', index)"
    />
    <opb-block-spacer v-model="spacer" />
  </opb-block-layout>
</template>

<script>
import { reactive, toRefs, onMounted } from "@vue/composition-api";

export default {
  name: "OpbBlockTextFullWidth",

  props: {
    highlight: Boolean,
    block: Object,
    locale: String,
    getDataValue: null,
    index: Number,
    maxIndex: Number
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
