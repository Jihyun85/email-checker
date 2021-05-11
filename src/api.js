import axios from "axios";

const baseUrl = "http://apilayer.net/api/check";
const access_key = "";

export const emailApi = (email) =>
  axios.get(baseUrl, {
    params: {
      access_key: access_key,
      email,
      format: 1,
      smtp: 1,
    },
  });
