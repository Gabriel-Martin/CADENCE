export default (axios, artistId) => {
  return () =>
    axios
      .get(`/artists/${artistId}/albums/top`)
      .then(res => res)
      .catch(err => console.log(err));
};
