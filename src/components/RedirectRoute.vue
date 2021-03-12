<template>
  <div>
    <App v-if="this.$root.user.id"/>
    <Login v-else :errorMessage="errorMessage" @submit="login" />
  </div>
</template>

<script>
import App from "@/App";
import Login from '@/views/Login';

export default {
  name:"RedirectRoute",
  components:{
    App,
    Login
  },
  data() {
    return {
      result: '',
      errorMessage: ""
    };
  },

  methods: {
    login({ email, password }){
      this.loginApi(email, password);

      if(this.user === null) {
        this.errorMessage = "wrong credential";
      }
    },
    loginApi(email, password) {

      this.axios
          .get(this.$root.baseUserApi + 'login/', {
            params: {
              email: email,
              mdp: password
            }
          })
          .then(res => {
            this.result = res.data;
            console.log(res.data)
          })
      // if (this.result){
        this.$root.user.id = '0cf0a5b8-d529-48d1-8ea6-ed6cd62d772c'
        this.$root.user.nom = this.result.nom
        this.$root.user.prenom = this.result.prenom
        this.$root.user.email = this.result.email
        this.$root.user.mdp = this.result.mdp
        this.$root.user.isAdmin = this.result.isAdmin
      // }
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