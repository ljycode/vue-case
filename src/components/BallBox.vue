<template>
  <div>
    <!-- 1.通过props + $emit -->
    <!-- <scroll-ball @input="input" :value="start1" :target="target1" color="blue">
    </scroll-ball> -->
    <!-- 2.将初始位置属性名又start改写为value后,可通过v-model实现双向数据绑定 -->
    <!-- <scroll-ball v-model="start1" :target="target1" color="blue"></scroll-ball> -->
    <!-- 3.通过.sync实现 -->
    <scroll-ball :value.sync="start2" @input="input" :target="target2" color="red"></scroll-ball>
    <!-- 相当于下边的，是下边的语法糖 -->
    <scroll-ball ref="ball" :value="start2" @update:value="input"
    :target="target2" color="red"></scroll-ball>
    <button @click="stop">停止运动</button>
  </div>
</template>

<script>
import ScrollBall from '@/components/ScrollBall';

export default {
  name: 'SrollBall',
  data() {
    return {
      start1: 50,
      target1: 200,
      start2: 10,
      target2: 500,
    };
  },
  methods: {
    // 使用v-model实现双向数据绑定时，不需要这个方法
    input(value) {
      this.start1 = value;
      this.start2 = value;
    },
    stop() {
      // 调用子组件实例的方法
      this.$refs.ball.stop();
    },
  },
  components: {
    ScrollBall,
  },
};
</script>

<style lang="scss" scoped>
</style>
