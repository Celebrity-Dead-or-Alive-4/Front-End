import React from 'react';
import { Link, NavLink }  from 'react-router-dom';
import "../App.css";
import styled from 'styled-components';
const StyledDiv = styled.div`
background:#D9b08C;
width:50%;
height:100%;
margin: 0 auto;
padding:10px 15px;
`
const StyledSpan = styled.span`
color:#D1E8E2;
font-style:garamond;
font-size:1.5rem
font-weight:300;
padding:0 25px;

`

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>Celebrity Dead or Alive</h1>
        <StyledDiv>
        <NavLink  exact className="navlinks" to="/"> <StyledSpan >Login </StyledSpan> </NavLink >
        
        
          <NavLink exact className="navlinks"   to="/About"> <StyledSpan >Quiz </StyledSpan></NavLink >
        
        
          <NavLink exact className="navlinks"  to="/Contact"> <StyledSpan  >Register </StyledSpan> </NavLink >
          </StyledDiv>
      </div>
    </div>
  );
};

export default Navigation;
