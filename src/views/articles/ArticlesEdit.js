import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ArticlesEdit(props) {
  const [initialized, setInitialized] = useState(false);
  const [article, setArticle] = useState({});
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState([]);
  const [error, setError] = useState('');
  const { match: { params } } = props;

  useEffect(() => {
    if (!initialized) {
      axios.get(`/api/articles/${params.id}`)
      .then(({ data }) => {
        setArticle(data);
        console.log(data);
      });
    setInitialized(true);
    }
  });

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0])
    }
  }

  const handleSubmit = (event) => {
      const formData = new FormData();
      formData.set('article[title]', title);
      formData.set('article[category]', category);
      formData.set('article[body]', body);
      formData.set('article[user_id]', userId);
      if (image) {
        formData.append('article[image]', image);
      }
      

      const config = {     
          headers: { 'content-type': `multipart/form-data; boundary=${formData._boundary}` }
      }

      axios.patch(`/api/articles/${params.id}/edit`, formData, config)

      .then(response => {
        console.log(response);
        console.log(response.data);
      }).catch(error => {
          console.log(error.response.data);
          setError({
            error: error.response.data
          })
          localStorage.setItem("errors", error);
        });
  }

    return (
        <div>
          <h2>ArticlesEdit</h2>
          <form onSubmit={ handleSubmit }>
            <h3>Title</h3>
            <input 
              type="text"
              name="title"
              value={ article.title }
              onChange={ e => setTitle(e.target.value) }
            />
            <br />
            <h3>Category</h3>
            <input 
              type="text"
              name="category"
              value={ article.category }
              onChange={ e => setCategory(e.target.value) }
            />
            <br />
            <h3>Body</h3>
            <input 
              type="text"
              name="body"
              value={ body }
              onChange={ e => setBody(e.target.value) }
            />
            <br />
            <h3>Image</h3>
            <img src={article.image_url} alt="article" />
            <input 
              type="file"
              name="image"
              onChange={ handleFileChange } 
            />
            <br />
            <button>Submit</button>
          </form>
        </div>
      )
}

