import React from 'react'
import Layout from '../components/layout'
import {documentToReactCompononents} from '@contentful/rich-text-react-renderer'

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

const CityPage = (props)=>{
    return (
        <Layout>
            <h2>{props.data.contentfulCities.cities}</h2>
            <h3>{props.data.contentfulCities.title}</h3>
            {/* {documentToReactCompononents(props.data.contentfulCities.description.raw)} */}
        </Layout>
    )
}

export default CityPage