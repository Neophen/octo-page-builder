<template>
  <opb-block-layout :highlight="highlight">
    <header class="oct-header --media">
      <!-- <image-upload
        :width="1920"
        :height="600"
        v-model="image"
        folder="media-header"
      /> -->
      <div class="oct-header__content-bg">
        <div class="oct-header__content oct-container">
          <!-- <oct-site-info /> -->
          <div class="oct-header__btn-container">
            <button type="button" class="__btn-play" id="playpause">
              <o-icon icon="oct_media_play" />
            </button>
          </div>
          <div class="oct-header__bottom">
            <div class="oct-header__bottom-text">
              <!-- <h1 class="oct-h1">{{ title }}</h1> -->
              <!-- <p v-if="description" class="oct-p">{{ description }}</p> -->
              <input
                class="oct-h1 transparent-input"
                v-model="title"
                placeholder="Enter a title..."
              />
              <input
                class="oct-p transparent-input"
                v-model="description"
                placeholder="Optional: Enter a description..."
              />
            </div>
            <div v-if="button.enabled">
              <a :href="button.link" class="oct-btn--primary --large">{{
                button.text
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <nav id="page-nav" class="h-nav bg-black z-10">
      <div
        class="container h-full flex items-stretch overflow-x-auto overflow-y-hidden"
      >
        navigation will go here
        <!-- {{ partial:nav/link_top }}
        {{ foreach:contents as="section" }}
        {{ if section:is_in_nav }}
        <div
          class="flex-1 flex items-stretch text-center whitespace-no-wrap"
        >{{ partial:nav/link link="#{{section:text_in_nav | slugify}}" :title="section:text_in_nav" }}</div>
        {{ /if }}
        {{ /foreach:contents }}-->
      </div>
    </nav>
    <div class="page-nav-spacer"></div>
    <opb-block-spacer v-model="spacer" />
  </opb-block-layout>
</template>

<script>
import { reactive, toRefs, onMounted } from "@vue/composition-api";

export default {
  name: "OpbBlockHeaderMedia",
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
      spacer: props.block.settings.spacer,
      image: props.block.image,
      title: props.block.title,
      description: props.block.description,
      video: props.block.video,
      button: props.block.button
    });

    const getData = () => ({
      id: props.block.id,
      type: props.block.type,
      getData: getData,
      settings: {
        spacer: state.spacer
      },
      image: state.image,
      title: state.title,
      description: state.description,
      video: state.video,
      button: state.button
    });

    onMounted(() => emit("setGetDataValue", getData));

    return { ...toRefs(state) };
  }
};
</script>
