module.exports = artistQuery => app => {
  app.get("/artists/:artistId", async (req, res) => {
    const { artistId } = req.params;

    try {
      const [
        { data: artistDetails },
        { data: artistImages },
        { data: artistTopAlbums },
        { data: artistTopTracks },
        { data: similar }
      ] = await Promise.all([
        artistQuery({ url: `/${artistId}` }),
        artistQuery({ url: `/${artistId}/images` }),
        artistQuery({ url: `/${artistId}/albums/top?limit=5` }),
        artistQuery({ url: `/${artistId}/tracks/top?limit=5` }),
        artistQuery({ url: `/${artistId}/similar` })
      ]);

      const artist = artistDetails.artists[0];
      const images = artistImages.images;
      const topAlbums = artistTopAlbums.albums;
      const topTracks = artistTopTracks.tracks;
      const similarArtists = similar.artists;

      res.json({ ...artist, images, topAlbums, topTracks, similarArtists });
    } catch (error) {
      console.log(error.response);
    }
  });
};
