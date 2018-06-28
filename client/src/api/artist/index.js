import axios from "axios";

import { default as topArtists } from "./topArtists";
import { default as artistImages } from "./artistImages";
import { default as artistDetails } from "./artistDetails";
import { default as artistsTopAlbums } from "./artistsTopAlbums";
import { default as artistDiscography } from "./artistDiscography";

const artistQuery = axios.create({
  baseURL: `${process.env.VUE_APP_SERVER_ADDRESS}/artists`
});

const getTopArtists = topArtists(artistQuery);
const getArtistImages = artistImages(artistQuery);
const getArtistDetails = artistDetails(artistQuery);
const getArtistsTopAlbums = artistsTopAlbums(artistQuery);
const getArtistDiscography = artistDiscography(artistQuery);

export {
  getTopArtists,
  getArtistImages,
  getArtistDetails,
  getArtistsTopAlbums,
  getArtistDiscography
};
