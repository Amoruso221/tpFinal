import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'
import CardsBySet from './views/CardsBySet.vue'
import CardsByClass from './views/CardsByClass.vue'
import CardsByFaction from './views/CardsByFaction.vue'
import CardsByQuality from './views/CardsByQuality.vue'
import CardsByRace from './views/CardsByRace.vue'
import CardsByType from './views/CardsByType.vue'
import CardsBacks from './views/CardsBacks.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component : Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children : [
        {
          path: 'cardsBySet',
          name: 'cardsBySet',
          component: CardsBySet
        },
        {
          path: 'cardsByClass',
          name: 'cardsByClass',
          component: CardsByClass
        },
        {
          path: 'cardsByFaction',
          name: 'cardsByFaction',
          component: CardsByFaction
        },
        {
          path: 'cardsByQuality',
          name: 'cardsByQuality',
          component: CardsByQuality
        },
        {
          path: 'cardsByRace',
          name: 'cardsByRace',
          component: CardsByRace
        },
        {
          path: 'cardsByType',
          name: 'cardsByType',
          component: CardsByType
        },
        {
          path: 'cardsBacks',
          name: 'cardsBacks',
          component: CardsBacks
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name !== "login" && to.name !== "register") {
    if (!store.state.token) {
      next("/");
    } else {
      next();
    }
  } else {
    if (store.state.token) {
      next("/home")
    } else {
      next();
    }
  }
})
export default router