import React from 'react'
import { ArticleTitle } from './style'

export default function Title(props) {

  return (
    <ArticleTitle>
      {props.title}
    </ArticleTitle>

  )
}