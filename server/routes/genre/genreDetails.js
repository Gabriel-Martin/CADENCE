module.exports = napster => app => {
  app.get("/genres/:genreId", async (req, res) => {
    try {
      const { genreId } = req.params;
      const [
        {
          data: { genres }
        },
        {
          data: { artists }
        },
        {
          data: { albums }
        }
      ] = await Promise.all([
        napster({ url: `/${genreId}` }),
        napster({ url: `/${genreId}/artists/top`, params: { limit: 5 } }),
        napster({ url: `/${genreId}/albums/top`, params: { limit: 5 } })
      ]);

      const imagesForArtists = await Promise.all(
        artists.map(artist =>
          napster({
            baseURL: `${process.env.NAPSTER_ENDPOINT}/artists/${
              artist.id
            }/images`,
            headers: { apikey: process.env.NAPSTER_KEY }
          })
        )
      );

      const imagesForAlbums = await Promise.all(
        albums.map(album =>
          napster({
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
        images: artistImages[index]
      }));

      const albumImages = imagesForAlbums.map(album => album.data);
      const topAlbums = albums.map((album, index) => ({
        ...album,
        images: albumImages[index]
      }));

      res.send({ genre: genres[0], topArtists, topAlbums });
    } catch (error) {
      console.log(error);
    }
  });
};
