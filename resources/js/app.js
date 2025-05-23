// app.js
import './bootstrap';

import {createApp} from 'vue'
import router from './router'; // Import the router


import App from './App.vue'

createApp(App).use(router).mount('#app');
