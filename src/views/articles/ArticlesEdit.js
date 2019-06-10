import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ArticlesEdit(props) {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState('');
  const [error, setError] = useState('');
  const { match: { params } } = props;

  useEffect(() => {
      axios
        .get(`/api/articles/${params.id}`)
        .then(response => setData(response.data));
  }, []);

  // const handleFileChange = (event) => {
  //   if (event.target.files[0]) {
  //     setImage(event.target.files[0])
  //   }
  // }

  const handleChange = (event, name) => {
      const val = event.target.value;
      setData(prevState => {
        return { ...prevState, [name]: val}
      }); 
  }

  const handleSubmit = (event) => {
      const formData = new FormData();
      formData.set('article[title]', data.title);
      formData.set('article[category]', data.category);
      formData.set('article[body]', data.body);
      formData.set('article[user_id]', '1');
      if (data.image) {
        formData.append('article[image]', data.image);
      }
      

      const config = {     
          headers: { 'content-type': `multipart/form-data; boundary=${formData._boundary}` }
      }

      axios.patch(`/api/articles/${params.id}`, formData, config)

      .then(response => {
        console.log(response);
        console.log(response.data);
      }).catch(error => {
      });
  }

    return (
        <div>
          <h2>ArticlesEdit</h2>
            <input 
              type="text"
              name="title"
              placeholder="title"
              value={ data.title }
              onChange={ e => {handleChange(e, 'title')}}
            />
            <br />
            <input 
              type="text"
              name="category"
              placeholder="category"
              value={ data.category }
              onChange={ e => {handleChange(e, 'category')}}
            />
            <br />
            <input 
              type="text"
              name="body"
              placeholder="body"
              value={ data.body }
              onChange={ e => {handleChange(e, 'body')}}
            />
            <br />
            <button onClick={ handleSubmit }>Submit</button>
        </div>
      )
}

