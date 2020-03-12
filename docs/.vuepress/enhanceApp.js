import VueCompositionApi from '@vue/composition-api';
import PortalVue from 'portal-vue';

import OctoUI from '@mykolasm/octo-ui';
import "@mykolasm/octo-ui/dist/octo-ui.css";
import OctoForm from '../../src/main.js';

import { extend, localize } from "vee-validate/dist/vee-validate";
import * as rules from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";


// export default ({ Vue, options, router, siteData }) => {
export default ({ Vue }) => {

  Vue.use(VueCompositionApi);
  Vue.use(PortalVue);
  Vue.use(OctoUI, {
    iconPacks: {
      dashboard: '/svg/icons_dashboard.svg',
    }
  });

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

  Vue.use(OctoForm);
}