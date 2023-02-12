import { createApp } from 'vue'
import router from "./router"
import { createHead } from '@vueuse/head'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import 'virtual:fonts.css'
import './index.css'

const head = createHead()

createApp(App).use(router).use(head).use(MotionPlugin).mount('#app')