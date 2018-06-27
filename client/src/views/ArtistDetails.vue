<template>
    <v-container v-if="!loading" pa-4 grid-list-md>
        <v-card height="100%">
            <v-layout column>
                <v-container grid-list-md>
                    <v-layout>
                        <v-flex>
                            <v-card>
                                <v-parallax :src="artist.image" height="400">
                                    <v-layout column align-center justify-center>
                                        <v-flex>
                                            <v-card>
                                                <h1 class="primary--text">Vuetify.js</h1>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-parallax>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>

                <v-flex>
                    <v-card>
                        <v-card-title primary-title>
                            <div class="title">Bio</div>
                        </v-card-title>
                        <!-- <v-card-text class="subheading" v-html="" /> -->
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      artist: {},
      loading: true
    };
  },
  props: ["artistId", "image"],
  async created() {
    const { getArtistDetails, getArtistImages } = this.$artistQuery;

    const [
      { data: { artists: [artist] } },
      { data: { images } }
    ] = await Promise.all([
      getArtistDetails(this.artistId),
      getArtistImages(this.artistId)
    ]);

    // const { data: { artists } } = await getArtistDetails(this.artistId);
    // this.artist = artists[0];

    // const { data: { images } } = await artistId(this.artistId);
    // this.artist.image = images[3].url;

    this.loading = false;
    console.log(artist);
    console.log(images);
  }
};
</script>

<style>
</style>
