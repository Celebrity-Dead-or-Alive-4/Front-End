 import ReactDOM from 'react-dom'
 import useForm from "react-hook-form";
 import axios from 'axios';
 import * as yup from "yup";
 import React from 'React';
 
 const schema = yup.object().shape({
  firstName: yup.string().required(),
  password: yup.string().required(),
});


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
        alert(JSON.stringify(data));
      }
      // axios.post('fakeURL.com/users', {data})
      // .then (res => { console.log(res.data)})
      // .catch(err => { console.log(res.data)

      // })
return (
<form className="App" onSubmit={handleSubmit(onSubmit)}>

<button> Register</button>
<label> First Name: </label>
<input type="text" name ="firstName" ref={register({required:true})} />

<label> Email </label>
<input name="email" ref={register({required:true})} />

<label> Password</label>
<input type="text"  name="password" ref={register({required:true})} /> {<br></br>}
 <input type="checkbox" /> <h3> Yes, I'd like to receive emails about app updates and special offers </h3>

</form>
  
)

 }

 export default Register

