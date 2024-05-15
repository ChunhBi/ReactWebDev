import {StyledHeader, StyledNavLink} from "../styledTags.jsx";
import styled, { keyframes } from "styled-components"
import {githubUserName} from "../App.jsx";

const StyledNav = styled.nav`
    margin-bottom: 10px;
`
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledImg = styled.img`
    height: 60px;
    pointer-events: none;
    
    @media (prefers-reduced-motion: no-preference) {
        animation: ${spinAnimation} infinite 20s linear;
    }
`


export default function Header({ logo }) {
    return (
        <StyledHeader className='App-header'>
            <StyledImg src={logo} className='App-logo' alt='logo' />
            <h1>{githubUserName} &apos;s GitHub Port</h1>
            <StyledNav>
                <StyledNavLink to={`/`} className='App-link'>
                    About me
                </StyledNavLink>
                <StyledNavLink to={`/projects`} className='App-link'>
                    Projects
                </StyledNavLink>
            </StyledNav>
        </StyledHeader>
    );
}