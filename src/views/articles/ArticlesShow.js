import React, { useState, useEffect } from 'react'
import BlogVideo from '../../components/BlogVideo.js'
import BlogPostGallery from '../../components/BlogPostGallery.js'
import axios from 'axios'

export default function ArticlesShow(props) {
  const [article, setArticle] = useState({body: ''});
  const { match: { params } } = props;

  useEffect(() => {
      axios
        .get(`/api/articles/${params.id}`)
        .then(response => setArticle(response.data));
  }, [params]);

  const formatText = article.body.split("   ")

  return (
    <div>

    <div className="blog-post">
      <div className="container">
        <h3 className="blog-post-title">
          { article.title }
        </h3>
        <div className="blog-post-header">
          <div className="blog-post-author">
            <img src="/images/uifaces/9.jpg" />
            By <span>{ article.user }</span>
          </div>
          <div className="blog-post-date">
            Date <span>{ article.created_at }</span>
          </div>
          <div className="blog-post-share">
            Share this post: 
            <a href="#">
              <i className="ion-social-twitter"></i>
            </a>
            <a href="#">
              <i className="ion-social-facebook"></i>
            </a>
            <a href="#">
              <i className="ion-social-buffer"></i>
            </a>
          </div>
        </div>
        <br />
        <BlogPostGallery />
        <div className="blog-post-content">
          <div>
            {formatText.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>
            })}
          </div>
          <BlogVideo />
        </div>
      </div>
    </div>
    </div>
    )
}
