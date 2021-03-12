<template>
  <div>

    <h3>Détail de l'utilisateur {{ userDetails.nom }} {{ userDetails.prenom }}</h3>

    <ul id="cards">
      <li>Nom : {{ userDetails.nom }}</li>
      <li>Prenom : {{ userDetails.prenom }}</li>
      <li>Mail : {{ userDetails.email }}</li>
      <li v-if="userDetails.isAdmin">Role : Admin</li>
      <li v-else>Role : User</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "detailUser",
  data() {
    return {
      userDetails: {},
      displayContent: false,
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
            this.displayContent = true;
            console.log(this.userDetails)
          });
    }
  }
}
</script>

<style scoped>

</style>