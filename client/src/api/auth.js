import axios from "axios";

export default spotifyAuth =>
  spotifyAuth()
    .then(res => res)
    .catch(err => {
      console.log(err);
      return err;
    });
