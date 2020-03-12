<template>
  <div class="container">
    <octo-form :fieldset="filmFieldset" />
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";
import { filmFieldset } from "../../utils/fieldsets.js";

export default {
  setup() {
    const state = reactive({
      filmFieldset
    });

    return { ...toRefs(state) };
  }
};
</script>

<style lang="scss">
.octo-form__fields-gap {
  margin-bottom: 1.25rem;
}

.octo-form__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
}
</style>