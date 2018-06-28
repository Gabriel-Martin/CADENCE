module.exports = albumQuery => app => {
  app.get("/albums/:albumId", async (req, res) => {
    const { albumId } = req.params;
    console.log("line 4", albumQuery);
    try {
      const [album, albumImages] = await Promise.all([
        albumQuery({ url: `/${albumId}` }),
        albumQuery({ url: `/${albumId}/images` })
      ]);

      const albumDetails = album.data.albums[0];
      const images = albumImages.data.images;

      console.log("images", images);
      res.send({ ...albumDetails, images });
    } catch (error) {
      console.log(error.response);
    }
  });
};
