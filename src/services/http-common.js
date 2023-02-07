import axios from "axios";
export default axios.create({
  baseURL: "https://www.bethel-move.api.jw-solutions.fr/api/",
  headers: {
    "Content-type": "application/json",
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
});