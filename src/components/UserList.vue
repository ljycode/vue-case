<template>
  <div>
    <ul>
      <li><router-link to="/userdetail?id=1">用户一</router-link></li>
      <li><router-link to="/userdetail?id=2">用户二</router-link></li>
      <li><router-link to="/userdetail2/3">用户三</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    };
  },
};
</script>

<style lang="sass">

</style>
