import axios from 'axios'
var instance = axios.create({
    headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
    },
    baseURL: 'http://localhost:8094/'
})
export default instance