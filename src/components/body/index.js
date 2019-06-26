import React from 'react'
import { Content } from './style'

export default function Body(props) {

  const formatText = props.text.split('\n')

  return (
    <Content>
      {formatText.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>
      })}
    </Content>
  )
}