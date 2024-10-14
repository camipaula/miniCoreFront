import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue'; // Ajusta la ruta si es necesario

const routes = [
    { path: '/home', component: Home },
    {
        path: '/', // Ruta por defecto
        redirect: '/home' // Redirige a login al inicio
      }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
