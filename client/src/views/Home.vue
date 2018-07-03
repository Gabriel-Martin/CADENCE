<template>
  <v-container fluid fill-height grid-list-lg align-center justify-center>
    <fade-in>
      <loading v-if="loading" key="loading" />

      <v-layout v-else key="content" row wrap justify-center>
        <artist-card v-for="({name, id}, index) in artists" :key="index" v-bind="{ name, id }" />
      </v-layout>
    </fade-in>
  </v-container>

</template>

<script>
  import { FadeIn } from "../containers";
  import { Loading, ArtistCard } from "../components";

  export default {
    data() {
      return {
        artists: [],
        loading: true
      };
    },
    components: { FadeIn, Loading, ArtistCard },
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
