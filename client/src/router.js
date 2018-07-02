import Vue from "vue";
import Router from "vue-router";
import { Home, ArtistDetails, AlbumDetails } from "./views";

Vue.use(Router);

export default new Router({
  mode: "history",
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
    },
    {
      name: "album",
      path: "/album/:albumId",
      component: AlbumDetails,
      props: true
    }
  ]
});
