import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>Hello wo rld -- {data.site.siteMetadata.title}</div>
        <table>
        <tbody>
            {data.allMongodbNanoaffilGiftIdeas.edges.map(({ node }, index) => (
                <tr key={index}>
                    <td>{node.id}</td>
                    <td>{node.name}</td>
                    <td>{node.affiliateLink}</td>
                    <td>{node.productionData}</td>
                </tr>
                ))}
        </tbody>
        </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
        siteMetadata {
          title
        }
    }
    allMongodbNanoaffilGiftIdeas { 
        edges { 
    	    node {
          	id
          	name
            affiliateLink
            productionData    
            }
        }
    }
  }`