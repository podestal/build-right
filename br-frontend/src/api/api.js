import axios from "axios"

const BASE_URL = 'http://127.0.0.1:8000/'
const SERVICES = 'api/services/'
const REVIEWS = 'api/reviews/'
const LOGIN = 'auth/jwt/create/'

const baseAxios = axios.create({
    baseURL: BASE_URL
})

// SERVICES

export const getServices = () => baseAxios.get(SERVICES)
                                            .then(res => res.data)
                                            .catch(err => err) 

// REVIEWS

export const getReviews = () => baseAxios.get(REVIEWS)
                                            .then(res => res.data)
                                            .catch(err => err) 

export const createReview = data => baseAxios.post(REVIEWS, data.review)
                                            .then(res => res.data)
                                            .catch(err => err)

export const updateReview = data => baseAxios.put(`${REVIEWS}${data.id}/`, data.updates)
                                            .then(res => res.data)
                                            .catch(err => err)

export const deleteReview = data => baseAxios.delete(`${REVIEWS}${data.id}/`)
                                            .then(res => res.data)
                                            .catch(err => err)

// AUTHENTICATION

export const login = data => baseAxios.post(LOGIN, data.credentials)
                                        .then(res => res.data)
                                        .catch(err => err)