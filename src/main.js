
// src/main.js
import './assets/style.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router

const app = createApp(App);
app.use(router); // Register the router
app.mount('#app');
