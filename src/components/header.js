import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Header = ()=>{
    return (
        <Navigation>
        <Logo><StyledLink className="linked-logo" to="/">AudioCore</StyledLink></Logo>
        <ul>
            <li>
                <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
                <StyledLink to="/about">About</StyledLink>
            </li>
            <li>
                <StyledLink to="/locations">Locations</StyledLink>
            </li>
        </ul>
        </Navigation>
    )
    
}

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    ul {
        list-style: none;
        display: flex;
        width: 25%;
        justify-content: space-between;
        padding: 0 0;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: grey;
`

const Logo = styled.h1`
    font-size: 3rem;
    .linked-logo {
        color: black;
    }
    
`
export default Header