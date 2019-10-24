<template>
  <div>
    <router-link :to="{name:'CheckAll'}">全选功能</router-link>
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
