const {
  getTopArtists,
  getArtistImages,
  getArtistDetails,
  getArtistEvents
} = require("./artist");

const { getAlbumDetails } = require("./album");

const { getAllGenres, getGenreDetails } = require("./genre");

const { getSearchResults } = require("./search");

module.exports = {
  getTopArtists,
  getArtistImages,
  getArtistDetails,
  getAlbumDetails,
  getArtistEvents,
  getAllGenres,
  getGenreDetails,
  getSearchResults
};
