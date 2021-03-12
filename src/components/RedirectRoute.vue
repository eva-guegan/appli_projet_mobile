<template>
  <div>
    <App v-if="user" />
    <Login v-else :errorMessage="errorMessage" @submit="login" />
  </div>
</template>

<script>
import App from "@/App";
import Home from "@/views/Home";
import Login from '@/views/Login';
import { login } from "../auth";

export default {
  name:"RedirectRoute",
  components:{
    App,
    Home,
    Login
  },
  data() {
    return {
      user:"",
      errorMessage: ""
    };
  },
  beforeCreate() {
    localStorage.removeItem('user')
  },

  methods: {
    // TODO requete api
    login({ email, password }){
      this.user = login(email, password);
      localStorage.setItem('user',this.user);
      if(this.user == null) {
        this.errorMessage = "wrong credential";
      }
    }
  },
}
</script>

<style>
body {
  background-image: url("../../public/img/background.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  min-height: 100%;
  height: 100%;
}
</style>