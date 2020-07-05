import React from "react"
import { graphql } from "gatsby"
import RichText from "../components/richText"
import Layout from "../components/layout"
import SliceZone from "../components/sliceZone"
import styled from "styled-components"

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
            body {
              ... on PRISMIC_PageBodyCall_to_action_grid {
                type
                label
                primary {
                  section_title
                }
                fields {
                  button_destination {
                    ... on PRISMIC_Contact_page {
                      _meta {
                        uid
                      }
                    }
                  }
                  button_label
                  call_to_action_title
                  content
                  featured_image
                }
              }
            }
            content
            page_title
            _meta {
              uid
              id
              type
            }
          }
        }
      }
    }
  }
`

const PageWrapper = styled.section`
  max-width: 800px;
  margin: 2rem auto;
`

const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
  if (!prismicContent) return null
  const document = prismicContent.node

  return (
    <Layout>
      <PageWrapper>
        <RichText render={document.page_title} />
        <RichText render={document.content} />
        {!!document.body && <SliceZone body={document.body} />}
      </PageWrapper>
    </Layout>
  )
}

export default Page
