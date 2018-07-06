<template>
  <v-toolbar app :clipped-left="true">
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title class="hidden-xs-only" v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field v-bind="searchInput" v-model="query" ref="searchInput"></v-text-field>
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
          label: "Search",
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
      handleSubmit() {
        this.$refs.searchInput.blur();
        this.$router.push({ name: "search", query: { query: this.query } });
        this.query = "";
      }
    }
  };
</script>

<style>
</style>
