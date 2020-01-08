import axios from 'axios'

export function axiosWithAuth() {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://celebrity-dead-or-alive-be.herokuapp.com/api',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `${token}`
        }
    })
}