module.exports = napster => app => {
  app.get("/genres", async (req, res) => {
    try {
      const { data } = await napster();

      res.json(data);
    } catch (error) {
      console.log(error.response);
    }
  });
};
