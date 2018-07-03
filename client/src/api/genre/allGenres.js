export default genreQuery => async () =>
  genreQuery()
    .then(res => res)
    .catch(err => console.log(err));
