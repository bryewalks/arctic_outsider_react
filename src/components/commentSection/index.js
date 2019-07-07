import React from 'react'
import Comment from 'components/comment'
import { Container, Wrapper } from 'components/globals'

export default function CommentSection(props) {

  return (
    <Container color='#FAFAFA'>
      <Wrapper>
        {props.comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />
        })}
      </Wrapper>
    </Container>
  )
}