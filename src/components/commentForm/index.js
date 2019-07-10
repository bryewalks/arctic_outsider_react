import React from 'react'
import { CommentFormStyle, CommentTextArea, CommentButton } from './style'

export default function CommentForm(props) {
  
  return (
      <CommentFormStyle>
        <CommentTextArea
          name="body"
          placeholder="Leave a Comment!" />
        <CommentButton>Submit</CommentButton>
      </CommentFormStyle>
  )
}