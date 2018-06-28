// Import dependancies
const axios = require("axios");

const artistQuery = axios.create({
  baseURL: process.env.NAPSTER_ADDRESS,
  headers: { apikey: process.env.NAPSTER_KEY }
});

// TODO: Outsource artist queries to separate folder

// Build exports
const getTopArtists = require("./topArtists")(artistQuery);
const getArtistImages = require("./artistImages")(artistQuery);
const getArtistDetails = require("./artistDetails")(artistQuery);

const { getAlbumDetails } = require("./album");

module.exports = {
  getTopArtists,
  getArtistImages,
  getArtistDetails,
  getAlbumDetails
};
