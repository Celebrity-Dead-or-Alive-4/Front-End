import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../App.css";
import styled from 'styled-components';

const StyledDiv = styled.div`
display:flex;
text-align:center
justify-content:space-between;
background:#D9b08C;
width:8%;
height:100%;
margin: 0 auto;
padding:8px 15px;
`
const StyledSpan = styled.span`
color:#D1E8E2;
font-style:garamond;
font-size:1.5rem
font-weight:300;
padding:0 25px;

`
const NavSection = styled.div`
display:flex;

`

const Navigation = () => {
  return (
    <div>

      <div className="App">
        <NavSection>
          <StyledDiv>
            <NavLink exact className="navlinks" to="/Login"> <StyledSpan >Login </StyledSpan> </NavLink >
          </StyledDiv>
          <StyledDiv>
            <NavLink exact className="navlinks" to="/Quiz"> <StyledSpan >Quiz </StyledSpan></NavLink >
          </StyledDiv>
          <StyledDiv>
            <NavLink exact className="navlinks" to="/Register"> <StyledSpan  >Register </StyledSpan> </NavLink >
          </StyledDiv>
        </NavSection>
      </div>

    </div>
  );
};

export default Navigation;
