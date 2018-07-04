export default searchQuery => async queryString =>
  searchQuery({ url: `/${queryString}` })
    .then(res => res)
    .catch(err => console.log(err));
