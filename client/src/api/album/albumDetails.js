export default albumQuery => async albumId =>
  albumQuery({ url: `/${albumId}` })
    .then(res => res)
    .catch(err => console.log(err));
