import React, { useState, useEffect } from 'react'
import { Wrapper, Container } from 'components/globals/style'
import Title from 'components/title'
import Header from 'components/header'
import Gallery from 'components/gallery'
import Body from 'components/body'
import Player from 'components/player'
import axios from 'axios'

export default function ArticlesShow(props) {
  const [article, setArticle] = useState({ body: '' });
  const { match: { params } } = props;

  useEffect(() => {
    axios
      .get(`/api/articles/${params.id}`)
      .then(response => setArticle(response.data));
  }, [params]);

  let videoPlayer = null;

  if (article.video_url) {
    videoPlayer = <Player videoUrl={article.video_url} />
  }

  return (
    <Wrapper>
      <Container>
        <Title title={article.title} />
        <Header user={article.user} createdAt={article.created_at} />
        <Gallery imageUrl={article.image_url} />
        <Body text={article.body} />
        {videoPlayer}
      </Container>
    </Wrapper>
  )
}