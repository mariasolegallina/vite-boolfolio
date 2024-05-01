import { createApp } from 'vue'
// modified in .scss
import './style.scss'
import App from './App.vue'
// import file router.js
import { router } from './router.js';
// import bootstrap
import * as bootstrap from 'bootstrap'
createApp(App).use(router).mount('#app')
