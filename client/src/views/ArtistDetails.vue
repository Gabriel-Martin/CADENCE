<template>
    <v-container fluid fill-height grid-list-lg align-center justify-center>
        <fade-in>
            <loading v-if="loading" key="loading" />

            <v-layout fill-height v-else column key="content">
                <!-- HEADER -->
                <v-flex>
                    <v-parallax :src="artist.images[3] && artist.images[3].url">
                        <v-layout pa-2 row justify-start align-end>
                            <h1 class="display-3 primary--text text--darken-1"> {{ artist.name }} </h1>
                        </v-layout>
                    </v-parallax>
                </v-flex>
                <!-- BIO -->
                <v-flex>
                    <v-card>
                        <v-card-title primary-title class="title">Bio</v-card-title>
                        <v-divider class="primary"></v-divider>
                        <v-card-text v-html="artist.bios && artist.bios[0].bio" />
                    </v-card>
                </v-flex>
                <!-- TOP MUSIC -->
                <v-flex>
                    <v-layout row v-bind="breakpoint">
                        <top-albums v-bind="{ topAlbums: artist.topAlbums }" />
                        <top-tracks v-bind="{ topTracks: artist.topTracks }" />
                    </v-layout>
                </v-flex>
                <!-- Events -->
                <artist-events v-bind="{ events }" />
            </v-layout>
        </fade-in>
    </v-container>
</template>

<script>
    import { FadeIn } from "../containers";
    import {
      Loading,
      AlbumCard,
      TopTracks,
      TopAlbums,
      ArtistEvents
    } from "../components";

    export default {
      data() {
        return {
          artist: {},
          events: [],
          loading: true
        };
      },
      props: ["artistId"],
      components: {
        Loading,
        FadeIn,
        AlbumCard,
        TopTracks,
        TopAlbums,
        ArtistEvents
      },
      computed: {
        breakpoint() {
          return { column: this.$vuetify.breakpoint.xs && true };
        }
      },
      async created() {
        const { getArtistDetails, getArtistEvents } = this.$artistQuery;

        try {
          const { data: artist } = await getArtistDetails(this.artistId);
          const { data: events } = await getArtistEvents(artist.name);

          this.artist = artist;
          this.events = events.data;
          this.loading = false;
        } catch (error) {
          console.log(error);
        }
      }
    };
</script>

<style>
</style>
