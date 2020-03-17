import * as components from "./components";

import "./styles/app.scss";

const OctoPageBuilder = {
  install(Vue) {
    // components
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }
  }
};

export default OctoPageBuilder;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(OctoPageBuilder);
}
