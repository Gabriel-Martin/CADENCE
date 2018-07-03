import axios from "axios";

import { default as allGenres } from "./allGenres";
import { default as genreDetails } from "./genreDetails";

const genreQuery = axios.create({
  baseURL: `${process.env.VUE_APP_SERVER_ADDRESS}/genres`
});

const getAllGenres = allGenres(genreQuery);
const getGenreDetails = genreDetails(genreQuery);

export { getAllGenres, getGenreDetails };
