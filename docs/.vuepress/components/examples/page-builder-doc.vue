<template>
  <div class="control-box">
    <o-h size="3" class="mb-2">PageBuilder</o-h>
    <octo-page-builder v-model="valuePageBuilder"></octo-page-builder>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      valuePageBuilder: false
    });

    return { ...toRefs(state) };
  }
};
</script>
