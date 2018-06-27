<template>
  <v-fade-transition mode="out-in" key="home">
    <v-container v-if="loading" key="top-artists-loading" fill-height justify-center align-center>
      <v-progress-circular color="primary" indeterminate />
    </v-container>

    <v-container v-else fluid grid-list-md key="top-artists-list">
      <v-layout row wrap justify-center>
        <v-flex v-for="({name, id}, index) in artists" :key="index" xs8 sm4>
          <artist-card v-bind="{ name, id }" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-fade-transition>

</template>

<script>
import { ArtistCard } from "../components";

export default {
  data() {
    return {
      artists: [],
      loading: true
    };
  },
  components: {
    ArtistCard
  },
  async created() {
    const { getTopArtists } = this.$artistQuery;

    try {
      const { data: { artists } } = await getTopArtists();

      this.artists = artists;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
