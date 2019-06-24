import React from 'react'
import { Wrapper, Container } from 'components/globals/style'
import Title from 'components/title'

class ArticlesIndex extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title title="hello" />
          <h2>ArticlesIndex</h2>
        </Container>
      </Wrapper>
    )
  }
}

export default ArticlesIndex