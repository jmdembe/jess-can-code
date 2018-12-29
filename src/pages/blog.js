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
                    }
                }
            }
        
        `}
        render={data => (
            
            <Layout>
                <div>
                    {data.site.siteMetadata.title}
                </div>
            </Layout>
        )

        }
    />
)
