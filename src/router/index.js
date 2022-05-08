import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
  },
  {
    path: '/user-result',
    name: 'user-result',
    component: () =>
      import(/* webpackChunkName: "user-result" */ '../views/user-result.vue'),
  },
  {
    path: '/qa-result',
    name: 'qa-result',
    component: () =>
      import(/* webpackChunkName: "qa-result" */ '../views/qa-result.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/about.vue'),
  },
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
