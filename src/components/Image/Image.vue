<template>
  <o-field
    :label="title"
    :type="{ 'is-danger': error }"
    :message="error"
    :label-for="key"
    :icon="fieldIcon"
    :number="fieldNumber"
    :hasValue="!!innerValue"
    class="octo-image"
  >
    <!-- We have this here for optional images but we might need better config -->
    <input
      v-if="initialImg && !croppa.chosenFile"
      :value="value"
      :name="key"
      hidden
    />
    <div
      ref="refAspecRatioBox"
      class="octo-aspect-ratio-box"
      :class="{ 'has-file': initialImg || croppa.chosenFile }"
      :style="aspectRatioStyle"
    >
      <octo-form-croppa
        class="octo-aspect-ratio-box-inside"
        @init="resizeAspectBox"
        @new-image-drawn="resizeAspectBox"
        @loading-end="resizeAspectBox"
        v-model="croppa"
        :width="width"
        :height="height"
        :quality="croppaQuality"
        accept="image/*"
        :auto-sizing="true"
        placeholder
        canvas-color="#FFF"
        :show-remove-button="false"
        :prevent-white-space="true"
      >
        <div
          v-if="!initialImg && !croppa.chosenFile"
          @click="croppa.chooseFile()"
          class="octo-form__inset-container octo-form__flex-center"
        >
          <div class="octo-avatar__placeholder octo-form__flex-center is-col">
            <o-icon icon="image" class="octo-avatar__placeholder-image" />
            <o-h size="5" class="octo-avatar__placeholder-label"
              >Click to select profile picture</o-h
            >
          </div>
        </div>
        <div
          v-if="initialImg && !croppa.chosenFile"
          class="octo-form__inset-container octo-form__flex-center"
        >
          <img v-if="!croppa.chosenFile" class="w-full" :src="initialImg" />
        </div>
        <div
          v-if="isEditingFocus"
          @click="setFocus"
          class="octo-form__inset-container"
        >
          <!-- <b-icon icon="dot-circle" size="is-large"> </b-icon> -->
          <o-icon
            icon="crosshair"
            class="octo-image__focus-target"
            :style="focusPosition"
          />
        </div>
        <div
          v-if="initialImg || croppa.chosenFile"
          class="octo-avatar__change-container"
        >
          <o-button
            size="is-sm"
            class
            :disabled="isEditingFocus"
            squared
            @click="croppa.chooseFile()"
            >Edit</o-button
          >
          <o-button
            class="octo-avatar__focus-btn"
            size="is-sm"
            squared
            @click="toggleFocus"
            >{{ isEditingFocus ? "Set focus" : "Edit focus" }}</o-button
          >
        </div>
      </octo-form-croppa>
    </div>
  </o-field>
</template>

<script>
import {
  reactive,
  toRefs,
  getCurrentInstance,
  computed,
  ref,
  onMounted,
  onBeforeUnmount
} from "@vue/composition-api";

import Croppa from "../Croppa/Croppa.vue";
import { fieldMixin } from "../../utils/fieldMixin.js";
import { vModelMixin } from "../../utils/vModelMixin.js";

export default {
  name: "OctoFormImage",
  mixins: [vModelMixin, fieldMixin],
  components: {
    [Croppa.name]: Croppa
  },
  setup(props) {
    const refAspecRatioBox = ref(null);
    const instance = getCurrentInstance();
    const state = reactive({
      croppa: {},
      initialImg: props.value,
      width: props.field.width,
      height: props.field.height,
      containerWidth: props.field.width,
      focus: "50-50",
      isEditingFocus: false,
      posX: 50,
      posY: 50
    });

    const aspectRatioStyle = computed(() => {
      return `padding-top: calc(${state.height} / ${state.width} * 100%);`;
    });

    const resizeAspectBox = () => {
      if (!refAspecRatioBox.value) return;
      if (state.containerWidth === refAspecRatioBox.value.offsetWidth) return;
      state.containerWidth = refAspecRatioBox.value.offsetWidth;
      state.croppa.refresh();
    };

    onMounted(() => {
      window.addEventListener("resize", resizeAspectBox);
      resizeAspectBox();
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", resizeAspectBox);
    });

    const croppaQuality = computed(() => {
      return state.width / state.containerWidth;
    });

    const prepare = async () => {
      if (!state.croppa.chosenFile) return;

      const file = await state.croppa.promisedBlob(
        state.croppa.chosenFile.type,
        1
      );

      return [
        {
          key: instance.$vnode.key,
          value: file
        },
        {
          key: `${instance.$vnode.key}_focus`,
          value: `${state.posX}-${state.posY}`
        }
      ];
    };

    const download = (type, compressionRate) => {
      state.croppa.generateBlob(
        blob => {
          if (!blob) return;
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.download = "filename";
          a.href = url;
          a.click();
          URL.revokeObjectURL(url);
        },
        type,
        compressionRate
      );
    };

    const toggleFocus = () => {
      state.isEditingFocus = !state.isEditingFocus;
    };

    const setFocus = event => {
      const rect = event.target.getBoundingClientRect();
      state.posX = Math.round(((event.clientX - rect.left) * 100) / rect.width); //x percentage.
      state.posY = Math.round(((event.clientY - rect.top) * 100) / rect.height); //y percentage.
    };

    const focusPosition = computed(() => {
      return `left:calc(${state.posX}% - 20px);top:calc(${state.posY}% - 20px)`;
    });

    return {
      ...toRefs(state),
      prepare,
      aspectRatioStyle,
      download,
      refAspecRatioBox,
      croppaQuality,
      resizeAspectBox,
      toggleFocus,
      setFocus,
      focusPosition
    };
  }
};
</script>
