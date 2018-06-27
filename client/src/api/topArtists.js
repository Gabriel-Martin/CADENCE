export default artistQuery => artistId =>
  artistQuery({ url: `/top` })
    .then(res => res)
    .catch(err => console.log(err));
