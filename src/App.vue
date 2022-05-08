<template>
  <div id="app" class="app">
    <qa-nav />
    <router-view />
  </div>
</template>
<script>
import QaNav from './components/qa-nav.vue';
export default {
  components: { QaNav },
};
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .app {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>
