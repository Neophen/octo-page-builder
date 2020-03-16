<template>
  <div class="control-box">
    <octo-form-avatar v-model="valueAvatar" :field="field" key="avatart"></octo-form-avatar>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      valueAvatar: "",
      field: {
        display: "",
        width: 390,
        height: 390,
        quality: 1
      }
    });

    return { ...toRefs(state) };
  }
};
</script>
