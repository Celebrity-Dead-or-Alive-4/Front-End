 import React from 'react';
 import ReactDOM from 'react-dom'
 import useForm from "react-hook-form";
 import axios from 'axios';
 import * as yup from "yup";
 //import ErrorMessage from "./errorMessage";




 export default function App() {
    const { register, 
        handleSubmit,
         errors } = useForm({
      validationSchema: schema
    });
    const onSubmit = data => {
      console.log(data);
    };
 
 const Register = () => {
     const {
register,
handleSubmit,
errors,
setError,
clearError,
formState: { isSubmitting }
     } = useForm( {
         validationSchema:schema
     }

     );

      const onSubmit = data => {
        alert(JSON.stringify(data));
        axios.post('fakeURL.com/users', { data })
        .then( res => {console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
      }
     
return (
<form className="App" onSubmit={handleSubmit(onSubmit)}>


<label> First Name: </label>
<input name ="firstname" ref={register({required:true})} />
{<br></br>}
<label> Email </label>
<input name="email" ref={register({required:true})} />
{<br></br>}
<label> Password</label>
<input type="password" ref={register({required:true})} /> {<br></br>}
 <input type="checkbox" />
Yes, I'd like to receive emails about app updates and special offers 
{<br></br>}
<button> Register</button>
</form>
  
)

 }

 export default Register

 