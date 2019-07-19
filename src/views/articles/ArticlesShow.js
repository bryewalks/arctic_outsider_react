import React, { useState, useEffect } from 'react'
import { Container, Wrapper } from 'components/globals'
import Title from 'components/title'
import Header from 'components/header'
import Gallery from 'components/gallery'
import Body from 'components/body'
import Player from 'components/player'
import ArticleControls from 'components/articleControls'
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

  const commentCallback = (comment) => {
    setArticle({...article, comments: [...article.comments, comment]});
  }

  let videoPlayer = null;
  if (article.video_url) {
    videoPlayer = <Player videoUrl={article.video_url} />
  }

  return (
    <Container>
      <Wrapper>
        <Title title={article.title} />
        <Header user={article.user} createdAt={article.created_at} avatarUrl={article.avatar_url} />
        <Gallery imageUrl={article.image_url} />
        <Body text={article.body} />
        {videoPlayer}
        <ArticleControls router={props.history} params={params} />
      </Wrapper>
      <CommentSection commentCallback={commentCallback} comments={article.comments} params={params}/>
    </Container>
  )
}
