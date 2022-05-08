<template>
  <div class="qa-nav">
    <a v-for="item in navList" :key="item.name" @click="onLink(item)">{{
      item.name
    }}</a>
  </div>
</template>

<script>
export default {
  name: 'QaNav',
  data() {
    return {
      navList: [
        { name: '答题', link: 'home' },
        { name: '结果', link: 'user-result' },
        { name: '关于', link: 'about' },
      ],
    };
  },
  methods: {
    onLink(item) {
      this.$router.push({ name: item.link });
    },
  },
};
</script>
<style lang="scss" scoped>
.qa-nav {
  padding-top: 6px;
  position: fixed;
  text-align: center;
  width: 100%;
  background-color: #fff;
  > a {
    padding: 0 12px;
    color: #0081cd;
    cursor: pointer;
  }
}
</style>
