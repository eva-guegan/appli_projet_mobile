<template>
  <div>

    <h3>Modifier {{ userDetails.nom }} {{ userDetails.prenom }}</h3>
    <br />

    <b-form class="input" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="nomForm" label-for="input-nom">
        <b-form-input id="input-nom" v-model="form.nomForm" type="text" aria-describedby="nom-feedback" placeholder="Entrer le nom" required>inopu</b-form-input>
      </b-form-group>
      <br />

      <b-form-group id="prenomForm" label-for="input-prenom">
        <b-form-input id="input-prenom" v-model="form.prenomForm" type="text" aria-describedby="prenom-feedback" placeholder="Entrer le prénom" required></b-form-input>
      </b-form-group>
      <br />

      <b-form-group id="emailForm" label-for="input-email">
        <b-form-input id="input-email" v-model="form.emailForm" type="email" aria-describedby="email-feedback" placeholder="Entrer l'email" required></b-form-input>
      </b-form-group>
      <br />

      <b-form-group id="mdpForm" label-for="input-mdp">
        <b-form-input id="input-mdp" v-model="form.mdpForm" type="password" aria-describedby="mdp-feedback" placeholder="Entrer le mot de passe" required></b-form-input>
      </b-form-group>
      <br />

      <b-form-group id="isAdminForm" label-for="input-isAdmin">
        <b-form-select id="input-isAdmin" v-model="form.isAdminForm" :options="isAdmin" required></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button> <span></span>
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
      form: {
        nomForm: '',
        prenomForm: '',
        emailForm: '',
        mdpForm: '',
        isAdminForm: '',
      },
      isAdmin: [{ text: 'Administrateur', value: 1 }, { text: 'Utilisateur', value: 0}],
      show: true
    }
  },
  created() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      this.axios
          .get(this.$root.baseUserApi + "users/" + this.$route.params.idUser)
          .then((response) => {
            this.userDetails = response.data
            this.form.nomForm = response.data.nom;
            this.form.prenomForm = response.data.prenom;
            this.form.emailForm = response.data.email;
            this.form.mdpForm = response.data.email;
            this.form.isAdminForm = response.data.isAdmin.data[0];
            console.log(this.userDetails)
          });
    },
    onSubmit(event) {
      event.preventDefault()
      this.axios
          .put(this.$root.baseUserApi + 'users/' + this.$route.params.idUser, {
            nom: this.form.nomForm,
            prenom: this.form.prenomForm,
            email: this.form.emailForm,
            mdp: this.form.mdpForm,
            isAdmin: this.form.isAdminForm
          })
      this.$router.push('/users')
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.nomForm = ''
      this.form.prenomForm = ''
      this.form.emailForm = ''
      this.form.mdpForm = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>