<template>
  <v-toolbar app :clipped-left="true">
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field v-bind="searchInput" v-model="query"></v-text-field>
    </v-form>
  </v-toolbar>
</template>

<script>
  import { mapState, mapMutations } from "vuex";

  export default {
    data() {
      return {
        title: "CADENCE",
        query: "",
        searchInput: {
          "single-line": true,
          label: "Search Artist",
          "hide-details": true,
          "prepend-icon": "search"
        }
      };
    },
    computed: {
      ...mapState(["fixed", "drawer", "miniVariant"])
    },
    methods: {
      ...mapMutations(["toggleDrawer", "toggleMiniVariant"]),
      handleSubmit() {}
    }
  };
</script>

<style>
</style>
