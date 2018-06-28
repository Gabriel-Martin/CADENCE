export default axios => {
  return artistId =>
    axios
      .get(`/artists/${artistId}/albums`)
      .then(res => res)
      .catch(err => console.log(err));
};
