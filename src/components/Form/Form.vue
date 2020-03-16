<template>
  <validation-observer
    ref="refValidation"
    v-slot="{ valid, invalid, handleSubmit, dirty, reset }"
  >
    <form ref="refForm" @submit.prevent="handleSubmit(onSubmit)">
      <octo-form-field
        v-for="(field, key) in newfieldset"
        :class="fieldGap"
        :key="key"
        :field="field"
        :fields="newfieldset"
        :disabled="loading"
        v-model="field.value"
      ></octo-form-field>
      <slot v-bind:dirty="dirty" v-bind:reset="reset" v-bind:invalid="invalid">
        <div class="octo-form__buttons">
          <o-button
            class="octo-form__cancel-btn"
            dusk="octo-form__cancel-btn"
            :disabled="loading"
            @click="$emit('cancel', dirty) && reset()"
            >Cancel</o-button
          >
          <o-button
            native-type="submit"
            type="is-primary"
            class="octo-form__confirm-btn"
            dusk="octo-form__confirm-btn"
            :loading="loading"
            :disabled="invalid || !canSubmit"
            >Confirm</o-button
          >
        </div>
      </slot>
    </form>
  </validation-observer>
</template>

<script>
import { reactive, toRefs, ref, computed, watch } from "@vue/composition-api";
import Field from "../Field/Field.vue";

export default {
  name: "OctoForm",
  components: {
    [Field.name]: Field
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
    errors: [Array, Object],
    loading: Boolean
  },
  setup(props, { emit, root }) {
    const refForm = ref(null);
    const refValidation = ref(null);

    const state = reactive({
      newfieldset: props.fieldset,
      acceptTermsConditions: false
    });

    const canSubmit = computed(() => {
      if (props.config && props.config.accept) {
        return state.acceptTermsConditions;
      }

      return true;
    });

    const isEmpty = value => {
      return (
        value &&
        value.constructor === Object &&
        Object.entries(value).length === 0
      );
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
      emit("submit-state", "start");

      const prepareFields = Object.values(refValidation.value.refs)
        .filter(field => field.$children[0].prepare)
        .map(field => field.$children[0].prepare());

      emit("submit-state", "progress-25");
      const blobs = await Promise.all(prepareFields);

      emit("submit-state", "progress-75");

      const formData = new FormData(refForm.value);

      blobs
        .filter(blob => blob)
        .forEach(blob => {
          // for images that have extras like _focus, _alt
          if (Array.isArray(blob)) {
            blob.forEach(b => formData.append(b.key, b.value));
          } else {
            formData.append(blob.key, blob.value);
          }
        });

      emit("submit-state", "finished");
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
