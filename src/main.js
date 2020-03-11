import * as components from "./components";

import { extend, localize } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

const OctoForm = {
  install(Vue) {
    // components
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }

    Object.keys(rules).forEach(rule => {
      extend(rule, rules[rule]);
    });

    extend("password", {
      params: ["target"],
      validate(value, { target }) {
        return value === target;
      },
      message: "Password confirmation does not match"
    });

    localize("en", en);
  }
};

export default OctoForm;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(OctoForm);
}
