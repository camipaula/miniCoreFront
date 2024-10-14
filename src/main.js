import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importamos las rutas

const app = createApp(App);

app.use(router); // Usamos el router
app.mount('#app'); // Montamos la aplicación en el div con id="app"
