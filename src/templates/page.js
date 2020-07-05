import React from "react"
import { graphql } from "gatsby"
import RichText from "../components/richText"
import Layout from "../components/layout"

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
            content
            page_title
            _meta {
              uid
              id
            }
          }
        }
      }
    }
  }
`

const Page = props => {
  const pageTitle = props.data.prismic.allPages.edges[0].node.page_title
  const content = props.data.prismic.allPages.edges[0].node.content

  return (
    <Layout>
      <RichText render={pageTitle} />
      <RichText render={content} />
    </Layout>
  )
}

export default Page
