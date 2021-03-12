<template>
  <div>
    <h3>Gestion des utilisateurs</h3>
    <br />

    <b-button variant="primary"><router-link class="lienBlanc" :to="'users/add_user'">Ajouter un user</router-link></b-button>
    <br /><br />

    <div class="cards">
      <div v-for="resultApi in resultsApi">
          <b-card-group deck class="mb-3">
            <b-card border-variant="dark" :header="resultApi.nom + ' ' + resultApi.prenom" align="center">
              <b-card-text style="color: #000000">
                <b-button variant="primary"><router-link class="lienBlanc" :to="'user/' + resultApi.idUser">Détail</router-link></b-button><span>azer</span>
                <b-button variant="primary"><router-link class="lienBlanc" :to="'users/update_user/' + resultApi.idUser">Modifier</router-link></b-button><span>azer</span>
                <b-button variant="danger" v-on:click="deleteUser(resultApi.idUser)" >Supprimer</b-button>
              </b-card-text>
            </b-card>
          </b-card-group>
        <br />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      resultsApi : [],
    }
  },
  beforeCreate() {
    this.axios
        .get(this.$root.baseUserApi + 'users/')
        .then(res => {
          this.resultsApi = res.data;
        })
  },
  methods: {
    deleteUser(idUser) {
      this.axios
          .delete(this.$root.baseUserApi + 'users/' + idUser)
    },
  }
}
</script>