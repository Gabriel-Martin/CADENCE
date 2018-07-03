module.exports = napster => app => {
  app.get("/artists/top", async (req, res) => {
    try {
      const { data } = await napster({ url: "/top?limit=21" });

      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });
};
