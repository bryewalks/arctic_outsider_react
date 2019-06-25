import React, { useState, useEffect } from 'react';
import { StyledForm } from './style'
import axios from 'axios'

export default function Form(props) {
  const [article, setArticle] = useState({ title: '', description: '', category: '', body: '', image_url: '', video_url: '' });
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');

  useEffect(() => {
    if (props.params) {
      axios
      .get(`/api/articles/${props.params.id}`)
      .then(response => setArticle(response.data));
    }
  }, [props.params]);

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0])
      setImageName(event.target.files[0].name)
    }
  }

  const handleChange = (event, name) => {
    const val = event.target.value;
    setArticle(prevState => {
      return { ...prevState, [name]: val }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.set('article[title]', article.title);
    formData.set('article[description]', article.description);
    formData.set('article[category]', article.category);
    formData.set('article[body]', article.body);
    formData.set('article[user_id]', '1');
    formData.set('article[video_url]', article.video_url);
    if (image) {
      formData.append('article[image]', image);
    }

    const config = {
      headers: { 'content-type': `multipart/form-data; boundary=${formData._boundary}` }
    }

    if (props.params) {
      axios.patch(`/api/articles/${props.params.id}`, formData, config)

      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
        console.log(error.response.data.errors[0]);
      });
  
    } else {
      axios.post("/api/articles", formData, config)

      .then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
        console.log(error.response.data.errors[0]);
      });
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <p>Title</p>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={article.title}
        onChange={e => { handleChange(e, 'title') }}
      />
      <p>Description</p>
      <input
        type="text"
        name="description"
        placeholder="description"
        value={article.description}
        onChange={e => { handleChange(e, 'description') }}
      />
      <p>Category</p>
      <select value={article.category} onChange={e => { handleChange(e, 'category') }} >
        <option value="" disabled>Category</option>
        <option value="snowmobiles">Snowmobiles</option>
        <option value="sales">Sales</option>
        <option value="blog">Blog</option>
        <option value="races">Races</option>
      </select>
      <p>Body</p>
      <input
        type="text"
        name="body"
        placeholder="body"
        value={article.body}
        onChange={e => { handleChange(e, 'body') }}
      />
      <img src={article.image_url} alt="" />
      <br />
      <input
        type="file"
        id="file"
        name="image"
        placeholder="image"
        onChange={handleFileChange}
      />
      <label htmlFor="file">Upload File</label>
      <span>{imageName}</span>
      <br />
      <button>Submit</button>
    </StyledForm>
  )
}