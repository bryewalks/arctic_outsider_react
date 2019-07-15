import React, { useState } from 'react'
import { CommentFormStyle, CommentTextArea, CommentButton } from './style'
import axios from 'axios'

export default function CommentForm(props) {
  const [commentBody, setCommentBody] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    var formData = {
      body: commentBody,
      article_id: props.params.id
    };

    axios.post("/api/comments", formData)
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
      //
    });
  }

  return (
      <CommentFormStyle onSubmit={handleSubmit}>
        <CommentTextArea
          name="body"
          placeholder="Leave a Comment!"
          value={commentBody}
          onChange={e => {setCommentBody(e.target.value)}} />
        <CommentButton>Submit</CommentButton>
      </CommentFormStyle>
  )
}