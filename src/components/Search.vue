<template>
  <div>
    <b-input-group prepend="Série" class="mt-3">
      <b-form-input placeholder="Recherche par titre" v-model="showTitle"></b-form-input>
      <b-input-group-append>
        <b-button variant="primary" @click="findShowByName()">Confirm</b-button>
      </b-input-group-append>
    </b-input-group>
    <br /> <br />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      results: {},
      showTitle: ""
    };
  },
  methods: {
    findShowByName() {
      this.axios
          .get(this.$root.baseApi + "search" + this.$root.paramObligatoire + "&title=" + this.showTitle)
          .then((response) => {
            this.results = response.data;

            if (this.results.shows.length > 0) {
              this.$emit("searchShowByName", this.results)
            }
          })
    }
  }
}
</script>
