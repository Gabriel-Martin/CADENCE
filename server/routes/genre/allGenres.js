module.exports = napster => app => {
  app.get("/genres", async (req, res) => {
    try {
      const { data } = await napster();

      res.send(data);
    } catch (error) {
      console.log(error.response);
    }
  });
};
