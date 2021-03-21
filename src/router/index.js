import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/home/index'
// const home = () =>
// import ('@/views/home/home.vue')

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('@/views/home/home.vue')
    },
    {
        path: '/category',
        name: 'category',
        component: () =>
            import ('@/views/category/category.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () =>
            import ('@/views/cart/cart.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () =>
            import ('@/views/profile/profile.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router