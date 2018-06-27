export default artistQuery => async artistId =>
  artistQuery({ url: `/${artistId}/images` })
    .then(res => res)
    .catch(err => console.log(err));
