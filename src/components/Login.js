import React, { useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../utils/actions'
import useForm from 'react-hook-form';


const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('password is required'),    
})

function Login(props) {
    const { register, handleSubmit, errors, getValues } = useForm({
        validationSchema: schema
    })
   
    const dispatch = useDispatch()

    const onSubmit = () => {
        const values = getValues()
        dispatch({type: LOGIN_START})
        console.log(values)
        axiosWithAuth().post('/auth/login', values)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                dispatch({type: LOGIN_SUCCESS, payload: res.data})
                props.history.push('/dashboard')
            })
            .catch(err => dispatch({type: LOGIN_FAILURE, payload: err}))
    }

   

    return (
        <div className="Login-form">
            <form onSubmit={handleSubmit(onSubmit)}>

                <label >Username:</label>
                <input name="username" ref={register({ required: true, maxLength: 20 })} />
                {errors.username && <p> {errors.username.message} </p>}
                <label >Password:</label>
                <input name="password" ref={register({ required: true, maxLength: 20})} />
                {errors.password && <p> {errors.password.message} </p>}
                <button type="submit">Log in</button>
            </form>
        </div>


    )



}

export default Login;