import axios from "axios";
const apiUrl = "https://jsonblob.com";

const instance = axios.create({
    baseURL: apiUrl
});

instance.defaults.headers.common["Content-Type"] = `application/json`;

export default instance;