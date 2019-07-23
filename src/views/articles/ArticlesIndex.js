import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'components/globals'
import ArticlePreview from 'components/articlePreview'

export default function ArticlesIndex(props) {
  const [articles, setArticles] = useState([]);
  const { match: { params } } = props;

  useEffect(() => {
    axios
      .get('/api/articles/')
      .then(response => setArticles(response.data));
  }, []);

  console.log(localStorage)

  return (
    <Container>
        {articles.map((article, index) => {
          return <ArticlePreview article={article} key={index} router={props.history} />
        })}
    </Container>
  )
}