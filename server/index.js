require("dotenv").config();
const bodyParser = require("body-parser");

const { getTopArtists } = require("./routes");
const { getArtistImages } = require("./routes");
const { getArtistDetails } = require("./routes");

const app = require("express")();

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

app.listen(3000, "localhost");
