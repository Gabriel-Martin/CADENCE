<template>
  <fade-in>
    <v-flex v-if="!loading" xs12 sm6 key="content">
      <v-card>
        <v-card-title class="title">Top Albums</v-card-title>
        <v-divider class="primary" />
        <v-list two-line>
          <v-list-tile v-for="(album, index) in topAlbumsDetails" :key="index" :to="`/album/${album.id}`">
            <v-list-tile-avatar>
              <img class="image" :src="album.images[2].url" alt="album cover">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ album.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ album.label }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </fade-in>
</template>

<script>
  import { FadeIn } from "../containers";
  import { Loading } from "../components";

  export default {
    data() {
      return {
        loading: true,
        topAlbumsDetails: []
      };
    },
    props: ["topAlbums"],
    components: { FadeIn, Loading },
    methods: {
      releaseDate(date) {
        return new Date(date).toDateString();
      },
      isExplicit(control) {
        return control ? "YES" : "NO";
      }
    },
    async created() {
      const { getAlbumDetails } = this.$artistQuery;

      try {
        const res = await Promise.all(
          this.topAlbums.map(({ id }) => getAlbumDetails(id))
        );

        const topAlbumsDetails = res.map(album => ({
          ...album.data,
          active: false
        }));

        this.topAlbumsDetails = topAlbumsDetails;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    }
  };
</script>

<style>
  .row,
  .column {
    display: flex;
  }

  .column {
    flex-direction: column;
  }

  .album-card {
    justify-content: space-between;
  }
</style>
