import Vue from "vue";
import Router from "vue-router";
import { Home, ArtistDetails } from "./views";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
      props: true
    },
    {
      name: "artist",
      path: "/artist/:artistId",
      component: ArtistDetails,
      props: true
    }
  ]
});
