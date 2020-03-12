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
    <o-input
      expanded
      v-model.number="innerValue"
      type="number"
      :min="field.min"
      :key="key"
      :name="key"
      :disabled="disabled"
      :maxlength="maxlength"
      :placeholder="placeholder"
    ></o-input>
  </o-field>
</template>

<script>
import { fieldMixin } from "../../utils/fieldMixin.js";
import { vModelMixin } from "../../utils/vModelMixin.js";
export default {
  name: "OctoFormNumber",
  mixins: [vModelMixin, fieldMixin]
};
</script>
