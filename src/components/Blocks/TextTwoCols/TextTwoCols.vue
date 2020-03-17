<template>
  <highlight-block :highlight="highlight">
    <div class="oct-container">
      <div class="oct-row">
        <div class="oct-col left-block">
          <div class="oct-text-content">
            <rich-text v-model="text_col_1"></rich-text>
          </div>
          <a
            v-for="(button, i) in buttons_col_1"
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
          <o-button type="is-dashed" @click="addButton(2)">add button</o-button>
        </div>
        <div class="oct-col right-block">
          <div class="oct-text-content">
            <rich-text v-model="text_col_2"></rich-text>
          </div>
          <a
            v-for="(button, i) in buttons_col_2"
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
          <o-button type="is-dashed" @click="addButton(1)">add button</o-button>
        </div>
      </div>
    </div>
    <spacer-block />
  </highlight-block>
</template>

<script>
import HighlightBlock from "../../shared/HighlightBlock.vue";
import SpacerBlock from "../../shared/SpacerBlock.vue";
import RichText from "../../shared/tip-tap/RichText.vue";

export default {
  name: "OpbBlockTextTwoCols",
  components: {
    RichText,
    HighlightBlock,
    SpacerBlock
  },
  props: {
    highlight: null,
    content: null,
    getDataValue: null
  },
  model: {
    prop: "getDataValue",
    event: "setDataValue"
  },
  data() {
    return {
      text_col_1: this.content.text_col_1,
      text_col_2: this.content.text_col_2,
      buttons_col_1: [...this.content.buttons_col_1],
      buttons_col_2: [...this.content.buttons_col_2]
    };
  },
  created() {
    this.content.getDataValue = this.getData;
    this.$emit("setDataValue", this.getData);
  },
  methods: {
    addButton(side) {
      if (side === 1) {
        this.buttons_col_1.push({
          text: "Sample Button",
          type: "link",
          href: null
        });
      } else {
        this.buttons_col_2.push({
          text: "Sample Button",
          type: "link",
          href: null
        });
      }
    },
    getData() {
      return {
        text_col_1: this.text_col_1,
        text_col_2: this.text_col_2,
        buttons_col_1: this.buttons_col_1,
        buttons_col_2: this.buttons_col_2
      };
    }
  }
};
</script>
