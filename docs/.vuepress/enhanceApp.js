import VueCompositionApi from '@vue/composition-api';
import PortalVue from 'portal-vue';

import OctoUI from '@mykolasm/octo-ui';
import "@mykolasm/octo-ui/dist/octo-ui.css";
import OctoForm from '../../src/main.js';


// export default ({ Vue, options, router, siteData }) => {
export default ({ Vue }) => {

  Vue.use(VueCompositionApi);
  Vue.use(PortalVue);
  Vue.use(OctoUI, {
    iconPacks: {
      dashboard: '/svg/icons_dashboard.svg',
    }
  });

  Vue.use(OctoForm);
}