<template>
  <div>
    <div>
      <p class="bienvenu">Bienvenu sur</p>
      <h2 class="w2w">Where to watch my series ?</h2>
      <b-form @submit="login">
        <b-form-input class="input" type="email" name="email" id="email" placeholder="email"></b-form-input>
        <b-form-input class="input" type="password" name="password" id="password" placeholder="password"></b-form-input>
        <button type="submit" class="submit">Log in</button>
        <p v-if="errormessage" class="errorMessage">{{errormessage}}</p>
      </b-form>
<!--      <p><a href="#">mot de passe oublié</a></p>-->
<!--      <p>Pas de compte ? <br><a href="#">inscrivez - vous ici !</a></p>-->
    </div>

    <div class="icon-footer">
      <img src="../../public/img/icon-netflix.png">
      <img src="../../public/img/icon-disney.png">
      <img src="../../public/img/icon-amazon.png">
    </div>
  </div>
</template>

<script>

export default {
  name:'Login',

  data(){
    return{
      user:{
        name:{
          default: null,
        },
      },
    }
  },

  components:{

  },

  methods:{
    login() {
      this.errormessage = "connecter";
      this.$session.set("user","toto");
    }
  },

  props:{
    errormessage:{
      type:String,
      default:"non connecter",
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

a {
  color: white;
  text-align: center;
}

a:hover{
  color: red;
}

.input {
  width: 70%;
  text-align: center;
  margin-left: 15%;
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