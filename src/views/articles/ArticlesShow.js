import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ArticlesShow(props) {
  const [article, setArticle] = useState([]);
  const { match: { params } } = props;

  useEffect(() => {
      axios
        .get(`/api/articles/${params.id}`)
        .then(response => setArticle(response.data));
  }, [params]);

  return (

    <div className="blog-header">
      <section className="container">
        <a href="#" className="customFadeInUp">
          { article.title }

          <span className="customFadeInUp">
            { article.description }
          </span>
        </a>
      </section>
      <div className="bottom">
        <div className="author">
          <img className="avatar" src="images/uifaces/15.jpg" />
          <div className="name">
            By { article.user }
            <br />
            <i>{ article.created_at }</i>
          </div>
        </div>
        <div className="featured">
          { article.category }
        </div>
      </div>
    </div>
    )
}

// <div>
//   <h2>Title</h2>
//   <h3>{article.title}</h3>
//   <h2>Category</h2>
//   <h3>{article.category}</h3>
//   <h2>Body</h2>
//   <h3>{article.body}</h3>
//   <img src={article.image_url} alt="article" />
// </div>