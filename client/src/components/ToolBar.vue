<template>
    <v-toolbar app :clipped-left="true">
        <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "CADENCE"
    };
  },
  computed: {
    ...mapState(["fixed", "drawer", "miniVariant"])
  },
  methods: {
    ...mapMutations(["toggleDrawer", "toggleMiniVariant"])
  }
};
</script>

<style>
</style>
