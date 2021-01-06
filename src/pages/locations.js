import React from "react"
import Layout from '../components/layout'
import {graphql, useStaticQuery, Link} from 'gatsby'
import styled from 'styled-components'

const LocationsPage = ()=>{
    const data = useStaticQuery(graphql`
        query {
            allContentfulCities {
                edges {
                  node {
                    cities
                    slug
                    title
                  }
                }
              }
        }
    `)
     return (
        <Layout>
            <h1>Locations</h1>
            <h2>Find us in these cities</h2>
            <ul>
            {data.allContentfulCities.edges.map((edge) => {
                return (
                <li>
                    <StyledLink to={`/locations/${edge.node.slug}`}>
                        <h3>{edge.node.cities}</h3>
                    </StyledLink>
                </li>
                )
               
            })}
            </ul>
        </Layout>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: grey;
`

export default LocationsPage