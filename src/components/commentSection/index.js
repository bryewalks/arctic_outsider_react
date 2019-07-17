import React from 'react'
import Comment from 'components/comment'
import CommentForm from 'components/commentForm'
import { Container, Wrapper } from 'components/globals'

export default function CommentSection(props) {
  
  return (
    <Container color='#FAFAFA'>
      <Wrapper>
      <CommentForm commentCallback={props.commentCallback} params={props.params}/>
      <p>Comments</p>
        {props.comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />
        })}
      </Wrapper>
    </Container>
  )
}