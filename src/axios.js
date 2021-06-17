import axios from 'axios'

const baseurl="http://localhost:3000/"

const instance = axios.create({
    baseURL:baseurl
})

export default instance