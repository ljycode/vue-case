<template>
  <div class="scroll-ball" :style="style" :id="ballId">
  </div>
</template>

<script>
// props + $emit 双向数据通信
export default {
  name: 'SrollBall',
  mounted() {
    // 子组件通知父组件修改数据
    // eslint-disable-next-line prefer-const
    let ball = document.getElementById(this.ballId);
    // eslint-disable-next-line consistent-return
    const fn = () => {
      const left = this.start;
      if (left >= this.target) {
        // 取消定时器
        return cancelAnimationFrame(this.timer);
      }
      // 将子组件的值传递给父组件，修改start的值
      this.$emit('input', left + 5);
      ball.style.transform = `translate(${left}px)`;
      this.timer = requestAnimationFrame(fn);
    };
    // 类似setInterval，但比setInterval好用
    this.timer = requestAnimationFrame(fn);
  },
  props: {
    color: {
      type: String,
      default: 'white',
    },
    start: {
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
