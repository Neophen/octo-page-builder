<template>
  <div class="opb-page-builder">
    <opb-top-bar
      :page="page"
      @change-locale="changeLocale"
      @publish="publish"
      @change-width="changeWidth"
    />
    <div class="opb-content">
      <draggable
        class="obp-content__container"
        :style="contentStyle"
        v-model="content"
        v-bind="dragOptions"
        handle=".opb-drag-handle"
        @start="drag = true"
        @end="drag = false"
      >
        <transition-group type="transition" :name="!drag ? 'flip-list' : null">
          <div class="draggable-item" v-for="block in content" :key="block.id">
            <component
              :class="{ 'pointer-events-none': drag }"
              :is="getBlockType(block)"
              v-model="block.getData"
              :block="block"
              :locale="currentLocale"
              :highlight="block.highlight"
              :key="block.id"
            />
          </div>
        </transition-group>
      </draggable>
    </div>
    <opb-sidebar
      group-name="page-builder-group"
      @drag-start="dragStart"
      @drag-end="onDragEnd"
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
      drag: false,
      disablePointerEvents: false,
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
    const openSettings = () => {};

    const deleteBlock = index => {
      // console.log("delete: ", index);
      content.value = content.value.filter((block, i) => i !== index);
    };

    // const updateDataForLocale = locale => {
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

    const getBlockType = computed(() => block => {
      return `opb-block-${block.type}`;
    });

    // const iframeSrc = computed(() => {
    //   if (state.refEditor && state.refIframe) {
    //     console.log(state.refEditor);
    //     return state.refEditor;
    //   }
    //   return "about:blank";
    // });

    const dragOptions = computed(() => {
      return {
        animation: 200,
        group: "page-builder-group",
        disabled: false,
        ghostClass: "ghost",
        emptyInsertThreshold: 200
      };
    });

    // iframe shit

    const contentStyle = computed(() => `width: ${state.contentWidth};`);

    const changeWidth = width => {
      state.contentWidth = width;
    };

    return {
      ...toRefs(state),
      content,
      moveUp,
      moveDown,
      openSettings,
      deleteBlock,
      changeLocale,
      publish,
      // new
      getBlockType,
      dragOptions,
      contentStyle,
      changeWidth
    };
  },
  methods: {
    dragStart() {
      this.disablePointerEvents = true;
    },
    // onDrop(dropResult) {
    onDrop() {
      this.disablePointerEvents = false;
      // this.content = applyDrag(this.content, dropResult, this.currentLocale);
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
