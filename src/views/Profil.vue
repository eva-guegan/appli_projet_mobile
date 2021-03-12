<template>
  <div>
    <h3>Mon profil</h3>

    <b-button variant="danger" v-on:click="deco()" >Déconnexion</b-button>

    <div id="cards">
      <p><b>Nom :</b> {{ userDetails.nom }}</p>
      <p><b>Prenom :</b> {{ userDetails.prenom }}</p>
      <p><b>Mail :</b> {{ userDetails.email }}</p>
      <p><b>Date d'inscription :</b> {{ userDetails.dateInscription }}</p>
      <p v-if="userDetails.isAdmin === 1"><b>Role :</b> Admin</p>
      <p v-else><b>Role :</b> User</p>
    </div>

  </div>
</template>

<script>
export default {
  name:'Profil',
  data() {
    return {
      userDetails: {},
    }
  },
  beforeCreate() {
    this.axios
        .get(this.$root.baseUserApi + "users/" + this.$route.user.id)
        .then((response) => {
          this.userDetails = response.data
        });
  },
  methods: {
    deco() {
      this.$root.user.id = null
      this.$root.user.nom = null
      this.$root.user.prenom = null
      this.$root.user.email = null
      this.$root.user.mdp = null
      this.$root.user.isAdmin = null

      this.$router.push('/')
    }
  }
}
</script>