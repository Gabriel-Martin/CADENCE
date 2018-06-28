<template>
  <v-app dark fluid>
    <nav-drawer />
    <tool-bar />

    <v-content>
      <v-fade-transition mode="out-in">
        <router-view/>
      </v-fade-transition>
    </v-content>

    <v-footer :fixed="true" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { NavDrawer, ToolBar } from "./components";

  export default {
    name: "App",
    data() {
      return {};
    },
    components: {
      NavDrawer,
      ToolBar
    }
  };
</script>

