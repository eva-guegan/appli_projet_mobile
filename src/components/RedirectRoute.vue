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

      this.$root.test.nom = this.user.nomT
      this.$root.test.prenom = this.user.prenomT
      this.$root.test.email = this.user.emailT
      this.$root.test.mdp = this.user.passwordT
      this.$root.test.isAdmin = this.user.isAdminT

      console.log(this.$root.test)

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