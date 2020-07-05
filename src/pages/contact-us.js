import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import RichText from "../components/richText"

export const query = graphql`
  {
    prismic {
      allContact_pages {
        edges {
          node {
            form_title
            form_description
            form_fields {
              field_name
              field_type
              required
            }
          }
        }
      }
    }
  }
`

const Form = styled.form`
  paddding: 10px;
  background: #eee;
  margin-top: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const Button = styled.button`
  background: orange;
  color: white;
  cursor: pointer;
  padding: 4px 8px;
  box-shadow: none;
  border-radius: 4px;
`

const ContactUs = props => {
  console.log(props)
  return (
    <Layout>
      <RichText
        render={props.data.prismic.allContact_pages.edges[0].node.form_title}
      />
      <RichText
        render={
          props.data.prismic.allContact_pages.edges[0].node.form_description
        }
      />
      <Form onSubmit={e => e.preventDefault()}>
        {props.data.prismic.allContact_pages.edges[0].node.form_fields.map(
          (field, i) => {
            if (field.field_type === "textarea") {
              return (
                <div key={i}>
                  <textarea
                    required={field.required === "Yes"}
                    placeholder={field.field_name}
                  />
                </div>
              )
            } else {
              return (
                <div key={i}>
                  <input
                    type={field.field_type}
                    required={field.required === "Yes"}
                    placeholder={field.field_name}
                  />
                </div>
              )
            }
          }
        )}
        <Button type="submit">Submit</Button>
      </Form>
    </Layout>
  )
}

export default ContactUs
