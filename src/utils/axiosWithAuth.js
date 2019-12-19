import axios from 'axios'

export function axiosWithAuth() {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://reqres.in',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
}