import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
import Home from '../views/Home.vue'
import Page1 from '../views/Page1.vue'

const router = createRouter({
    history,
    routes: [{
        path: '/home',
        component: Home,
        children: [
            {
                path: '/page1',
                component: Page1,
            }
        ]
    }]
})
export default router