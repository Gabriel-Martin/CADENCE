export default eventsQuery => async artistName =>
  eventsQuery({ url: `/${artistName}` })
    .then(res => res)
    .catch(err => console.log(err));
