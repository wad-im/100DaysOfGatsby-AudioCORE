import React from 'react'
import Layout from '../components/layout'
import {documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {Link} from 'gatsby'

export const query = graphql`
    query ($slug: String!){
        contentfulCities (slug: {eq: $slug}) {
            cities
            title
            description {
                raw
            }
        }
    }
`


const CityPage = ({data})=>{
    const document =  data.contentfulCities.description.raw
    return (
        <Layout>
            <h2>{data.contentfulCities.cities}</h2>
            <h3>{data.contentfulCities.title}</h3>
            {documentToReactComponents(JSON.parse(document))}
            Check our other <Link to="/locations">cities.</Link>     
        </Layout>
    )
}

export default CityPage