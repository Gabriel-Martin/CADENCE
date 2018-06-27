// Import dependancies
const axios = require("axios");
const napster = axios.create({
  baseURL: process.env.NAPSTER_ADDRESS,
  headers: { apikey: process.env.NAPSTER_KEY }
});

// Build exports
const getTopArtists = require("./topArtists")(napster);
const getArtistImages = require("./artistImages")(napster);
const getArtistDetails = require("./artistDetails")(napster);

module.exports = { getTopArtists, getArtistImages, getArtistDetails };
