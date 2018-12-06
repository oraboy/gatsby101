import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>Hello <b>world</b> -- {data.site.siteMetadata.title}</div>
        <table>
        <tbody>
            {data.allMongodbNanoaffilGiftIdeas.edges.map(({ node }, index) => (
                <tr key={index}>
                    <td>{node.id}</td>
                    <td>{node.name}</td>
                    <td>XXX {node.affiliateLink}</td>
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