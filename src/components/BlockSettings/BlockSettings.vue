<template>
  <div class="opb-block-settings">
    <o-button
      size="is-sm"
      icon="cursor-drag"
      icon-pack="opb"
      @click.stop
      class="btn-m opb-drag-handle"
    />
    <o-button
      :disabled="index === 0"
      size="is-sm"
      icon="arrow"
      icon-dir="up"
      icon-pack="opb"
      @click.stop="$emit('move-up')"
    />

    <o-button
      :disabled="index + 1 === maxIndex"
      size="is-sm"
      @click.stop="$emit('move-down')"
      icon="arrow"
      icon-dir="down"
      icon-pack="opb"
    />
    <!-- <v-popover
      v-if="showSettings"
      trigger="click"
      placement="bottom"
      popoverClass="--select"
      offset="16"
    >
      <o-button size="is-sm" class="tooltip-target">
        <o-icon icon="gear" icon-pack="opb" size="is-sm" />
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
      @click.stop="$emit('delete')"
      icon="trash"
      icon-pack="opb"
    />
  </div>
</template>

<script>
// import { computed } from "@vue/composition-api";

export default {
  name: "OpbBlockSettings",
  props: {
    index: {
      type: Number,
      default: 1
    },
    maxIndex: {
      type: Number,
      default: 10
    },
    content: {
      type: Array
    },
    block: {
      type: Object
    },
    showSettings: {
      type: Boolean,
      default: true
    }
  }
};
</script>
