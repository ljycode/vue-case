<template>
  <div>
    <scroll-ball @input="input" :start="start1" :target="target1" color="blue"></scroll-ball>
    <scroll-ball @input="input" :start="start2" :target="target2" color="red"></scroll-ball>
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
      target2: 300,
    };
  },
  methods: {
    input(value) {
      this.start1 = value;
      this.start2 = value;
    },
  },
  components: {
    ScrollBall,
  },
};
</script>

<style lang="scss" scoped>
</style>
