<template>
  <div class="control-box">
    <o-h size="3" class="mb-2">Sidebar</o-h>
    <opb-sidebar v-model="valueSidebar">Sidebar</opb-sidebar>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      valueSidebar: false
    });

    return { ...toRefs(state) };
  }
};
</script>
