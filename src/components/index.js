/**
 * 自定义组件导入
 */

// 导入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MarkdownItVue from 'markdown-it-vue';
import 'markdown-it-vue/dist/markdown-it-vue.css';

export default {
  install(Vue) {
    Vue.use(ElementUI);
    Vue.component('MarkdownItVue', MarkdownItVue);
  },
};
