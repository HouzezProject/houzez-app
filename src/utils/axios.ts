import axios from "axios";

const visitBackEnd = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  timeout: 5000
});

export default visitBackEnd;
