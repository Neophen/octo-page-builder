<template>
  <div class="opb-sidebar" :class="{ 'is-open': isPanelOpen }">
    <div class="opb-sidebar__container">
      <div class="opb-sidebar__info">
        <o-icon icon="cursor-drag" pack="opb" size="is-xl" class="mb-3" />
        <o-text type="is-inherit" size="is-xs"
          >Drag &amp; drop components onto the page</o-text
        >
      </div>
      <o-collapse
        v-for="list in blockList"
        :open.sync="list.isOpen"
        :title="list.title"
        :aria-id="list.type"
        class="opb-sidebar__collapse"
        :key="list.type"
      >
        <!-- @change="log" -->
        <draggable
          class="opb-sidebar__drag-list"
          :list="list.blocks"
          :group="{ name: groupName, pull: 'clone', put: false }"
          :clone="clone"
          :sort="false"
          @start="dragStart"
          @end="dragEnd"
          ghost-class="opb-sidebar__drag-ghost"
        >
          <opb-sidebar-item
            v-for="block in list.blocks"
            :block="block"
            :key="block.id"
          />
        </draggable>
      </o-collapse>
    </div>
    <div class="opb-sidebar__toggle">
      <button
        class="opb-sidebar__toggle-btn"
        :class="{ 'is-open': isPanelOpen }"
        @click="toggleBlockPanel"
      >
        <o-icon
          :icon="isPanelOpen ? 'close' : 'library'"
          pack="opb"
          class="opb-sidebar__toggle-icon w-8 h-8"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from "@vue/composition-api";
import draggable from "vuedraggable";

import { sidebarItems } from "../../utils/sidebar-items.js";

import SidebarItem from "./SidebarItem.vue";

export default {
  name: "OpbSidebar",
  components: { [SidebarItem.name]: SidebarItem, draggable },
  props: {
    groupName: {
      type: String,
      default: "octafest-page-builder-group"
    }
  },
  setup(_, { emit }) {
    const state = reactive({
      isPanelOpen: true,
      blockList: sidebarItems
    });

    const toggleBlockPanel = () => {
      state.isPanelOpen = !state.isPanelOpen;
    };

    const dragStart = () => emit("drag-start");
    const dragEnd = () => emit("drag-end");

    const generateID = () =>
      (
        Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2, 5)
      )
        .toUpperCase()
        .toLowerCase();

    const clone = item => {
      return { ...item, id: `${item.id}-${generateID()}` };
    };

    return {
      ...toRefs(state),
      toggleBlockPanel,
      dragStart,
      dragEnd,
      clone
    };
  }
};
</script>
