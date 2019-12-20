 import React from 'react';
 import ReactDOM from 'react-dom'
 import useForm from "react-hook-form";
 import axios from 'axios';
 //import ErrorMessage from "./errorMessage";

 const Register = () => {
     const {
register,
handleSubmit,
errors,
setError,
clearError,
formState: { isSubmitting }
     } = useForm();

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

<label> Email </label>
<input name="email" ref={register({required:true,pattern:/^\S+@\S+$/i})} />

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

 