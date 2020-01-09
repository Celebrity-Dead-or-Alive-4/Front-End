 import ReactDOM from 'react-dom'
 import useForm from "react-hook-form";
 import axios from 'axios';
 import * as yup from "yup";
 import React from 'react';
 import styled from 'styled-components';
 import { axiosWithAuth } from '../utils/axiosWithAuth'
 
 const StyledH3 = styled.h3`
  font-size:.5rem;
`;
const Button = styled.button`
cursor:pointer;
background:#116466;
width:300px;
border-radius:5%
display:inline-block;
box-sizing:border-box;
`;
const StyledInput = styled.input` 
border-radius:5%
width:50%;`;

const StyledLabel = styled.label`
color:#116466;
font-family:arial;
font-style:italic;
font-weight:100;

`



 
 const schema = yup.object().shape({
  Username: yup.string().required('username is required'),
  Password: yup.string().required('password is required'),
  Email:yup.string().email('invalid email').required('email is required'),
  Name: yup.string.required('name is required')
})


 const Register = () => {
   
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

      const onSubmit = data => {
        axiosWithAuth().post('/auth/register', data)
          .then(res => {
            console.log(res)
          })
          .catch(err => console.log(err))
        alert(JSON.stringify(data));
      }
      // axios.post('fakeURL.com/users', {data})
      // .then (res => { console.log(res.data)})
      // .catch(err => { console.log(res.data)

      // })
return (


<form className="App" onSubmit={handleSubmit(onSubmit)}>


<StyledLabel> First Name: </StyledLabel>
<StyledInput type="text" name ="firstName" ref={register({required:true})} />
<StyledLabel > Email </StyledLabel>

<StyledInput name="email" ref={register({required:true})} /> 

<StyledLabel> Password</StyledLabel>
<StyledInput type="text"  name="password" ref={register({required:true})} /> {<br></br>}
<div><StyledH3> Yes, I'd like to receive emails about app updates and special offers </StyledH3>
 <input type="checkbox" /> </div>

 <Button> Register</Button>
 
</form>

  
)

 }

 export default Register

