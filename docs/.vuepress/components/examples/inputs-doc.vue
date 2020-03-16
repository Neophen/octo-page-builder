<template>
  <div class="container">
    <div class="control-box mb-4">
      <o-field label="Show some erros">
        <o-button @click="refreshErrors">Show errors</o-button>
      </o-field>
    </div>
    <div class="octo-box">
      <octo-form
        :fieldset="inputsFieldset"
        @submit="handleSubmit"
        :loading="isLoading"
        :errors="errorsBag"
      />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";
import { inputsFieldset, inputsFieldsetErrors } from "../../utils/fieldsets.js";

export default {
  setup() {
    const state = reactive({
      inputsFieldset,
      inputsFieldsetErrors,
      isLoading: false,
      errorsBag: {}
    });

    const handleSubmit = formData => {
      state.isLoading = true;
      let submitData = [];
      for (var pair of formData.entries()) {
        const line = `${pair[0]}: ${pair[1]}`;
        submitData.push(line);
      }

      setTimeout(() => {
        state.isLoading = false;
        alert(submitData.join("\n"));
      }, 3000);
    };

    const refreshErrors = () => {
      state.errorsBag = { ...inputsFieldsetErrors };
    };

    return { ...toRefs(state), handleSubmit, refreshErrors };
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