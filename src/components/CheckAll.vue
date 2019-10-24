<template>
  <div>
      <input type="checkbox" v-model="checkAll" /> 全选<br/>
      <input type="checkbox" v-for="item in checks" :key="item.id" v-model="item.value" />
  </div>
</template>

<script>
export default {
  name: 'CheckAll',
  data() {
    return {
      checks: [{
        id: 1,
        value: true,
        text: '选项一',
      },
      {
        id: 2,
        value: false,
        text: '选项二',
      },
      {
        id: 3,
        value: true,
        text: '选项三',
      },
      ],
    };
  },
  computed: {
    checkAll: {
      get() {
        return this.checks.every(item => item.value);
      },
      // 当全选的value值发生改变时，同步设置其他的值
      set(value) {
        this.checks.forEach((item) => {
          item.value = value;
        });
      },
    },
  },
};
</script>

<style scoped lang="scss">
</style>
