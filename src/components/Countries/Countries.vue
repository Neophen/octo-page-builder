<template>
  <div>
    <input
      v-for="val in value"
      type="text"
      :name="`${key}[]`"
      :value="val"
      :key="val"
      hidden
    />
    <o-field
      :label="title"
      :type="{ 'is-danger': error }"
      :message="error"
      :label-for="key"
      :icon="fieldIcon"
      :number="fieldNumber"
      :hasValue="!!innerValue"
    >
      <o-tags
        v-model="selectedItems"
        :key="key"
        :maxtags="maxtags"
        :data="filterdItems"
        :disabled="disabled"
        autocomplete
        :open-on-focus="true"
        field="label"
        :allow-duplicates="false"
        :placeholder="placeholder"
        @typing="getFilteredItems"
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

import { countries } from "../../utils/countries.js";

export default {
  name: "OctoFormCountries",
  mixins: [vModelMixin, fieldMixin],
  data() {
    return {
      items: countries,
      filterdItems: countries
    };
  },
  computed: {
    nonDuplicates() {
      return this.items.filter(option =>
        this.value ? !this.value.includes(option.value) : true
      );
    },
    selectedItems: {
      get() {
        if (!this.value) return [];
        return this.value.map(val => this.findItem(val));
      },
      set(value) {
        const emited = value.map(term => term.value);
        this.$emit("input", emited);
        this.$nextTick(function() {
          this.filterdItems = this.nonDuplicates;
        });
      }
    }
  },
  methods: {
    findItem(value) {
      return this.items.find(item => item.value === value);
    },
    getFilteredItems(text) {
      if (!text) {
        this.filterdItems = this.nonDuplicates;
        return;
      }
      this.filterdItems = this.nonDuplicates.filter(option =>
        option.label
          .toString()
          .toLowerCase()
          .startsWith(text.toLowerCase())
      );
    }
  }
};
</script>
