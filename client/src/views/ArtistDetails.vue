<template>
    <v-container class="main" v-if="!loading" pa-4 grid-list-md>
        <v-layout column>
            <v-flex>
                <v-flex>
                    <v-card class="image-header">
                        <v-parallax :src="artist.images[3].url" height="400">
                            <v-layout row justify-start align-end>
                                <h1 class="display-3 primary--text text--darken-1"> {{ artist.name }} </h1>
                            </v-layout>
                        </v-parallax>
                    </v-card>
                </v-flex>

                <v-flex>
                    <v-card>
                        <v-card-title primary-title>
                            <div class="title">Bio</div>
                        </v-card-title>
                        <v-card-text v-html="artist.bios[0].bio" />
                    </v-card>
                </v-flex>
            </v-flex>

            <v-flex>
                <v-container grid-list-xs>
                    <v-layout row wrap>
                        <album-card v-for="({id}, index) in artist.albums" :key="index" v-bind="{ albumId: id }" />
                    </v-layout>
                </v-container>
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

      console.log(this.artist);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
</style>
