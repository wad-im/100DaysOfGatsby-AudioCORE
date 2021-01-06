import React from 'react'
import styled from 'styled-components'
import Header from './header'
import GlobalStyle from './GlobalStyles'

const Layout = (props)=>{
    return (
    <Container>
    <GlobalStyle/>
    <Header/>
    {props.children}
    </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    width: 50%;
    margin: 0 auto;;

`

export default Layout