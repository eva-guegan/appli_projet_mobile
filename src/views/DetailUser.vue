<template>
  <div>

    <h3>Détail de l'utilisateur {{ userDetails.nom }} {{ userDetails.prenom }}</h3>

    <div id="cards">
      <p><b>Nom :</b> {{ userDetails.nom }}</p>
      <p><b>Prenom :</b> {{ userDetails.prenom }}</p>
      <p><b>Mail :</b> {{ userDetails.email }}</p>
      <p><b>Date d'inscription :</b> {{ userDetails.dateInscription }}</p>
      <p v-if="isAdmin === 1"><b>Role :</b> Admin</p>
      <p v-else><b>Role :</b> User</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "detailUser",
  data() {
    return {
      userDetails: {},
      isAdmin: {}
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
            this.isAdmin = response.data.isAdmin.data[0]
            console.log(this.userDetails)
          });
    }
  }
}
</script>