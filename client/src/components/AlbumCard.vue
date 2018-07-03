<template>
  <v-bottom-sheet-transition v-if="!loading" mode="out-in" appear>
    <v-flex xs12 sm4>
      <v-card light>
        <v-card-media :src="album.images[3].url" height="200" />
        <v-card-title> {{ album.name }} </v-card-title>
      </v-card>
    </v-flex>
  </v-bottom-sheet-transition>
</template>

<script>
  export default {
    data() {
      return {
        album: {},
        loading: true
      };
    },
    props: ["albumId"],
    async created() {
      const { getAlbumDetails } = this.$artistQuery;

      try {
        const { data } = await getAlbumDetails(this.albumId);

        this.album = data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    }
  };
</script>

<style>
</style>
