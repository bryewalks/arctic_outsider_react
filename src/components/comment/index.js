import React from 'react'
import { CommentCard, CommentAuthor } from './style'

export default function Comment(props) {
  
  return (
    <CommentCard>
      <img src={props.comment.avatar_url ? props.comment.avatar_url : '/images/useri-icon.png'} />
      <CommentAuthor>-{props.comment.user}</CommentAuthor>
      <p>{props.comment.body}</p>
    </CommentCard>

  )
}