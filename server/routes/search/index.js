// Import dependancies
const axios = require("axios");

const napsterAPI = axios.create({
  baseURL: `${process.env.NAPSTER_ENDPOINT}/search/verbose`,
  headers: { apikey: process.env.NAPSTER_KEY }
});

// Build exports
const getSearchResults = require("./search")(napsterAPI);

module.exports = {
  getSearchResults
};
