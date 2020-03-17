<template>
  <div class="opb-block-settings">
    <o-button
      size="is-sm"
      icon="cursor-drag"
      pack="opb"
      @click.stop
      class="btn-m content-drag-handle"
    />
    <o-button
      :disabled="index === 0"
      class="btn-m"
      size="is-sm"
      icon="arrow"
      dir="up"
      pack="opb"
      @click.stop="$emit('move-up', index)"
    />

    <o-button
      :disabled="index + 1 === maxIndex"
      class="btn-m"
      size="is-sm"
      @click.stop="$emit('move-down', index)"
      icon="arrow"
      dir="down"
      pack="opb"
    />
    <!-- <v-popover
      v-if="showSettings"
      trigger="click"
      class="btn-m"
      placement="bottom"
      popoverClass="--select"
      offset="16"
    >
      <o-button size="is-sm" class="tooltip-target">
        <o-icon icon="gear" pack="opb" size="is-sm" />
      </o-button>
      <template slot="popover">
        <div class="bg-white">
          <o-h size="5">Add to page navigation?</o-h>
        </div>
      </template>
    </v-popover> -->
    <o-button
      inverted
      size="is-sm"
      type="is-danger"
      @click.stop="$emit('delete', index)"
      icon="trash"
      pack="opb"
    />
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";

export default {
  name: "OpbBlockSettings",
  props: {
    index: {
      type: Number,
      required: true
    },
    maxIndex: {
      type: Number,
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    block: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const showSettings = computed(() => {
      if (
        props.block.type === "header-media" ||
        props.block.type === "header-simple"
      ) {
        return false;
      }

      return props.content.find(block => block.type === "header-media");
    });

    return { showSettings };
  }
};
</script>

<style lang="scss">
.opb-block-settings {
  display: flex;
  align-items: center;
  .btn-m {
    margin-right: 15px;
  }
}
</style>
