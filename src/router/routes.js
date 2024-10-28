import { createRouter, createWebHistory } from 'vue-router';

const Main = () => import('../../src/components/Main.vue');

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main, 
  },
  {
    path: '/loginDesign1',
    name: 'logindesign',
    component: import('../../src/components/loginDesign/index.vue'), 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
