import axios from "axios"

const BASE_URL = 'http://127.0.0.1:8000/'
const SERVICES = 'api/services/'
const REVIEWS = 'api/reviews/'

const baseAxios = axios.create({
    baseURL: BASE_URL
})

export const getServices = () => baseAxios.get(SERVICES).then(res => res.data).catch(err => err) 

export const getReviews = () => baseAxios.get(REVIEWS).then(res => res.data).catch(err => err) 

