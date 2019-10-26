<template>
  <div class="scroll-ball" :style="style" :id="ballId">
  </div>
</template>

<script>
/*
 双向数据通信3种实现：
 1. props + $emit
 2. v-model = @input="input" + :value="" （此方法用的是最多的）
 3. .sync = :xxx="xxx" @update:xxx="" + 子组件$emit("update:value")
*/
export default {
  name: 'SrollBall',
  mounted() {
    // 子组件通知父组件修改数据
    // eslint-disable-next-line prefer-const
    let ball = document.getElementById(this.ballId);
    // eslint-disable-next-line consistent-return
    const fn = () => {
      const left = this.value;
      if (left >= this.target) {
        // 取消定时器
        return cancelAnimationFrame(this.timer);
      }
      // 1.将子组件的值传递给父组件，修改父组件的start的值；
      // 2.使用v-model实现双向数据绑定是也需要用$emit()
      // this.$emit('input', left + 5);
      // 3.通过.sync实现不使用上行的写法，而使用下行的
      this.$emit('update:value', left + 5);
      ball.style.transform = `translate(${left}px)`;
      this.timer = requestAnimationFrame(fn);
    };
    // 类似setInterval，但比setInterval好用
    this.timer = requestAnimationFrame(fn);
  },
  methods: {
    stop() {
      cancelAnimationFrame(this.timer);
    },
  },
  props: {
    color: {
      type: String,
      default: 'white',
    },
    value: {
      type: Number,
      default: 0,
    },
    target: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    style() {
      return { background: this.color };
    },
    ballId() {
      // 设置可复用组件的id
      // eslint-disable-next-line no-underscore-dangle
      return `ball${this._uid}`;
    },
  },
};
</script>

<style lang="scss">
  .scroll-ball{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #666;
    text-align: center;
  }
</style>
