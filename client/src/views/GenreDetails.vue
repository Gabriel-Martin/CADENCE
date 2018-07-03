<template>
  <v-container fluid fill-height grid-list-lg align-center>
    <fade-in>
      <loading v-if="loading" key="loading" />

      <!-- Header -->
      <v-layout v-else column key="content">
        <v-flex>
          <v-card>
            <v-card-title class="display-1">{{ genre.name }}</v-card-title>
            <v-divider class="primary"></v-divider>
            <v-card-text>
              <span v-html="genre.description"></span>
            </v-card-text>
          </v-card>
        </v-flex>
        <!-- Genre Music -->
        <v-flex>
          <v-layout row v-bind="breakpoint">
            <!-- Top Artists -->
            <v-flex xs12 md6>
              <v-card>
                <v-card-title class="title">Top Artists</v-card-title>
                <v-divider class="primary" />
                <v-list two-line>
                  <v-list-tile v-for="(artist, index) in topArtists" :key="index" :to="`/artist/${artist.id}`">
                    <v-list-tile-avatar>
                      <img class="image" :src="artist.images.images[2].url" alt="artist cover">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ artist.name }}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ artist.label }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
            <!-- Top Albums -->
            <v-flex xs12 md6>
              <v-card>
                <v-card-title class="title">Top Albums</v-card-title>
                <v-divider class="primary" />
                <v-list two-line>
                  <v-list-tile v-for="(album, index) in topAlbums" :key="index" :to="`/album/${album.id}`">
                    <v-list-tile-avatar>
                      <img class="image" :src="album.images.images[2].url" alt="album cover">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ album.name }}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ album.label }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </fade-in>
  </v-container>
</template>

<script>
  import { FadeIn } from "../containers";
  import { Loading } from "../components";
  export default {
    data() {
      return {
        loading: true,
        genre: {},
        topArtists: [],
        topAlbums: []
      };
    },
    props: ["genreId"],
    components: { FadeIn, Loading },
    computed: {
      breakpoint() {
        return { column: this.$vuetify.breakpoint.xs && true };
      }
    },
    async created() {
      const { getGenreDetails } = this.$artistQuery;

      try {
        const { data: { genre, topArtists, topAlbums } } = await getGenreDetails(
          this.genreId
        );

        this.genre = genre;
        this.topArtists = topArtists;
        this.topAlbums = topAlbums;

        console.log({
          genre: this.genre,
          topArtists: this.topArtists,
          topAlbums: this.topAlbums
        });
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    }
  };
</script>

<style>
</style>
