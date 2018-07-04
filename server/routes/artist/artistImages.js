module.exports = napster => app => {
  app.get("/artists/:artistId/images", async (req, res) => {
    const { artistId } = req.params;

    try {
      const { data } = await napster({ url: `/${artistId}/images` });

      res.json(data);
    } catch (error) {
      console.log(error.response);
    }
  });
};
