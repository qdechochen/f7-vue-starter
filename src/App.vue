<template>
  <f7-app :params="f7params">
    <f7-statusbar></f7-statusbar>
    <f7-views tabs>
      <f7-view id="tab-home" :init="true" tab tab-active linksView="#main-view">
        <home-page></home-page>
      </f7-view>
      <f7-view id="tab-second" :init="true" tab linksView="#main-view">
        <second-page></second-page>
      </f7-view>
      <f7-view id="tab-third" :init="true" tab linksView="#main-view">
        <third-page></third-page>
      </f7-view>
      <f7-view id="tab-fourth" :init="true" tab linksView="#main-view">
        <fourth-page></fourth-page>
      </f7-view>
      <f7-toolbar tabbar labels>
        <f7-link tab-link="#tab-home" icon="ivoc ivoc-home" text="首页" class="tab-link-active"></f7-link>
        <f7-link tab-link="#tab-second" icon="ivoc ivoc-ec" text="治理企业"></f7-link>
        <f7-link tab-link="#tab-third" icon="ivoc ivoc-cc" text="项目机会"></f7-link>
        <f7-link tab-link="#tab-fourth" icon="ivoc ivoc-me" text="个人中心"></f7-link>
      </f7-toolbar>
    </f7-views>
    <!-- Main View -->
    <f7-view id="main-view" main url="/" :pushState="true">
    </f7-view>
  </f7-app>
</template>

<script>
import f7params from './configs/f7-params';
import routes from '@/routes';
import HomePage from './pages/home';
import SecondPage from './pages/second';
import ThirdPage from './pages/third';
import FourthPage from './pages/fourth';

export default {
  name: 'app',
  components: {
    HomePage,
    SecondPage,
    ThirdPage,
    FourthPage,
  },
  data() {
    return {
      f7params: Object.assign(f7params, {
        id: 'online.ataw.f7-starter',
        name: this.$t('app_name'),
        theme: 'auto',
        routes: routes,
      }),
    };
  },
};
</script>
