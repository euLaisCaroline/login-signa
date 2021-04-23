import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Cadastro from '@/pages/Cadastro'
import Login from '@/pages/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
{
  path:'/cadastro',
  name: 'Cadastro',
  component: Cadastro
},
{
  path: '/login',
  name: 'Login',
  component: Login
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
