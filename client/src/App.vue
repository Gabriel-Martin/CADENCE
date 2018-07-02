<template>
  <v-app dark fluid>
    <nav-drawer />
    <tool-bar />

    <v-content>
      <fade-in>
        <router-view/>
      </fade-in>
    </v-content>

    <v-footer :fixed="true" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { FadeIn } from "./containers";
  import { NavDrawer, ToolBar } from "./components";

  export default {
    name: "App",
    data() {
      return {};
    },
    components: {
      FadeIn,
      NavDrawer,
      ToolBar
    }
  };
</script>

