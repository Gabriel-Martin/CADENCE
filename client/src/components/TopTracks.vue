<template>
    <fade-in>
        <v-flex xs12 sm6 key="content">
            <v-card>
                <v-card-title class="title">Top Tracks</v-card-title>
                <v-divider class="primary" />
                <v-list two-line="">
                    <v-list-tile v-for="({id, name, albumName}) in topTracks" :key="id">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ name }}</v-list-tile-title>
                            <v-list-tile-sub-title>Album: {{ albumName }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </fade-in>
</template>

<script>
    import { FadeIn } from "../containers";
    import { Loading } from "./Loading.vue";

    export default {
      props: ["topTracks"],
      components: { FadeIn }
    };
</script>

<style>
</style>
