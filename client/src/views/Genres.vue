<template>
    <v-container fluid fill-height grid-list-lg align-center justify-center>
        <fade-in>
            <loading v-if="loading" key="loading" />

            <v-layout v-else column key="content">
                <v-flex class="display-1">Genres</v-flex>
                <v-flex>
                    <v-divider class="primary" />
                </v-flex>

                <v-flex>
                    <v-list class="pa-0">
                        <v-list-tile v-for="(genre, index) in genres" :key="index" :to="`/genre/${genre.id}`">
                            <v-list-tile-content>
                                <v-list-tile-title class="subheadings">{{ genre.name }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
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
          loading: true,
          genres: []
        };
      },
      components: { Loading, FadeIn },
      async created() {
        const { getAllGenres } = this.$artistQuery;
        const { data: { genres } } = await getAllGenres();

        this.genres = genres;
        this.loading = false;
        console.log(this.genres);
      }
    };
</script>

<style>
</style>
