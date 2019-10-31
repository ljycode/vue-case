// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-console
  console.log(to);
  const flag = to.matched.some(match => match.meta && match.needLogin);
  // 判断是否有meta和needLogin
  const isLogin = localStorage.getItem('login');
  // 需要校验
  if (flag) {
    if (isLogin) { // 登录过
      next();
    } else { // 没登录就去登录
      next('/login');
    }
  } else {
    next();
  }

  if (to.name === 'login') {
    if (isLogin) {
      next('/');
    } else {
      next();
    }
  }
});
// router.beforeResolve((to, from, next) => {
//   // eslint-disable-next-line no-console
//   console.log('beforeResolve');
//   next();
// });
// router.afterEach((to, from, next) => {
//   // eslint-disable-next-line no-console
//   console.log('afterEach');
//   next();
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
