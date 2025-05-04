import { createRouter, createWebHistory } from 'vue-router';

import Index from '../Pages/Index.vue'; 

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  } 
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;