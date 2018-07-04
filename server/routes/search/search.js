module.exports = napsterAPI => app => {
  app.get("/search/:query", async (req, res) => {
    const { query } = req.params;

    try {
      const {
        data: { search }
      } = await napsterAPI({ params: { query } });

      const { query: queryString, data } = search;
      const { artists, albums, tracks } = data;

      const imagesForArtists = await Promise.all(
        artists.map(artist =>
          napsterAPI({
            baseURL: `${process.env.NAPSTER_ENDPOINT}/artists/${
              artist.id
            }/images`,
            headers: { apikey: process.env.NAPSTER_KEY }
          })
        )
      );

      const imagesForAlbums = await Promise.all(
        albums.map(album =>
          napsterAPI({
            baseURL: `${process.env.NAPSTER_ENDPOINT}/albums/${
              album.id
            }/images`,
            headers: { apikey: process.env.NAPSTER_KEY }
          })
        )
      );

      const artistImages = imagesForArtists.map(artist => artist.data);
      const topArtists = artists.map((artist, index) => ({
        ...artist,
        images: artistImages[index].images
      }));

      const albumImages = imagesForAlbums.map(album => album.data);
      const topAlbums = albums.map((album, index) => ({
        ...album,
        images: albumImages[index].images
      }));

      res.json({
        queryString,
        topArtists,
        topAlbums,
        topTracks: tracks
      });
    } catch (error) {
      console.log(error.response);
    }
  });
};
