// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home.vue'; // Импортируйте ваши компоненты представления

const routes = [
{
path: '/',
name: 'Home',
component: Home,
},
// Добавьте другие маршруты здесь
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;