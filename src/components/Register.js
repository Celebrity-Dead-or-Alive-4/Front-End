 import ReactDOM from 'react-dom'
 import useForm from "react-hook-form";
 import axios from 'axios';
 import * as yup from "yup";
 import React from 'react';
 import styled from 'styled-components';
 import { axiosWithAuth } from '../utils/axiosWithAuth'
 import Login from './Login.js'
 import {Link} from 'react-router-dom'
 
 const StyledH3 = styled.h3`
  font-size:.5rem;
`;
const Button = styled.button`
cursor:pointer;
background:#116466;
width:200px;
height:50px;
border-radius:5%
display:inline-block;
box-sizing:border-box;
background:#D9b08C;
box-shadow: 2px 2px 5px black;
`;
const StyledInput = styled.input` 
border-radius:5%
width:50%;`;





 
 const schema = yup.object().shape({
  username: yup.string().required('username is required'),
  password: yup.string().required('password is required'),
  email:yup.string().email('invalid email').required('email is required'),
  name: yup.string().required('name is required')
})


 const Register = (props) => {
   
     const {
register,
handleSubmit,
errors,
setError,
clearError,
formState: { isSubmitting }
     } = useForm({
      validationSchema: schema
    });
      const onSubmit = (data) => {
        axiosWithAuth().post('/auth/register', data)
          .then(res => {
            console.log(res)
          
             props.history.push('/login')
          })
          .catch(err => console.log(err))
      
      }
      // axios.post('fakeURL.com/users', {data})
      // .then (res => { console.log(res.data)})
      // .catch(err => { console.log(res.data)

      // })
return (


<form className="App" onSubmit={handleSubmit(onSubmit)}>
<label> Username: </label>
<StyledInput type="text" name ="username" ref={register({required:true})} />
{errors.username && <p style={{color:"red"}}> {errors.username.message} </p>} 
<label > Email: </label>
<StyledInput name="email" ref={register({required:true})} /> 
<label> Password:</label>
{errors.email && <p style={{color:"red"}}> {errors.email.message} </p>} 
<StyledInput type="text"  name="password" ref={register({required:true})} /> {<br></br>}
{errors.password && <p style={{color:"red"}}> {errors.password.message} </p>}
<label> Name: </label>
<StyledInput type="text" name="name" ref={register({required:true})} /> {<br></br>}
{errors.name && <p style={{color:"red"}}>{errors.name.message} </p>} 
<div><StyledH3> Yes, I'd like to receive emails about app updates and special offers </StyledH3>
 <input type="checkbox" /> </div>
<Button onClick={handleSubmit(onSubmit)}> Register</Button> 
 </form>

  
)

 }

 export default Register

