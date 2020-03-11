import { reactive, watch, toRefs } from "@vue/composition-api";

export const useVModel = (props, emit) => {
  const state = reactive({
    modelValue: props.value
  });

  watch(
    () => state.modelValue,
    value => {
      emit("input", value);
    },
    { lazy: true }
  );

  watch(
    () => props.value,
    value => {
      state.modelValue = value;
    },
    { lazy: true }
  );

  return { ...toRefs(state) };
};
