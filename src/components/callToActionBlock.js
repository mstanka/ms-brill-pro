import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import { Link } from "gatsby"

const CallToActionBlockWrapper = styled.section`
  padding: 20px;
  background: #eee;
  border-radius: 20px;
  margin: 20px 0;

  .call-to-action-content {
    display: flex;
    .featured-image-wrapper {
      margin: 0 10px;
      background: white;
      padding: 10px, 
      border-radius: 10px;
      margin: auto 10px;

      img {
        max-width: 200px;
        margin: 0
      }
    } 
  }
`
const Button = styled.div`
  background: orange;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;

  a {
    color: white;
    padding: 4px 8px;
    display: inline-block;
    text-decoration: none;
  }
`

const CallToActionBlock = ({
  title,
  content,
  buttonLabel,
  buttonDestination,
  featuredImage,
}) => {
  return (
    <CallToActionBlockWrapper>
      <RichText render={title} />
      <div className="call-to-action-content">
        <RichText render={content} />
        <div className="featured-image-wrapper">
          <img src={featuredImage} alt="Featured" />
        </div>
      </div>

      <Button>
        <Link to={buttonDestination}>{buttonLabel}</Link>
      </Button>
    </CallToActionBlockWrapper>
  )
}

export default CallToActionBlock
