import { createRouter, createWebHistory } from 'vue-router'
import routes from "virtual:generated-pages";

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (to.hash) {
                resolve({
                    el: to.hash,
                    behavior: 'smooth',
                  })
            }
            else if (savedPosition) {
                resolve(savedPosition)
            }  else {
    
                resolve({ top: 0 })
            }
            resolve({ left: 0, top: 0 })
          }, 150)
        })
      },
})
export default router