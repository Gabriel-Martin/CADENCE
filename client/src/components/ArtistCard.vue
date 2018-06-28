<template>
  <v-fade-transition v-if="!loading" mode="out-in">
    <v-layout fill-width>
      <v-flex xs12>
        <v-card>
          <v-card-media :src="image" height="200px">
          </v-card-media>
          <v-card-title primary-title text-center>
            <h3 class="headline mb-0 "> {{ name }} </h3>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="primary" :to="detailsRoute">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-fade-transition>
</template>

<script>
export default {
  data() {
    return {
      image: "",
      loading: true,
      detailsRoute: {
        name: "artist",
        params: { artistId: this.id }
      }
    };
  },
  props: ["name", "id"],
  async created() {
    const { getArtistImages } = this.$artistQuery;

    try {
      const { data: { images } } = await getArtistImages(this.id);

      this.image = images[1].url;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
</style>


