import axios from "axios";
require('dotenv').config();

const apiKey = process.env.REACT_APP_API_KEY;

console.log(apiKey);

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID WH9lEbseq_9EaeFSxRa7mesbwg5I-pK1lP-BUustitY",
  }
});

