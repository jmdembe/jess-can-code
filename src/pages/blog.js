import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

export default ({children, data}) => (
    <StaticQuery
        query={graphql`
            query siteTitleQuery {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        
        `}
        render={data => (
            
            <Layout>
                <div>
                    <p>{data.site.siteMetadata.description}</p>
                    <p>Lorem ipsum sit dolor sit amet</p>
                </div>
            </Layout>
        )

        }
    />
)
