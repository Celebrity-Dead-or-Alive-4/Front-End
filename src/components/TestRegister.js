import React from 'react'
import useForm from 'react-hook-form'
import * as yup from 'yup'
// import { loginAction } from './actions'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const schema = yup.object().shape({
    Username: yup.string().required('Username is required'),
    Password: yup.string().required('password is required'),
    Email: yup.string().email('invalid email').required('email is required'),
    Name: yup.string().required('name is required')
})

export function TestRegister(props) {
    const {register, handleSubmit, errors, getValues} = useForm({
        validationSchema: schema
    })
    

    const onSubmit = () => {
       
        const data = getValues()
        console.log(data)
        axiosWithAuth().post('/auth/register', data)
            .then(res => {
                console.log(res)
                // localStorage.setItem(res)
                // loginAction(res.data.user)
                
            })
            .catch(err => console.log(err))
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='Username' placeholder='Username' ref={register} />
            {errors.Username && <p> {errors.Username.message} </p>}
            <input name='Password' placeholder='Password' ref={register} />
            {errors.Password && <p> {errors.Password.message} </p>}
            <input name='Email' placeholder='Email' ref={register} />
            {errors.Email && <p> {errors.Email.message} </p>}
            <input name='Name' placeholder='Name' ref={register} />
            {errors.Name && <p> {errors.Name.message} </p>}
            
            <button type='submit'>submit</button>
        </form>
    )
}