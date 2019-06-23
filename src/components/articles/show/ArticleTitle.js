import React from 'react'
import styled from 'styled-components'

export default function ArticleTitle(props) {

  const Title = styled.h3`
    font-size: 31px;
    font-weight: 400;
    color: #444;
  `
  return (
    <Title>
      {props.title}
    </Title>

  )
}