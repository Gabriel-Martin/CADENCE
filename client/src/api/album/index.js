import axios from "axios";

import { default as albumDetails } from "./albumDetails";

const albumQuery = axios.create({
  baseURL: `${process.env.VUE_APP_SERVER_ADDRESS}/albums`
});

const getAlbumDetails = albumDetails(albumQuery);

export { getAlbumDetails };
