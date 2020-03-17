<template>
  <div class="w-screen h-screen fixed inset-0 flex flex-col overflow-hidden">
    <!-- <top-panel
      :page="page"
      @change-locale="changeLocale"
      @publish="publish"
    ></top-panel> -->
    <div class="flex-1 overflow-y-scroll relative">
      <Container
        group-name="page-builder-group"
        :get-child-payload="getContentPayload"
        drag-handle-selector=".content-drag-handle"
        @drop="onDrop($event)"
        @drag-start="dragStart"
        @drag-end="onDragEnd"
        class="content-container"
        drop-class="block-panel__drag-ghost-drop"
        :should-animate-drop="shouldAnimateDrop"
        :drop-placeholder="dropPlaceholderOptions"
      >
        <Draggable v-if="content.length === 0">
          <div class="empty-content">
            <o-h>Drag your first block here</o-h>
          </div>
        </Draggable>
        <Draggable
          class="draggable-item"
          v-for="(block, index) in content"
          :key="block.id"
        >
          <component
            :class="{ 'pointer-events-none': disablePointerEvents }"
            :is="block.type"
            v-model="block.getData"
            :block="block"
            :locale="currentLocale"
            :highlight="block.highlight"
            :key="block.id"
          />
          <div
            class="absolute right-0 top-0 mt-4 mr-12 block-settings-container"
          >
            <block-settings
              :index="index"
              :max-index="content.length"
              @move-up="moveUp"
              @move-down="moveDown"
              :content="content"
              :block="block"
              @open-settings="openSettings"
              @delete="deleteBlock"
            />
          </div>
        </Draggable>
      </Container>
    </div>
    <block-panel
      group-name="page-builder-group"
      @drag-start="dragStart"
      @drag-end="onDragEnd"
    />
  </div>
</template>

<script>
import { toRefs, reactive, computed } from "@vue/composition-api";
import { Container, Draggable } from "vue-smooth-dnd";

export const applyDrag = (arr, dragResult, locale) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;

  const result = [...arr];
  let itemToAdd = { ...payload };

  if (removedIndex === null) {
    itemToAdd.id = `id-${locale}-${arr.length + 1}`;
  }

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};

export default {
  name: "OctoPageBuilder",
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  components: {
    Container,
    Draggable
  },
  setup(props, { emit }) {
    const state = reactive({
      blockPanelBtn: "Open",
      isPanelOpen: false,
      disablePointerEvents: false,
      dropPlaceholderOptions: {
        className: "drop-preview",
        animationDuration: "150",
        showOnTop: false
      },
      defaultLocale: "en",
      currentLocale: "en",
      allPageContent: props.page.content
        ? props.page.content
        : { ["en"]: [], ["lt"]: [] }
    });

    const content = computed({
      get: () => state.allPageContent[state.currentLocale],
      set: content => {
        state.allPageContent[state.currentLocale] = content;
      }
    });

    const toggleBlockPanel = () => {
      state.isPanelOpen = !state.isPanelOpen;
      state.blockPanelBtn = state.isPanelOpen ? "Close" : "Open";
    };

    const shouldAnimateDrop = options => {
      return options.behaviour !== "copy";
    };

    const moveUp = index => {
      // console.log("move up: ", index);
      const sortArray = [...content.value];
      if (index > 0) {
        const movingBlock = sortArray[index];
        sortArray[index] = sortArray[index - 1];
        sortArray[index - 1] = movingBlock;
        content.value = sortArray;
      }
    };

    const moveDown = index => {
      // console.log("move down: ", index);
      const sortArray = [...content.value];
      if (index < sortArray.length - 1) {
        const movingBlock = sortArray[index];
        sortArray[index] = sortArray[index + 1];
        sortArray[index + 1] = movingBlock;
        content.value = sortArray;
      }
    };

    // const openSettings = index => {
    const openSettings = () => {
      // console.log("open settings: ", index);
    };

    const deleteBlock = index => {
      // console.log("delete: ", index);
      content.value = content.value.filter((block, i) => i !== index);
    };

    // const updateDataForLocale = locale => {
    const updateDataForLocale = () => {
      const data = content.value.map(block => {
        // console.log(block);
        return block.getData();
      });
      // console.log(data);
      state.allPageContent[state.currentLocale] = data;
    };

    const changeLocale = locale => {
      updateDataForLocale(state.currentLocale);
      state.currentLocale = locale;
    };

    const publish = async () => {
      updateDataForLocale(state.currentLocale);
      const content = state.allPageContent;

      emit("submit", content);
    };

    return {
      ...toRefs(state),
      content,
      toggleBlockPanel,
      shouldAnimateDrop,
      moveUp,
      moveDown,
      openSettings,
      deleteBlock,
      changeLocale,
      publish
    };
  },
  methods: {
    dragStart() {
      this.disablePointerEvents = true;
    },
    onDrop(dropResult) {
      this.disablePointerEvents = false;
      this.content = applyDrag(this.content, dropResult, this.currentLocale);
    },
    onDragEnd() {
      this.disablePointerEvents = false;
    },
    getContentPayload(index) {
      return this.content[index];
    }
  }
};
</script>

<style lang="scss">
.draggable-item {
  box-sizing: border-box;
  border: 1px solid transparent;
  @apply relative;
  .block-settings-container {
    display: none;
  }

  &:hover,
  &:focus {
    border: 1px dashed black;
    .block-settings-container {
      display: block;
    }
  }
}

.empty-content {
  height: 300px;
  border: 1px dashed black;
  background: transparent;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  @apply flex items-center justify-center;
}

.content-container {
  &:empty {
    height: 300px;
  }
}

.drop-preview {
  background-color: rgba(150, 150, 200, 0.1);
  border: 1px dashed #abc;
}

.transparent-input {
  background: transparent;
  color: inherit;
  width: 100%;
}
</style>
