import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://plasmo-casino-server.onrender.com'
})

export default instance