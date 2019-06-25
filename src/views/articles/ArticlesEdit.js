import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ArticlesEdit(props) {
  const [data, setData] = useState({ title: '', description: '', category: '', body: '', image_url: '', video_url: '' });
  const [image, setImage] = useState(null);
  const { match: { params } } = props;

  useEffect(() => {
    axios
      .get(`/api/articles/${params.id}`)
      .then(response => setData(response.data));
  }, [params]);

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0])
    }
  }

  const handleChange = (event, name) => {
    const val = event.target.value;
    setData(prevState => {
      return { ...prevState, [name]: val }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.set('article[title]', data.title);
    formData.set('article[description]', data.description);
    formData.set('article[category]', data.category);
    formData.set('article[body]', data.body);
    formData.set('article[video_url]', data.video_url);
    formData.set('article[user_id]', '1');
    if (image) {
      formData.append('article[image]', image);
    }


    const config = {
      headers: { 'content-type': `multipart/form-data; boundary=${formData._boundary}` }
    }

    axios.patch(`/api/articles/${params.id}`, formData, config)

      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
        console.log(error.response.data.errors[0]);
      });
  }

  return (
    <div>
      <h2>ArticlesEdit</h2>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={data.title}
          onChange={e => { handleChange(e, 'title') }}
        />
        <br />
        <p>Description</p>
        <input
          type="text"
          name="description"
          placeholder="description"
          value={data.description}
          onChange={e => { handleChange(e, 'description') }}
        />
        <br />
        <p>Category</p>
        <input
          type="text"
          name="category"
          placeholder="category"
          value={data.category}
          onChange={e => { handleChange(e, 'category') }}
        />
        <br />
        <p>Body</p>
        <input
          type="text"
          name="body"
          placeholder="body"
          value={data.body}
          onChange={e => { handleChange(e, 'body') }}
        />
        <br />
        <p>Image</p>
        <img src={data.image_url} alt="article" />
        <br />
        <input
          type="file"
          name="image"
          placeholder="image"
          onChange={handleFileChange}
        />
        <br />
        <button>Submit</button>
      </form>
      
    </div>
  )
}

