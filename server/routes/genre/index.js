// Import dependancies
const axios = require("axios");

const napsterAPI = axios.create({
  baseURL: `${process.env.NAPSTER_ENDPOINT}/genres`,
  headers: { apikey: process.env.NAPSTER_KEY }
});

// Build exports
const getAllGenres = require("./allGenres")(napsterAPI);
const getGenreDetails = require("./genreDetails")(napsterAPI);

module.exports = {
  getAllGenres,
  getGenreDetails
};
