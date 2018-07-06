<template>
    <v-container fluid fill-height grid-list-lg>
        <fade-in>
            <loading v-if="loading" />

            <v-layout v-else column>
                <v-flex>
                    <v-card class="pa-3">
                        <v-container fluid grid-list-lg>
                            <v-layout v-bind="breakpoint">
                                <v-flex sm4>
                                    <v-card-media contain :src="album.images[2].url" :height="300" />
                                </v-flex>
                                <!-- ALBUM INFO -->
                                <v-flex class="text--center" sm8>
                                    <v-card-text class="pa-0">
                                        <div class="title">Album: {{ album.name }}</div>
                                        <div class="subheading">Label: {{ album.label }}</div>
                                        <div class="subheading">Released: {{ new Date(album.released).toDateString() }}</div>
                                        <div class="subheading">Explicit: {{ album.isExplicit ? 'YES' : 'NO' }}</div>
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
                <!-- TRACKS LIST -->
                <v-flex>
                    <v-card class="pa-3">
                        <v-list>
                            <v-list-tile>
                                <v-layout row>
                                    <v-flex xs6 sm4 class="text-xs-center">Track</v-flex>
                                    <v-flex sm4 class="text-xs-center hidden-xs-only">Length</v-flex>
                                    <v-flex xs6 sm4 class="text-xs-center">Preview</v-flex>
                                </v-layout>
                            </v-list-tile>
                            <v-divider class="primary" />
                            <template v-for="(track, index) in tracks">
                                <v-list-tile :key="index">
                                    <v-layout row align-center justify-center>
                                        <v-flex xs6 sm4>
                                            <v-list-tile-sub-title>{{ index + 1 }}: {{ track.name }}</v-list-tile-sub-title>
                                        </v-flex>

                                        <v-flex xs6 sm4 class="text-xs-center hidden-xs-only">
                                            <v-list-tile-sub-title>{{ track.playbackSeconds }}s</v-list-tile-sub-title>
                                        </v-flex>

                                        <v-flex xs6 sm4 class="text-xs-center">
                                            <v-btn icon @click="playAudio({track, index})">
                                                <v-icon>{{ track.icon }}</v-icon>
                                            </v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-list-tile>
                                <v-divider dark :key="track.id" />
                            </template>
                        </v-list>
                    </v-card>
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
          album: {},
          loading: true,
          tracks: [],
          play: true,
          audo: null
        };
      },
      props: ["albumId"],
      components: { Loading, FadeIn },
      methods: {
        playAudio({ track, index }) {
          if (this.play) {
            this.audio = new Audio(track.previewURL);
            this.tracks[index].icon = "pause";
            this.audio.play();
            this.play = false;
            return;
          }

          this.tracks[index].icon = "play_arrow";
          this.audio.pause();
          this.play = true;
          this.audio = null;
        }
      },
      computed: {
        breakpoint() {
          return { column: this.$vuetify.breakpoint.xs && true };
        }
      },
      async created() {
        const { getAlbumDetails } = this.$artistQuery;

        const { data } = await getAlbumDetails(this.albumId);

        this.album = data;
        this.tracks = data.tracks.map(track => ({ ...track, icon: "play_arrow" }));
        this.loading = false;
      }
    };
</script>

<style>
</style>
