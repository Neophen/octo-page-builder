<template>
  <div class="rounded overflow-hidden mt-4 p-5 z-10">
    <o-radio-field
      name="link_type"
      class="mb-2"
      v-model="linkType"
      radio-value="link"
      >Link</o-radio-field
    >
    <o-radio-field name="link_type" v-model="linkType" radio-value="file"
      >File</o-radio-field
    >
    <div class="w-full border-b my-5"></div>
    <div v-if="linkType === 'link'">
      <o-input-field
        class="w-full"
        name="url"
        v-model="url"
        @blur="updateUrl"
        @keyup.enter="updateUrl"
        @keyup.tab="updateUrl"
        placeholder="Paste URL..."
      />
    </div>
    <div v-if="linkType === 'file'">
      <input type="file" hidden ref="fileInput" @change="handleInputChange" />
      <div v-if="url && isFileUrl" class="overflow-hidded">
        <o-text class="truncate mb-2" :title="url">{{ shortUrl }}</o-text>
        <button
          type="button"
          class="text-highlight underline"
          @click="chooseFile"
        >
          Change file
        </button>
      </div>
      <o-button v-else @click="chooseFile" class="w-full" :loading="isLoading"
        >Select file</o-button
      >
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watch, ref, computed } from "@vue/composition-api";

export default {
  name: "LinkMenu",
  props: {
    linkCommand: null,
    linkAttributes: null
  },
  setup(props) {
    const fileInput = ref(null);

    const state = reactive({
      linkType: props.linkAttributes["data-link-type"] || "link",
      url: props.linkAttributes.href,
      isLoading: false
    });

    const shortUrl = computed(() =>
      state.url.replace(
        "https://octafest-test.s3.eu-central-1.amazonaws.com/rich-text-files",
        ""
      )
    );

    const isFileUrl = computed(() =>
      state.url.startsWith(
        "https://octafest-test.s3.eu-central-1.amazonaws.com/rich-text-files"
      )
    );

    watch(
      () => props.linkAttributes,
      linkAttributes => {
        state.url = linkAttributes.href;
        state.linkType = linkAttributes["data-link-type"] || state.linkType;
      }
    );

    watch(
      () => state.linkType,
      linkType => {
        props.linkCommand({
          href: state.url,
          "data-link-type": linkType
        });
      },
      { lazy: true }
    );

    const updateUrl = () => {
      if (state.url === "") {
        props.linkCommand({ href: null });
        return;
      }
      props.linkCommand({ href: state.url, "data-link-type": state.linkType });
    };

    const chooseFile = () => {
      fileInput.value.click();
    };

    const handleInputChange = async () => {
      let input = fileInput.value;
      if (!input.files.length) return;

      let file = input.files[0];

      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "rich-text-files");

      state.isLoading = true;

      try {
        // const { data } = await axios.post(
        //   root.$route("admin.page.files.store"),
        //   formData,
        //   {
        //     headers: {
        //       "content-type": "multipart/form-data"
        //     }
        //   }
        // );
        // props.linkCommand({
        //   href: data,
        //   "data-link-type": "file"
        // });
      } catch (error) {
        console.error(error);
      } finally {
        state.isLoading = false;
      }
    };

    return {
      ...toRefs(state),
      updateUrl,
      shortUrl,
      isFileUrl,
      fileInput,
      chooseFile,
      handleInputChange
    };
  }
};
</script>
