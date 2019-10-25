<template>
  <collapse>
    <template v-slot:fold>
      <collapse-item title="大学">大学同学1</collapse-item>
      <collapse-item title="高中">高中同学1</collapse-item>
      <collapse-item title="初中">初中同学1</collapse-item>
    </template>
    <!-- <h3>折叠菜单</h3> 未命名的会自动放到未命名的slot中 -->
  </collapse>
</template>

<script>
export default {
  name: 'FoldMenu',
  data() {
    return {

    };
  },
  components: {
    // 插槽slot:默认将组件的所有内容全放到一个slot中
    // 也通过name将特定的内容放到特定的插槽里
    collapse: {
      template: `
        <div class="fold-menu-box">
          <slot name="fold"></slot>
        </div>
      `,
      // $parent 获取父组件的实例 $children
      methods: {
        handleChange(childId) {
          this.$children.forEach((ele) => {
            // eslint-disable-next-line no-underscore-dangle
            if (ele._uid !== childId) {
              ele.show = false;
            }
          });
        },
      },
    },
    CollapseItem: {
      props: ['title'],
      mounted() {
        // eslint-disable-next-line no-console
        console.log(this.$parent); // 父组件
      },
      methods: {
        change() {
          // eslint-disable-next-line no-underscore-dangle
          this.$parent.handleChange(this._uid);
          this.show = !this.show;
        },
      },
      data() {
        return {
          show: false,
        };
      },
      template: `
        <div>
          <div class="fold-menu-title" @click="change">{{title}}</div>
          <div v-show="show">
            <slot></slot>
          </div>
        </div>
      `,
    },
  },
};
</script>

<style lang="scss">
.fold-menu-box{
  width: 120px;
}
.fold-menu-title {
  width: 120px;
  line-height: 36px;
  text-align: center;
  border: 1px solid pink;
}
</style>
