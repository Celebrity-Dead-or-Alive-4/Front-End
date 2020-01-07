import styled from 'styled-components'



export const Background = styled.div`

background-color: #116466;

`
export const LoginCard = styled.div`


display:flex;
justify-content:center;
  width: 20rem;
  margin: auto 50rem;
   padding: 35px; 
  font-weight: bold;
 background: #D1E8E2;
  box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.1);
  label {

display: flex;
margin-bottom: 20px;
}


`
export const Button = styled.button`


display: flex;
  max-width: 150px;
  margin: 32px 0;
  padding: 12px 20px;
  border-style: none;
  background-color: #D9B08C;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 17px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  outline: none;


button:disabled {
  opacity: 0.5;
  cursor: not-allowed !important;
}

 button {
  margin-left: 0.5rem;
}

button.outline {
  background-color: #eee;
  border: 1px solid #aaa;
  color: #555;
} 


`