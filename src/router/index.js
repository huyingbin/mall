import Vue from 'vue'
import vueRouter from 'vue-router'


const home = () =>
    import ("views/home/home.vue")

const category = () =>
    import ("views/category/category.vue")

const shopCart = () =>
    import ("views/shopCart/shopCart.vue")

const profile = () =>
    import ("views/profile/profile.vue")

Vue.use(vueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/shopCart',
        component: shopCart
    },
    {
        path: '/profile',
        component: profile
    }

]

const router = new vueRouter({
    routes,
    mode: 'history'
})

export default router