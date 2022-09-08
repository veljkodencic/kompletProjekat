import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Karavan from '../views/Karavan.vue'
import Motor from '../views/Motor.vue'
import Limuzina from '../views/Limuzina.vue'
import Kombi from "@/views/Kombi";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/karavan',
    name: 'Karavan',
    component: Karavan
  },
  {
    path: '/motor',
    name: 'Motor',
    component: Motor
  },
  {
    path: '/limuzina',
    name: 'Limuzina',
    component: Limuzina
  },
  {
    path: '/kombi',
    name: 'Kombi',
    component: Kombi
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


