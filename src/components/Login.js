import React, { useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import useForm from 'react-hook-form';

function Login() {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username:</label>
            <input name="Username" ref={register} />
            <label>Password:</label>
            <input name="password" ref={register} />



            <button type="submit">Log in</button>








        </form>




    )



}

export default Login;