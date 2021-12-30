import axios from './http'

const user = {
    register(params) {
        return axios.post('/api/user/register', params)
    },
    login(params) {
        return axios.post('/api/user/login', params)
    },
    quit(params) {
        return axios.post('/api/user/quit', params)
    },

}
export default user