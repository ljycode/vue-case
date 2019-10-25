<template>
  <div>
    <p>组件通信之父与子</p>
    <div :msg="msg" :a="a" :b="b">
      {{msg}}
      <!-- 1.想在父组件中绑定原生事件给子组件，需要加 .native ，不加就会被当作一个属性看待。 -->
      <!-- <my-child1 :msg="msg" :a="a" :b="b" @click.native="fn"></my-child1> -->
      <!-- 2.通过子组件调用父组件的方法 -->
      <my-child1 :msg="msg" :a="a" :b="b" @click="fn" @mouseup="fn"></my-child1>
    </div>
    <ul>
      <h6>子如何传父</h6>
      <li>1.在子组件中调用$emit()方法发布一个事件，事件名称可以自己定义。// @click="$emit('click2',参数)"</li>
      <li>2.在父组件中提供一个在子组件内部发布的事件处理函数。// fn(参数)</li>
      <li>3.在父组件订阅子组件发布的事件。// @click2="fn"</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ParentToChild',
  data() {
    return {
      msg: '父传子',
      a: 10,
      b: 20,
    };
  },
  methods: {
    fn(num) {
      // eslint-disable-next-line no-console
      console.log(num, '在父组件中为子组件绑定原生事件');
    },
  },
  components: {
    MyChild1: {
      // props: ['msg', 'a', 'b'],
      mounted() {
        // console.log(this.$attrs); // 没有使用的属性，保留在$attrs中
      },
      inheritAttrs: false, // 没用到的数据，不显示在dom上
      // 祖孙之间传值，父组件用不到时可用 v-bind="$attrs" 将数据传到父组件
      // 2.子组件通过触发父组件的事件，调用父组件的方法，执行其事件，也可传值
      template: `
        <div>
          子组件child1
          <button @click="$listeners.click(123)" @mouseup="$linstener.mouseup(123)">点我</button>
          <button @click="$listeners">点我不能传值，只能调用方法</button>
          <button @click="$emit('click',23)">点我</button>
          <my-child2 v-bind="$attrs"></my-child2>
        </div>
      `,
      components: {
        MyChild2: {
          // props: ['msg', 'a', 'b'],
          props: {
            msg: {
              type: String,
            },
            a: {
              type: Number, // 类型
              default: 11, // 默认值
              validator(val) { // 校验数据
                return val > 0; // 若返回值为false,报错
              },
            },
            arr: {
              type: Array,
              // 假如属性是数组或对象，默认值需要通过函数来返回
              default: () => ([1, 2]),
            },
          },
          template: `
            <div :msg="msg">我是孙子组件{{a}}</div>
          `,
        },
      },
    },
  },
};
</script>

<style scoped lang="scss">
</style>
