<template>
  <div class="opb-sidebar-item">
    <o-text size="is-xs" class="opb-sidebar-item__label">
      {{ block.label }}
    </o-text>
    <o-icon
      :icon="block.icon"
      pack="page_blocks"
      class="opb-sidebar-item__icon"
    />
  </div>
</template>

<script>
export default {
  name: "OpbSidebarItem",
  props: {
    block: {
      type: Object,
      required: true
    }
  }
};
</script>
