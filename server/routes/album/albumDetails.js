module.exports = albumQuery => app => {
  app.get("/albums/:albumId", async (req, res) => {
    const { albumId } = req.params;

    try {
      const [details, albumImages, albumTracks, similar] = await Promise.all([
        albumQuery({ url: `/${albumId}` }),
        albumQuery({ url: `/${albumId}/images` }),
        albumQuery({ url: `/${albumId}/tracks` }),
        albumQuery({ url: `/${albumId}/similar` })
      ]);

      const album = details.data.albums[0];
      const { images } = albumImages.data;
      const similarAlbums = similar.data.albums;
      const { tracks } = albumTracks.data;

      const data = { ...album, images, similarAlbums, tracks };

      res.json(data);
    } catch (error) {
      console.log(error.response);
    }
  });
};
