import axios from "axios";

import { default as search } from "./search";

const searchQuery = axios.create({
  baseURL: `${process.env.VUE_APP_SERVER_ADDRESS}/search`
});

const getSearchResults = search(searchQuery);

export { getSearchResults };
