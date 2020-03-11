<template>
  <div class="container">
    <div class="control-box">
      <o-form />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      someState: false
    });

    return { ...toRefs(state) };
  }
};
</script>