import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

import components from './components'; // 导入自定义组件
Vue.use(components);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
