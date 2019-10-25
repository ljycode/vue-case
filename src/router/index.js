import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import CheckAll from '@/components/CheckAll';
import ParentToChild from '@/components/ParentToChild';
import FoldMenu from '@/components/FoldMenu';
import GetDom from '@/components/GetDom';

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
    {
      path: '/parenttochild',
      name: 'ParentToChild',
      component: ParentToChild,
    },
    {
      path: '/foldmenu',
      name: 'FoldMenu',
      component: FoldMenu,
    },
    {
      path: '/getdom',
      name: 'GetDom',
      component: GetDom,
    },
  ],
});
