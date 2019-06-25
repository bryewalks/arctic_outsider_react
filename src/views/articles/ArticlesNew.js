import React from 'react';
import Form from 'components/form'
import Title from 'components/title'
import { Wrapper } from 'components/globals'

export default function ArticlesNew(props) {

  return (
    <Wrapper>
      <Title title="New Article" />
      <Form />
    </Wrapper>
  )
}