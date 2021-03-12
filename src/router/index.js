import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue'
import DetailUsers from '../views/DetailUser.vue'
import AddUser from '../views/AddUser.vue'
import UpdateUser from '../views/UpdateUser.vue'
import Profil from "@/views/Profil";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/user/:idUser',
    name: 'DetailUser',
    component: DetailUsers
  },
  {
    path: '/users/add_user',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/users/update_user/:idUser',
    name: 'UpdateUser',
    component: UpdateUser
  },
  {
    path: '/profil/:idUser',
    name: 'profil',
    component: Profil,

  }
]

const router = new VueRouter({
  routes
})

export default router
