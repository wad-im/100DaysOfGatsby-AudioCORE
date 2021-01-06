import React from 'react'
import styled from 'styled-components'
import Header from './header'

const Layout = (props)=>{
    return (<Container>
    <Header/>
    {props.children}
    </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;

`

export default Layout