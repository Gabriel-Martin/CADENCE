module.exports = napster => app => {
  app.get("/genres/:genreId", async (req, res) => {
    try {
      const { genreId } = req.params;
      console.log({ genreId });
      const [
        { data: details },
        { data: topArtists },
        { data: topAlbums }
      ] = await Promise.all([
        napster({ url: `/${genreId}` }),
        napster({ url: `/${genreId}/artists/top`, params: { limit: 9 } }),
        napster({ url: `/${genreId}/albums/top`, params: { limit: 9 } })
      ]);

      console.log({ ...details, topArtists, topAlbums });
      res.send({ ...details, topArtists, topAlbums });
    } catch (error) {
      console.log(error);
    }
  });
};
