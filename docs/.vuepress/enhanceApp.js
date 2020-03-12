import VueCompositionApi from '@vue/composition-api';
import PortalVue from 'portal-vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm';

import OctoUI from '@mykolasm/octo-ui';
import "@mykolasm/octo-ui/dist/octo-ui.css";

import { extend } from "vee-validate/dist/vee-validate";
// import * as rules from "vee-validate/dist/rules";
// import { messages } from 'vee-validate/dist/locale/en.json';

import OctoForm from '../../src/main.js';


// export default ({ Vue, options, router, siteData }) => {
export default ({ Vue }) => {

  Vue.component('ValidationProvider', ValidationProvider);
  Vue.component('ValidationObserver', ValidationObserver);
  Vue.use(VueCompositionApi);
  Vue.use(PortalVue);
  Vue.use(OctoUI, {
    iconPacks: {
      dashboard: '/svg/icons_dashboard.svg',
    }
  });

  // Object.keys(rules).forEach(rule => {
  //   // console.log(rule);
  //   extend(rule, {
  //     ...rules[rule], // copies rule configuration
  //     message: messages[rule] // assign message
  //   });
  // });

  extend("password", {
    params: ["target"],
    validate(value, { target }) {
      return value === target;
    },
    message: "Password confirmation does not match"
  });

  Vue.use(OctoForm);
}