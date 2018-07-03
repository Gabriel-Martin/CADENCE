// Import dependancies
const axios = require("axios");

const napsterAPI = axios.create({
  baseURL: `${process.env.NAPSTER_ENDPOINT}/artists`,
  headers: { apikey: process.env.NAPSTER_KEY }
});

const bandsInTownAPI = axios.create({
  baseURL: `${process.env.BANDS_IN_TOWN_ENDPOINT}`,
  params: { app_id: process.env.BANDS_IN_TOWN_APP_ID }
});

// Build exports
const getTopArtists = require("./topArtists")(napsterAPI);
const getArtistImages = require("./artistImages")(napsterAPI);
const getArtistDetails = require("./artistDetails")(napsterAPI);
const getArtistEvents = require("./artistEvents")(bandsInTownAPI);

module.exports = {
  getTopArtists,
  getArtistImages,
  getArtistDetails,
  getArtistEvents
};
