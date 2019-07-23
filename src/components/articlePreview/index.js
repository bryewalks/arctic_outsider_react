import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from 'components/globals'
import Title from 'components/title'
import Header from 'components/header'
import Gallery from 'components/gallery'
import Body from 'components/body'

export default function ArticlePreview(props) {

  return (
      <Wrapper>
        <Title title={props.article.title} />
        <Header user={props.article.user} createdAt={props.article.created_at} avatarUrl={props.article.avatar_url} />
        <Gallery imageUrl={props.article.image_url} />
        <Body text={(props.article.body).split('\n')[0] + '...'} />
        <Link to={`/articles/${props.article.id}`}>Read More</Link>
      </Wrapper>
  )
}
