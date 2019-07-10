import React from 'react'
import { CommentCard, CommentImage, CommentBody, CommentAuthor, CommentCreated  } from './style'

export default function Comment(props) {
  
  return (
    <CommentCard>
      <CommentImage src={props.comment.avatar_url ? props.comment.avatar_url : '/images/gray-user.png'} />
      <CommentAuthor>{props.comment.user}</CommentAuthor>
      <CommentCreated>Posted on {props.comment.created_at}</CommentCreated>
      <CommentBody>{props.comment.body}</CommentBody>
    </CommentCard>

  )
}