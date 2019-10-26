<template>
  <div>
    {{uname | upper}}
    {{uname | upper('l')}}
  </div>
</template>

<script>
export default {
  name: 'FilterApply',
  data() {
    return {
      uname: 'Lily',
    };
  },
  // 过滤器 改变数据的展示形式，不改变原数据
  filters: {
    upper(value, flag) {
      if (flag === 'l') {
        return value.toLowerCase();
      }
      return value.toUpperCase();
    },
  },
};
</script>

<style lang="sass" scoped>

</style>
