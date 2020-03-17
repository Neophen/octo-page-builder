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

<style lang="scss">
.opb-sidebar-item {
  border-radius: 10px;
  border: 1px dashed #c6c6c6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  cursor: pointer;
  z-index: 10;

  background-color: var(--octo-inverted-500);
  transition: all 0.1s ease-in-out;

  .opb-sidebar-item__label {
    color: var(--octo-text-default);
    margin-bottom: 1rem;
    transition: all 0.1s ease-in-out;
  }

  .opb-sidebar-item__icon {
    width: 100%;
    height: 2.5rem;

    color: var(--octo-text-default);
    transition: all 0.1s ease-in-out;
  }

  &:hover {
    border-color: var(--octo-primary-500);
    box-shadow: 0px 0px 5px rgba(24, 68, 224, 0.2);
    .opb-sidebar-item__label {
      color: var(--octo-text-primary);
    }

    .opb-sidebar-item__icon {
      color: var(--octo-text-primary);
    }
  }
}

.opb-sidebar-drag-ghost {
  background: #ced6f0;
  border: 1px solid var(--octo-primary-500);

  .opb-sidebar-item__label {
    color: var(--octo-text-primary);
  }

  .opb-sidebar-item__icon {
    color: var(--octo-text-primary);
  }

  transition: transform 0.18s ease;
  transform: rotateZ(5deg);
}

.opb-sidebar-drag-ghost-drop {
  transition: transform 0.18s ease-in-out;
  transform: rotateZ(0deg);
}
</style>
