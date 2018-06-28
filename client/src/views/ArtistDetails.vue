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
                    <v-card-title class="title">Top Albums</v-card-title>
                    <v-container grid-list-md>
                        <v-layout row wrap justify-center>
                            <album-card v-for="({id}, index) in artist.topAlbums" :key="index" v-bind="{ albumId: id }" />
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
            <!-- TOP TRACKS -->
            <v-flex>
                <v-card>
                    <v-card-title class="title">Top Tracks</v-card-title>
                    <v-list two-line>
                        <template v-for="({name, albumName}, index) in artist.topTracks">
                            <v-list-tile :key="index">
                                <v-list-tile-content>
                                    <v-list-tile-title> {{ name }}</v-list-tile-title>
                                    <v-list-tile-sub-title>Album - {{ albumName }}</v-list-tile-sub-title>
                                </v-list-tile-content>
                                </v-list-til>
                                <v-divider dark :key="albumName"></v-divider>
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
