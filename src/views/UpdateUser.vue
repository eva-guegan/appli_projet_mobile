<template>
  <div>

    <h3>Modifier l'utilisateur {{ userDetails.nom }} {{ userDetails.prenom }}</h3>
    <br />

    <ul id="cards">
      <li>Nom : {{ userDetails.nom }}</li>
      <li>Prenom : {{ userDetails.prenom }}</li>
      <li>Mail : {{ userDetails.email }}</li>
      <li>Role : Admin</li>
    </ul>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="nomForm" label="Nom :" label-for="input-nomForm">
        <b-form-input id="input-nomForm" v-model="form.nom" type="text" aria-describedby="nomForm-feedback" placeholder="Enter your last name" required></b-form-input>
      </b-form-group>

      <b-form-group id="prenom" label="Prenom :" label-for="input-prenom">
        <b-form-input id="input-prenom" v-model="form.prenom" type="text" aria-describedby="prenom-feedback" placeholder="Enter your first name" required></b-form-input>
      </b-form-group>

      <b-form-group id="email" label="Email :" label-for="input-email">
        <b-form-input id="input-email" v-model="form.email" type="email" aria-describedby="email-feedback" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group id="mdp" label="Mot de passe :" label-for="input-mdp" description="We'll never share your password with anyone else.">
        <b-form-input id="input-mdp" v-model="form.mdp" type="password" aria-describedby="mdp-feedback" placeholder="Enter password" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      userDetails : [],
      nom: 'qsdfg',
      form: {
        nomForm: this.nom,
        prenom: '',
        email: '',
        mdp: '',
      },
      show: true
    }
  },
  created() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      this.axios
          .get(this.$root.baseUserApi + "user/" + this.$route.params.idUser)
          .then((response) => {
            this.userDetails = response.data
            this.form.nomForm = response.data.nom;
            console.log(this.userDetails)
          });
    },
    onSubmit(event) {
      event.preventDefault()
      this.axios
          .put(this.$root.baseUserApi + 'modifuser/' + this.$route.params.idUser, {
            nom: this.form.nom,
            prenom: this.form.prenom,
            email: this.form.email,
            mdp: this.form.mdp
          })
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.nom = ''
      this.form.prenom = ''
      this.form.email = ''
      this.form.mdp = ''
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
</style>