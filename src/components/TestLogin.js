import React from 'react'
import useForm from 'react-hook-form'
import * as yup from 'yup'
// import { loginAction } from './actions'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useSelector, useDispatch } from 'react-redux'

 
const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('password is required'),
    
    
})

export function TestLogin(props) {
    const {register, handleSubmit, errors, getValues} = useForm({
        validationSchema: schema
    })
    const state = useSelector(state => state)
    console.log(state)
    const dispatch = useDispatch()

    const onSubmit = () => {
       
        const data = getValues()
        console.log(data)
        dispatch({type: 'REGISTER_START'})
        axiosWithAuth().post('/auth/login', data)
            .then(res => {
                console.log(res)
                localStorage.setItem('token',res.data.token)
                dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
               
                
            })
            .catch(err => dispatch({type: 'LOGIN_FAILURE', payload: err}))
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='username' placeholder='Username' ref={register} />
            {errors.username && <p> {errors.username.message} </p>}
            <input name='password' placeholder='Password' ref={register} />
            {errors.password && <p> {errors.password.message} </p>}
            
            
            <button type='submit'>submit</button>
        </form>
    )
}