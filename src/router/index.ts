import { createRouter, createWebHistory } from 'vue-router'
import routes from "virtual:generated-pages";

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                selector: to.hash
            }
        } else {

            return { top: 0 }
        }
    },
})
export default router