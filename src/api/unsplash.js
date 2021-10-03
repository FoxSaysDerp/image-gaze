import axios from "axios";
require('dotenv').config();

const apiKey = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: apiKey,
  }
});

