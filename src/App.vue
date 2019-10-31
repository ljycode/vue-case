<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div>
      <h4>Vuex的使用</h4>
      {{$store.state.teacher}}<br/>
      <!-- {{$store.getters.getName}}<br/>
      获取user模块的userName
      {{$store.state.user.userName}} -->
      <!-- {{$store.getters.getUserName}} -->
      <!-- {{userName}} -->
      {{teacher}}
      {{getName}}
      <button @click="change">修改状态</button>
    </div>
  </div>
</template>

<script>
/**
 * 在页面中注入了store,每个实例都会存在一个属性$store
 * 子模块的状态：
 * 1.属性：$store.state.模块名.属性
 * 2.getters的方法不需要加模块名，直接 $store.getters.方法名
 * 假如在vuex中用到了模块最好使用辅助方法
 */

import { mapState, mapGetters } from 'vuex';


export default {
  name: 'App',
  computed: {
    ...mapState(['teacher']),
    ...mapState('user', ['UserName']),
    ...mapGetters(['getName']),
  },
  methods: {
    change() {
      this.$store.commit('user/change_uname', 'ali');
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
