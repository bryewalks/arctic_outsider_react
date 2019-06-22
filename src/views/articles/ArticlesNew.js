import React, { useState } from 'react';
import axios from 'axios'

export default function ArticlesNew(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
      if (event.target.files[0]) {
        setImage(event.target.files[0])
      }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.set('article[title]', title);
        formData.set('article[description]', description);
        formData.set('article[category]', category);
        formData.set('article[body]', body);
        formData.set('article[user_id]', userId);
        formData.set('article[video_url]', videoUrl);
        if (image) {
          formData.append('article[image]', image);
        }
        

        const config = {     
            headers: { 'content-type': `multipart/form-data; boundary=${formData._boundary}` }
        }

        axios.post("/api/articles", formData, config)

        .then(response => {
          console.log(response.data);
        }).catch(error => {
            console.log(error);
            console.log(error.response.data.errors[0]);
        });
    }

      return (
          <div>
            <h2>ArticlesNew</h2>
            <form onSubmit={ handleSubmit }>
              <input 
                type="text"
                name="title"
                placeholder="title"
                value={ title }
                onChange={ e => setTitle(e.target.value) }
              />
              <br />
              <input 
                type="text"
                name="description"
                placeholder="description"
                value={ description }
                onChange={ e => setDescription(e.target.value) }
              />
              <br />
              <select value={ category } onChange={ e => setCategory(e.target.value) } >
                <option value="" disabled>Category</option>
                <option value="snowmobiles">Snowmobiles</option>
                <option value="sales">Sales</option>
                <option value="blog">Blog</option>
                <option value="races">Races</option>
              </select>
              <br />
              <input 
                type="text"
                name="body"
                placeholder="body"
                value={ body }
                onChange={ e => setBody(e.target.value) }
              />
              <br />
              <input 
                type="text"
                name="userId"
                placeholder="user"
                value={ userId }
                onChange={ e => setUserId(e.target.value) }
              />
              <br />
              <input 
                type="text"
                name="videoUrl"
                placeholder="Video Url"
                value={ videoUrl }
                onChange={ e => setVideoUrl(e.target.value) }
              />
              <br />  
              <input 
                type="file"
                name="image"
                placeholder="image"
                onChange={ handleFileChange } 
              />
              <br />
              <button>Submit</button>
            </form>
          </div>
        )
}