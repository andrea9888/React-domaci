import axios from "axios";
const apiUrl = "https://rickandmortyapi.com/api/";

const instance = axios.create({
    baseURL: apiUrl
});

instance.defaults.headers.common["Content-Type"] = `application/json`;

export default instance;