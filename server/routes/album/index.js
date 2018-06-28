const axios = require("axios");

const albumQuery = axios.create({
  baseURL: `${process.env.NAPSTER_ADDRESS}/albums`,
  headers: { apikey: process.env.NAPSTER_KEY }
});

const getAlbumDetails = require("./albumDetails")(albumQuery);

module.exports = { getAlbumDetails };
