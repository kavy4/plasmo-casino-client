import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://plasmo-casino-server.onrender.com'
    // baseURL: 'http://localhost:5000'
})

export default instance