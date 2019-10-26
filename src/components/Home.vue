<template>
  <div>
    <router-link :to="{name:'CheckAll'}">全选功能</router-link>
    <router-link :to="{name:'ParentToChild'}">父子通信</router-link>
    <router-link :to="{name:'FoldMenu'}">折叠菜单</router-link>
    <router-link to="/filter">FilterApply</router-link>
    <router-link to="/ball">ScrollBall</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
</style>
