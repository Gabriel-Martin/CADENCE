<template>
  <v-navigation-drawer :width="200" v-model="drawerModel" :mobile-break-point="900" clipped enable-resize-watcher fixed app>
    <v-list>
      <v-list-tile value="true">
        <v-list-tile-action>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    drawerModel: {
      get() {
        return this.$store.state.drawer;
      },
      set(drawer) {
        if (drawer !== this.$store.state.drawer) {
          this.$store.commit("toggleDrawer");
        }
      }
    }
  },
  methods: {
    ...mapMutations(["toggleDrawer", "toggleMiniVariant"])
  },
  created() {
    if (window.innerWidth <= 900) {
      this.toggleDrawer();
    }
  }
};
</script>

<style>
</style>
