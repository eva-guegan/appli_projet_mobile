<template>
  <div>

    <h3>Gestion des utilisateurs</h3>
    <br />
<!--    voir faire barre de recherche-->

    <b-button variant="outline-success"><router-link :to="'users/add_user'">Ajouter un user</router-link></b-button>
    <br /><br />
<!--    peux ajouter responsive, head-variant,
        voir Row styling and attributes pour quand on veux mettre une ligne de couleur
        voir sticky-header
        voir Using items provider functions
-->
    <b-table striped hover :items="users" :fields="fields">
      <template #cell(Detail)="data">
        <router-link to="'user/' + resultApi.idUser" v-html="data.value"></router-link>
      </template>
    </b-table>

    <ul id="cards">
      <li>{{ resultApi.nom }}</li>
      <li>{{ resultApi.prenom }}</li>
      <li><router-link :to="'user/' + resultApi.idUser">Détail</router-link></li>
      <li><b-button variant="outline-primary"><router-link :to="'users/update_user/' + resultApi.idUser">Modifier</router-link></b-button></li>
      <li><b-button variant="outline-danger" v-on:click="deleteUser(resultApi.idUser)" >Supprimer</b-button></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      resultApi : [],
      fields: ['Nom', 'Prenom', 'Email', 'Role', 'Detail', 'Modifier', 'Supprimer'],
      users: [
          //isActive not appear
        { isActive: true, Nom: 'azerty', Prenom: 'azerty', Email: 'azerty', Role: 'Admin', Detail: 'detail'},
      ]
    }
  },
  beforeCreate() {
    this.axios
        .get(this.$root.baseUserApi + 'user/' + '2')
        .then(res => {
          this.resultApi = res.data;
          console.log(this.resultApi);
        })
  },
  methods: {
    deleteUser(idUser) {
      this.axios
          .delete(this.$root.baseUserApi + 'deleteuser/' + idUser)
    }
  }
}
</script>

<style scoped>
#cards {
  display: grid;
  place-items: center;
}
</style>