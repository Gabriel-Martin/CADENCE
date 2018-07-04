<template>
    <v-container fluid fill-height grid-list-lg>
        <fade-in>
            <loading v-if="loading" />

            <v-layout v-else column>
                <!-- Header -->
                <v-flex>
                    <v-card>
                        <v-card-title primary-title class="display-1">Search: {{ header }}</v-card-title>
                        <v-divider class="primary" />
                    </v-card>
                </v-flex>

                <v-flex>
                    <v-layout fill-height="" row wrap>
                        <!-- Artists -->
                        <v-flex xs12 sm6 md4>
                            <v-card height="100%">
                                <v-card-title primary-title class="title">Artists</v-card-title>
                                <v-divider class="primary" />
                                <v-list>
                                    <v-list-tile @click="goToArtist(artist.id)" v-for="(artist, index) in topArtists" :key="index">
                                        <v-list-tile-avatar>
                                            <img v-if="artist.images[2]" class="image" :src="artist.images[2] && artist.images[2].url" alt="album cover">
                                        </v-list-tile-avatar>
                                        <v-list-tile-title>{{ artist.name }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                        <!-- Albums -->
                        <v-flex xs12 sm6 md4>
                            <v-card height="100%">
                                <v-card-title primary-title class="title">Albums</v-card-title>
                                <v-divider class="primary" />
                                <v-list>
                                    <v-list-tile @click="goToAlbum(album.id)" v-for="(album, index) in topAlbums" :key="index">
                                        <v-list-tile-avatar>
                                            <img v-if="album.images[2]" class="image" :src="album.images[2] && album.images[2].url" :width="album.images[2].url" :height="album.images[2].url" alt="album cover">
                                        </v-list-tile-avatar>
                                        <v-list-tile-title>{{ album.name }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                        <!-- Songs -->
                        <v-flex xs12 md4>
                            <v-card height="100%">
                                <v-card-title primary-title class="title">Tracks</v-card-title>
                                <v-divider class="primary" />
                                <v-list>
                                    <v-list-tile v-for="(track, index) in topTracks" :key="index">
                                        <v-list-tile-title>{{ track.name }}</v-list-tile-title>
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
    import { Loading } from "../components";
    import { FadeIn } from "../containers";

    export default {
      data() {
        return {
          queryString: "",
          loading: true,
          topArtists: [],
          topAlbums: [],
          topTracks: []
        };
      },
      components: { Loading, FadeIn },
      computed: {
        header() {
          return (
            this.queryString.charAt(0).toUpperCase() + this.queryString.substr(1)
          );
        }
      },
      methods: {
        goToArtist(artistId) {
          this.$router.push({ name: "artist", params: { artistId } });
        },
        goToAlbum(albumId) {
          this.$router.push({ name: "album", params: { albumId } });
        }
      },
      watch: {
        async $route() {
          this.loading = true;

          const { getSearchResults } = this.$artistQuery;
          const { query } = this.$route.query;

          try {
            const { data } = await getSearchResults(query);
            const { queryString, topArtists, topAlbums, topTracks } = data;

            this.queryString = queryString;
            this.topArtists = topArtists;
            this.topAlbums = topAlbums;
            this.topTracks = topTracks;
            this.loading = false;
          } catch (error) {
            console.log(error);
          }
        }
      },
      async created() {
        const { getSearchResults } = this.$artistQuery;
        const { query } = this.$route.query;

        try {
          const { data } = await getSearchResults(query);
          const { queryString, topArtists, topAlbums, topTracks } = data;

          this.queryString = queryString;
          this.topArtists = topArtists;
          this.topAlbums = topAlbums;
          this.topTracks = topTracks;
          this.loading = false;
        } catch (error) {
          console.log(error);
        }
      }
    };
</script>

<style>
</style>
