<template>
  <div>
    <div>
      <p class="bienvenu">Bienvenu sur</p>
      <h2 class="w2w">Where to watch my series ?</h2>

      <b-form class="form_login" @submit.prevent="login()">

        <b-form-input class="input" type="email" v-model="email" />
        <b-form-input class="input" type="password" v-model="password" />
        <button class="submit" type="submit">Log in</button>

<!--        affiche du message d'erreur-->
        <p v-if="errorMessage" class="errorMessage">{{errorMessage}}</p>
      </b-form>
<!--      <p><a href="#">mot de passe oublié</a></p>-->
<!--      <p>Pas de compte ? <br><a href="#">inscrivez - vous ici !</a></p>-->
    </div>

    <div class="icon-footer">
      <img src="../../public/img/netflix.png">
      <img src="../../public/img/disney_plus.png">
      <img src="../../public/img/amazon.png">
    </div>
  </div>
</template>

<script>

export default {
  name:'Login',

  data(){
    return{
      email: "",
      password: "",
    }
  },

  methods:{
    login() {
      this.$emit("submit", {
        email: this.email,
        password: this.password
      });
    }
  },

  props: {
    errorMessage: {
      type: String,
      default: ""
    }
  },
}
</script>

<style>
.errorMessage{
  color:red;
  text-align: center;
}

p {
  color:white;
  text-align: center;
}

h2 {
  color: white;
}

.form_login {
  padding-top: 10%;
  width: 70%;
  margin-left: 15%;
}

.input {
  text-align: center;
  margin-top:10%;
  border-radius: 5px;
}

.bienvenu {
  margin-top: 20%;
  font-size: 1.5em;
}

.w2w {
  margin-top: 5%;
  text-align: center;
  font-size: 2em;
}


.submit {
  margin-top: 5%;
  margin-left: 35%;
  width: 30%;
  border-radius: 5px;
}

.icon-footer {
  width: 100%;
  margin-top: 40vw;
}

.icon-footer img {
  width: 15%;
  margin-left: 14%;
  margin-bottom: 15px;
}

</style>