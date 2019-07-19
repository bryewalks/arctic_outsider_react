import React from 'react'
import Form from 'components/form'
import Title from 'components/title'
import { Wrapper } from 'components/globals'

export default function ArticlesEdit(props) {
  const { match: { params } } = props;

  return (
    <Wrapper>
      <Title title="Edit Article" />
      <Form params={params} router={props.history} />
    </Wrapper>
  )
}

