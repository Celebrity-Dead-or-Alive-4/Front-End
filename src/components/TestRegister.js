import React from 'react'
import useForm from 'react-hook-form'
import * as yup from 'yup'
// import { loginAction } from './actions'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useSelector, useDispatch } from 'react-redux'
import { registerAction } from '../utils/actions'
 
const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('password is required'),
    email: yup.string().email('invalid email').required('email is required'),
    name: yup.string().required('name is required')
    
})

export function TestRegister(props) {
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
        axiosWithAuth().post('/auth/register', data)
            .then(res => {
                console.log(res)
                props.history.push('/login')
                // localStorage.setItem(res)
                // loginAction(res.data.user)
               
                
            })
            .catch(err => console.log(err))
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='username' placeholder='Username' ref={register} />
            {errors.username && <p> {errors.username.message} </p>}
            <input name='password' placeholder='Password' ref={register} />
            {errors.password && <p> {errors.password.message} </p>}
            <input name='email' placeholder='Email' ref={register} />
            {errors.email && <p> {errors.email.message} </p>}
            <input name='name' placeholder='Name' ref={register} />
            {errors.name && <p> {errors.name.message} </p>}
            <button type='submit'>submit</button>
        </form>
    )
}