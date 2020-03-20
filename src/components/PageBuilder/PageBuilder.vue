<template>
  <div class="opb-page-builder">
    <opb-top-bar
      :page="page"
      @change-locale="changeLocale"
      @publish="publish"
      @exit="exit"
      @change-width="changeWidth"
    />
    <div class="opb-content">
      <draggable
        class="obp-content__container"
        :style="contentStyle"
        v-model="content"
        v-bind="dragOptions"
        handle=".opb-drag-handle"
        @start="dragStart"
        @end="dragEnd"
      >
        <transition-group
          type="transition"
          :name="!isDragging ? 'flip-list' : null"
        >
          <div
            class="draggable-item"
            v-for="(block, i) in content"
            :key="block.id"
          >
            <component
              :class="{ 'pointer-events-none': isDragging }"
              :is="getBlockType(block)"
              v-model="block.getData"
              :block="block"
              :locale="currentLocale"
              :highlight="block.highlight"
              :key="block.id"
              :index="i"
              :max-index="content.length"
              @delete="deleteBlock"
              @move-up="moveUp"
              @move-down="moveDown"
            />
          </div>
        </transition-group>
      </draggable>
    </div>
    <opb-sidebar
      group-name="page-builder-group"
      @drag-start="dragStart"
      @drag-end="dragEnd"
    />
  </div>
</template>

<script>
import { toRefs, reactive, computed } from "@vue/composition-api";

import draggable from "vuedraggable";

export default {
  name: "OctoPageBuilder",
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  components: {
    draggable
  },
  setup(props, { emit }) {
    const state = reactive({
      isDragging: false,
      loaded: false,
      contentWidth: "100%",
      iframe: {
        src: window.location.href,
        style: null,
        wrapperStyle: null
      },
      // Page content
      defaultLocale: "en",
      currentLocale: "en",
      allPageContent: props.page.content
        ? props.page.content
        : { ["en"]: [], ["lt"]: [] }
    });

    const content = computed({
      get: () => {
        if (state.allPageContent[state.currentLocale].length === 0) {
          return [
            {
              id: "empty",
              type: "empty",
              getData: null,
              highlight: true
            }
          ];
        }
        return state.allPageContent[state.currentLocale];
      },
      set: content => {
        state.allPageContent[state.currentLocale] = content.filter(
          item => item.id !== "empty"
        );
      }
    });

    const moveUp = index => {
      const sortArray = [...content.value];
      if (index > 0) {
        const movingBlock = sortArray[index];
        sortArray[index] = sortArray[index - 1];
        sortArray[index - 1] = movingBlock;
        content.value = sortArray;
      }
    };

    const moveDown = index => {
      const sortArray = [...content.value];
      if (index < sortArray.length - 1) {
        const movingBlock = sortArray[index];
        sortArray[index] = sortArray[index + 1];
        sortArray[index + 1] = movingBlock;
        content.value = sortArray;
      }
    };

    const deleteBlock = block => {
      content.value = content.value.filter(b => b.id !== block.id);
    };

    // TODO rework this to maybe v-model?
    const updateDataForLocale = () => {
      const data = state.allPageContent[state.currentLocale].map(block => {
        return block.getData();
      });
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

    const exit = () => {
      emit("exit");
    };

    const getBlockType = computed(() => block => {
      return `opb-block-${block.type}`;
    });

    const dragOptions = computed(() => {
      return {
        animation: 200,
        group: "page-builder-group",
        disabled: false,
        ghostClass: "ghost"
      };
    });

    const contentStyle = computed(() => `width: ${state.contentWidth};`);

    const changeWidth = width => {
      state.contentWidth = width;
    };

    const dragStart = () => (state.isDragging = true);
    const dragEnd = () => (state.isDragging = false);

    return {
      ...toRefs(state),
      content,
      moveUp,
      moveDown,
      deleteBlock,
      changeLocale,
      publish,
      exit,
      dragStart,
      dragEnd,
      // new
      getBlockType,
      dragOptions,
      contentStyle,
      changeWidth
    };
  }
};
</script>
