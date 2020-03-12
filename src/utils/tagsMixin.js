export const tagsMixin = {
  data() {
    return {
      tags: []
    };
  },
  computed: {
    selectedTags: {
      get() {
        if (!this.value) return [];
        return this.value.map(slug => this.findTerm(slug));
      },
      set(tags) {
        const emitted = tags.map(tag => tag.slug);
        this.$emit("input", emitted);
      }
    }
  },
  methods: {
    findTerm(value) {
      return this.tags.find(tag => tag.value === value);
    }
  }
};
