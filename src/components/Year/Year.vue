<template>
  <o-field
    :label="title"
    :type="{ 'is-danger': error }"
    :message="error"
    :label-for="key"
    :icon="fieldIcon"
    :number="fieldNumber"
    :hasValue="!!innerValue"
  >
    <o-select
      :placeholder="placeholder"
      :disabled="disabled"
      :name="key"
      v-model="innerValue"
    >
      <option v-for="option in years" :value="option" :key="option">
        {{ option }}
      </option>
    </o-select>
  </o-field>
</template>

<script>
import { fieldMixin } from "../../utils/fieldMixin.js";
import { vModelMixin } from "../../utils/vModelMixin.js";
export default {
  name: "OctoFormYear",
  mixins: [vModelMixin, fieldMixin],
  data() {
    const currentYear = new Date().getFullYear();
    const years = [];
    let startYear = this.field.min ? this.field.min : 1950;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }

    return {
      years: years.reverse()
    };
  }
};
</script>
