export const fieldMixin = {
  props: {
    field: Object,
    fields: Object,
    disabled: Boolean,
    error: String
  },
  methods: {
    getRule(rule) {
      if (!this.hasRule(rule)) return null;
      return this.rules[rule];
    },
    hasRule(rule) {
      return Object.prototype.hasOwnProperty.call(this.rules, rule);
    }
  },
  computed: {
    key() {
      return this.$vnode.key;
    },
    placeholder() {
      return this.field.placeholder;
    },
    title() {
      return this.field.display;
    },
    optional() {
      if (this.field.type === "section") {
        return false;
      }
      return !this.hasRule("required");
    },
    maxlength() {
      return this.getRule("max");
    },
    rules() {
      if (!this.field.validate) return {};

      const allRules = this.field.validate.split("|").reduce((acc, item) => {
        const splitItem = item.split(":");
        const key = splitItem[0];
        let value = true;
        if (splitItem.length > 1) {
          value = splitItem[1];
        }
        acc[key] = value;
        return acc;
      }, {});

      return allRules;
    },
    options() {
      return this.field.options ? this.field.options : {};
    },
    maxtags() {
      return this.field.max_items;
    },
    fieldIcon() {
      return this.field.icon;
    },
    fieldNumber() {
      return this.field.number;
    },
    autocomplete() {
      return this.field.autocomplete || "off";
    },
    fieldType() {
      return this.field.textType || "text";
    }
  }
};
