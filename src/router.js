import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import ConoceMas from './pages/ConoceMas.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import NotFound from "@/pages/NotFound";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 300 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/conoce-mas',
      name: 'conoce-mas',
      components: { default: ConoceMas, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '*',
      name: 'not-found',
      components: { default: NotFound, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },

  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
