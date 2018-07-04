require("dotenv").config();
const bodyParser = require("body-parser");
const app = require("express")();
const server = require("http").Server(app);

const {
  getTopArtists,
  getArtistImages,
  getArtistDetails,
  getAlbumDetails,
  getArtistEvents,
  getAllGenres,
  getGenreDetails,
  getSearchResults
} = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

getTopArtists(app);
getArtistImages(app);
getArtistDetails(app);
getAlbumDetails(app);
getArtistEvents(app);
getAllGenres(app);
getGenreDetails(app);
getSearchResults(app);

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

module.exports = { app };
