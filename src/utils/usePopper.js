import { reactive, toRefs, ref, onBeforeUnmount } from "@vue/composition-api";
import { createPopper } from "@popperjs/core";

export const usePopper = (root = null) => {
  const refTrigger = ref(null);
  const refDropdown = ref(null);

  const state = reactive({
    popper: null,
    destroyPopperTimeout: null
  });

  const isElement = element =>
    element instanceof Element || element instanceof HTMLDocument;

  const setupPopper = (offset = [0, 0], placement = "bottom") => {
    const reference = isElement(refTrigger.value)
      ? refTrigger.value
      : refTrigger.value.$el;

    const dropdown = isElement(refDropdown.value)
      ? refDropdown.value
      : refDropdown.value.$el;

    state.popper = createPopper(reference, dropdown, {
      placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset
          }
        }
      ]
    });
  };

  const setupPopperWithTimeout = (offset = [0, 0], placement = "bottom") => {
    if (state.destroyPopperTimeout) {
      clearTimeout(state.destroyPopperTimeout);
      state.destroyPopperTimeout = null;
    }
    root.$nextTick(() => {
      setupPopper(offset, placement);
    });
  };

  const destroyPopper = () => {
    if (state.popper) {
      state.popper.destroy();
      state.popper = null;
    }
  };

  const destroyPopperWithTimeout = (time = 200) => {
    if (state.popper) {
      state.destroyPopperTimeout = setTimeout(function() {
        state.popper.destroy();
        state.popper = null;
        state.destroyPopperTimeout = null;
      }, time);
    }
  };

  onBeforeUnmount(() => {
    if (state.destroyPopperTimeout) {
      destroyPopperWithTimeout();
    } else {
      destroyPopper();
    }
  });

  return {
    ...toRefs(state),
    refTrigger,
    refDropdown,
    setupPopper,
    destroyPopper,
    setupPopperWithTimeout,
    destroyPopperWithTimeout
  };
};
