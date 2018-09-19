import NotFoundPage from '../pages/not-found';
import HomePage from '../pages/home';
import SecondPage from '../pages/second';
import ThirdPage from '../pages/third';
import FourthPage from '../pages/fourth';
import AboutPage from '../pages/about';

export default [
  {
    path: '/',
    component: {
      template: `<div class="page" data-name="blank"><div class="navbar"><div class="navbar-inner sliding"></div></div></div>`,
      on: {
        pageBeforeOut() {
          this.$$('.framework7-root>.views.tabs').addClass('previous-view');
        },
        pageBeforeIn() {
          this.$$('.framework7-root>.views.tabs').removeClass('previous-view');
        },
        pageAfterIn() {
          this.$router.clearPreviousHistory();
        },
      },
    },
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/second',
    component: SecondPage,
  },
  {
    path: '/third',
    component: ThirdPage,
  },
  {
    path: '/fourth',
    component: FourthPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
