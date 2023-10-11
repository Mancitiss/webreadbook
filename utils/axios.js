import axios from 'axios'

export default axios.create({
    baseURL: "https://mancitiss.duckdns.org:8000",
    headers: {
      "Content-type": "application/json"
    }
  });