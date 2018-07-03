const {
  getTopArtists,
  getArtistImages,
  getArtistDetails,
  getArtistEvents
} = require("./artist");

const { getAlbumDetails } = require("./album");

const { getAllGenres, getGenreDetails } = require("./genre");

module.exports = {
  getTopArtists,
  getArtistImages,
  getArtistDetails,
  getAlbumDetails,
  getArtistEvents,
  getAllGenres,
  getGenreDetails
};
