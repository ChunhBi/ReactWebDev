import styled from "styled-components"
import {NavLink} from "react-router-dom";

export const StyledProfileContainer = styled.nav`
    width: 50%;
    margin: 10px auto;
    color: whitesmoke;
    font-size: larger;
`

export const StyledNavLink = styled(NavLink)`
    color: #61dafb;
    margin-right: 10px;
`

export const StyledHeader = styled.header`
    background-color: #010409;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`