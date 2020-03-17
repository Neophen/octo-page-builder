<template>
  <div class="opb-sidebar" :class="{ open: isPanelOpen }">
    <div class="opb-sidebar__blocks">
      <div
        class="my-10 flex flex-col items-center justify-center text-center text-secondary"
      >
        <o-icon icon="cursor-drag" pack="opb" class="w-8 h-8 mb-3" />
        <o-text type="secondary" size="xs"
          >Drag &amp; drop components onto the page</o-text
        >
      </div>
      <o-collapse
        v-for="(list, type) in blockList"
        :open.sync="list.isOpen"
        :title="list.title"
        :aria-id="list.type"
        class="mb-4"
        :key="list.type"
      >
        <Container
          @drag-start="dragStart"
          @drag-end="onDragEnd"
          behaviour="copy"
          :group-name="groupName"
          drag-class="opb-sidebar__drag-ghost"
          :get-child-payload="index => getBlockPayload(type, index)"
          class="flex flex-wrap -mx-2"
        >
          <Draggable
            v-for="block in list.blocks"
            :key="block.id"
            class="px-2 pb-4 w-1/2"
          >
            <opb-sidebar-item :block="block" />
          </Draggable>
        </Container>
      </o-collapse>
    </div>
    <div class="top-0 left-0 mt-10 z-10">
      <button
        class="opb-sidebar__toggle-btn focus:outline-none"
        :class="{ open: isPanelOpen }"
        @click="toggleBlockPanel"
      >
        <o-icon
          :icon="isPanelOpen ? 'close' : 'library'"
          pack="opb"
          class="w-8 h-8"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from "@vue/composition-api";

import { sidebarItems } from "../../utils/sidebar-items.js";

import SidebarItem from "./SidebarItem.vue";

export default {
  name: "OpbSidebar",
  components: { [SidebarItem.name]: SidebarItem },
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
    const onDragEnd = () => emit("drag-end");

    const getBlockPayload = (type, index) =>
      state.blockList[type].blocks[index];

    return {
      ...toRefs(state),
      toggleBlockPanel,
      dragStart,
      onDragEnd,
      getBlockPayload
    };
  }
};
</script>
