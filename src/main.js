import * as components from "./components";

const OctoForm = {
  install(Vue) {
    // components
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }
  }
};

export default OctoForm;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(OctoForm);
}
