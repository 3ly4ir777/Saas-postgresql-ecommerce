import axios from 'axios'

export const nestApi = axios.create({
    baseURL: process.env.NEST_PUBLIC_API_URL || 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
})