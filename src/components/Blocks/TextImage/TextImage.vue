<template>
  <opb-block-layout :highlight="highlight">
    <div class="oct-container oct-text-photo">
      <div class="oct-row --reverse">
        <div class="oct-col right-block">
          <div class="oct-text-photo__img">
            <!-- <image-upload
              :width="768"
              :height="432"
              v-model="image"
              folder="text-photo"
            /> -->
          </div>
        </div>
        <div class="oct-col left-block">
          <div class="oct-text-content">
            <!-- <rich-text v-model="text"></rich-text> -->
          </div>
          <a
            v-for="(button, i) in buttons"
            class="oct-btn--primary --large"
            :key="i"
            :href="button.href"
            :data-link-type="button.type"
          >
            <input
              type="text"
              v-model="button.text"
              style="background:transparent;"
            />
          </a>
          <o-button type="is-dashed" @click="addButton">add button</o-button>
        </div>
      </div>
    </div>
    <opb-block-spacer v-model="spacer" />
  </opb-block-layout>
</template>

<script>
export default {
  name: "OpbBlockTextImage",
  props: {
    highlight: null,
    block: null,
    locale: String,
    getDataValue: null
  },
  model: {
    prop: "getDataValue",
    event: "setGetDataValue"
  },
  data() {
    return {
      text: this.block.content.text,
      image: this.block.content.image,
      buttons: [...this.block.content.buttons],
      spacer: this.block.settings.spacer,
      field: {
        type: "avatar"
      }
    };
  },
  created() {
    this.$emit("setGetDataValue", this.getData);
  },
  methods: {
    addButton() {
      this.buttons.push({
        text: "Sample Button",
        type: "link",
        href: null
      });
    },
    getData() {
      return {
        id: this.block.id,
        type: this.block.type,
        getData: this.getData,
        settings: {
          in_nav: false,
          in_nav_title: "",
          in_nav_id: "",
          spacer: this.spacer
        },
        content: {
          text: this.text,
          image: this.image,
          buttons: this.buttons
        }
      };
    }
  },
  setup() {}
};
</script>
