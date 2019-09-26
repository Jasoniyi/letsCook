import axios from "axios";

export default axios.create({
  baseURL: "https://api.edamam.com",
  headers: {
    "Content-Type": "application/json"
  }
});
