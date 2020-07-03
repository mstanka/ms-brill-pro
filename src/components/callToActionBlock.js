import React from "react"
import { RichText } from "prismic-reactjs"
import styled from 'styled-components'

const CallToActionBlockWrapper = styled.section`
padding: 20px;
background: #eee;
border-radius: 20px;
margin: 20px 0;
`


const CallToActionBlock = ({ title, content }) => {
  return (
    <CallToActionBlockWrapper>
      <RichText render={title} />
      <RichText render={content} />
    </CallToActionBlockWrapper>
  )
}

export default CallToActionBlock
