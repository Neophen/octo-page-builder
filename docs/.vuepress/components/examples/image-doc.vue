<template>
  <div>
    <o-h size="3" class="mb-2">Image</o-h>
    <octo-form-image ref="refImage" v-model="valueImage" :field="field" key="image" />

    <div class="mt-6">
      <o-button @click="download">Download</o-button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "@vue/composition-api";

export default {

  setup() {

    const refImage = ref(null);

    const state = reactive({
      valueImage: "/DianaAndMe.jpg",
      field: {
        display: "",
        width: 1920,
        height: 600,
      }
    });

    const download = () => {
      // console.log(refImage.value);
      refImage.value.download();
    }

    return { ...toRefs(state), refImage, download };
  }
};
</script>
