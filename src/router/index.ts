import { createRouter, createWebHistory } from 'vue-router'
import routes from "virtual:generated-pages";

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
})
export default router