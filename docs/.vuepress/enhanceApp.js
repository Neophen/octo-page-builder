import VueCompositionApi from '@vue/composition-api';
import PortalVue from 'portal-vue';
import OctoUI from '@mykolasm/octo-ui';
import "@mykolasm/octo-ui/dist/octo-ui.css";

import OctoPageBuilder from '../../src/main.js';

export default ({ Vue }) => {

  Vue.use(VueCompositionApi);
  Vue.use(PortalVue);
  Vue.use(OctoUI, {
    iconPacks: {
      dashboard: '/svg/icons_dashboard.svg',
      opb: '/svg/icons_page_builder.svg',
      page_blocks: '/svg/icons_page_blocks.svg',
    }
  });

  Vue.use(OctoPageBuilder);
}