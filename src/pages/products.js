import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>Hello <b>world</b> 1234-- {data.site.siteMetadata.title}</div>
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
        <p>IT:</p>

<script type="text/javascript">
amzn_assoc_placement = "adunit0";
amzn_assoc_tracking_id = "thebestgift0a-20";
amzn_assoc_ad_mode = "manual";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_linkid = "b0ba9863ac1fff204db18230baf0a46e";
amzn_assoc_design = "in_content";
amzn_assoc_asins = "B01EVKUKSG,B07J5Q4P38";
amzn_assoc_title = "moshe leon";
</script>
<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>

        <p>GULP........</p>
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