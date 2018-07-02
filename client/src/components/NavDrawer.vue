<template>
  <v-navigation-drawer :width="200" v-model="drawerModel" :mobile-break-point="900" clipped enable-resize-watcher fixed app>
    <v-list class="pt-0">
      <v-list-tile v-for="(tab, index) in navButtons" :key="index" to="/">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ tab.label }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapState, mapMutations } from "vuex";

  export default {
    data() {
      return {
        navButtons: [
          {
            label: "Home",
            to: "/"
          }
        ]
      };
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
