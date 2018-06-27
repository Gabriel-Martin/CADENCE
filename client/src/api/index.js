import Axios from "axios";

import topArtists from "./topArtists";
import artistImages from "./artistImages";
import artistDetails from "./artistDetails";
import artistsTopAlbums from "./artistsTopAlbums";
import artistDiscography from "./artistDiscography";

const artistQuery = Axios.create({
  baseURL: `${process.env.VUE_APP_SERVER_ADDRESS}/artists`
});

const getTopArtists = topArtists(artistQuery);
const getArtistImages = artistImages(artistQuery);
const getArtistDetails = artistDetails(artistQuery);
// const getArtistsTopAlbums = artistsTopAlbums(axios);
// const getArtistDiscography = artistDiscography(axios);

export { getTopArtists, getArtistImages, getArtistDetails };
