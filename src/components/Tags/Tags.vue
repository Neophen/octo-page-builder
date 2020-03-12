<template>
  <div>
    <input
      v-for="val in value"
      type="text"
      :key="val"
      :name="`${key}[]`"
      :value="val"
      hidden
    />
    <o-field
      :label="title"
      :type="{ 'is-danger': error }"
      :message="error"
      :label-for="key"
      :icon="fieldIcon"
      :number="fieldNumber"
      :hasValue="selectedTags.length > 0"
    >
      <o-tags
        v-model="selectedTags"
        :key="key"
        :maxtags="maxtags"
        :data="displayTags"
        :disabled="disabled"
        autocomplete
        :open-on-focus="true"
        field="label"
        :allow-duplicates="false"
        :placeholder="placeholder"
        @typing="getFilteredTags"
        expanded
      >
        <template slot-scope="props">{{ props.option.label }}</template>
        <template slot="empty">There are no items</template>
      </o-tags>
    </o-field>
  </div>
</template>

<script>
import { fieldMixin } from "../../utils/fieldMixin.js";
import { vModelMixin } from "../../utils/vModelMixin.js";
export default {
  name: "OctoFormTags",
  mixins: [vModelMixin, fieldMixin],
  data() {
    return {
      filteredTags: []
    };
  },
  computed: {
    tags() {
      return this.field.options;
    },
    displayTags() {
      return this.filteredTags.length > 0
        ? this.filteredTags
        : this.nonDuplicates;
    },
    nonDuplicates() {
      return this.tags.filter(option =>
        this.value ? !this.value.includes(option.value) : true
      );
    },
    selectedTags: {
      get() {
        if (!this.value) return [];
        return this.value.map(tagValue => this.findTag(tagValue));
      },
      set(tags) {
        const emitted = tags.map(tag => tag.value);
        this.$emit("input", emitted);
      }
    }
  },
  methods: {
    findTag(value) {
      return this.tags.find(tag => tag.value === value);
    },
    getFilteredTags(text) {
      this.filteredTags = this.nonDuplicates.filter(
        option =>
          option.title
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) >= 0
      );
    }
  }
};
</script>
