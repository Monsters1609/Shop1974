import Axios from "axios";

const Request = Axios.create({
    baseURL: 'http://localhost:1202/api',
})

export default Request;