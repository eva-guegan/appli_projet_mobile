<template>
  <div class="home">
    <h3>Where to watch my series ?</h3>
    <img src="../assets/disney_plus.png" alt="Logo disney plus" />
    <img src="../assets/amazon.png" alt="Logo amazon" />
    <img src="../assets/netflix.png" alt="Logo netflix" />
    <br />

    <Search @searchShowByName="listShows"/>

    <div id="cards">
      <div v-for="show in infos.shows">
        <b-card no-body class="overflow-hidden" style="max-width: 50rem;">
          <b-row no-gutters>
            <b-col md="6">
                <b-card-img v-if="resultSearch === true" :src="show.images.poster" alt="Image" class="rounded-0"></b-card-img>
                <b-card-img v-else-if="show.poster" :src="show.poster" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body :title="show.title">
                <b-card-text>
                  <b>Année de création :</b> {{ show.creation }}
                  <br />
                  <b>Nombre total de saisons :</b> {{ show.seasons }}
                  <br />
                  <b>Nombre total d'épisodes :</b> {{ show.episodes }}
                  <br />
                  <span v-if="show.genres">
                    <b>Genres :</b> <span v-for="genre in show.genres">{{ genre }}, </span>
                  </span>
                  <br />
                  <span v-if="show.platforms">
                    <b>Plateformes :</b> <span v-for="platform in show.platforms">{{ platform["name"] }}</span>
                  </span>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <br />
      </div>
    </div>

  </div>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
  name: 'Home',
  components: {
    Search
  },
  data() {
    return {
      infos: [],
      resultSearch: false,
    }
  },
  beforeCreate() {
    this.axios
        .get(this.$root.baseApi + 'list' + this.$root.paramObligatoire + "&recent=true&order=popularity&summary=true&limit=30")
        .then(res => {
          this.infos = res.data;
        })
  },
  methods:{
    listShows(infos) {
      this.infos = infos;
      this.resultSearch = true;
    }
  }
}
</script>

<style>
#cards {
  display: grid;
  place-items: center;
}
</style>
