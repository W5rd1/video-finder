// import React from "react";
import axios from "axios";

const KEY = "AIzaSyDOZNdefnxL2OJDxAhEJqZKiZYxxYOksvE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
