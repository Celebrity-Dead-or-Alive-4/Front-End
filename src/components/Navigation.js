import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../App.css";
import styled from 'styled-components';

const StyledDiv = styled(NavLink)`
/* display:flex; */
text-align:center;
/* justify-content:space-between; */
background:#D9b08C;
width:15%;
height:100%;
margin: 0 auto;
padding:8px 15px;
text-decoration: none;
color:#D1E8E2;
font-style:garamond;
font-size:1.5rem;
font-weight:300;
box-shadow: 2px 2px 5px black;
border-radius: 1rem;

`
const StyledSpan = styled.span`
color:#D1E8E2;
font-style:garamond;
font-size:1.5rem;
font-weight:300;
padding:0 25px;

`
const NavSection = styled.div`
display:flex;
width: 100%;
`

const Navigation = () => {
  return (
   

    
        <NavSection>
        
            <StyledDiv  to="/Login">Login</StyledDiv >
        
          
            <StyledDiv  to="/Quiz">Quiz</StyledDiv >
         
            <StyledDiv  to="/Register">Register</StyledDiv >
         
        </NavSection>
        )
  }

export default Navigation;
