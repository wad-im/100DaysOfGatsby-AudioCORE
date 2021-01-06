import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Header = ()=>{
    return (
        <nav>
        <Link to="/"><h1>AudioCore</h1></Link>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/locations">Locations</Link>
            </li>
        </ul>
    </nav>
    )
    
}

export default Header