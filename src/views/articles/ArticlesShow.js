import React, { useState, useEffect } from 'react'
import ArticleTitle from 'components/articles/show/ArticleTitle.js'
import ArticleContent from 'components/articles/show/ArticleContent.js'
import ArticleHeader from 'components/articles/show/ArticleHeader.js'
import ArticleGallery from 'components/articles/show/ArticleGallery.js'
import ArticleVideo from 'components/articles/show/ArticleVideo.js'
import axios from 'axios'
import styled from 'styled-components'

export default function ArticlesShow(props) {
  const [article, setArticle] = useState({ body: '' });
  const { match: { params } } = props;

  useEffect(() => {
    axios
      .get(`/api/articles/${params.id}`)
      .then(response => setArticle(response.data));
  }, [params]);

  let articleVideo = null;

  if (article.video_url) {
    articleVideo = <ArticleVideo videoUrl={article.video_url} />
  }

  const BlogPost = styled.div`
    margin-top: 70px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (max-width: 767px) {
      margin-top: 40px;
    }
    @media (min-width: 1200px) {
      width: 880px;

    }
  `

  const Container = styled.div`
    width: 100%;
    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  `
  return (
    <BlogPost>
      <Container>
        <ArticleTitle title={article.title} />
        <ArticleHeader article={article} />
        <ArticleGallery imageUrl={article.image_url} />
        <ArticleContent article={article} />
        {articleVideo}
      </Container>
    </BlogPost>
  )
}

// ignore