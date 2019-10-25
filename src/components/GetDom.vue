<template>
  <div>
    <div ref="getDom">获取dom</div>
    <my-comp ref="comp"></my-comp>
  </div>
</template>

<script>
export default {
  name: 'GetDom',
  data() {
    return {

    };
  },
  // ref只能识别一个，不能给多个元素设置相同的ref,循环除外
  // 遇到循环，获取的是（数组形式的）多个元素
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$refs.getDom);
    // eslint-disable-next-line no-console
    console.log(this.$refs.comp.num);
  },
  components: {
    myComp: {
      template: `
        <div>我是组件</div>
      `,
      data() {
        return {
          num: 12,
        };
      },
    },
  },
};
</script>

<style lang="sass" scoped>

</style>
