module.exports = eventsQuery => app => {
  app.get("/events/:artistName", async (req, res) => {
    const { artistName } = req.params;

    try {
      const { data } = await eventsQuery({
        url: `artists/${artistName}/events`
      });

      res.json({ data });
    } catch (error) {
      console.log(error.response);
    }
  });
};
