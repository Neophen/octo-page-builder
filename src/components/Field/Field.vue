<template>
  <validation-provider
    :rules="field.validate"
    tag="div"
    :vid="key"
    :name="field.display"
    v-slot="{ errors, required }"
  >
    <component
      :is="type"
      :key="key"
      :name="key"
      :disabled="disabled"
      :required="required"
      :field="field"
      :error="errors[0]"
      v-model="modelValue"
    />
  </validation-provider>
</template>

<script>
import { computed, getCurrentInstance } from "@vue/composition-api";
import { useVModel } from "../../utils/useVModel.js";

export default {
  name: "OctoFormField",
  props: {
    field: {
      type: Object,
      required: true
    },
    fields: Object,
    value: null,
    disabled: Boolean
  },
  setup(props, { emit }) {
    const type = computed(() => `octo-form-${props.field.type}`);
    const key = getCurrentInstance().$vnode.key;
    const { modelValue } = useVModel(props, emit);

    return { type, key, modelValue };
  }
};
</script>
