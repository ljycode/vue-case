import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import CheckAll from '@/components/CheckAll';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/checkall',
      name: 'CheckAll',
      component: CheckAll,
    },
  ],
});
