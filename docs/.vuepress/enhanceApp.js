import VueCompositionApi from '@vue/composition-api';
import PortalVue from 'portal-vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm';
import { extend } from "vee-validate/dist/vee-validate";
import OctoUI from '@mykolasm/octo-ui';
import "@mykolasm/octo-ui/dist/octo-ui.css";

import OctoForm from '../../src/main.js';

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

  extend("password", {
    params: ["target"],
    validate(value, { target }) {
      return value === target;
    },
    message: "Password confirmation does not match"
  });

  Vue.use(OctoForm);
}