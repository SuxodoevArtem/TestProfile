import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: { requiresAuth: false } 
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: () => import('@/views/Profile.vue'),
        meta: { requiresAuth: true } 
    },
    {
        path: '/Finance',
        name: 'Finance',
        component: () => import('@/views/Finance.vue'),
        meta: { requiresAuth: true } 
    },
    {
        path: '/Pay',
        name: 'Pay',
        component: () => import('@/views/Pay.vue'),
        meta: { requiresAuth: true } 
    },
    {
        path: '/Tarife',
        name: 'Tarife',
        component: () => import('@/views/Tarife.vue'),
        meta: { requiresAuth: true } 
    },
]
  
const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: "active",
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('token')) {
          next()
          return
        }
        next('/Login') 
      } else {
        next() 
      }
})

export default router;