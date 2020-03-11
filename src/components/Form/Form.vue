<template>
  <validation-observer
    ref="refValidation"
    class="mx-auto"
    v-slot="{ valid, invalid, handleSubmit, dirty, reset }"
  >
    <form ref="refForm" @submit.prevent="handleSubmit(onSubmit)">
      <octo-form-field
        v-for="(field, key) in newfieldset"
        :class="fieldGap"
        :key="key"
        :field="field"
        :fields="newfieldset"
        :disabled="isLoading"
        v-model="field.value"
      ></octo-form-field>
      <slot>
        <div class="octo-form__buttons">
          <o-button
            class="octo-form__cancel-btn"
            dusk="octo-form__cancel-btn"
            @click="$emit('cancel', dirty) && reset()"
          >
            Cancel
          </o-button>
          <o-button
            native-type="submit"
            type="is-primary"
            class="octo-form__confirm-btn"
            dusk="octo-form__confirm-btn"
            :loading="isLoading"
            :disabled="invalid || !canSubmit"
          >
            Confirm
          </o-button>
        </div>
      </slot>
    </form>
  </validation-observer>
</template>

<script>
import { reactive, toRefs, ref, computed, watch } from "@vue/composition-api";
import { ValidationObserver } from "vee-validate";
import Field from "../Field/Field.vue";

export default {
  name: "OctoForm",
  components: {
    [Field.name]: Field,
    ValidationObserver
  },
  props: {
    fieldset: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      required: false
    },
    errors: Array
  },
  setup(props, { emit, root }) {
    const refForm = ref(null);
    const refValidation = ref(null);

    const state = reactive({
      newfieldset: props.fieldset,
      isLoading: false,
      acceptTermsConditions: false
    });

    const canSubmit = computed(() => {
      if (props.config && props.config.accept) {
        return state.acceptTermsConditions;
      }

      return true;
    });

    const isEmpty = value => {
      return value.constructor === Object && Object.entries(value).length === 0;
    };

    watch(
      () => props.errors,
      errors => {
        if (!errors || isEmpty(errors)) return;
        root.$nextTick(() => {
          refValidation.value.setErrors(errors);
        });
      }
    );

    async function onSubmit() {
      emit("start-submission");

      const prepareFields = Object.values(refValidation.value.refs)
        .filter(field => field.$children[0].prepare)
        .map(field => field.$children[0].prepare());

      emit("async-start");
      const blobs = await Promise.all(prepareFields);

      emit("async-prepared");

      const formData = new FormData(refForm.value);

      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ": " + pair[1]);
      // }

      blobs
        .filter(blob => blob)
        .forEach(blob => formData.append(blob.key, blob.value));

      emit("async-appended");
      emit("submit", formData);
    }

    const fieldGap = computed(() => {
      if (!props.config || !props.config.spacing) {
        return "octo-form__fields-gap";
      }

      return props.config.spacing;
    });

    return {
      ...toRefs(state),
      refValidation,
      refForm,
      onSubmit,
      canSubmit,
      fieldGap
    };
  }
};
</script>
