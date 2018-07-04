<template>
  <fade-in v-if="!loading">
    <v-flex xs8 sm6 md4>
      <v-card>
        <v-card-media :src="image" height="200px">
        </v-card-media>
        <v-card-title primary-title text-center>
          <h3 class="headline mb-0 "> {{ name }} </h3>
        </v-card-title>
        <v-divider dark></v-divider>
        <v-card-actions>
          <v-btn flat color="primary" @click="goToArtist(id)">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </fade-in>
</template>

<script>
  import { FadeIn } from "../containers";

  export default {
    data() {
      return {
        image: "",
        loading: true
      };
    },
    methods: {
      goToArtist(artistId) {
        this.$router.push({ name: "artist", params: { artistId } });
      }
    },
    props: ["name", "id"],
    components: { FadeIn },
    async created() {
      const { getArtistImages } = this.$artistQuery;

      try {
        const { data: { images } } = await getArtistImages(this.id);

        this.image = images[0].url;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    }
  };
</script>

<style>
</style>


