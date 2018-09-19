import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';
import store from './store';
import filters from './filters';
import globalMixins from './mixins';
import I18n, { VueI18n } from './locales';
import vueAxios from './utils/vue-axios';

Vue.config.productionTip = false;

filters.setAssetServer(process.env.VUE_APP_ASSERT_SERVER || '');
Vue.mixin(globalMixins);
Vue.use(Vuex);
Vue.use(VueI18n);
const i18n = I18n();
Vue.use(filters, i18n);
Vue.use(vueAxios, {
  i18n,
  baseUrl: process.env.VUE_APP_API_SERVER || '',
});

//import 'framework7/css/framework7.css';
import './css/f7.less';
import './css/app.less';

import Framework7 from './framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

Framework7.use(Framework7Vue);

//const vueApp =
new Vue({
  components: { App },
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
