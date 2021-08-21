import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'Index',
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue'), meta: { requiresAuth: true} }],
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('pages/Login.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
