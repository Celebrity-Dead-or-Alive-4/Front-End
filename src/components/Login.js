import React, { useEffect } from 'react';
import axios from 'axios';

import useForm from 'react-hook-form';


function Login() {
    const { register, handleSubmit, errors, setValue, reset } = useForm()
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => console.log(data)

    const validateUserName = async value => {
        await sleep(1000);
        if (value === "username") return true;
        return false;
    }
    const validatePassword = async value => {
        await sleep(1000);
        if (value === "password") return true;
        return false;
    }

    return (
        <div className="Login-form">
            <form onSubmit={handleSubmit(onSubmit)}>

                <label >Username:</label>
                <input name="username" ref={register({ required: true, maxLength: 20, validate: validateUserName })} />
                {errors.username && errors.username.type === "required" && (
                    <p>This is required</p>
                )}
                <label >Password:</label>
                <input name="password" ref={register({ required: true, maxLength: 20, validate: validatePassword })} />
                {errors.password && errors.password.type === "required" && (
                    <p>This is required</p>
                )}
                <button type="submit">Log in</button>
            </form>
        </div>


    )



}

export default Login;