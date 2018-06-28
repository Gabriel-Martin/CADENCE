<template>
    <v-container class="main" v-if="!loading" pa-4 grid-list-md>
        <v-layout column>
            <!-- HEADER -->
            <v-flex>
                <v-card>
                    <v-parallax :src="artist.images[3].url" height="400">
                        <v-layout row justify-start align-end>
                            <h1 class="display-3 primary--text text--darken-1"> {{ artist.name }} </h1>
                        </v-layout>
                    </v-parallax>
                </v-card>
            </v-flex>
            <!-- BIO -->
            <v-flex>
                <v-card>
                    <v-card-title primary-title>
                        <div class="title">Bio</div>
                    </v-card-title>
                    <v-card-text v-html="artist.bios[0].bio" />
                </v-card>
            </v-flex>
            <!-- TOP ALBUMS -->
            <v-flex>
                <v-card>
                    <v-card-title primary-title>
                        <div class="title">Top Albums</div>
                    </v-card-title>
                    <v-expansion-panel popout>
                        <v-expansion-panel-content ripple v-for="({ id, name }, index) in artist.topAlbums" :key="id">
                            <div slot="header">
                                <img src="" alt="">
                            </div>
                            <v-card light>
                                <v-card-text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-card>
            </v-flex>
            <!-- TOP TRACKS -->
            <v-flex>
                <v-card>
                    <v-card-title class="title">Top Tracks</v-card-title>
                    <v-list two-line>
                        <template v-for="({id, name, albumName}) in artist.topTracks">
                            <v-list-tile :key="id">
                                <v-list-tile-content>
                                    <v-list-tile-title> {{ name }}</v-list-tile-title>
                                    <v-list-tile-sub-title>Album - {{ albumName }}</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider dark :key="name"></v-divider>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { AlbumCard } from "../components";

    export default {
      data() {
        return {
          artist: {},
          loading: true
        };
      },
      props: ["artistId", "image"],
      components: { AlbumCard },
      async created() {
        const { getArtistDetails } = this.$artistQuery;

        try {
          const { data: artist } = await getArtistDetails(this.artistId);

          this.artist = artist;
          this.loading = false;

          console.log({ artist: this.artist });
        } catch (error) {
          console.log(error);
        }
      }
    };
</script>

<style>
</style>
