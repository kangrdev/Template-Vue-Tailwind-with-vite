import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
// Tambahkan component view lainnya

const routes = [
  { path: '/', component: Home },
  // Tambahkan route definition lainnya
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
