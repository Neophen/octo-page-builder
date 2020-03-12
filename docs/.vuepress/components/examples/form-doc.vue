<template>
  <div class="container">
    <div class="octo-box  mb-4">
      <o-h size="3" class="mb-4">Basic</o-h>
      <octo-form :fieldset="loginFieldset" />
    </div>
    <div class="octo-box mb-4">
      <o-h size="3" class="mb-4">With icons</o-h>
      <octo-form :fieldset="contactFieldset" />
    </div>
    <div class="octo-box mb-4 mt-6">
      <o-h size="3" class="mb-4">Basic numbered</o-h>
      <octo-form :fieldset="loginFieldsetNumbered" numbered/>
    </div>
    <div class="octo-box">
      <o-h size="3" class="mb-4">With icons numbered</o-h>
      <octo-form :fieldset="contactFieldsetNumbered" numbered/>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";
import { contactFieldset, contactFieldsetNumbered, loginFieldset, loginFieldsetNumbered } from "../../utils/fieldsets.js";

export default {
  setup() {
    const state = reactive({
      loginFieldset,
      loginFieldsetNumbered,
      contactFieldset,
      contactFieldsetNumbered,
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