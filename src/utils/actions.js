
// import { axiosWithAuth } from './axiosWithAuth'


export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const ADD_SCORE = 'ADD_SCORE'

// export const loginAction = (input) => dispatch => {
//     dispatch({type: LOGIN_START })
//     axiosWithAuth()
//         .post('/api/login', input)
//         .then(res => {
//             localStorage.setItem('token', res.dataheader)
//             dispatch({ type: LOGIN_SUCCESS, payload: res.data })
//         })
//         .catch(err => {
//             dispatch({ type: LOGIN_FAILURE, payload: err })
//         })
// }

// export const registerAction = (input) => dispatch => {
//     dispatch({ type: REGISTER_START })
//     axiosWithAuth()
//         .post('/api/register', input)
//         .then(res => {
//             localStorage.setItem('token', res.dataheader)
//             dispatch({ type: REGISTER_SUCCESS, payload: res.data })
//         })
//         .catch(err => {
//             dispatch({ type: REGISTER_FAILURE, payload: err })
//         })
// }