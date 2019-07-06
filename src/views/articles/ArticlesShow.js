import React, { useState, useEffect } from 'react'
import { Container, Wrapper } from 'components/globals'
import Title from 'components/title'
import Header from 'components/header'
import Gallery from 'components/gallery'
import Body from 'components/body'
import Player from 'components/player'
import CommentSection from 'components/commentSection'
import axios from 'axios'

export default function ArticlesShow(props) {
  const [article, setArticle] = useState({image_url: '', body: '', comments: []});
  const { match: { params } } = props;

  useEffect(() => {
    axios
      .get(`/api/articles/${params.id}`)
      .then(response => setArticle(response.data));
  }, [params]);

  return (
    <Container>
      <Wrapper>
        <Title title={article.title} />
        <Header user={article.user} createdAt={article.created_at} />
        <Gallery imageUrl={article.image_url} />
        <Body text={article.body} />
        <Player videoUrl={article.video_url} />
      </Wrapper>
      <CommentSection comments={article.comments} />
    </Container>
  )
}