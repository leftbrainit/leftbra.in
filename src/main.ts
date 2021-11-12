import { createApp } from 'vue'
import router from "./router"
import { createHead } from '@vueuse/head'
import App from './App.vue'
import './index.css'

const head = createHead()

createApp(App).use(router).use(head).mount('#app')