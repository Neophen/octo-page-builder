<template>
  <o-field
    :label="title"
    :type="{ 'is-danger': error }"
    :message="error"
    :label-for="key"
    :icon="fieldIcon"
    :number="fieldNumber"
    :hasValue="!!innerValue"
    class="octo-avatar"
  >
    <div
      class="octo-form__flex-center"
      :class="{ 'has-file': initialImg || croppa.chosenFile }"
    >
      <octo-form-croppa
        v-model="croppa"
        :width="width"
        :height="height"
        :quality="quality"
        accept="image/*"
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
          class="octo-form__inset-container octo-form__octo-form__flex-center"
        >
          <img v-if="!croppa.chosenFile" class="w-full" :src="initialImg" />
        </div>
        <div
          v-if="initialImg || croppa.chosenFile"
          class="octo-avatar__change-container octo-form__flex-center"
        >
          <o-button size="is-sm" squared @click="croppa.chooseFile()"
            >Edit</o-button
          >
        </div>
      </octo-form-croppa>
    </div>
  </o-field>
</template>

<script>
import { reactive, toRefs, getCurrentInstance } from "@vue/composition-api";

import Croppa from "../Croppa/Croppa.vue";
import { fieldMixin } from "../../utils/fieldMixin.js";
import { vModelMixin } from "../../utils/vModelMixin.js";

export default {
  name: "OctoFormAvatar",
  mixins: [vModelMixin, fieldMixin],
  components: {
    [Croppa.name]: Croppa
  },
  setup(props) {
    const instance = getCurrentInstance();
    const state = reactive({
      croppa: {},
      initialImg: props.value,
      width: props.field.width,
      height: props.field.height,
      quality: props.field.quality
    });

    const prepare = async () => {
      if (!state.croppa.chosenFile) return;

      const file = await state.croppa.promisedBlob(
        state.croppa.chosenFile.type,
        1
      );

      return {
        key: instance.$vnode.key,
        value: file
      };
    };

    return { ...toRefs(state), prepare };
  }
};
</script>
