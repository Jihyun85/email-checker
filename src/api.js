import axios from "axios";

const baseUrl = "https://emailvalidation.abstractapi.com/v1/?";
const api_key = "";

export const emailApi = (email) =>
  axios.get(baseUrl, {
    params: {
      api_key: api_key,
      email,
    },
  });
