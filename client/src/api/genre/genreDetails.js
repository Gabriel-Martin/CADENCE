export default genreQuery => async genreId =>
  genreQuery({ url: `/${genreId}` })
    .then(res => res)
    .catch(err => console.log(err));
