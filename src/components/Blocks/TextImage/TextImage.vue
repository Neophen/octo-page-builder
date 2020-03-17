<template>
  <opb-block-layout :highlight="highlight">
    <div class="oct-container oct-grid-2">
      <div class="oct-aspect-ratio-box is-right">
        <!-- <image-upload
              :width="768"
              :height="432"
              v-model="image"
              folder="text-photo"
        />-->
        <div class="oct-text-photo__img">
          <img src="/pirmoji_banga.jpg" />
        </div>
      </div>
      <div class="oct-text-content is-left">
        <h2 class="oct-h3">„Scanoramos kryptys“</h2>
        <p class="oct-p">
          Industrinių renginių serija, kviečianti kino profesionalus ir
          pradedančius nemokamai semtis vertingų žinių.
        </p>
        <h3 class="oct-h3">Programoje</h3>
        <ul class="oct-ul">
          <li>Teminės dirbtuvės</li>
          <li>Koprodukcijos forumai</li>
          <li>Pranešimai ir seminarai</li>
          <li>Diskusijos su profesionalais</li>
        </ul>

        <div class="oct-mt-4">
          <a
            href="https://scanorama.lt/2019?events=true"
            class="oct-btn--primary --large "
          >
            Plačiau apie renginius
          </a>
        </div>

        <!-- <rich-text v-model="text"></rich-text> -->
        <!-- <a
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
        <o-button type="is-dashed" @click="addButton">add button</o-button> -->
      </div>
    </div>
    <opb-block-settings :block="block" />
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
