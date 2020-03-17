<template>
  <div class="control-box">
    <o-h size="3" class="mb-2">TopBar</o-h>
    <opb-top-bar v-model="valueTopBar">TopBar</opb-top-bar>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      valueTopBar: false
    });

    return { ...toRefs(state) };
  }
};
</script>
