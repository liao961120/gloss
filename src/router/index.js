import Vue from 'vue'
import VueRouter from 'vue-router'
import Edit from '../views/Edit.vue'
import Reader from '../views/Reader.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/reader',
    name: 'Reader',
    component: Reader
  }
]

const router = new VueRouter({
  routes
})

export default router
