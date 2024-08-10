import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2e2d0679f48f48ed919bc1cd2e09e98f",
  },
});
