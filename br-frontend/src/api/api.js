import axios from "axios"

const BASE_URL = 'http://127.0.0.1:8000/'
const SERVICES = 'api/services/'
const REVIEWS = 'api/reviews/'
const LOGIN = 'auth/jwt/create/'
const USER = 'auth/users/me/'

const baseAxios = axios.create({
    baseURL: BASE_URL
})

// SERVICES

export const getServices = () => baseAxios.get(SERVICES)
                                            .then(res => res.data)
                                            .catch(err => err) 

export const createService = data => baseAxios.post(SERVICES, data.service, {
    headers: { Authorization: `JWT ${data.access}` }
                                            })
                                            .then(res => res.data)
                                            .catch(err => err)

export const updateService = data => baseAxios.put(`${SERVICES}${data.id}/`, data.updates ,{
    headers: { Authorization: `JWT ${data.access}` }
                                            })
                                            .then(res => res.data)
                                            .catch(err => err)

export const deleteService = data => baseAxios.delete(`${SERVICES}${data.id}/`, {
    headers: { Authorization: `JWT ${data.access}` }
                                            })
                                            .then(res => res.data)
                                            .catch(err => err)

// REVIEWS

export const getReviews = () => baseAxios.get(REVIEWS)
                                            .then(res => res.data)
                                            .catch(err => err) 

export const createReview = data => baseAxios.post(REVIEWS, data.review, {
    headers: { Authorization: `JWT ${data.access}` }
                                            })
                                            .then(res => res.data)
                                            .catch(err => err)

export const updateReview = data => baseAxios.put(`${REVIEWS}${data.id}/`, data.updates ,{
    headers: { Authorization: `JWT ${data.access}` }
                                            })
                                            .then(res => res.data)
                                            .catch(err => err)

export const deleteReview = data => baseAxios.delete(`${REVIEWS}${data.id}/`, {
    headers: { Authorization: `JWT ${data.access}` }
                                            })
                                            .then(res => res.data)
                                            .catch(err => err)

// USER

export const login = data => baseAxios.post(LOGIN, data.credentials)
                                        .then(res => res.data)
                                        .catch(err => err)

export const getUser = data => baseAxios.get(USER, {
    headers: { Authorization: `JWT ${data.access}` }
})
.then(res => res.data)
.catch(err => err)

