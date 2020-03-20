<template>
  <div class="w-full h-full relative image-container">
    <o-modal :active.sync="isModalOpen" widthClass="w-auto">
      <div>
        <div class="text-left flex items-center justify-between mb-5">
          <o-h>Zoom &amp; Crop</o-h>
          <button
            @click="isModalOpen = false"
            class="close__btn focus:outline-none"
          >
            <o-icon icon="close" class="w-4 h-4" />
          </button>
        </div>
        <o-label
          :field="imageField"
          :error="null"
          name="image-field"
          class="mb-5"
        >
          <div
            class="flex items-center justify-center mt-2"
            :class="{ 'has-file': initialImg || croppa.chosenFile }"
          >
            <!-- <croppa
              v-model="croppa"
              :width="width"
              :height="height"
              placeholder
              accept=".jpeg, .jpg, .png"
              canvas-color="#FFF"
              :show-remove-button="false"
              :prevent-white-space="true"
            ></croppa> -->
          </div>
        </o-label>
        <o-input
          name="description"
          :disabled="false"
          :required="false"
          :field="descriptionField"
          :error="null"
          v-model="description"
        ></o-input>

        <div class="flex items-center justify-between mt-5">
          <o-button @click="isModalOpen = false">Cancel</o-button>
          <o-button type="is-primary" @click="uploadImage" :loading="isLoading"
            >Upload</o-button
          >
        </div>
      </div>
    </o-modal>
    <button
      v-if="!initialImg"
      @click="openModal"
      class="absolute inset-0 block w-full h-full focus:outline-none flex items-center justify-center"
    >
      <div class="placehoder">
        <div class="mx-auto w-16 mb-5">
          <o-icon icon="image" pack="opb" class="w-16 h-16" />
        </div>
        <p class="font-label underline">Click to select profile picture</p>
      </div>
    </button>
    <div
      v-else
      class="absolute left-0 bottom-0 w-full h-full flex items-center justify-center"
    >
      <img
        class="w-full h-full object-cover"
        :src="initialImg.src"
        :alt="initialImg.alt"
      />
      <div
        class="absolute left-0 bottom-0 w-full mb-10 flex items-center justify-center"
      >
        <o-button type="is-primary" class="--small" @click="openModal"
          >Change</o-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

// @ts-ignore
// import Croppa from '../../../vue-croppa/cropper.vue';

export default {
  name: "ImageUpload",
  // components: {
  //   Croppa,
  // },
  props: {
    folder: {
      type: String,
      default: "page_images"
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    value: null
  },
  setup(props, { root, emit }) {
    const state = reactive({
      croppa: {
        chooseFile: () => {}
      },
      initialImg: props.value,
      isModalOpen: false,
      imageField: {
        label: "Scroll and drag the image to adjust"
      },
      descriptionField: {
        label: "Description for visually impaired",
        value: "",
        placeholder: "Describe image..."
      },
      focus: "50_50",
      description: "",
      isLoading: false
    });

    const openModal = async () => {
      state.isModalOpen = true;
      await root.nextTick();
      if (state.croppa) state.croppa.chooseFile();
    };

    const uploadImage = async () => {
      if (!state.croppa.chosenFile) return;

      state.isLoading = true;

      try {
        const file = await state.croppa.promisedBlob(
          state.croppa.chosenFile.type,
          1
        );

        const formData = new FormData();

        formData.append("image", file);
        formData.append("description", state.description);
        formData.append("focus", JSON.stringify(state.focus));
        formData.append("folder", props.folder);

        // const { data } = await axios.post(
        //   root.$route("admin.page.images.store"),
        //   formData,
        //   {
        //     headers: {
        //       "content-type": "multipart/form-data"
        //     }
        //   }
        // );

        state.initialImg = {
          // src: data,
          alt: state.description,
          focus: state.focus
        };

        emit("input", state.initialImg);

        state.isLoading = false;
        state.isModalOpen = false;
      } catch (error) {
        state.isLoading = false;
      }
    };

    return { ...toRefs(state), uploadImage, openModal };
  }
};
</script>
