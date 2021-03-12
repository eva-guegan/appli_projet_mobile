<template>
  <div>
    <h3>Ajouter un utilisateur</h3>

<!--    <b-form-input v-model="nom" type="text" :state="stateNom" aria-describedby="nom-feedback" trim placeholder="Enter your last name"></b-form-input>-->
<!--    <b-form-invalid-feedback id="nom-feedback">Enter at least 3 letters</b-form-invalid-feedback>-->
<!--    <br />-->

    <b-form class="input" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="nom" label-for="input-nom">
        <b-form-input id="input-nom" v-model="form.nom" type="text" aria-describedby="nom-feedback" placeholder="Entrer le nom" required></b-form-input>
      </b-form-group>
      <br />

      <b-form-group id="prenom" label-for="input-prenom">
        <b-form-input id="input-prenom" v-model="form.prenom" type="text" aria-describedby="prenom-feedback" placeholder="Entrer le prénom" required></b-form-input>
      </b-form-group>
      <br />

      <b-form-group id="email" label-for="input-email">
        <b-form-input id="input-email" v-model="form.email" type="email" aria-describedby="email-feedback" placeholder="Entrer l'email" required></b-form-input>
      </b-form-group>
      <br />

      <b-form-group id="mdp" label-for="input-mdp">
        <b-form-input id="input-mdp" v-model="form.mdp" type="password" aria-describedby="mdp-feedback" placeholder="Entrer le mot de passe" required></b-form-input>
      </b-form-group>
      <br />
<!--      ToDO faire un champ valider votre mdp-->

      <b-form-group id="isAdmin" label-for="input-isAdmin">
        <b-form-select id="input-isAdmin" v-model="form.isAdmin" :options="isAdmin" required></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Ajouter</b-button><span>azer</span>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</template>

<script>
export default {
  name: "Users",
  computed: {
    // stateNom() {
    //   if (this.nom.length > 2) {
    //     return true;
    //   } else if (this.nom.length <= 2 && this.nom.length > 0) {
    //     return false;
    //   } else {
    //     return null
    //   }
    // },
    // statePrenom() {
    //   if (this.prenom.length > 2) {
    //     return true;
    //   } else if (this.prenom.length <= 2 && this.prenom.length > 0) {
    //     return false;
    //   } else {
    //     return null
    //   }
    // },
    // stateEmail() {
    //   if (this.email.length > 2) {
    //     return true;
    //   } else if (this.email.length <= 2 && this.email.length > 0) {
    //     return false;
    //   } else {
    //     return null
    //   }
    // },
    // stateMdp() {
    //   if (this.mdp.length > 2) {
    //     return true;
    //   } else if (this.mdp.length <= 2 && this.mdp.length > 0) {
    //     return false;
    //   } else {
    //     return null
    //   }
    // },
  },
  data() {
    return {
      form: {
        nom: '',
        prenom: '',
        email: '',
        mdp: '',
        isAdmin: null,
      },
      isAdmin: [{ text: 'Administrateur', value: 1 }, { text: 'Utilisateur', value: 0 }],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.axios
          .post(this.$root.baseUserApi + 'users/', {
            nom: this.form.nom,
            prenom: this.form.prenom,
            email: this.form.email,
            mdp: this.form.mdp,
            isAdmin: this.form.isAdmin
          })
      this.$router.push('/users')
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.nom = ''
      this.form.prenom = ''
      this.form.email = ''
      this.form.mdp = ''
      this.form.isAdmin = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style scoped>
#cards {
  display: grid;
  place-items: center;
}

.input{
  margin-left: 15%;
}
</style>