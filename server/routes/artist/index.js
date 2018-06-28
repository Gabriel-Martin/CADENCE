// Import dependancies
const axios = require("axios");

const napsterAPI = axios.create({
  baseURL: `${process.env.NAPSTER_ADDRESS}/artists`,
  headers: { apikey: process.env.NAPSTER_KEY }
});

// Build exports
const getTopArtists = require("./topArtists")(napsterAPI);
const getArtistImages = require("./artistImages")(napsterAPI);
const getArtistDetails = require("./artistDetails")(napsterAPI);

module.exports = {
  getTopArtists,
  getArtistImages,
  getArtistDetails
};
