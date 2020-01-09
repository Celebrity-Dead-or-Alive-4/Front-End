
 import useForm from "react-hook-form";

 import * as yup from "yup";
 import React from 'react';
 import styled from 'styled-components';
 import { axiosWithAuth } from '../utils/axiosWithAuth'
 
 const StyledH3 = styled.h3`
  font-size:.5rem;
`
const Button = styled.button`
  cursor:pointer;
  background:#116466;
  width:300px;
  border-radius:5%;
  display:inline-block;
  box-sizing:border-box;
`
const StyledInput = styled.input` 
border-radius:5%;
width:50%;`

const StyledLabel = styled.label`
color:#116466;
font-family:arial;
font-style:italic;
font-weight:bold;

`



 
//  const schema = yup.object().shape({
//   Username: yup.string().required('username is required'),
//   Password: yup.string().required('password is required'),
//   Email: yup.string().email('invalid email').required('email is required'),
//   Name: yup.string().required('name is required')
// })
const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('password is required'),
  email: yup.string().email('invalid email').required('email is required'),
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

      const onSubmit = data => {
        console.log(data)
        axiosWithAuth().post('/auth/register', data)
          .then(res => {
            console.log(res)
            props.history.push('/login')
          })
          .catch(err => console.log(err))
      }
     
return (
  
 <form className="App" onSubmit={handleSubmit(onSubmit)}>
<StyledLabel> User Name: </StyledLabel>
<StyledInput type="text" name ="username" ref={register({required:true})} />
<StyledLabel > Email </StyledLabel>
<StyledInput name="email" ref={register({required:true})} /> 
<StyledLabel> Password</StyledLabel>
<StyledInput type="text"  name="password" ref={register({required:true})} /> {<br></br>}
<StyledLabel> Name </StyledLabel>
<StyledInput type="text" name="name" ref={register({required:true})} /> {<br></br>}
<div><StyledH3> Yes, I'd like to receive emails about app updates and special offers </StyledH3>
 <input type="checkbox" /> </div>
 <Button onClick={handleSubmit(onSubmit)}> Register</Button>
 </form> 


 
)

 }

 export default Register

