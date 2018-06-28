module.exports = artistQuery => app => {
  app.get("/artists/:artistId", async (req, res) => {
    const { artistId } = req.params;

    try {
      const [
        { data: artistDetails },
        { data: artistImages },
        { data: artistAlbums }
      ] = await Promise.all([
        artistQuery({ url: `/artists/${artistId}` }),
        artistQuery({ url: `/artists/${artistId}/images` }),
        artistQuery({ url: `/artists/${artistId}/albums` })
      ]);

      const artist = artistDetails.artists[0];
      const images = artistImages.images;
      const albums = artistAlbums.albums;

      // res.send(albums);
      res.send({ ...artist, images, albums });
    } catch (error) {
      console.log(error.response);
    }
  });
};
