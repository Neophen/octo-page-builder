<template>
  <div>
    <input
      v-for="val in value"
      type="text"
      :name="`${key}[]`"
      :value="val"
      :key="val"
      hidden
    />
    <o-field
      :label="title"
      :type="{ 'is-danger': error }"
      :message="error"
      :label-for="key"
      :icon="fieldIcon"
      :number="fieldNumber"
      :hasValue="selectedItems.length > 0"
    >
      <o-tags
        v-model="selectedItems"
        :disabled="disabled"
        :allow-duplicates="true"
        :placeholder="placeholder"
        expanded
      ></o-tags>
    </o-field>
  </div>
</template>

<script>
import { fieldMixin } from "../../utils/fieldMixin.js";
export default {
  name: "OctoFormList",
  mixins: [fieldMixin],
  props: ["value"],
  computed: {
    selectedItems: {
      get() {
        if (!this.value) return [];
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
