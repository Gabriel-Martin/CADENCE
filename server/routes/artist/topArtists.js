module.exports = napster => app => {
  app.get("/artists/top", async (req, res) => {
    try {
      const { data } = await napster({ url: "/top" });

      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });
};
