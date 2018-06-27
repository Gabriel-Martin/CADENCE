export default artistQuery => async artistId =>
  artistQuery({ url: `/${artistId}` })
    .then(res => res)
    .catch(err => console.log(err));
