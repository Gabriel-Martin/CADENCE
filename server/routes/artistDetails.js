module.exports = artistQuery => app => {
  app.get("/artists/:artistId", async (req, res) => {
    const { artistId } = req.params;

    try {
      const { data } = await artistQuery({ url: `/artists/${artistId}` });

      res.send(data);
    } catch (error) {
      console.log(error.response);
    }
  });
};
